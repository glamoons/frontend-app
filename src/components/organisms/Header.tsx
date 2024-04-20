"use client";

import { IconMenuDeep, IconX } from "@tabler/icons-react";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";
import { SubmitButton } from "../atoms/SubmitButton";
import { EmptyCart } from "../molecules/EmptyCart";
import { CartItemAmount } from "./CartItemAmount";
import { CartItemInfo } from "./CartItemInfo";
import { useNavigationContext } from "@/app/providers/navigation-provider";
import { LogoDark } from "@/assets/logo/LogoDark";
import { LogoLight } from "@/assets/logo/LogoLight";
import { Badge } from "@/components/atoms/Badge";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { ShoppingCart } from "@/components/molecules/ShoppingCart";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { deliveryFee } from "@/config/config";
import {
	type Color,
	type OrderItem,
	type Shape,
	type Size,
	type Variant,
} from "@/gql/graphql";
import { calculateTotalPrice, cn, formatMoney } from "@/lib/utils";

export const Header = ({
	children,
	quantity,
	cartItems,
}: {
	children: ReactNode;
	quantity: number;
	cartItems: OrderItem[];
}) => {
	const { setIsOpen, isOpen } = useNavigationContext();
	const [dialogOpen, setDialogOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const totalPrice = useMemo(() => {
		return calculateTotalPrice(cartItems);
	}, [cartItems]);

	return (
		<header
			className={cn(
				"container z-[101] mx-auto flex w-full flex-row items-center justify-between",
				isOpen ? "py-9" : "py-5",
				pathname === "/" ? "absolute left-0 right-0 top-0" : "relative",
			)}
		>
			<Link href="/" aria-label="Logo Glamoons" className="cursor-pointer">
				{!isOpen ? pathname === "/" ? <LogoLight /> : <LogoDark /> : null}
			</Link>
			{children}
			<div className="flex-row space-x-6 text-slate50 laptop:flex laptop:items-center">
				<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
					<DialogTrigger asChild>
						<div className="fixed bottom-0 right-0 z-[99] bg-secondary px-4 py-3 laptop:relative laptop:bottom-auto laptop:right-auto laptop:bg-transparent laptop:p-0">
							<div className="relative">
								<ShoppingCart
									className={pathname === "/" ? "" : "laptop:text-secondary"}
								/>
								<Badge
									quantity={quantity}
									className="absolute -right-1.5 top-1"
								/>
							</div>
						</div>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md left-auto z-[101] h-screen translate-x-0 p-5 laptop:right-4 laptop:h-[calc(100vh-16px)] laptop:rounded-3xl laptop:p-6">
						<div className="flex h-full flex-col">
							<DialogHeader className="space-y-0 text-left">
								<DialogTitle className="py-2 text-xl font-bold">
									Twój koszyk
								</DialogTitle>
								<DialogClose asChild />
							</DialogHeader>
							<div
								className={cn(
									"mt-10 space-y-5",
									!cartItems.length &&
										"mt-0 flex h-full flex-col justify-center",
								)}
							>
								{cartItems && cartItems.length > 0 ? (
									cartItems.map((item) => {
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

										const cartItem = item;
										return (
											<div
												key={item?.id}
												className="flex flex-row items-center space-x-4"
											>
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
												<div className="flex flex-col space-y-1">
													<CartItemInfo
														title={`${item?.quantity} x ${item?.product.name}`}
														productVariant={productVariant}
														productColorAttributes={productColorAttributes}
														productSizeAttributes={productSizeAttributes}
														productShapeAttributes={productShapeAttributes}
													/>
													<CartItemAmount item={cartItem} />
												</div>
											</div>
										);
									})
								) : (
									<EmptyCart />
								)}
							</div>
						</div>
						{cartItems && cartItems.length > 0 ? (
							<DialogFooter className="flex flex-col justify-end">
								<hr className="my-5 h-px border-0 bg-primaryLight" />
								<div className="space-y-3">
									{quantity > 0 && (
										<div className="flex flex-row items-center justify-between">
											<p className="text-sm">Ilość produktów w koszyku:</p>
											<span className="text-sm font-bold">{quantity}</span>
										</div>
									)}
									<div className="flex flex-row items-center justify-between">
										<div className="flex flex-col space-y-0">
											<p className="text-sm">Dostawa:</p>
											<span className="text-xs font-light">
												Wysyłka w ciągu 1 tygodnia
											</span>
										</div>
										<span className="text-sm">{formatMoney(deliveryFee)}</span>
									</div>
									{totalPrice && (
										<div className="flex flex-row items-center justify-between">
											<p className="text-sm">Wartość koszyka + wysyłka:</p>
											<span className="text-xl font-bold">
												{formatMoney(totalPrice + deliveryFee)}
											</span>
										</div>
									)}
								</div>
								<div className="mt-5 flex flex-col items-center space-y-3">
									<SubmitButton
										onClick={() => {
											setTimeout(() => {
												setDialogOpen(false);
											}, 100);
											router.push("/cart");
										}}
										className="w-full"
									>
										Pokaż koszyk
									</SubmitButton>
									<SecondaryButton href={"/checkout"} className="w-full">
										Do kasy
									</SecondaryButton>
								</div>
							</DialogFooter>
						) : (
							false
						)}
					</DialogContent>
				</Dialog>
			</div>

			<MobileMenuHandler
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					isOpen || pathname !== "/" ? "text-secondary" : "",
					"laptop:hidden",
				)}
				menuName={isOpen ? "close" : "menu"}
				icon={isOpen ? <IconX /> : <IconMenuDeep />}
				aria-label="Menu"
			/>
		</header>
	);
};
