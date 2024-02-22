import { IconMapPin, IconPhoneCall } from "@tabler/icons-react";
import { AddressBox } from "@/components/molecules/AddressBox";
import { ContactBox } from "@/components/molecules/ContactBox";
import {
	type ContactInformationProps,
	type HTMLElements,
} from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ContactInformationStyleProps = {
	className?: HTMLElements<HTMLDivElement>["className"];
	textClassName?: HTMLElements<HTMLDivElement>["className"];
	addressBoxClassName?: HTMLElements<HTMLDivElement>["className"];
	contactBoxClassName?: HTMLElements<HTMLDivElement>["className"];
};

export const ContactInformation = ({
	address,
	phone,
	email,
	workingHours,
	className,
	textClassName,
	addressBoxClassName,
	contactBoxClassName,
}: ContactInformationProps & ContactInformationStyleProps) => {
	return (
		<div className={cn("flex flex-row space-x-3 text-primary", className)}>
			<AddressBox
				icon={<IconMapPin size={50} />}
				address={address}
				textClassName={cn(textClassName)}
				className={cn(addressBoxClassName)}
			/>
			<ContactBox
				icon={<IconPhoneCall size={50} />}
				phone={phone}
				email={email}
				workingHours={workingHours}
				textClassName={cn(textClassName)}
				wrapperClassName={cn(contactBoxClassName)}
			/>
		</div>
	);
};
