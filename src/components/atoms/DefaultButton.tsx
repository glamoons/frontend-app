import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export const DefaultButton = ({ className, children, ...props }: LinkProps & BaseProps) => {
	return (
		<Link
			{...props}
			className={cn(
				"inline-flex h-12 min-h-12 items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] hover:border-border hover:bg-primaryDark hover:text-secondary",
				className,
			)}
		>
			{children}
		</Link>
	);
};
