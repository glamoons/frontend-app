"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { type ProductVariation } from "@/gql/graphql";

export const SelectField = ({
	name,
	options,
	handleValueChange,
}: {
	name: string;
	options: ProductVariation[];
	handleValueChange: (value: string) => void;
}) => {
	return (
		<Select name={name} onValueChange={handleValueChange}>
			<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
				<SelectValue
					placeholder="Wybierz wariant"
					className="text-sm font-bold text-secondary"
				/>
			</SelectTrigger>
			<SelectContent className="border-none bg-slate50">
				{options.map((option) => {
					return (
						<SelectItem key={option.id} value={option.id}>
							{option.sku}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};
