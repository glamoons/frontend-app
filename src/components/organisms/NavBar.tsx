import { cookies } from "next/headers";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { getProductItemsFromCart } from "@/services/cartApi";

export const NavBar = async () => {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId
		? await getProductItemsFromCart({ cartId: Number(cartId) })
		: null;
	if (!cart) return null;
	const { OrderItems: cartItems } = cart;
	const count = cartItems?.docs?.length || 0;
	return (
		<Header quantity={count} cartItems={cartItems}>
			<Navigation className="hidden laptop:flex" />
		</Header>
	);
};
