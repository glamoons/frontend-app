import { LinkProps } from "next/link";
import { DefaultButton } from "./DefaultButton";
import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const PrimaryButton = ({ children, className, ...props }: LinkProps & BaseProps) => {
	return (
		<DefaultButton {...props} className={cn("border-border bg-primary text-secondary", className)}>
			{children}
		</DefaultButton>
	);
};