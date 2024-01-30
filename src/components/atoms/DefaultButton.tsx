import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export const DefaultButton = ({
	className,
	children,
	...props
}: LinkProps & { className?: string; children: React.ReactNode }) => {
	return (
		<Link
			{...props}
			className={cn(
				"inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-4 text-sm font-medium uppercase tracking-[0.25em] hover:border-border hover:bg-primaryDark hover:text-slate-50",
				className,
			)}
		>
			{children}
		</Link>
	);
};
