import {
	IconAdjustments,
	// IconHeart,
	IconShoppingCart,
	// IconUser,
} from "@tabler/icons-react";
import { MenuBarListLink } from "../molecules/MenuBarListLink";

export const MobileMenuBar = () => {
	const iconClassName =
		"text-primaryDark transition-colors duration-500 group-hover:text-secondary";
	return (
		<nav className="fixed bottom-0 z-[99] flex h-[3.75rem] w-full items-center justify-center bg-slate50 px-6 tabletLg:hidden">
			<ul className="flex w-full flex-row justify-evenly">
				<MenuBarListLink
					href="/"
					linkName="Konfigurator"
					icon={<IconAdjustments className={iconClassName} />}
				/>
				{/* <MenuBarListLink
					href="/"
					linkName="Ulubione"
					icon={<IconHeart className={iconClassName} />}
				/>
				<MenuBarListLink
					href="/"
					linkName="Moje konto"
					icon={<IconUser className={iconClassName} />}
				/> */}
				<MenuBarListLink
					href="/"
					linkName="Koszyk"
					icon={<IconShoppingCart className={iconClassName} />}
				/>
			</ul>
		</nav>
	);
};
