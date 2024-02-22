import { type ReactNode } from "react";
import { DefaultText } from "./DefaultText";
import { Heading } from "./Heading";

type BoxWithIconProps = {
	icon: ReactNode;
	title: string;
	subTitle: string;
	desctiption: string;
};

export const BoxWithIcon = ({
	icon,
	title,
	subTitle,
	desctiption,
}: BoxWithIconProps) => {
	return (
		<div className="flex flex-col space-y-3 tablet:w-1/2 tablet:pb-6 tablet:odd:pr-6 tablet:even:pl-6 laptop:w-1/3 laptop:px-10 laptop:odd:pl-0 laptop:odd:pr-10 laptop:even:pl-0">
			<div className="flex flex-col space-y-3">
				{icon}
				<Heading>{title}</Heading>
			</div>
			<div className="flex flex-col space-y-1">
				<p className="text-lg font-bold text-secondary">{subTitle}</p>
				<DefaultText className="text-sm text-primaryDark">
					{desctiption}
				</DefaultText>
			</div>
		</div>
	);
};
