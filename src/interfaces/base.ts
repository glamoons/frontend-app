import {
	type DetailedHTMLProps,
	type HTMLAttributes,
	type ReactNode,
} from "react";

export type BaseProps = {
	children: ReactNode;
	className?: string;
	href?: string;
	icon?: JSX.Element;
	color?: string;
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
};

export type CategoryHolderProps = {
	title: string;
	btnName?: string;
};

export type HTMLElements<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;
