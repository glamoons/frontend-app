import { DefaultText } from "@/components/atoms/DefaultText";
import {
	type BaseProps,
	type ContactInformationProps,
} from "@/interfaces/base";
import { cn } from "@/lib/utils";

type AddressBoxProps = {
	icon: JSX.Element;
	address: ContactInformationProps["address"];
	color?: BaseProps["color"];
};

export const AddressBox = ({ icon, address, color }: AddressBoxProps) => {
	return (
		<div className="flex w-1/2 flex-col space-y-5">
			{icon}
			<DefaultText
				className={cn(
					"max-w-36 text-slate50 laptop:max-w-40 laptop:text-lg",
					color,
				)}
			>
				{address}
			</DefaultText>
		</div>
	);
};
