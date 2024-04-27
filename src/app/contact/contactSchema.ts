import * as z from "zod";

const emptyStringToUndefined = z.literal("").transform(() => undefined);

export const asOptionalField = <T extends z.ZodTypeAny>(schema: T) => {
	return schema.optional().or(emptyStringToUndefined);
};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = z.object({
	name: z
		.string({
			required_error: "Imie jest wymagane",
		})
		.min(3, "Imie musi mieć co najmniej 3 znaki"),
	surname: z
		.string({
			required_error: "Nazwisko jest wymagane",
		})
		.min(3, "Nazwisko musi mieć co najmniej 3 znaki"),
	email: z
		.string({
			required_error: "Adres e-mail jest wymagany",
		})
		.email("Adres e-mail jest nieprawidłowy"),
	phoneNumber: asOptionalField(
		z.string().regex(phoneRegExp, "Numer telefonu jest nieprawidłowy"),
	),

	message: z
		.string({
			required_error: "Wiadomość jest wymagana",
		})
		.min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
