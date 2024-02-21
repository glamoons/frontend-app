import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type ActionLinkProps = {
	actionHref: string;
	actionText: string;
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

export const ActionLink = ({
	actionHref,
	actionText,
	...props
}: ActionLinkProps) => {
	return (
		<a
			href={actionHref}
			className="block opacity-85 transition-opacity duration-500 hover:opacity-100"
			{...props}
		>
			{actionText}
		</a>
	);
};
