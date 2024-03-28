"use client";

import { useRouter } from "next/navigation";
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
	productSlug,
	options,
}: {
	name: string;
	productSlug: string;
	options: ProductVariation[];
}) => {
	const router = useRouter();

	const handleValueChange = (value: string) => {
		router.replace(`/product/${productSlug}?vId=${value}`);
	};
	return (
		<Select
			name={name}
			onValueChange={(value) => handleValueChange(`${value}`)}
			defaultValue={String(options[0].databaseId)}
		>
			<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
				<SelectValue
					placeholder="Wybierz wariant"
					className="text-sm font-bold text-secondary"
				/>
			</SelectTrigger>
			<SelectContent className="border-none bg-slate50">
				{options.map((option) => {
					return (
						<SelectItem key={option.id} value={String(option.databaseId)}>
							{option.sku}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};
