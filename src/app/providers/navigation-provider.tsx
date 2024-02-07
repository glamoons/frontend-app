"use client";

import {
	createContext,
	useState,
	type SetStateAction,
	useContext,
} from "react";

const NavigationContext = createContext({
	isOpen: false,
	setIsOpen: (_value: SetStateAction<boolean>) => {},
});

export const NavigationProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<NavigationContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigationContext = () => useContext(NavigationContext);
