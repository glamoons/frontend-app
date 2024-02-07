import Link, { LinkProps } from "next/link";

type ListWithLinkProps = {
	href: string;
	linkName: string;
};
export const ListWithLink = ({
	href,
	linkName,
	...props
}: ListWithLinkProps & LinkProps) => {
	return (
		<li className="relative overflow-hidden whitespace-nowrap text-base font-light text-secondary transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-full before:w-1/2 before:translate-x-[-100%] before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:pl-3 before:hover:translate-x-0 before:hover:opacity-100">
			<Link href={href} {...props} className="block py-2">
				{linkName}
			</Link>
		</li>
	);
};
