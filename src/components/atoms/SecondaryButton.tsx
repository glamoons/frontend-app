import { LinkProps } from "next/link";
import { DefaultButton } from "./DefaultButton";

export const SecondaryButton = ({
	children,
	...props
}: LinkProps & { children: React.ReactNode }) => {
	return (
		<DefaultButton {...props} className="max-w-44 border-secondary bg-secondary text-slate-50">
			{children}
		</DefaultButton>
	);
};
