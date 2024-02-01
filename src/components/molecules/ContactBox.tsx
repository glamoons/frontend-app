import { DefaultText } from "@/components/atoms/DefaultText";
import { ContactInformationProps } from "@/interfaces/base";

type ContactBoxProps = {
	icon: JSX.Element;
	phone: ContactInformationProps["phone"];
	email: ContactInformationProps["email"];
	workingHouers: ContactInformationProps["workingHours"];
};

export const ContactBox = ({ icon, phone, email, workingHouers }: ContactBoxProps) => {
	return (
		<div className="flex w-1/2 flex-col space-y-5">
			{icon}
			<div className="flex max-w-36 flex-col space-y-3">
				<div className="flex flex-col">
					<a href={`tel:${phone}`} className="block text-slate-50">
						{phone}
					</a>
					<a href={`mailto:${email}`} className="block text-slate-50">
						{email}
					</a>
				</div>
				<DefaultText className="text-sm text-slate-50">{workingHouers}</DefaultText>
			</div>
		</div>
	);
};
