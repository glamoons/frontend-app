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
					rel="icon"
					href="/favicon-16x16.png"
					type="image/png"
					sizes="16x16"
				/>
				<link
					rel="icon"
					href="/favicon-32x32.png"
					type="image/png"
					sizes="32x32"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-touch-icon.png"
					type="image/png"
					sizes="180x180"
				/>
				<link
					rel="android-chrome"
					href="/android-chrome-512x512.png"
					type="image/png"
					sizes="512x512"
				/>
				<link
					rel="android-chrome"
					href="/android-chrome-192x192.png"
					type="image/png"
					sizes="192x192"
				/>
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
