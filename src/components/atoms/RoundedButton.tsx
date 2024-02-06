import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const RoundedButton = ({ children, className, ...props }: BaseProps) => {
	return (
		<Button
			{...props}
			className={cn(
				"flex h-12 w-12 items-center justify-center rounded-full border border-primaryLight bg-transparent",
				className,
			)}
		>
			{children}
		</Button>
	);
};