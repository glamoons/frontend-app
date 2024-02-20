"use client";

import { DefaultInput } from "@/components/atoms/DefaultInput";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { TextArea } from "@/components/atoms/TextArea";

export type FormData = {
	name: string;
	surname: string;
	email: string;
	phoneNumber: string;
	message: string;
};

type ContactFormProps = {
	className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
	};
	console.log(errors);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("space-y-6", className)}
		>
			<div className="flex flex-col space-y-10">
				<div className="flex flex-col space-y-2">
					<Label htmlFor="name">Imię</Label>
					<DefaultInput type="text" {...register("name", { required: true })} />
				</div>
				<div className="flex flex-col space-y-2">
					<Label htmlFor="surname">Nazwisko</Label>
					<DefaultInput
						type="text"
						{...register("surname", { required: true })}
					/>
				</div>
			</div>
			<div className="flex flex-col space-y-10">
				<div className="flex flex-col space-y-2">
					<Label htmlFor="email">Email</Label>
					<DefaultInput
						type="text"
						{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<Label htmlFor="email">Numer telefonu</Label>
					<DefaultInput
						type="tel"
						{...register("phoneNumber", {
							required: true,
							minLength: 6,
							maxLength: 12,
						})}
					/>
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<Label htmlFor="message">Jak moemy Ci pomóc?</Label>
				<TextArea rows={5} {...register("message", { required: true })} />
			</div>
			<SubmitButton className="w-full bg-secondary text-slate50">
				Wyślij
			</SubmitButton>
		</form>
	);
};

export default ContactForm;
