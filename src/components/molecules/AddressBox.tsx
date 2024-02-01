import { DefaultText } from "@/components/atoms/DefaultText";
import { ContactInformationProps } from "@/interfaces/base";

type AddressBoxProps = {
	icon: JSX.Element;
	address: ContactInformationProps["address"];
};

export const AddressBox = ({ icon, address }: AddressBoxProps) => {
	return (
		<div className="flex w-1/2 flex-col space-y-5">
			{icon}
			<DefaultText className="max-w-36 text-slate-50">{address}</DefaultText>
		</div>
	);
};
