import { IconPlayerPlay } from "@tabler/icons-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PlayButton = ({ ...props }: ButtonProps) => {
	const { className } = props;
	return (
		<Button
			{...props}
			className={cn(
				"h-28 w-28 rounded-full border-4 border-slate50 bg-[#EDEDE9]/30 text-slate50 transition-all duration-500 hover:scale-110 hover:bg-[#EDEDE9]/50 laptop:h-36 laptop:w-36",
				className,
			)}
		>
			<IconPlayerPlay size={50} />
		</Button>
	);
};
