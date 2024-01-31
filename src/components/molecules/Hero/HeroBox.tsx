import { HeroTitle } from "@/components/atoms/HeroTitle";
import { GroupButton } from "../GroupButton";

export const HeroBox = () => {
	return (
		<div className="container relative mx-auto flex flex-col py-10">
			<HeroTitle className="text-slate-50">It's high time you told your story</HeroTitle>
			<GroupButton />
		</div>
	);
};
