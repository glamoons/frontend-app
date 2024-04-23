"use server";

import { NEWSLETTER_ID } from "@/config/config";
import { ContactCreateInNewsletterDocument } from "@/gql/graphql";
import { executeNewsletterApi, executeQuery } from "@/services/api/api-config";

export const createContactNewsletterAction = async (_formData: FormData) => {
	const newsletterId = NEWSLETTER_ID;
	const email = _formData.get("email") as string;

	if (!newsletterId || !email) {
		throw new Error("Newsletter ID or email is not defined");
	}

	await executeNewsletterApi({
		resource: "contacts",
		method: "POST",
		body: JSON.stringify({
			email,
			listIds: [Number(newsletterId)],
		}),
	});

	await executeQuery({
		query: ContactCreateInNewsletterDocument,
		variables: {
			data: {
				email,
				listIds: [
					{
						listId: newsletterId,
						title: "Newsletter 10% fee",
					},
				],
			},
		},
	});
};
