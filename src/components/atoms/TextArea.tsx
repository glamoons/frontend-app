import { forwardRef } from "react";
import { Textarea, type TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<Textarea
				ref={ref}
				{...props}
				className={cn(
					"min-h-12 w-full resize-none rounded-[25px] border border-border bg-[#D1D1C7]/10 px-5 py-3 font-serif text-sm font-normal text-secondary ring-offset-transparent placeholder:font-light placeholder:text-secondary focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-primaryDark focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",
					className,
				)}
			></Textarea>
		);
	},
);

TextArea.displayName = "TextArea";
