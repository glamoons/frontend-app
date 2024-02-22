import { IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { LinkWithIcon } from "@/components/atoms/LinkWithIcon";
import { cn } from "@/lib/utils";
import { type HTMLElements } from "@/interfaces/base";

type ShoppingActionsNavLinksProps = {
	favoritesHref: string;
	userHref: string;
	cartHref: string;
	className?: HTMLElements<HTMLDivElement>["className"];
};

export const ShoppingActionsNavLinks = ({
	favoritesHref,
	userHref,
	cartHref,
	className,
}: ShoppingActionsNavLinksProps) => {
	return (
		<div
			className={cn(
				"hidden flex-row space-x-6 text-slate50 laptop:flex",
				className,
			)}
		>
			<LinkWithIcon
				href={favoritesHref}
				icon={<IconHeart />}
				aria-label="Ulubione"
			/>
			<LinkWithIcon
				href={userHref}
				icon={<IconUser />}
				aria-label="Moje konto"
			/>
			<LinkWithIcon
				href={cartHref}
				icon={<IconShoppingCart />}
				aria-label="Koszyk"
			/>
		</div>
	);
};
