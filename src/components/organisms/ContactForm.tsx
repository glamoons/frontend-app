"use client";

import { send } from "@emailjs/browser";
import { useRef } from "react";
import { contactSchema } from "@/app/contact/contactSchema";
import { useTypeSafeFormState } from "@/app/contact/typesafeForm";
import { DefaultInput } from "@/components/atoms/DefaultInput";
import { ErrorText } from "@/components/atoms/ErrorText";
import { Label } from "@/components/atoms/Label";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { TextArea } from "@/components/atoms/TextArea";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ContactFormProps = {
	className?: HTMLElements<HTMLFormElement>["className"];
};

export const ContactForm = ({ className }: ContactFormProps) => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [state, action] = useTypeSafeFormState(contactSchema, async (data) => {
		await send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
			data,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
		);
		formRef.current?.reset();
	});
	return (
		<form ref={formRef} action={action} className="space-y-6">
			<fieldset className={cn("flex flex-col space-y-6", className)}>
				<div className="flex flex-col space-y-10 laptop:flex-row laptop:space-x-10 laptop:space-y-0">
					<p className="flex w-full flex-col space-y-2">
						<Label
							htmlFor="name"
							className={state?.errors.name ? "text-error" : ""}
						>
							Imię
						</Label>
						<DefaultInput
							id="name"
							type="text"
							name="name"
							aria-invalid={state?.errors.name ? "true" : "false"}
							className={
								state?.errors.name
									? "border-error focus-visible:outline-error"
									: ""
							}
						/>
						{state?.errors.name &&
							state.errors.name.map((error) => (
								<ErrorText key={error}>{error}</ErrorText>
							))}
					</p>
					<p className="flex w-full flex-col space-y-2">
						<Label
							htmlFor="surname"
							className={state?.errors.surname ? "text-error" : ""}
						>
							Nazwisko
						</Label>
						<DefaultInput
							id="surname"
							type="text"
							name="surname"
							aria-invalid={state?.errors.surname ? "true" : "false"}
							className={
								state?.errors.surname
									? "border-error focus-visible:outline-error"
									: ""
							}
						/>
						{state?.errors.surname &&
							state?.errors.surname.map((error) => (
								<ErrorText key={error}>{error}</ErrorText>
							))}
					</p>
				</div>
				<div className="flex flex-col space-y-10 laptop:flex-row laptop:space-x-10 laptop:space-y-0">
					<p className="flex w-full flex-col space-y-2">
						<Label
							htmlFor="email"
							className={state?.errors.email ? "text-error" : ""}
						>
							Email
						</Label>
						<DefaultInput
							id="email"
							type="text"
							name="email"
							aria-invalid={state?.errors.email ? "true" : "false"}
							className={
								state?.errors.email
									? "border-error focus-visible:outline-error"
									: ""
							}
						/>
						{state?.errors.email &&
							state?.errors.email.map((error) => (
								<ErrorText key={error}>{error}</ErrorText>
							))}
					</p>
					<div className="flex w-full flex-col space-y-2">
						<p className="flex justify-between">
							<Label
								htmlFor="phoneNumber"
								className={
									state?.errors.phoneNumber
										? "text-error focus-visible:outline-error"
										: ""
								}
							>
								Numer telefonu
							</Label>
							<span
								className="text-xs text-primaryDark"
								aria-label="opcjonalne"
							>
								opcjonalne
							</span>
						</p>
						<DefaultInput
							id="phoneNumber"
							type="tel"
							name="phoneNumber"
							aria-invalid={state?.errors.phoneNumber ? "true" : "false"}
							className={
								state?.errors.phoneNumber
									? "border-error focus-visible:outline-error"
									: ""
							}
						/>
						{state?.errors.phoneNumber &&
							state?.errors.phoneNumber.map((error) => (
								<ErrorText key={error}>{error}</ErrorText>
							))}
					</div>
				</div>
				<p className="flex flex-col space-y-2">
					<Label
						htmlFor="message"
						className={state?.errors.message ? "text-error" : ""}
					>
						Jak możemy Ci pomóc?
					</Label>
					<TextArea
						id="message"
						rows={5}
						name="message"
						aria-invalid={state?.errors.message ? "true" : "false"}
						className={
							state?.errors.message
								? "border-error focus-visible:outline-error"
								: ""
						}
					/>
					{state?.errors.message &&
						state?.errors.message.map((error) => (
							<ErrorText key={error}>{error}</ErrorText>
						))}
				</p>
			</fieldset>
			<SubmitButton
				type="submit"
				className="w-full bg-secondary text-slate50 tablet:w-auto"
			>
				Wyślij
			</SubmitButton>
		</form>
	);
};
