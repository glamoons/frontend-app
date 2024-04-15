import { cookies } from "next/headers";
import { executeQuery } from "./api/api-config";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartGetItemsByCartIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { Order: cart } = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}

	const { createOrder: newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", String(newCart.id), {
		httpOnly: true,
		sameSite: "lax",
	});

	return newCart;
};
export const getCartById = async (cartId: string) => {
	return executeQuery({
		query: CartGetByIdDocument,
		variables: {
			id: Number(cartId),
		},
		next: {
			tags: ["cart"],
		},
	});
};
export const createCart = async () => {
	return executeQuery({
		query: CartCreateDocument,
		variables: {
			status: "created",
		},
		next: {
			tags: ["cart"],
		},
	});
};
export const addProductToCart = async (
	cartId: number,
	productId: number,
	productVariantId: string,
) => {
	const { Product: product } = await executeQuery({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeQuery({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			productVariantId,
			totalAmount: product.price,
		},
		next: {
			tags: ["cart"],
		},
	});
};

export const getProductItemsFromCart = async (
	cartId: number,
	productId?: number,
) => {
	return executeQuery({
		query: CartGetItemsByCartIdDocument,
		variables: {
			cartId,
			productId,
		},
		next: {
			tags: ["cart"],
		},
	});
};
