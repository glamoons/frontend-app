import { NavLink } from "@/components/atoms/NavLink";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NavigationProps = {
	className?: HTMLElements<HTMLElement>["className"];
};

export const Navigation = ({ className }: NavigationProps) => {
	return (
		<nav className={cn(className)}>
			<ul
				className={cn(
					"flex flex-col space-y-4 py-6 laptop:flex-row laptop:space-x-5 laptop:space-y-0",
				)}
			>
				<NavLink href="/about" aria-label="O produkcie">
					O produkcie
				</NavLink>
				<NavLink href="/configurator" aria-label="Konfigurator">
					Konfigurator
				</NavLink>
				<NavLink href="/blog" aria-label="Blog">
					Blog
				</NavLink>
				<NavLink href="/contact" aria-label="Kontakt">
					Kontakt
				</NavLink>
			</ul>
		</nav>
	);
};
