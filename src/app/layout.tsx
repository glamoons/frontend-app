import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Body } from "@/components/atoms/Body";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { MenuBar } from "@/components/organisms/MenuBar";
import { Menu } from "@/components/templates/Menu";
import "./globals.css";
import { NavigationProvider } from "@/app/providers/navigation-provider";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com",
		},
		title: "Glamoons - konfigurowalne stoliki i zegary w stylu glamour.",
		description:
			"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
		openGraph: {
			title: "Glamoons - konfigurowalne stoliki i zegary w stylu glamour.",
			description:
				"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
			type: "website",
			siteName: "Glamoons",
			url: "https://dev.glamoons.com/",
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: PropsWithChildren["children"];
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
