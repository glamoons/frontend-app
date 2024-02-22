import { type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
	className?: string;
};

export const Label = ({ children, className, ...props }: LabelProps) => {
	return (
		<label {...props} className={cn("text-xs text-secondary", className)}>
			{children}
		</label>
	);
};
