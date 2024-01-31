import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const DefaultInput = ({
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<Input
			{...props}
			className={cn(
				"min-h-12 rounded-full border border-border bg-white/60 px-3 py-3 font-serif text-sm font-normal text-secondary placeholder:font-light placeholder:text-secondary focus-visible:ring-primaryDark",
				className,
			)}
		/>
	);
};
