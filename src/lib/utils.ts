import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type VariationAttribute } from "@/gql/graphql";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const generateNameByProductOptionValue = (
	optionValue: string,
): string => {
	switch (optionValue) {
		case "square":
			return "kwadratowy";
		case "rectangle":
			return "prostokątny";
		case "circle":
			return "okrągły";
		default:
			return "okrągły";
	}
};

export const generateLabelNameFromAttributeName = (
	attribute: VariationAttribute,
) => {
	switch (attribute.name) {
		case "shape":
			return "Kształt";
		case "size":
			return "Rozmiar";
		case "color":
			return "Kolor";
		default:
			return attribute.label;
	}
};

/* colors-start */
export enum SupportedColors {
	coldWhite = "coldWhite",
	warmWhite = "warmWhite",
}

export const supportedColors: {
	[K in SupportedColors]: {
		name: string;
		bgColor: string;
		selectedColor: string;
		border: string;
	};
} = {
	coldWhite: {
		name: "zimny biały",
		bgColor: "bg-[#B0D6FD]",
		selectedColor: "ring-[#B0D6FD]",
		border: "border-[#B0D6FD]",
	},
	warmWhite: {
		name: "ciepły biały",
		bgColor: "bg-[#FFD15C]",
		selectedColor: "ring-[#FFD15C]",
		border: "border-[#FFD15C]",
	},
};
/* colors-end */
