import { IconShoppingCart } from "@tabler/icons-react";
import { type LinkProps } from "next/link";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { type CategoryHolderProps } from "@/interfaces/base";
import { cn, supportedColors, type SupportedColors } from "@/lib/utils";
import { type Color, type Size } from "@/gql/graphql";

type CategoryHolderAdditionalProps = Pick<LinkProps, "href">;

export const CategoryHolder = ({
	title,
	price,
	btnName,
	productAttributes,
	href,
}: CategoryHolderProps & CategoryHolderAdditionalProps) => {
	const productColorAttributes = productAttributes?.find(
		(attribute) => attribute.blockType === "color",
	) as Color;
	const productSizeAttributes = productAttributes?.find(
		(attribute) => attribute.blockType === "size",
	) as Size;

	return (
		<div className="relative flex flex-col justify-end bg-slate50 p-4 tablet:rounded-b-3xl tablet:p-6">
			<div className="flex flex-col space-y-2 laptop:flex-row laptop:items-start laptop:space-x-2 laptop:space-y-0">
				<div className="space-y-1 laptop:flex-1">
					<h3 className="text-sm font-bold text-secondary tabletLg:text-base">
						{title}
					</h3>
					<div className="space-y-2">
						<p className="font-bold text-primaryDark">
							{productSizeAttributes.size}
						</p>
						<div className="flex flex-row items-center space-x-1">
							{productColorAttributes &&
								productColorAttributes.color &&
								productColorAttributes.color.map((color) => {
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
						</div>
					</div>
				</div>
				{price && price !== "null" && (
					<p className="text-right text-2xl font-bold text-secondary">
						{price} <small className="block text-xs">brutto</small>
					</p>
				)}
			</div>
			<SecondaryButton
				className="mt-4 bg-secondary text-slate50"
				href={String(href)}
			>
				<span className="hidden tablet:block">{btnName}</span>
				<IconShoppingCart className="tablet:hidden" />
			</SecondaryButton>
		</div>
	);
};
