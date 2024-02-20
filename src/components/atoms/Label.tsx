import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
	className?: string;
};

export const Label = ({ children, className, ...props }: LabelProps) => {
	return (
		<label {...props} className={cn("text-xs text-secondary", className)}>
			{children}
		</label>
	);
};
