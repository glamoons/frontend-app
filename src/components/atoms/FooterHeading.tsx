import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const FooterHeading = ({ children, className }: BaseProps) => {
	return (
		<h4 className={cn("text-base font-bold text-secondary", className)}>
			{children}
		</h4>
	);
};
