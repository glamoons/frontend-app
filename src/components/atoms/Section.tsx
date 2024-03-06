import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const Section = ({ children, className }: BaseProps) => {
	return (
		<section className={cn("py-[3.125rem] desktop:py-[6.25rem]", className)}>
			{children}
		</section>
	);
};
