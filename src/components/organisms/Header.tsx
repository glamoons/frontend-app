"use client";

import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";
import { useNavigationContext } from "@/app/providers/navigation-provider";
import { LogoDark } from "@/assets/logo/LogoDark";
import { LogoLight } from "@/assets/logo/LogoLight";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { ShoppingActionsNavLinks } from "@/components/molecules/ShoppingActionsNavLinks";
import { cn } from "@/lib/utils";

export const Header = () => {
	const { setIsOpen, isOpen } = useNavigationContext();
	const pathname = usePathname();

	return (
		<header
			className={cn(
				"container z-[101] mx-auto flex w-full flex-row items-center justify-between",
				isOpen ? "py-9" : "py-5",
				pathname === "/" ? "absolute left-0 right-0 top-0" : "relative",
			)}
		>
			<Link href="/" aria-label="Logo Glamoons" className="cursor-pointer">
				{!isOpen ? pathname === "/" ? <LogoLight /> : <LogoDark /> : null}
			</Link>
			<Navigation className="hidden laptop:flex" />
			<ShoppingActionsNavLinks
				favoritesHref="/"
				userHref="/"
				cartHref="/"
				className={pathname !== "/" ? "text-secondary" : ""}
			/>
			<MobileMenuHandler
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					isOpen || pathname !== "/" ? "text-secondary" : "",
					"laptop:hidden",
				)}
				menuName={isOpen ? "close" : "menu"}
				icon={isOpen ? <IconX /> : <IconMenuDeep />}
				aria-label="Menu"
			/>
		</header>
	);
};
