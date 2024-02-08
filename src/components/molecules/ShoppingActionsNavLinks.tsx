import { IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { LinkWithIcon } from "@/components/atoms/LinkWithIcon";

type ShoppingActionsNavLinksProps = {
	favoritesHref: string;
	userHref: string;
	cartHref: string;
};

export const ShoppingActionsNavLinks = ({
	favoritesHref,
	userHref,
	cartHref,
}: ShoppingActionsNavLinksProps) => {
	return (
		<div className="hidden flex-row space-x-6 laptop:flex">
			<LinkWithIcon
				href={favoritesHref}
				icon={<IconHeart className="text-slate50" />}
			/>
			<LinkWithIcon
				href={userHref}
				icon={<IconUser className="text-slate50" />}
			/>
			<LinkWithIcon
				href={cartHref}
				icon={<IconShoppingCart className="text-slate50" />}
			/>
		</div>
	);
};
