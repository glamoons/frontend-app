import { SubmitButton } from "@/components/atoms/SubmitButton";
import { DefaultInput } from "@/components/atoms/DefaultInput";
import { FooterHeading } from "@/components/atoms/FooterHeading";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
	title?: string;
	inputClassName?: BaseProps["className"];
	butttonClassName?: BaseProps["className"];
	newsletterContainerClassName?: BaseProps["className"];
	newsletterWrapperClassName?: BaseProps["className"];
};
export const NewsletterForm = ({
	title,
	inputClassName,
	butttonClassName,
	newsletterContainerClassName,
	newsletterWrapperClassName,
}: NewsletterFormProps) => {
	return (
		<div className={cn("flex flex-col space-y-6", newsletterWrapperClassName)}>
			{title && <FooterHeading>{title}</FooterHeading>}
			<div className={cn("space-y-4", newsletterContainerClassName)}>
				<DefaultInput
					type="email"
					placeholder="Twój adres email"
					className={cn(inputClassName)}
				/>
				<SubmitButton
					type="submit"
					className={cn(
						"w-full border-secondary bg-secondary text-slate50 laptop:w-auto",
						butttonClassName,
					)}
					aria-label="Subskrybuj newsletter"
				>
					subskrybuj
				</SubmitButton>
			</div>
		</div>
	);
};
