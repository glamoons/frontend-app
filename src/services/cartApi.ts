import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeQuery } from "./api/api-config";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartGetItemsByCartIdDocument,
	CartRemoveItemDocument,
	type OrderItem,
	ProductGetByIdDocument,
	CartUpdateDocument,
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
		cache: "no-store",
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
		cache: "no-store",
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
		cache: "no-store",
	});
};

export const getProductItemsFromCart = async ({
	cartId,
	productId,
	productVariantId,
}: {
	cartId: number;
	productId?: number;
	productVariantId?: string;
}) => {
	return executeQuery({
		query: CartGetItemsByCartIdDocument,
		variables: {
			cartId,
			productId,
			productVariantId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
};

export const updateCartItem = async ({
	cartId,
	cartItemId,
	quantity,
	totalAmount,
}: {
	cartId: number;
	cartItemId: number;
	quantity: number;
	totalAmount: number;
}) => {
	return executeQuery({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId,
			itemId: cartItemId,
			quantity,
			totalAmount,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
};

export const removeCartitem = async ({ itemId }: { itemId: number }) => {
	return executeQuery({
		query: CartRemoveItemDocument,
		variables: {
			itemId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
};

export const getCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	const { OrderItems: cart } = await getProductItemsFromCart({
		cartId: Number(cartId),
	});

	if (!cart) {
		redirect("/");
	}

	return {
		id: cartId,
		items: (cart.docs as OrderItem[]) || [],
	};
};

export const cartUpdate = async (
	cartId: number,
	status: string,
	stripeCheckoutId: string,
	totalAmount: number,
) => {
	return executeQuery({
		query: CartUpdateDocument,
		variables: {
			cartId,
			status,
			stripeCheckoutId,
			totalAmount,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
};
