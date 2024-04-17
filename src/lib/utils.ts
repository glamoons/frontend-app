import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type OrderItem } from "@/gql/graphql";
import { ProductSkuEnum } from "@/interfaces/base";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatMoney(amount: number, currency = "PLN") {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency,
	}).format(amount);
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

export const generateSizeByProductOptionValue = (
	optionValue: string,
): string => {
	switch (optionValue) {
		case "_30":
			return "30cm";
		case "_40":
			return "40cm";
		case "_50":
			return "50cm";
		case "_60":
			return "60cm";
		case "_70":
			return "70cm";
		case "_80":
			return "80cm";
		case "_90":
			return "90cm";
		default:
			return "30cm";
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

export const generateNameByProductEnumValue = (optionValue: string): string => {
	switch (optionValue) {
		case "CIRCLE_COLDWHITE_30":
			return ProductSkuEnum.CIRCLE_COLDWHITE_30;
		case "CIRCLE_WARMWHITE_30":
			return ProductSkuEnum.CIRCLE_WARMWHITE_30;
		case "CIRCLE_COLDWHITE_40":
			return ProductSkuEnum.CIRCLE_COLDWHITE_40;
		case "CIRCLE_WARMWHITE_40":
			return ProductSkuEnum.CIRCLE_WARMWHITE_40;
		default:
			return ProductSkuEnum.CIRCLE_COLDWHITE_30;
	}
};

export const calculateTotalPrice = (cartItems: OrderItem[]) => {
	return cartItems?.reduce((acc, item) => {
		if (!item) return acc;
		return acc + item?.totalAmount;
	}, 0);
};
