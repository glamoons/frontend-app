"use client";

import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { type Product_Variants } from "@/gql/graphql";

export const SelectField = ({
	name,
	productSlug,
	options,
}: {
	name: string;
	productSlug: string;
	options: Product_Variants[];
}) => {
	const router = useRouter();

	const handleValueChange = (value: string) => {
		router.replace(`/product/${productSlug}?vId=${value}`);
	};
	return (
		<Select
			name={name}
			onValueChange={(value) => handleValueChange(`${value}`)}
			defaultValue={String(options[0].id)}
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
						<SelectItem key={option.id} value={String(option.id)}>
							{option.blockType}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};
