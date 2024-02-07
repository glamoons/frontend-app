import { DefaultText } from "./DefaultText";
import { Heading } from "./Heading";

type BoxWithIconProps = {
	icon: React.ReactNode;
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
		<div className="laptop:w-1/3 laptop:even:pl-0 laptop:odd:pl-0 laptop:odd:pr-10 tablet:even:pl-6 tablet:odd:pr-6 tablet:pb-6 tablet:w-1/2 laptop:px-10 flex flex-col space-y-3">
			<div className="flex flex-col space-y-3">
				{icon}
				<Heading>{title}</Heading>
			</div>
			<div className="flex flex-col space-y-1">
				<h4 className="text-lg font-bold text-secondary">{subTitle}</h4>
				<DefaultText className="text-sm text-primaryDark">
					{desctiption}
				</DefaultText>
			</div>
		</div>
	);
};
