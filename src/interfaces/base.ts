import {
	type DetailedHTMLProps,
	type HTMLAttributes,
	type ImgHTMLAttributes,
} from "react";
import { type VariationAttribute } from "@/gql/graphql";

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
	productAttributes?: VariationAttribute[];
};

export type HTMLElements<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;
