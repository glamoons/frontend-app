import { PrimaryButton } from "../atoms/PrimaryButton";
import { SecondaryButton } from "../atoms/SecondaryButton";

export const GroupButton = () => {
	return (
		<div className="mt-7 flex flex-row space-x-[7px]">
			<PrimaryButton href="/">sprawdź</PrimaryButton>
			<SecondaryButton href="/">skonfiguruj</SecondaryButton>
		</div>
	);
};
