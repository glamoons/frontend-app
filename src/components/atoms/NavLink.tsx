import Link, { LinkProps } from "next/link";

export const NavLink = ({
	href,
	children,
	...props
}: {
	href: string;
	children: React.ReactNode;
} & LinkProps) => {
	return (
		<li className="relative overflow-hidden text-3xl font-light uppercase text-secondary transition-all before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-full before:w-1/3 before:translate-x-[-100%] before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:whitespace-nowrap hover:pl-6 before:hover:translate-x-0 before:hover:opacity-100 laptop:text-sm laptop:font-semibold laptop:text-slate50 laptop:before:h-[0.063rem] laptop:before:w-full laptop:before:bg-slate50 laptop:hover:pl-0">
			<Link href={href} {...props}>
				{children}
			</Link>
		</li>
	);
};
