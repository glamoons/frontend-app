import { DefaultText } from "./DefaultText";
import { Heading } from "./Heading";

type BoxWithIconProps = {
	icon: React.ReactNode;
	title: string;
	subTitle: string;
	desctiption: string;
};

export const BoxWithIcon = ({ icon, title, subTitle, desctiption }: BoxWithIconProps) => {
	return (
		<div className="flex flex-col space-y-3">
			<div className="flex flex-col space-y-3">
				{icon}
				<Heading>{title}</Heading>
			</div>
			<div className="flex flex-col space-y-1">
				<h4 className="text-lg font-bold text-secondary">{subTitle}</h4>
				<DefaultText className="text-sm text-primaryDark">{desctiption}</DefaultText>
			</div>
		</div>
	);
};
