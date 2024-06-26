import { type PropsWithChildren } from "react";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type SubHeadingProps = {
	children: PropsWithChildren["children"];
	className?: HTMLElements<HTMLHeadingElement>["className"];
};

export const SubHeading = ({ children, className }: SubHeadingProps) => {
	return (
		<h3
			className={cn("text-sm font-normal uppercase text-secondary", className)}
		>
			{children}
		</h3>
	);
};
