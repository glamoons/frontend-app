import { AddressBox } from "@/components/molecules/AddressBox";
import { ContactBox } from "@/components/molecules/ContactBox";
import { ContactInformationProps } from "@/interfaces/base";
import { IconMapPin, IconPhoneCall } from "@tabler/icons-react";

export const ContactInformation = ({
	address,
	phone,
	email,
	workingHours,
}: ContactInformationProps) => {
	return (
		<div className="flex flex-row space-x-3">
			<AddressBox
				icon={<IconMapPin size={50} className="text-primary" />}
				address={address}
			/>
			<ContactBox
				icon={<IconPhoneCall size={50} className="text-primary" />}
				phone={phone}
				email={email}
				workingHours={workingHours}
			/>
		</div>
	);
};
