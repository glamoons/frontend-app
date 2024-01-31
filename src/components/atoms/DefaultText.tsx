import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const DefaultText = ({ children, className }: BaseProps) => {
	return <p className={cn("text-base font-normal text-secondary", className)}>{children}</p>;
};
