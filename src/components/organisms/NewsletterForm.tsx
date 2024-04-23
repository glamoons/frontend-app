"use client";

import { useRef } from "react";
import { CreateContactNewsletterButton } from "./CreateContactNewsletterButton";
import { createContactNewsletterAction } from "@/app/actions";
import { DefaultInput } from "@/components/atoms/DefaultInput";
import { FooterHeading } from "@/components/atoms/FooterHeading";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export type NewsletterFormProps = {
	title?: string;
	inputClassName?: BaseProps["className"];
	butttonClassName?: BaseProps["className"];
	newsletterContainerClassName?: BaseProps["className"];
	newsletterWrapperClassName?: BaseProps["className"];
};
export const NewsletterForm = ({
	title,
	inputClassName,
	newsletterContainerClassName,
	newsletterWrapperClassName,
}: NewsletterFormProps) => {
	const ref = useRef<HTMLFormElement>(null);
	return (
		<div className={cn("flex flex-col space-y-6", newsletterWrapperClassName)}>
			{title && <FooterHeading>{title}</FooterHeading>}
			<form
				ref={ref}
				action={async (formData) => {
					await createContactNewsletterAction(formData);
					ref.current?.reset();
				}}
				className={cn("space-y-4", newsletterContainerClassName)}
			>
				<DefaultInput
					type="email"
					name="email"
					placeholder="Twój adres email"
					className={cn(inputClassName)}
				/>
				<CreateContactNewsletterButton />
			</form>
		</div>
	);
};
