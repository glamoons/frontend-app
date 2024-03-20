import { IconShoppingCart } from "@tabler/icons-react";
import { SubmitButton } from "../atoms/SubmitButton";
import { type CategoryHolderProps } from "@/interfaces/base";

export const CategoryHolder = ({
	title,
	price,
	btnName,
	productAttributes,
}: CategoryHolderProps) => {
	return (
		<div className="relative flex flex-col justify-end bg-slate50 p-4 tablet:rounded-b-3xl tablet:p-6">
			<div className="flex flex-col space-y-2 laptop:flex-row laptop:items-start laptop:space-x-2 laptop:space-y-0">
				<div className="laptop:flex-1">
					<h3 className="text-sm font-bold text-secondary tabletLg:text-base">
						{title}
					</h3>
					<div>
						{productAttributes &&
							productAttributes.map((attribute) => {
								const attributeOptions = attribute.options;
								return (
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
			<SubmitButton className="mt-4 bg-secondary text-slate50">
				<span className="hidden tablet:block">{btnName}</span>
				<IconShoppingCart className="tablet:hidden" />
			</SubmitButton>
		</div>
	);
};
