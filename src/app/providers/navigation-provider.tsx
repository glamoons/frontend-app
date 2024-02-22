"use client";

import { usePathname } from "next/navigation";
import {
	createContext,
	useContext,
	useState,
	type SetStateAction,
	useEffect,
} from "react";
import { type BaseProps } from "@/interfaces/base";

const NavigationContext = createContext({
	isOpen: false,
	setIsOpen: (_value: SetStateAction<boolean>) => {},
});

export const NavigationProvider = ({
	children,
}: {
	children: BaseProps["children"];
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setTimeout(() => {
			setIsOpen(false);
		}, 300);
	}, [pathname]);

	return (
		<NavigationContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigationContext = () => useContext(NavigationContext);
