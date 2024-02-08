import { Body } from "@/components/atoms/Body";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Menu } from "@/components/templates/Menu";
import type { Metadata } from "next";
import "./globals.css";
import { NavigationProvider } from "./providers/navigation-provider";
import { MenuBar } from "@/components/organisms/MenuBar";

export const metadata: Metadata = {
	title: "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.",
	description:
		"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<NavigationProvider>
				<Body>
					<Header />
					<Menu />
					<MenuBar />
					<main>{children}</main>
					<Footer />
				</Body>
			</NavigationProvider>
		</html>
	);
}
