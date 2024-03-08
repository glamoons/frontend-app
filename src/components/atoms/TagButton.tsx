import { Button, type ButtonProps } from "@/components/ui/button";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type TagButtonProps = {
	count: number;
	tagName: string;
	className?: BaseProps["className"];
};

export const TagButton = ({
	count,
	tagName,
	className,
	...props
}: TagButtonProps & ButtonProps) => {
	return (
		<Button
			{...props}
			className={cn(
				"group relative inline-flex h-12 min-h-12 min-w-fit items-center justify-center overflow-hidden rounded-full border border-primaryLight bg-transparent px-9 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 before:absolute before:left-0 before:top-1/2 before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:-translate-x-full before:-translate-y-1/2 before:bg-primaryLight before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:border-border hover:text-secondary hover:before:translate-x-0 hover:before:opacity-100",
				className,
			)}
			aria-label={tagName}
		>
			<span className="space-x-3">
				<span className="relative text-primaryLight duration-500 group-hover:text-secondary">
					{count}
				</span>
				<span className="relative">{tagName}</span>
			</span>
		</Button>
	);
};
