import { type LinkProps } from "next/link";
import { DefaultButton } from "./DefaultButton";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/interfaces/base";

export const SecondaryButton = ({
	children,
	className,
	...props
}: LinkProps & BaseProps) => {
	return (
		<DefaultButton
			{...props}
			className={cn("border-secondary bg-secondary text-slate50", className)}
		>
			{children}
		</DefaultButton>
	);
};
