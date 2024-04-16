import { type OrderItem } from "@/gql/graphql";
import { type BaseProps } from "@/interfaces/base";
import { cn, formatMoney } from "@/lib/utils";

type CartItemAmountProps = {
	item: OrderItem | null;
	className?: BaseProps["className"];
};

export const CartItemAmount = ({ item, className }: CartItemAmountProps) => {
	return (
		<div
			className={cn(
				"flex flex-row flex-wrap items-center justify-between",
				className,
			)}
		>
			<p className="mr-4 text-sm tablet:mr-0">
				Cena za sztukę: {formatMoney(Number(item?.product.price) || 0)}
			</p>
			<p className="text-xl font-bold">
				{formatMoney(Number(item?.totalAmount) || 0)}
			</p>
		</div>
	);
};
