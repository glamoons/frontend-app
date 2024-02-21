import Link, { type LinkProps } from "next/link";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type LinkWithIconProps = {
	href: string;
	icon: JSX.Element;
	className?: BaseProps["className"];
};

export const LinkWithIcon = ({
	href,
	icon,
	className,
	...props
}: LinkWithIconProps & LinkProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"opacity-80 transition-opacity duration-500 hover:opacity-100",
				className,
			)}
			{...props}
		>
			{icon}
		</Link>
	);
};
