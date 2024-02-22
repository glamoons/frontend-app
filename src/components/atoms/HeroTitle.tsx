"use client";

import { usePathname } from "next/navigation";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const HeroTitle = ({ children, className }: BaseProps) => {
	const pathname = usePathname();
	return (
		<h1
			className={cn(
				"text-4xl font-bold tracking-[-0.02em]",
				className,
				pathname === "/" ? "laptop:text-5xl" : "laptop:text-[40px]",
			)}
		>
			{children}
		</h1>
	);
};
