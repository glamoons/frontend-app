import { Body } from "@/components/atoms/Body";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Menu } from "@/components/templates/Menu";
import type { Metadata } from "next";
import "./globals.css";
import { NavigationProvider } from "./providers/navigation-provider";

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
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d2d2d" />
				<meta name="msapplication-TileColor" content="#2d2d2d" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<NavigationProvider>
				<Body>
					<Header />
					<Menu />
					<main>{children}</main>
					<Footer />
				</Body>
			</NavigationProvider>
		</html>
	);
}
