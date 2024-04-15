import { IconShoppingCart } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ShoppingCartProps = {
	className?: BaseProps["className"];
};

export const ShoppingCart = ({ className }: ShoppingCartProps) => {
	return (
		<Button
			className={cn(
				"bg-transparent p-0 opacity-80 transition-opacity duration-500 hover:opacity-100",
				className,
			)}
		>
			<IconShoppingCart />
		</Button>
	);
};
