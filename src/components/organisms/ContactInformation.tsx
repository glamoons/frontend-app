import { IconMapPin, IconPhoneCall } from "@tabler/icons-react";
import { AddressBox } from "@/components/molecules/AddressBox";
import { ContactBox } from "@/components/molecules/ContactBox";
import {
	type BaseProps,
	type ContactInformationProps,
} from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ContactInformationStyleProps = {
	className?: BaseProps["className"];
	color?: BaseProps["color"];
};

export const ContactInformation = ({
	address,
	phone,
	email,
	workingHours,
	className,
	color,
}: ContactInformationProps & ContactInformationStyleProps) => {
	return (
		<div className={cn("flex flex-row space-x-3 text-primary", className)}>
			<AddressBox
				icon={<IconMapPin size={50} />}
				address={address}
				color={color}
			/>
			<ContactBox
				icon={<IconPhoneCall size={50} />}
				phone={phone}
				email={email}
				workingHours={workingHours}
				textClassName={color}
			/>
		</div>
	);
};
