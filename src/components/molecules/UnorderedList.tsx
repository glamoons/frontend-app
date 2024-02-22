import { FooterHeading } from "@/components/atoms/FooterHeading";
import { type BaseProps } from "@/interfaces/base";
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
