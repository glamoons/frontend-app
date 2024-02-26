import { DefaultButton, type ButtonProps } from "./DefaultButton";
import { cn } from "@/lib/utils";

export const SecondaryButton = ({
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<DefaultButton
			{...props}
			className={cn("border-secondary bg-secondary text-slate50", className)}
		>
			{children}
		</DefaultButton>
	);
};
