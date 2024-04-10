import {
	type DetailedHTMLProps,
	type HTMLAttributes,
	type ImgHTMLAttributes,
} from "react";
import { type Product_Variants } from "@/gql/graphql";

export type BaseProps = {
	className?: string;
	href?: string;
	icon?: JSX.Element;
	color?: string;
	title?: string;
	description?: string;
};

export type ContactInformationProps = {
	address: string;
	phone: string;
	email: string;
	workingHours: string;
};

export type ResponsiveImageProps = {
	mobileSrc: string;
	alt: string;
	desktopSrc: string;
	style?: Record<string, string>;
	className?: BaseProps["className"];
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export type CategoryHolderProps = {
	title: string;
	price: string;
	btnName?: string;
	productAttributes?: Product_Variants[];
};

export type ProductOptions = "square" | "rectangle" | "circle";

export type HTMLElements<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;

export enum ProductSkuEnum {
	CIRCLE_COLDWHITE_30 = "OKRĄGŁY_BIAŁYZIMNY_30",
	CIRCLE_WARMWHITE_30 = "OKRĄGŁY_BIAŁYCIEPŁY_30",
	CIRCLE_COLDWHITE_40 = "OKRĄGŁY_BIAŁYZIMNY_40",
	CIRCLE_WARMWHITE_40 = "OKRĄGŁY_BIAŁYCIEPŁY_40",
}
