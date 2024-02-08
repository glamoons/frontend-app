type ActionLinkProps = {
	actionHref: string;
	actionText: string;
};

export const ActionLink = ({ actionHref, actionText }: ActionLinkProps) => {
	return (
		<a
			href={actionHref}
			className="block opacity-85 transition-opacity duration-500 hover:opacity-100"
		>
			{actionText}
		</a>
	);
};
