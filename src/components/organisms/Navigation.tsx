import { NavLink } from "@/components/atoms/NavLink";
import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NavigationProps = {
	className?: BaseProps["className"];
};

export const Navigation = ({ className }: NavigationProps) => {
	return (
		<nav className={className}>
			<ul
				className={cn(
					"lap flex flex-col space-y-4 py-6 laptop:flex-row laptop:space-x-5 laptop:space-y-0",
				)}
			>
				<NavLink href="/" aria-label="O produkcie">
					O produkcie
				</NavLink>
				<NavLink href="/" aria-label="Konfigurator">
					Konfigurator
				</NavLink>
				<NavLink href="/" aria-label="Blog">
					Blog
				</NavLink>
				<NavLink href="/" aria-label="Kontakt">
					Kontakt
				</NavLink>
			</ul>
		</nav>
	);
};
