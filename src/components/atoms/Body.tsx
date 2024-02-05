"use client";

import { useNavigationContext } from "@/app/providers/navigation-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const proximanova = localFont({
	variable: "--font-proximanova",
	display: "swap",
	style: "normal",
	src: [
		{
			path: "../../assets/fonts/proximanova_light.woff2",
			weight: "300",
		},
		{
			path: "../../assets/fonts/proximanova_regular.woff2",
			weight: "400",
		},
		{
			path: "../../assets/fonts/proximanova_semibold.woff2",
			weight: "600",
		},
		{
			path: "../../assets/fonts/proximanova_bold.woff2",
			weight: "700",
		},
	],
});

export const Body = ({ children }: { children: React.ReactNode }) => {
	const { isOpen } = useNavigationContext();
	return (
		<body
			className={cn(
				proximanova.variable,
				"font-serif antialiased",
				isOpen ? "overflow-hidden" : "",
			)}
		>
			{children}
		</body>
	);
};
