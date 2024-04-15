"use client";

import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { Badge } from "../atoms/Badge";
import { ShoppingCart } from "./ShoppingCart";
import { cn } from "@/lib/utils";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import { LogoLight } from "@/assets/logo/LogoLight";
import { LogoDark } from "@/assets/logo/LogoDark";
import { useNavigationContext } from "@/app/providers/navigation-provider";

export const Header = ({
	children,
	quantity,
}: {
	children: ReactNode;
	quantity: number;
}) => {
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
			{children}
			<div className="hidden flex-row space-x-6 text-slate50 laptop:flex laptop:items-center">
				<div className="relative">
					<ShoppingCart className={pathname === "/" ? "" : "text-secondary"} />
					<Badge quantity={quantity} className="absolute -right-1.5 top-1" />
				</div>
			</div>

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
