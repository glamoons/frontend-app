import { GroupButton } from "./GroupButton";
import { HeroTitle } from "@/components/atoms/HeroTitle";

export const HeroBox = () => {
	return (
		<div className="container relative mx-auto mb-[3.75rem] flex flex-col py-10 tabletLg:mb-0 laptop:py-[3.125rem] desktop:py-[6.25rem]">
			<div className="max-w-[360px] laptop:max-w-[460px]">
				<HeroTitle className="text-slate50">
					Its high time you told your story
				</HeroTitle>
				<GroupButton />
			</div>
		</div>
	);
};
