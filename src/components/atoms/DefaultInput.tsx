import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/components/ui/input";

export const DefaultInput = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<Input
				ref={ref}
				{...props}
				className={cn(
					"min-h-12 rounded-full border border-border bg-[#D1D1C7]/10 px-5 py-3 font-serif text-sm font-normal text-secondary ring-offset-transparent placeholder:font-light placeholder:text-secondary focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-primaryDark focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",
					className,
				)}
			/>
		);
	},
);

DefaultInput.displayName = "DefaultInput";
