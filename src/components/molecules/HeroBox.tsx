import { HeroTitle } from "@/components/atoms/HeroTitle";
import { GroupButton } from "./GroupButton";

export const HeroBox = () => {
	return (
		<div className="container relative mx-auto flex flex-col py-10 laptop:py-[3.125rem] desktop:py-[6.25rem]">
			<div className="max-w-[360px] laptop:max-w-[460px]">
				<HeroTitle className="text-slate50">
					It's high time you told your story
				</HeroTitle>
				<GroupButton />
			</div>
		</div>
	);
};
