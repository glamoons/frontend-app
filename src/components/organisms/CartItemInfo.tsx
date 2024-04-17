import NextLink from "next/link";
import { type Color, type Shape, type Size, type Variant } from "@/gql/graphql";
import {
	cn,
	generateNameByProductOptionValue,
	generateSizeByProductOptionValue,
	supportedColors,
	type SupportedColors,
} from "@/lib/utils";

export type CartItemInfoProps = {
	title: string;
	productVariant: Variant;
	productColorAttributes: Color;
	productSizeAttributes: Size;
	productShapeAttributes: Shape;
};

export const CartItemInfo = ({
	title,
	productVariant,
	productColorAttributes,
	productSizeAttributes,
	productShapeAttributes,
}: CartItemInfoProps) => {
	return (
		<div className="flex flex-col">
			<NextLink href={"/"} className="text-sm">
				{title}
			</NextLink>
			<div className="flex space-x-4 desktop:items-center">
				{productVariant?.items?.map((variantItem) => (
					<div
						key={variantItem?.id}
						className="flex flex-col text-sm font-bold desktop:flex-row desktop:items-center desktop:space-x-2"
					>
						<p>{variantItem?.blockName}:</p>
						{variantItem.blockType === "color" &&
							productColorAttributes.color?.map((color) => {
								return (
									<div
										key={color}
										className={cn(
											"h-6 w-6 rounded-full",
											supportedColors[color as SupportedColors]
												? supportedColors[color as SupportedColors].bgColor
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
						{variantItem.blockType === "size" && productSizeAttributes.size && (
							<span>
								{generateSizeByProductOptionValue(productSizeAttributes.size)}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
