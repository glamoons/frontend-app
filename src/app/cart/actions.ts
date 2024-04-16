"use server";

import { revalidatePath } from "next/cache";
import { removeCartitem, updateCartItem } from "@/services/cartApi";

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
