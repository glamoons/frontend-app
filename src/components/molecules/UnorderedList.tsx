import { FooterHeading } from "../atoms/FooterHeading";

type UnorderedListProps = {
	children: React.ReactNode;
	title: string;
};

export const UnorderedList = ({ children, title }: UnorderedListProps) => {
	return (
		<div className="flex flex-col space-y-3">
			<FooterHeading>{title}</FooterHeading>
			<ul>{children}</ul>
		</div>
	);
};
