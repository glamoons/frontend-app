import { PrimaryButton } from "../atoms/PrimaryButton";
import { SecondaryButton } from "../atoms/SecondaryButton";

export const GroupButton = () => {
	return (
		<div className="mt-7 flex flex-row space-x-[7px] tablet:space-x-5">
			<PrimaryButton href="/">sprawdź</PrimaryButton>
			<SecondaryButton href="/">skonfiguruj</SecondaryButton>
		</div>
	);
};
