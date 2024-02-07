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
					"laptop:flex-row laptop:space-y-0 lap laptop:space-x-5 flex flex-col space-y-4 py-6",
				)}
			>
				<NavLink href="/">O produkcie</NavLink>
				<NavLink href="/">Konfigurator</NavLink>
				<NavLink href="/">Blog</NavLink>
				<NavLink href="/">Kontakt</NavLink>
			</ul>
		</nav>
	);
};
