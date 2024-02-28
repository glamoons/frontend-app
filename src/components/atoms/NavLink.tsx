"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NavLinkProps = {
	href: string;
	children: BaseProps["children"];
} & LinkProps;

export const NavLink = ({ href, children, ...props }: NavLinkProps) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	return (
		<li
			className={cn(
				"relative overflow-hidden text-3xl font-light uppercase text-secondary transition-all before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-full before:w-1/3 before:translate-x-[-100%] before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:whitespace-nowrap hover:pl-6 before:hover:translate-x-0 before:hover:opacity-100 laptop:text-sm laptop:font-semibold laptop:before:h-[0.063rem] laptop:before:w-full laptop:hover:pl-0",
				pathName !== "/"
					? "laptop:text-secondary laptop:before:bg-secondary"
					: "laptop:text-slate50 laptop:before:bg-slate50",
				{ "before:translate-x-0 before:opacity-100": isActive },
			)}
		>
			<Link {...props} href={href}>
				{children}
			</Link>
		</li>
	);
};
