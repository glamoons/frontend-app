import { cookies } from "next/headers";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { getProductItemsFromCart } from "@/services/cartApi";

export const NavBar = async () => {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId
		? await getProductItemsFromCart({ cartId: Number(cartId) })
		: null;
	const count = cart?.OrderItems?.docs?.length || 0;
	const cartItems = cart?.OrderItems;
	return (
		<Header quantity={count} cartItems={cartItems}>
			<Navigation className="hidden laptop:flex" />
		</Header>
	);
};
