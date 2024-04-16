import { cookies } from "next/headers";
import NextImage from "next/image";
import { redirect } from "next/navigation";
import { IconShoppingBagX } from "@tabler/icons-react";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveProductFromCart } from "./RemoveProductFromCart";
import { DefaultButton } from "@/components/atoms/DefaultButton";
import { Heading } from "@/components/atoms/Heading";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { Section } from "@/components/atoms/Section";
import { CartItemAmount } from "@/components/organisms/CartItemAmount";
import { CartItemInfo } from "@/components/organisms/CartItemInfo";
import { deliveryFee } from "@/config/config";
import {
	type Color,
	type OrderItem,
	type Shape,
	type Size,
	type Variant,
} from "@/gql/graphql";
import { calculateTotalPrice, cn, formatMoney } from "@/lib/utils";
import { getProductItemsFromCart } from "@/services/cartApi";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { OrderItems: cart } = await getProductItemsFromCart({
		cartId: Number(cartId),
	});

	if (!cart) {
		redirect("/");
	}

	const cartItems = cart.docs || [];

	const totalPrice = calculateTotalPrice(cartItems as OrderItem[]);
	return (
		<Section className="container mx-auto">
			{cartItems.length === 0 && (
				<IconShoppingBagX
					size={100}
					stroke={1}
					className="mx-auto mb-4 text-primary"
				/>
			)}
			<Heading className={cn(cartItems.length === 0 && "text-center")}>
				{cartItems.length > 0 ? "Twój koszyk" : "Twój koszyk jest pusty"}
			</Heading>
			<div className="flex flex-col space-x-6 laptop:flex-row">
				{cartItems.length > 0 ? (
					<>
						<div id="cart" className="flex w-2/3 flex-col space-y-8">
							<span className="sr-only">Koszyk</span>
							{cartItems.map((item) => {
								const productVariant = item?.product.variants.find(
									(variant) => variant.id === item?.productVariantId,
								) as Variant;
								const productColorAttributes = productVariant?.items?.find(
									(attribute) => attribute.blockType === "color",
								) as Color;

								const productSizeAttributes = productVariant?.items?.find(
									(attribute) => attribute.blockType === "size",
								) as Size;

								const productShapeAttributes = productVariant?.items?.find(
									(attribute) => attribute.blockType === "shape",
								) as Shape;

								return (
									<div
										key={item?.id}
										className="flex flex-row items-center space-x-8 border-b border-b-slate100 pb-8 last:border-none"
									>
										<div className="flex flex-row items-center space-x-4">
											<NextImage
												src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.product.image?.url}`}
												alt={
													item?.product.image?.alt ?? String(item?.product.name)
												}
												width={80}
												height={80}
												className="rounded-[8px]"
											/>
											<CartItemInfo
												title={item?.product.name ?? "Brak nazwy produktu"}
												productVariant={productVariant}
												productColorAttributes={productColorAttributes}
												productSizeAttributes={productSizeAttributes}
												productShapeAttributes={productShapeAttributes}
											/>
										</div>
										<IncrementProductQuantity
											cartId={String(cartId)}
											itemId={Number(item?.id)}
											quantity={item?.quantity ?? 0}
											price={item?.product.price ?? 0}
											totalAmount={item?.totalAmount ?? 0}
										/>
										<div className="flex flex-1 flex-row items-center justify-between space-x-3">
											<CartItemAmount
												item={item as OrderItem}
												className="flex-col-reverse items-end text-right"
											/>
											<RemoveProductFromCart itemId={Number(item?.id)} />
										</div>
									</div>
								);
							})}
						</div>
						<div
							id="cart_summary"
							className="h-full w-1/3 bg-slate100 px-8 py-6 laptop:rounded-3xl"
						>
							<span className="sr-only">Podsumowanie koszyka</span>
							{totalPrice && (
								<div className="flex flex-row items-center justify-between">
									<p className="text-sm">Wartość koszyka:</p>
									<span className="text-base font-semibold">
										{formatMoney(totalPrice)}
									</span>
								</div>
							)}
							<div className="flex flex-row items-center justify-between">
								<p className="text-sm">Dostawa od:</p>
								<span className="text-base font-semibold">
									{formatMoney(deliveryFee)}
								</span>
							</div>
							<hr className="my-5 h-px border-0 bg-primary" />
							<div className="flex flex-row items-center justify-between">
								<p className="text-sm">Razem z dostawą:</p>
								<span className="text-3xl font-bold">
									{formatMoney(totalPrice + deliveryFee)}
								</span>
							</div>
							<div className="space-y-2 pt-5">
								<SecondaryButton href={"/checkout"} className="w-full">
									Do kasy
								</SecondaryButton>
								<DefaultButton
									href={"/"}
									className="w-full border-none bg-transparent text-secondary hover:before:opacity-0"
								>
									Kontynuuj zakupy
								</DefaultButton>
							</div>
						</div>
					</>
				) : (
					<div className="flex h-full w-full flex-col space-y-5 text-center">
						<p className="mt-2 text-center">
							Dodaj do koszyka przedmioty i kup je szybko i wygodnie.
						</p>
						<DefaultButton href={"/"} className="max-w-fit self-center">
							Zobacz nasze produkty
						</DefaultButton>
					</div>
				)}
			</div>
		</Section>
	);
}
