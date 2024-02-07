import Link from "next/link";

type SocialLinkProps = {
	href: string;
	icon: JSX.Element;
	name: string;
};

export const SocialLink = ({ href, icon, name }: SocialLinkProps) => {
	return (
		<Link href={href} passHref={true} target="_blank" rel="noreferrer" className="text-primaryDark">
			<span className="flex flex-row items-center space-x-4 transition-all hover:text-secondary">
				{icon}
				<span className="hidden text-xs font-light uppercase tracking-[0.25em] text-secondary">
					{name}
				</span>
			</span>
		</Link>
	);
};
