"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useOptimistic } from "react";
import { Button } from "@/components/ui/button";

export const IncrementProductQuantity = () => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(1);
	return (
		<div className="space-x-4">
			<Button
				variant="outline"
				size="icon"
				formAction={() => setOptimisticQuantity(optimisticQuantity - 1)}
				disabled={optimisticQuantity === 1}
			>
				<IconMinus className="h-4 w-4" />
			</Button>
			<span>{optimisticQuantity}</span>
			<Button
				variant="outline"
				size="icon"
				formAction={() => setOptimisticQuantity(optimisticQuantity + 1)}
			>
				<IconPlus className="h-4 w-4" />
			</Button>
		</div>
	);
};
