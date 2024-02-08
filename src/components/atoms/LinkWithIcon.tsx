import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LinkWithIconProps = {
	href: string;
	icon: JSX.Element;
	className?: BaseProps["className"];
};

export const LinkWithIcon = ({ href, icon, className }: LinkWithIconProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"opacity-80 transition-opacity duration-500 hover:opacity-100",
				className,
			)}
		>
			{icon}
		</Link>
	);
};
