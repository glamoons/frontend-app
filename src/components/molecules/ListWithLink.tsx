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
		<li
			className="
            relative 
            overflow-hidden 
            py-2 
            text-base 
            font-light 
            text-secondary 
            before:absolute 
            before:bottom-0 
            before:left-0 
            before:h-[1px] 
            before:w-full 
            before:translate-x-[-100%] 
            before:bg-secondary 
            before:opacity-0 
            before:transition-all 
            before:content-[''] 
            before:hover:translate-x-0 
            before:hover:opacity-100"
		>
			<Link href={href} {...props}>
				{linkName}
			</Link>
		</li>
	);
};
