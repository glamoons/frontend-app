import { IconShoppingBagX } from "@tabler/icons-react";
import { DefaultButton } from "@/components/atoms/DefaultButton";
import { Heading } from "@/components/atoms/Heading";

export const EmptyCart = () => {
	return (
		<div className="flex flex-col space-y-5 text-center">
			<IconShoppingBagX
				size={100}
				stroke={1}
				className="mx-auto text-primary"
			/>
			<div className="text-center">
				<Heading>Twój koszyk jest pusty</Heading>
				<p className="mt-2">
					Dodaj do koszyka przedmioty i kup je szybko i wygodnie.
				</p>
			</div>
			<DefaultButton href={"/"} className="w-full self-center tablet:max-w-fit">
				nasze produkty
			</DefaultButton>
		</div>
	);
};
