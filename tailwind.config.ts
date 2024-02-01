import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "1.563rem",
			screens: {
				"2xl": "1440px",
			},
		},
		extend: {
			fontFamily: {
				serif: ["var(--font-proximanova)"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				background: "hsl(var(--background))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
				},
				primaryLight: {
					DEFAULT: "hsl(var(--primary-light))",
				},
				primaryDark: {
					DEFAULT: "hsl(var(--primary-dark))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
				},
				slate50: {
					DEFAULT: "hsl(var(--slate-50))",
				},
				slate100: {
					DEFAULT: "hsl(var(--slate-100))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
