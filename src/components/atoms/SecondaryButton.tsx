import { DefaultButton, type ButtonProps } from "./DefaultButton";
import { cn } from "@/lib/utils";

export const SecondaryButton = ({ ...props }: ButtonProps) => {
	const { children, className } = props;
	return (
		<DefaultButton
			{...props}
			className={cn("border-secondary bg-secondary text-slate50", className)}
		>
			{children}
		</DefaultButton>
	);
};
