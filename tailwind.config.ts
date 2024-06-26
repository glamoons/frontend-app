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
			padding: {
				DEFAULT: "1.563rem",
				desktop: "3.125rem",
				"2xl": "8.75rem",
			},
			screens: {
				desktop: "1280px",
				"2xl": "1440px",
			},
		},
		screens: {
			tablet: "601px",
			tabletLg: "768px",
			laptop: "1024px",
			desktop: "1280px",
			xl: "1366px",
			"2xl": "1440px",
			"3xl": "1536px",
			"4xl": "1920px",
		},
		extend: {
			typography: (theme: (arg0: string) => any) => ({
				DEFAULT: {
					css: {
						maxWidth: "100ch",
						color: theme("colors.secondary.DEFAULT"),
						"--tw-prose-body": theme("colors.secondary.DEFAULT"),
						"--tw-prose-headings": theme("colors.secondary.DEFAULT"),
						"--tw-prose-links": theme("colors.secondary.DEFAULT"),
						a: {
							fontWeight: 600,
						},
					},
				},
			}),
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
				error: {
					DEFAULT: "hsl(var(--error))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
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
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
