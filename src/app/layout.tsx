import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Body } from "@/components/atoms/Body";
import { Footer } from "@/components/organisms/Footer";
import { NavBar } from "@/components/organisms/NavBar";
import { MobileMenuBar } from "@/components/organisms/MobileMenuBar";
import { Menu } from "@/components/templates/Menu";
import "./globals.css";
import { NavigationProvider } from "@/app/providers/navigation-provider";
import { Toaster } from "@/components/ui/toaster";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com",
		},
		title: "Glamoons - konfigurowalne bazy MDF z oświetleniem LED.",
		description:
			"Unikatowe bazy MDF z oświetleniem LED do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
		openGraph: {
			title: "Glamoons - konfigurowalne bazy MDF z oświetleniem LED.",
			description:
				"Unikatowe bazy MDF z oświetleniem LED do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
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
					<NavBar />
					<Menu />
					<MobileMenuBar />
					<main>{children}</main>
					<Toaster />
					<Footer />
				</Body>
			</NavigationProvider>
		</html>
	);
}
