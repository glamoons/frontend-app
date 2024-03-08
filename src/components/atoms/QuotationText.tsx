import { type PropsWithChildren } from "react";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const QuotationText = ({
	children,
	className,
}: PropsWithChildren<BaseProps>) => {
	return (
		<q
			className={cn(
				"text-4xl font-bold tracking-[-0.02em] text-secondary",
				className,
			)}
		>
			{children}
		</q>
	);
};
