"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { type NewsletterFormProps } from "./NewsletterForm";
import { useToast } from "@/components/ui/use-toast";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { cn } from "@/lib/utils";

export const CreateContactNewsletterButton = ({
	butttonClassName,
}: {
	butttonClassName?: NewsletterFormProps["butttonClassName"];
}) => {
	const [addToNewsletter, setAddToNewsletter] = useState(false);
	const status = useFormStatus();
	const { toast } = useToast();

	useEffect(() => {
		if (addToNewsletter && status.pending === false) {
			setAddToNewsletter(false);
			toast({
				title: "Kontakt został dodany do newslettera. Sprawdź swoją skrzynkę!",
				className: "bg-secondary border-border border-secondary text-slate50",
			});
		}
	}, [addToNewsletter, status.pending, toast]);

	return (
		<SubmitButton
			type="submit"
			className={cn(
				"w-full border-secondary bg-secondary text-slate50 disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary disabled:text-secondary laptop:w-auto",
				butttonClassName,
			)}
			aria-label="Subskrybuj newsletter"
			disabled={status.pending}
			onClick={() => setAddToNewsletter(true)}
		>
			subskrybuj
		</SubmitButton>
	);
};
