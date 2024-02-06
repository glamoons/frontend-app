import { DefaultText } from "@/components/atoms/DefaultText";
import { ContactInformationProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ContactBoxProps = {
	phone: ContactInformationProps["phone"];
	email: ContactInformationProps["email"];
	workingHours: ContactInformationProps["workingHours"];
	icon?: JSX.Element;
	textClassName?: string;
	wrapperClassName?: string;
};

export const ContactBox = ({
	icon,
	phone,
	email,
	workingHours,
	textClassName,
	wrapperClassName,
}: ContactBoxProps) => {
	return (
		<div className={cn("flex w-1/2 flex-col space-y-5", wrapperClassName)}>
			{icon ? icon : null}
			<div
				className={cn(
					"flex max-w-36 flex-col space-y-3 text-slate50",
					textClassName,
				)}
			>
				<div className="laptop:text-lg flex flex-col">
					<a href={`tel:${phone}`} className="block">
						{phone}
					</a>
					<a href={`mailto:${email}`} className="block">
						{email}
					</a>
				</div>
				<DefaultText className={cn("text-sm text-slate50", textClassName)}>
					{workingHours}
				</DefaultText>
			</div>
		</div>
	);
};
