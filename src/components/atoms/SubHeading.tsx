import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const SubHeading = ({ children, className }: BaseProps) => {
	return (
		<h3
			className={cn("text-sm font-normal uppercase text-secondary", className)}
		>
			{children}
		</h3>
	);
};
