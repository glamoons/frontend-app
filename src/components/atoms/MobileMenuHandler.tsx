import { IconMenuDeep } from "@tabler/icons-react";
import { type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuHandlerProps = {
	icon?: JSX.Element;
	menuName?: string;
	className?: string;
};
export const MobileMenuHandler = ({
	icon = <IconMenuDeep />,
	menuName = "menu",
	className,
	...props
}: MobileMenuHandlerProps & ButtonProps) => {
	return (
		<button
			className={cn(
				"flex h-12 flex-row items-center space-x-3 text-slate50",
				className,
			)}
			{...props}
		>
			{icon ? icon : <IconMenuDeep />}
			<small className="uppercase leading-5 text-inherit">{menuName}</small>
		</button>
	);
};
