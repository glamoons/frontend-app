import { BaseProps } from "@/interfaces/base";
import { FooterHeading } from "../atoms/FooterHeading";
import { cn } from "@/lib/utils";

type UnorderedListProps = {
	title: string;
};

export const UnorderedList = ({
	children,
	title,
	className,
}: UnorderedListProps & BaseProps) => {
	return (
		<div className={cn("flex flex-col space-y-3", className)}>
			<FooterHeading>{title}</FooterHeading>
			<ul>{children}</ul>
		</div>
	);
};
