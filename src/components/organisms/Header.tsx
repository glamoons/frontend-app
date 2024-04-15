"use client";

import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, type ReactNode } from "react";
import NextImage from "next/image";
import { ShoppingCart } from "./ShoppingCart";
import { Badge } from "@/components/atoms/Badge";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	type SupportedColors,
	cn,
	generateNameByProductOptionValue,
	supportedColors,
	formatMoney,
	generateSizeByProductOptionValue,
} from "@/lib/utils";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { LogoLight } from "@/assets/logo/LogoLight";
import { LogoDark } from "@/assets/logo/LogoDark";
import { useNavigationContext } from "@/app/providers/navigation-provider";
import {
	type Color,
	type Shape,
	type Size,
	type CartGetItemsByCartIdQuery,
} from "@/gql/graphql";

export const Header = ({
	children,
	quantity,
	cartItems,
}: {
	children: ReactNode;
	quantity: number;
	cartItems: CartGetItemsByCartIdQuery["OrderItems"];
}) => {
	const { setIsOpen, isOpen } = useNavigationContext();
	const pathname = usePathname();
	const deliveryFee = 20;

	const totalPrice = useMemo(() => {
		return cartItems?.docs?.reduce((acc, item) => {
			if (!item) return acc;
			return acc + item?.totalAmount;
		}, 0);
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
			<div className="hidden flex-row space-x-6 text-slate50 laptop:flex laptop:items-center">
				<Dialog>
					<DialogTrigger asChild>
						<div className="relative">
							<ShoppingCart
								className={pathname === "/" ? "" : "text-secondary"}
							/>
							<Badge
								quantity={quantity}
								className="absolute -right-1.5 top-1"
							/>
						</div>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md left-auto right-4 h-[calc(100vh-16px)] translate-x-0 rounded-3xl">
						<div>
							<DialogHeader className="space-y-0 text-left">
								<DialogTitle className="py-2 text-xl font-bold">
									Twój koszyk
								</DialogTitle>
								<DialogClose asChild />
							</DialogHeader>
							<div className="mt-10 space-y-5">
								{cartItems?.docs?.length ? (
									cartItems.docs.map((item) => {
										const productVariant = item?.product.variants.find(
											(variant) => variant.id === item?.productVariantId,
										);
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
													<h3 className="text-sm">
														{item?.quantity} x {item?.product.name}
													</h3>
													<div className="flex items-center space-x-4">
														{productVariant?.items?.map((variantItem) => (
															<div
																key={variantItem?.id}
																className="flex items-center justify-between space-x-2 text-sm font-bold"
															>
																<p>{variantItem?.blockName}:</p>
																{variantItem.blockType === "color" &&
																	productColorAttributes.color?.map((color) => {
																		return (
																			<div
																				key={color}
																				className={cn(
																					"h-6 w-6 rounded-full",
																					supportedColors[
																						color as SupportedColors
																					]
																						? supportedColors[
																								color as SupportedColors
																							].bgColor
																						: "bg-[#B0D6FD]",
																				)}
																			></div>
																		);
																	})}
																{variantItem.blockType === "shape" &&
																	productShapeAttributes.shape && (
																		<span>
																			{generateNameByProductOptionValue(
																				productShapeAttributes.shape,
																			)}
																		</span>
																	)}
																{variantItem.blockType === "size" &&
																	productSizeAttributes.size && (
																		<span>
																			{generateSizeByProductOptionValue(
																				productSizeAttributes.size,
																			)}
																		</span>
																	)}
															</div>
														))}
													</div>
													<div className="flex flex-row items-center justify-between">
														<p className="text-sm">
															Cena za sztukę:{" "}
															{formatMoney(Number(item?.product.price) || 0)}
														</p>
														<p className="text-xl font-bold">
															{formatMoney(Number(item?.totalAmount) || 0)}
														</p>
													</div>
												</div>
											</div>
										);
									})
								) : (
									<p className="text-center">Twoj koszyk jest pusty</p>
								)}
							</div>
						</div>
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
										<p className="text-sm">Wartość koszyka:</p>
										<span className="text-xl font-bold">
											{formatMoney(totalPrice + deliveryFee)}
										</span>
									</div>
								)}
							</div>
							<div className="mt-5 flex flex-row items-end justify-between">
								<PrimaryButton href={"/cart"}>Pokaż koszyk</PrimaryButton>
								<SecondaryButton href={"/checkout"}>Do kasy</SecondaryButton>
							</div>
						</DialogFooter>
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
