import { PrimaryButton } from "../atoms/PrimaryButton";

export const GroupButton = () => {
	return (
		<div className="mt-7 flex flex-row space-x-[7px] tablet:space-x-5">
			<PrimaryButton href="/" aria-label="sprawdź">
				sprawdź
			</PrimaryButton>
		</div>
	);
};
