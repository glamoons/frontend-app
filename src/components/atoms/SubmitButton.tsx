import { type RefAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import { type BaseProps } from "@/interfaces/base";

export const SubmitButton = ({
	children,
	className,
	...props
}: BaseProps & RefAttributes<HTMLButtonElement> & ButtonProps) => {
	return (
		<Button
			type="submit"
			className={cn(
				"relative inline-flex h-12 max-h-12 items-center justify-center overflow-hidden rounded-full border px-11 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 before:absolute before:left-0 before:top-1/2 before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:-translate-x-full before:-translate-y-1/2 before:bg-primaryDark before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:border-border hover:bg-primaryDark hover:text-secondary hover:before:translate-x-0 hover:before:opacity-100",
				className,
			)}
			{...props}
		>
			<span className="relative">{children}</span>
		</Button>
	);
};
