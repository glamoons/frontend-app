"use client";

import { IconTrash } from "@tabler/icons-react";
import { removeItem } from "./actions";
import { Button } from "@/components/ui/button";

export const RemoveProductFromCart = ({ itemId }: { itemId: number }) => {
	return (
		<form>
			<Button
				type="submit"
				size="icon"
				className="bg-transparent transition-colors duration-500 hover:text-error"
				formAction={async () => {
					await removeItem(itemId);
				}}
			>
				<IconTrash className="h-6 w-6" />
			</Button>
		</form>
	);
};
