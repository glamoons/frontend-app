"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useOptimistic } from "react";
import { changeItemQuantity } from "./actions";
import { Button } from "@/components/ui/button";

type IncrementProductQuantityProps = {
	cartId: string;
	itemId: number;
	quantity: number;
	price: number;
	totalAmount: number;
};

export const IncrementProductQuantity = ({
	cartId,
	itemId,
	quantity,
	price,
	// totalAmount,
}: IncrementProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	return (
		<form className="space-x-4">
			<Button
				variant="outline"
				type="submit"
				size="icon"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(
						cartId,
						itemId,
						optimisticQuantity - 1,
						price * (optimisticQuantity - 1),
					);
				}}
				disabled={optimisticQuantity === 1}
			>
				<IconMinus className="h-4 w-4" />
			</Button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<Button
				variant="outline"
				type="submit"
				size="icon"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(
						cartId,
						itemId,
						optimisticQuantity + 1,
						price * (optimisticQuantity + 1),
					);
				}}
			>
				<IconPlus className="h-4 w-4" />
			</Button>
		</form>
	);
};
