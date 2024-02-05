import Link from "next/link";
import { NavLink } from "../atoms/NavLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-col space-y-4 py-6">
				<NavLink href="/">O produkcie</NavLink>
				<NavLink href="/">Konfigurator</NavLink>
				<NavLink href="/">Blog</NavLink>
				<NavLink href="/">Kontakt</NavLink>
			</ul>
		</nav>
	);
};
