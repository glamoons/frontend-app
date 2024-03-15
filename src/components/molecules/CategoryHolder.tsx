import { IconShoppingCart } from "@tabler/icons-react";
import { SubmitButton } from "../atoms/SubmitButton";
import { type CategoryHolderProps } from "@/interfaces/base";

export const CategoryHolder = ({
	title,
	size,
	price,
	btnName,
}: CategoryHolderProps) => {
	return (
		<div className="relative flex h-full flex-col justify-end bg-slate50 p-4">
			<div className="space-y-2">
				<div>
					<h3 className="text-sm font-bold text-secondary tablet:text-xl laptop:text-2xl desktop:text-3xl">
						{title}
					</h3>
					<p className="text-sm font-bold text-primaryDark">{size}</p>
				</div>
				<p className="text-2xl font-bold text-secondary">
					{price} <small className="block text-xs">brutto</small>
				</p>
			</div>
			<SubmitButton className="mt-4 bg-secondary text-slate50">
				{btnName ? btnName : <IconShoppingCart />}
			</SubmitButton>
		</div>
	);
};
