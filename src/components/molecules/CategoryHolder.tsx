import { IconShoppingCart } from "@tabler/icons-react";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { type BaseProps, type CategoryHolderProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type CategoryHolderAdditionalProps = Pick<BaseProps, "href">;

export const CategoryHolder = ({
	title,
	price,
	btnName,
	productAttributes,
	href,
}: CategoryHolderProps & CategoryHolderAdditionalProps) => {
	return (
		<div className="relative flex flex-col justify-end bg-slate50 p-4 tablet:rounded-b-3xl tablet:p-6">
			<div className="flex flex-col space-y-2 laptop:flex-row laptop:items-start laptop:space-x-2 laptop:space-y-0">
				<div className="space-y-1 laptop:flex-1">
					<h3 className="text-sm font-bold text-secondary tabletLg:text-base">
						{title}
					</h3>
					<div className="space-y-2">
						{productAttributes &&
							productAttributes.map((attribute) => {
								const attributeOptions = attribute.options;
								return attribute.name === "color" ? (
									<div
										key={attribute.id}
										className="flex flex-row items-center space-x-1"
									>
										{attributeOptions?.map((option) => {
											return (
												<div
													key={option}
													className={cn(
														"h-8 w-8 rounded-full",
														`bg-[${option}]`,
													)}
												></div>
											);
										})}
									</div>
								) : (
									<p
										key={attribute.id}
										className="text-sm font-bold text-primaryDark tabletLg:text-base"
									>
										{attributeOptions?.map((option) => {
											return `${option} `;
										})}
									</p>
								);
							})}
					</div>
				</div>
				<p className="text-2xl font-bold text-secondary">
					{price} <small className="block text-xs">brutto</small>
				</p>
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
