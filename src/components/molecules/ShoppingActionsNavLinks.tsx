import { IconHeart, IconUser } from "@tabler/icons-react";
import { ShoppingCart } from "../organisms/ShoppingCart";
import { LinkWithIcon } from "@/components/atoms/LinkWithIcon";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ShoppingActionsNavLinksProps = {
	favoritesHref: string;
	userHref: string;
	cartHref?: string;
	className?: HTMLElements<HTMLDivElement>["className"];
};

export const ShoppingActionsNavLinks = ({
	favoritesHref,
	userHref,
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
			<ShoppingCart />
		</div>
	);
};
