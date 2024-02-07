import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const Section = ({ children, className }: BaseProps) => {
	return (
		<section className={cn("desktop:py-[100px] py-[50px]", className)}>
			{children}
		</section>
	);
};
