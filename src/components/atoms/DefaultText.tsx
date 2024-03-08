import { type PropsWithChildren } from "react";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type DefaultTextProps = {
	children: PropsWithChildren["children"];
	className?: HTMLElements<HTMLParagraphElement>["className"];
};

export const DefaultText = ({ children, className }: DefaultTextProps) => {
	return (
		<p className={cn("text-base font-normal text-secondary", className)}>
			{children}
		</p>
	);
};
