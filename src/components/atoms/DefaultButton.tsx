import Link, { type LinkProps } from "next/link";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export const DefaultButton = ({
	className,
	children,
	...props
}: LinkProps & BaseProps) => {
	return (
		<Link
			{...props}
			className={cn(
				"relative inline-flex h-12 min-h-12 items-center justify-center overflow-hidden rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 before:absolute before:left-0 before:top-1/2 before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:-translate-x-full before:-translate-y-1/2 before:bg-primaryDark before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:border-border hover:text-secondary hover:before:translate-x-0 hover:before:opacity-100",
				className,
			)}
		>
			<span className="relative">{children}</span>
		</Link>
	);
};
