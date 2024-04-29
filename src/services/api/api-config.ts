import { type ContactFormData } from "@/app/contact/contactSchema";
import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeQuery = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> => {
	if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
		throw TypeError("NEXT_PUBLIC_GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		next,
		cache,
	});
	const grapqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (grapqlResponse.errors) {
		throw TypeError(`GraphQl Error`, {
			cause: grapqlResponse.errors,
		});
	}

	return grapqlResponse.data;
};

export const executeNewsletterApi = async ({
	resource,
	method,
	body,
}: {
	resource: string;
	method: string;
	body: BodyInit | null | undefined;
}) => {
	if (
		!process.env.NEXT_PUBLIC_BREVO_API_SECRET &&
		!process.env.NEXT_PUBLIC_BREVO_API_BASE_URL
	) {
		throw TypeError(
			"NEXT_PUBLIC_BREVO_API_SECRET or NEXT_PUBLIC_BREVO_API_BASE_URL is not defined",
		);
	}
	const url = `${process.env.NEXT_PUBLIC_BREVO_API_BASE_URL}/${resource}`;
	const response = await fetch(url, {
		method,
		body,
		headers: {
			"Content-Type": "application/json",
			"api-key": process.env.NEXT_PUBLIC_BREVO_API_SECRET || "",
		},
	});
	const data = (await response.json()) as {
		error: string | null;
		message: string | null;
		id: string;
	};

	if (data.error) {
		throw new Error(data.error);
	}

	return data;
};

export const executeEmailJsApi = async ({
	data,
}: {
	data: ContactFormData;
}) => {
	if (
		!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
		!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
		!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
	) {
		throw TypeError(
			"NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID or NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not defined",
		);
	}

	const formData = new FormData();
	formData.append("service_id", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
	formData.append("template_id", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
	formData.append("user_id", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

	for (const [key, value] of Object.entries(data)) {
		formData.append(key, value);
	}

	const url = "https://api.emailjs.com/api/v1.0/email/send-form";
	const response = await fetch(url, {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	console.log(await response.json());
};
