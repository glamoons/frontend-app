import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BaseProps } from "@/interfaces/base";

export const SubmitButton = ({ children, className, ...props }: BaseProps) => {
	return (
		<Button
			type="submit"
			className={cn(
				"inline-flex h-12 max-h-12 items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] hover:border-border hover:bg-primaryDark hover:text-secondary",
				className,
			)}
			{...props}
		>
			{children}
		</Button>
	);
};
