"use client";

import { useNavigationContext } from "@/app/providers/navigation-provider";
import LogoDark from "@/assets/logo/LogoDark";
import LogoLight from "@/assets/logo/LogoLight";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { cn } from "@/lib/utils";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback } from "react";

export const Header = () => {
	const { setIsOpen, isOpen } = useNavigationContext();

	const handleOpenMenu = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	return (
		<header
			className={cn(
				"container absolute left-0 right-0 top-0 z-[100] mx-auto flex w-full flex-row items-center justify-between",
				isOpen ? "py-9" : "py-5",
			)}
		>
			<Link href="/">{!isOpen ? <LogoLight /> : null}</Link>
			<MobileMenuHandler
				onClick={handleOpenMenu}
				className={cn(isOpen ? "text-secondary" : "", "laptop:hidden")}
				menuName={isOpen ? "close" : "menu"}
				icon={isOpen ? <IconX /> : <IconMenuDeep />}
			/>
		</header>
	);
};
