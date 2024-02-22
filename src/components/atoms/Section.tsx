import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const Section = ({ children, className }: BaseProps) => {
	return (
		<section className={cn("py-[50px] desktop:py-[100px]", className)}>
			{children}
		</section>
	);
};
