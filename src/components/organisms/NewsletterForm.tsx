import { SubmitButton } from "@/components/atoms/SubmitButton";
import { DefaultInput } from "@/components/atoms/DefaultInput";
import { FooterHeading } from "@/components/atoms/FooterHeading";
import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
	title?: string;
	inputClassName?: BaseProps["className"];
	butttonClassName?: BaseProps["className"];
};
export const NewsletterForm = ({
	title,
	inputClassName,
	butttonClassName,
}: NewsletterFormProps) => {
	return (
		<div className="flex flex-col space-y-6">
			{title && <FooterHeading>{title}</FooterHeading>}
			<div className="space-y-4">
				<DefaultInput type="email" placeholder="Twój adres email" className={cn(inputClassName)} />
				<SubmitButton
					className={cn("w-full border-secondary bg-secondary text-slate-50", butttonClassName)}
				>
					subskrybuj
				</SubmitButton>
			</div>
		</div>
	);
};
