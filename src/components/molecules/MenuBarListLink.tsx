import { BaseProps } from "@/interfaces/base";
import Link from "next/link";

type MenuBarListLinkProps = {
	href: BaseProps["href"];
	linkName: string;
	icon: BaseProps["icon"];
};

export const MenuBarListLink = ({
	href,
	linkName,
	icon,
}: MenuBarListLinkProps) => {
	return (
		<li>
			<Link
				href={String(href)}
				className="group flex flex-col items-center space-y-1"
			>
				{icon}
				<span className="text-[10px] font-bold uppercase text-primaryDark transition-colors duration-500 hover:text-secondary">
					{linkName}
				</span>
			</Link>
		</li>
	);
};
