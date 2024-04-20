import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { getCart } from "@/services/cartApi";

export const NavBar = async () => {
	const cart = await getCart();
	const count = cart.items.length || 0;
	const cartItems = cart.items;
	return (
		<Header quantity={count} cartItems={cartItems}>
			<Navigation className="hidden laptop:flex" />
		</Header>
	);
};
