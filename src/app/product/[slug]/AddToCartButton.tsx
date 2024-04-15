"use client";

import { useFormStatus } from "react-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { useToast } from "@/components/ui/use-toast";

export const AddToCartButton = () => {
	const [addtoCart, setAddtoCart] = useState(false);
	const status = useFormStatus();
	const { toast } = useToast();

	useEffect(() => {
		if (addtoCart && status.pending === false) {
			setAddtoCart(false);
			toast({
				title: "Produkt został dodany do koszyka",
				className: "bg-slate50 border-border",
			});
		}
	}, [addtoCart, status.pending, toast]);

	return (
		<SubmitButton
			type="submit"
			className="w-full"
			disabled={status.pending}
			onClick={() => setAddtoCart(true)}
		>
			<span className="flex flex-row items-center space-x-3">
				<IconShoppingCart size={24} className="text-secondary" />
				<span>Dodaj do koszyka</span>
			</span>
		</SubmitButton>
	);
};
