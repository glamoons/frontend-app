import NextImage from "next/image";
import { handleStripePaymentAction } from "./actions";
import { DefaultButton } from "@/components/atoms/DefaultButton";
import { Heading } from "@/components/atoms/Heading";
import { Section } from "@/components/atoms/Section";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { EmptyCart } from "@/components/molecules/EmptyCart";
import { CartItemAmount } from "@/components/organisms/CartItemAmount";
import { CartItemInfo } from "@/components/organisms/CartItemInfo";
import { IncrementProductQuantity } from "@/components/organisms/IncrementProductQuantity";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";
import { RemoveProductFromCart } from "@/components/organisms/RemoveProductFromCart";
import { deliveryFee } from "@/config/config";
import { type Color, type Shape, type Size, type Variant } from "@/gql/graphql";
import { calculateTotalPrice, formatMoney } from "@/lib/utils";
import { getCart } from "@/services/cartApi";

export default async function CartPage() {
	const cart = await getCart();

	const cartId = cart.id;
	const cartItems = cart.items;

	const totalPrice = calculateTotalPrice(cartItems);

	return (
		<>
			<Section className="container mx-auto">
				{cartItems.length > 0 ? (
					<>
						<Heading>Twój koszyk</Heading>
						<div className="flex flex-col laptop:flex-row laptop:space-x-6">
							<div
								id="cart"
								className="flex w-full flex-col space-y-8 laptop:w-2/3"
							>
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
											className="flex flex-col border-b border-b-slate100 pb-8 last:border-none tabletLg:flex-row tabletLg:items-center tabletLg:space-x-8"
										>
											<div className="flex flex-row items-center space-x-4">
												<NextImage
													src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.product.image?.url}`}
													alt={
														item?.product.image?.alt ??
														String(item?.product.name)
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
											<div className="mt-4 flex flex-row items-center justify-end space-x-10 tabletLg:mt-0 tabletLg:space-x-4 laptop:space-x-3">
												<IncrementProductQuantity
													cartId={String(cartId)}
													itemId={Number(item?.id)}
													quantity={item?.quantity ?? 0}
													price={item?.product.price ?? 0}
													totalAmount={item?.totalAmount ?? 0}
												/>
												<div className="flex flex-1 flex-row items-center justify-end tabletLg:justify-between tabletLg:space-x-3">
													<CartItemAmount
														item={item}
														className="flex-col-reverse items-start tabletLg:items-end tabletLg:text-right"
													/>
													<RemoveProductFromCart itemId={Number(item?.id)} />
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div
								id="cart_summary"
								className="flex w-full flex-col items-center justify-center rounded-3xl bg-slate100 px-5 py-4 laptop:w-1/3 laptop:px-8 laptop:py-6"
							>
								<div className="min-w-[28rem] max-w-lg laptop:min-w-max">
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
									<div className="flex flex-col items-center justify-center space-y-2 pt-5">
										<form action={handleStripePaymentAction} className="w-full">
											<SubmitButton
												type="submit"
												className="w-full bg-secondary text-slate50 outline-none tabletLg:max-w-md"
											>
												Do kasy
											</SubmitButton>
										</form>
										<DefaultButton
											href={"/"}
											className="w-full border-none bg-transparent text-secondary hover:before:opacity-0"
										>
											Kontynuuj zakupy
										</DefaultButton>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<EmptyCart />
				)}
			</Section>
			<ProductInformationBox />
		</>
	);
}
