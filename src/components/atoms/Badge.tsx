import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type BadgeProps = {
	quantity: number;
	className?: BaseProps["className"];
};

export const Badge = ({ quantity, className }: BadgeProps) => {
	return (
		<div
			className={cn(
				"h-4 w-4 cursor-pointer rounded-full bg-slate100",
				quantity === 0 && "hidden",
				className,
			)}
		>
			<span className="flex items-center justify-center text-center text-[0.625rem] font-bold text-secondary">
				{quantity}
			</span>
		</div>
	);
};
