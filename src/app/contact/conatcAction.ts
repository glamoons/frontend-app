"use server";

import { type ContactFormData } from "./contactSchema";

export const contactAction = async (data: ContactFormData) => {
	console.log({ data });
};
