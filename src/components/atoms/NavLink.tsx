import Link from "next/link";

export const NavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<li
			className="
            laptop:text-sm
            laptop:text-slate50
            laptop:font-semibold
            laptop:hover:pl-0
            laptop:before:w-full
            laptop:before:h-[0.063rem]
            laptop:before:bg-slate50            relative 
            overflow-hidden
            text-3xl
            font-light
            uppercase 
            text-secondary 
            transition-all 
            before:absolute
            before:bottom-0 
            before:left-0 
            before:z-[-1] 
            before:h-full 
            before:w-1/3 
            before:translate-x-[-100%] 
            before:bg-primary
            before:opacity-0
            before:transition-all
            before:duration-500
            before:content-['']
            hover:whitespace-nowrap
            hover:pl-6
            before:hover:translate-x-0
            before:hover:opacity-100
        "
		>
			<Link href={href}>{children}</Link>
		</li>
	);
};
