"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DefaultInput } from "@/components/atoms/DefaultInput";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { TextArea } from "@/components/atoms/TextArea";
import { ErrorText } from "@/components/atoms/ErrorText";
import { type HTMLElements } from "@/interfaces/base";

export type FormData = {
	name: string;
	surname: string;
	email: string;
	phoneNumber?: string;
	message: string;
};

type ContactFormProps = {
	className?: HTMLElements<HTMLFormElement>["className"];
};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validateMessage = {
	required: "Ta wartość jest wymagana",
	email: "Wprowadzony adres e-mail jest nieprawidłowy",
	phoneNumber: "Wprowadzony numer telefonu jest nieprawidłowy",
};

const schema = yup
	.object({
		name: yup.string().required(validateMessage.required),
		surname: yup.string().required(validateMessage.required),
		email: yup
			.string()
			.email(validateMessage.email)
			.required(validateMessage.required),
		phoneNumber: yup.string().matches(phoneRegExp, {
			message: validateMessage.phoneNumber,
			excludeEmptyString: true,
		}),
		message: yup.string().required(validateMessage.required),
	})
	.required();

export const ContactForm = ({ className }: ContactFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		console.log({ data });
	};
	console.log({ errors });

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("flex flex-col space-y-6", className)}
		>
			<div className="flex flex-col space-y-10 laptop:flex-row laptop:space-x-10 laptop:space-y-0">
				<div className="flex w-full flex-col space-y-2">
					<Label htmlFor="name" className={errors.name ? "text-error" : ""}>
						Imię
					</Label>
					<DefaultInput
						id="name"
						type="text"
						{...register("name")}
						aria-invalid={errors.name ? "true" : "false"}
						className={
							errors.name ? "border-error focus-visible:outline-error" : ""
						}
					/>
					{errors.name && <ErrorText>{errors.name.message}</ErrorText>}
				</div>
				<div className="flex w-full flex-col space-y-2">
					<Label
						htmlFor="surname"
						className={errors.surname ? "text-error" : ""}
					>
						Nazwisko
					</Label>
					<DefaultInput
						id="surname"
						type="text"
						{...register("surname")}
						aria-invalid={errors.surname ? "true" : "false"}
						className={
							errors.surname ? "border-error focus-visible:outline-error" : ""
						}
					/>
					{errors.surname && <ErrorText>{errors.surname.message}</ErrorText>}
				</div>
			</div>
			<div className="flex flex-col space-y-10 laptop:flex-row laptop:space-x-10 laptop:space-y-0">
				<div className="flex w-full flex-col space-y-2">
					<Label htmlFor="email" className={errors.email ? "text-error" : ""}>
						Email
					</Label>
					<DefaultInput
						id="email"
						type="text"
						{...register("email")}
						aria-invalid={errors.email ? "true" : "false"}
						className={
							errors.email ? "border-error focus-visible:outline-error" : ""
						}
					/>
					{errors.email && <ErrorText>{errors.email.message}</ErrorText>}
				</div>
				<div className="flex w-full flex-col space-y-2">
					<div className="flex justify-between">
						<Label
							htmlFor="phoneNumber"
							className={
								errors.phoneNumber
									? "text-error focus-visible:outline-error"
									: ""
							}
						>
							Numer telefonu
						</Label>
						<span className="text-xs text-primaryDark">opcjonalne</span>
					</div>
					<DefaultInput
						id="phoneNumber"
						type="tel"
						{...register("phoneNumber")}
						aria-invalid={errors.phoneNumber ? "true" : "false"}
						className={
							errors.phoneNumber
								? "border-error focus-visible:outline-error"
								: ""
						}
					/>
					{errors.phoneNumber && (
						<ErrorText>{errors.phoneNumber.message}</ErrorText>
					)}
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<Label htmlFor="message" className={errors.message ? "text-error" : ""}>
					Jak moemy Ci pomóc?
				</Label>
				<TextArea
					id="message"
					rows={5}
					{...register("message")}
					aria-invalid={errors.message ? "true" : "false"}
					className={
						errors.message ? "border-error focus-visible:outline-error" : ""
					}
				/>
				{errors.message && <ErrorText>{errors.message.message}</ErrorText>}
			</div>
			<SubmitButton className="w-full bg-secondary text-slate50 tablet:max-w-xs">
				Wyślij
			</SubmitButton>
		</form>
	);
};
