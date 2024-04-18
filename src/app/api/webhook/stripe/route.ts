/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { cartUpdate } from "@/services/cartApi";

export async function POST(request: NextRequest): Promise<Response> {
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!webhookSecret) {
		return new Response("No webhook secret", { status: 500 });
	}
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
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
		webhookSecret,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			console.log(event);

			const cartId = event.data.object.metadata?.cartId;
			await cartUpdate(
				Number(cartId),
				"paid",
				event.data.object.id,
				Number(event.data.object.metadata?.totalAmount),
			);
		}
		case "checkout.session.async_payment_succeeded": {
		}
		case "checkout.session.expired": {
		}
		case "checkout.session.async_payment_failed": {
		}
	}

	return new Response(null, { status: 204 });
}
