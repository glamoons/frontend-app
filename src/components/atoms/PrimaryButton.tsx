import { type LinkProps } from "next/link";
import { type PropsWithChildren } from "react";
import { DefaultButton } from "./DefaultButton";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const PrimaryButton = ({
	children,
	className,
	...props
}: LinkProps & PropsWithChildren<BaseProps>) => {
	return (
		<DefaultButton
			{...props}
			className={cn(
				"border-border bg-primary text-secondary before:bg-secondary hover:border-secondary hover:text-primary",
				className,
			)}
		>
			{children}
		</DefaultButton>
	);
};
