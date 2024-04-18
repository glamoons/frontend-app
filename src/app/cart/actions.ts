"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCart, removeCartitem, updateCartItem } from "@/services/cartApi";
import { deliveryFee } from "@/config/config";

export const changeItemQuantity = async (
	cartId: string,
	itemId: number,
	quantity: number,
	totalAmount: number,
) => {
	await updateCartItem({
		cartId: Number(cartId),
		cartItemId: itemId,
		quantity,
		totalAmount,
	}).finally(() => {
		revalidatePath("/cart");
	});
};

export const removeItem = async (itemId: number) => {
	await removeCartitem({ itemId }).finally(() => {
		revalidatePath("/cart");
	});
};

export const handleStripePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const cart = await getCart();

	if (!cart) {
		return;
	}

	const cartId = cart.id;
	const cartItems = cart.items;

	if (!cartItems || !cartId) {
		return;
	}

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "p24", "blik"],
		metadata: {
			cartId,
			totalAmount: cart.items
				.map((item) => item.totalAmount)
				.reduce((a, b) => a + b, 0),
		},
		line_items: cartItems.map((item) => ({
			price_data: {
				currency: "pln",
				unit_amount: item.product.price * 100,
				product_data: {
					name: item.product.name,
					images: [
						`${process.env.NEXT_PUBLIC_BASE_URL}${item.product.image?.url}`,
					],
				},
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		billing_address_collection: "required",
		currency: "pln",
		customer_creation: "if_required",
		shipping_address_collection: {
			allowed_countries: ["PL"],
		},
		shipping_options: [
			{
				shipping_rate_data: {
					type: "fixed_amount",
					fixed_amount: {
						amount: deliveryFee * 100,
						currency: "pln",
					},
					display_name: "Dostawa",
					// Delivers between 5-7 business days
					delivery_estimate: {
						minimum: {
							unit: "business_day",
							value: 5,
						},
						maximum: {
							unit: "business_day",
							value: 7,
						},
					},
				},
			},
		],
		invoice_creation: {
			enabled: true,
		},
		success_url: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
