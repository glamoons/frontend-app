import { NavigationProvider } from "./providers/navigation-provider";
import { Body } from "@/components/atoms/Body";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { MenuBar } from "@/components/organisms/MenuBar";
import { Menu } from "@/components/templates/Menu";
import "./globals.css";

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
