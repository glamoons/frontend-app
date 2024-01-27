import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximanova = localFont({
	variable: "--font-proximanova",
	display: "swap",
	style: "normal",
	src: [
		{
			path: "../assets/fonts/proximanova_light.woff2",
			weight: "300",
		},
		{
			path: "../assets/fonts/proximanova_regular.woff2",
			weight: "700",
		},
		{
			path: "../assets/fonts/proximanova_semibold.woff2",
			weight: "600",
		},
		{
			path: "../assets/fonts/proximanova_bold.woff2",
			weight: "700",
		},
	],
});

export const metadata: Metadata = {
	title: "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.",
	description:
		"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={proximanova.variable}>{children}</body>
		</html>
	);
}
