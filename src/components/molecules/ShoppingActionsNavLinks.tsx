import { IconHeart, IconUser, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

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
		<div className="laptop:flex hidden flex-row space-x-6">
			<Link href={favoritesHref}>
				<IconHeart className="text-slate50" />
			</Link>
			<Link href={userHref}>
				<IconUser className="text-slate50" />
			</Link>
			<Link href={cartHref}>
				<IconShoppingCart className="text-slate50" />
			</Link>
		</div>
	);
};
