import { type PropsWithChildren } from "react";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const Heading = ({
	children,
	className,
}: PropsWithChildren<BaseProps>) => {
	return (
		<h2
			className={cn(
				"text-4xl font-bold tracking-[-0.02em] text-secondary",
				className,
			)}
		>
			{children}
		</h2>
	);
};
