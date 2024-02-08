"use client";

import { useNavigationContext } from "@/app/providers/navigation-provider";
import LogoLight from "@/assets/logo/LogoLight";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { cn } from "@/lib/utils";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback } from "react";
import { ShoppingActionsNavLinks } from "@/components/molecules/ShoppingActionsNavLinks";
import { Navigation } from "./Navigation";

export const Header = () => {
	const { setIsOpen, isOpen } = useNavigationContext();

	const handleOpenMenu = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	return (
		<header
			className={cn(
				"container absolute left-0 right-0 top-0 z-[101] mx-auto flex w-full flex-row items-center justify-between",
				isOpen ? "py-9" : "py-5",
			)}
		>
			<Navigation className="hidden laptop:flex" />
			<Link href="/" aria-label="Logo Glamoons">
				{!isOpen ? <LogoLight /> : null}
			</Link>
			<ShoppingActionsNavLinks favoritesHref="/" userHref="/" cartHref="/" />
			<MobileMenuHandler
				onClick={handleOpenMenu}
				className={cn(isOpen ? "text-secondary" : "", "laptop:hidden")}
				menuName={isOpen ? "close" : "menu"}
				icon={isOpen ? <IconX /> : <IconMenuDeep />}
				aria-label="Menu"
			/>
		</header>
	);
};
