import { cookies } from "next/headers";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { getProductItemsFromCart } from "@/services/cartApi";

export const NavBar = async () => {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId ? await getProductItemsFromCart(Number(cartId)) : null;
	const count = cart?.OrderItems?.docs?.length || 0;
	return (
		<Header quantity={count}>
			<Navigation className="hidden laptop:flex" />
		</Header>
	);
};
