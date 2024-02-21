import { ActionLink } from "@/components/atoms/ActionLink";
import { DefaultText } from "@/components/atoms/DefaultText";
import { type ContactInformationProps } from "@/interfaces/base";
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
				<div className="flex flex-col laptop:text-lg">
					<ActionLink
						actionHref={`tel:${phone}`}
						actionText={phone}
						aria-label={phone}
					/>
					<ActionLink
						actionHref={`mailto:${email}`}
						actionText={email}
						aria-label={email}
					/>
				</div>
				<DefaultText
					className={cn("text-sm font-light text-slate50", textClassName)}
				>
					{workingHours}
				</DefaultText>
			</div>
		</div>
	);
};
