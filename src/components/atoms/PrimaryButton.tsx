import { LinkProps } from "next/link";
import { DefaultButton } from "./DefaultButton";

export const PrimaryButton = ({
	children,
	...props
}: LinkProps & { children: React.ReactNode }) => {
	return (
		<DefaultButton {...props} className="border-border bg-primary text-secondary">
			{children}
		</DefaultButton>
	);
};
