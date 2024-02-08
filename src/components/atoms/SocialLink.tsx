import Link, { LinkProps } from "next/link";

type SocialLinkProps = {
	href: string;
	icon: JSX.Element;
	name: string;
} & LinkProps;

export const SocialLink = ({ href, icon, name, ...props }: SocialLinkProps) => {
	return (
		<Link
			href={href}
			passHref={true}
			target="_blank"
			rel="noreferrer"
			className="text-primaryDark"
			{...props}
		>
			<span className="flex flex-row items-center space-x-4 transition-all duration-500 hover:text-secondary">
				{icon}
				<span className="hidden text-xs font-light uppercase tracking-[0.25em] text-secondary">
					{name}
				</span>
			</span>
		</Link>
	);
};
