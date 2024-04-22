/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { cartUpdate } from "@/services/cartApi";
import { createCustomer } from "@/services/customerApi";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET) {
		return new Response("No webhook secret", { status: 500 });
	}
	if (!process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			console.dir(event, { depth: 999 });

			const cartId = event.data.object.metadata?.cartId;
			const companyName = event.data.object.custom_fields
				.map((el) => el.text?.value)
				.join();
			const vatId = event.data.object.custom_fields
				.map((el) => el.numeric?.value)
				.join();
			await cartUpdate({
				cartId: Number(cartId),
				status: "paid",
				stripeCheckoutId: event.data.object.id,
				email: String(event.data.object.customer_details?.email),
				totalAmount: Number(event.data.object?.amount_total) / 100,
				address: {
					deliveryAddress: {
						deliveryCity: event.data.object.shipping_details?.address?.city,
						deliveryCountry:
							event.data.object.shipping_details?.address?.country,
						deliveryPostalCode:
							event.data.object.shipping_details?.address?.postal_code,
						deliveryStreet: event.data.object.shipping_details?.address?.line1,
					},
				},
				billingDetails: {
					deliveryData: {
						city: event.data.object.customer_details?.address?.city,
						country: event.data.object.customer_details?.address?.country,
						postalCode:
							event.data.object.customer_details?.address?.postal_code,
						street: event.data.object.customer_details?.address?.line1,
						companyName,
						vatId: Number(vatId),
					},
				},
			});
			await createCustomer({
				customerName: event.data.object.customer_details?.name || "",
				registrationDate: new Date().toISOString(),
				email: event.data.object.customer_details?.email || "",
				address: {
					deliveryAddress: {
						deliveryCity: event.data.object.shipping_details?.address?.city,
						deliveryCountry:
							event.data.object.shipping_details?.address?.country,
						deliveryPostalCode:
							event.data.object.shipping_details?.address?.postal_code,
						deliveryStreet: event.data.object.shipping_details?.address?.line1,
					},
				},
				billingDetails: {
					deliveryData: {
						city: event.data.object.customer_details?.address?.city,
						country: event.data.object.customer_details?.address?.country,
						postalCode:
							event.data.object.customer_details?.address?.postal_code,
						street: event.data.object.customer_details?.address?.line1,
						companyName,
						vatId: Number(vatId),
					},
				},
				currency: event.data.object.currency?.toUpperCase(),
				phone: event.data.object.customer_details?.phone || "",
				totalExpenses: 0,
				averageOrderValue: 0,
				orders: [Number(cartId)],
			});
		}
		case "checkout.session.async_payment_succeeded": {
			console.log("payment succeeded");
		}
		case "checkout.session.expired": {
			console.log("payment expired");
		}
		case "checkout.session.async_payment_failed": {
			console.log("payment failed");
		}
	}

	return new Response(null, { status: 204 });
}
