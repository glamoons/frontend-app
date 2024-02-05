import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const HeroTitle = ({ children, className }: BaseProps) => {
	return (
		<h1
			className={cn(
				"laptop:text-5xl text-4xl font-bold tracking-[0.02em]",
				className,
			)}
		>
			{children}
		</h1>
	);
};
