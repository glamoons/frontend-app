import { DefaultText } from "@/components/atoms/DefaultText";
import {
	type ContactInformationProps,
	type HTMLElements,
} from "@/interfaces/base";
import { cn } from "@/lib/utils";

type AddressBoxProps = {
	icon: JSX.Element;
	address: ContactInformationProps["address"];
	textClassName?: HTMLElements<HTMLDivElement>["className"];
	className?: HTMLElements<HTMLDivElement>["className"];
};

export const AddressBox = ({
	icon,
	address,
	textClassName,
	className,
}: AddressBoxProps) => {
	return (
		<div className={cn("flex w-1/2 flex-col space-y-5", className)}>
			{icon}
			<DefaultText
				className={cn(
					"max-w-36 text-slate50 laptop:max-w-40 laptop:text-lg",
					textClassName,
				)}
			>
				{address}
			</DefaultText>
		</div>
	);
};
