import { GroupButton } from "./GroupButton";
import { HeroTitle } from "@/components/atoms/HeroTitle";

export const HeroBox = () => {
	return (
		<div className="container relative mx-auto mb-[3.75rem] flex flex-col py-10 tabletLg:mb-0 laptop:py-[3.125rem] desktop:py-[6.25rem]">
			<div className="max-w-[22.5rem] laptop:max-w-[35.625rem]">
				<HeroTitle className="text-slate50">
					Unikatowe bazy MDF z oświetleniem LED
				</HeroTitle>
				<GroupButton />
			</div>
		</div>
	);
};
