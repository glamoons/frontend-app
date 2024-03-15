import {
	TextHolder,
	type TextHolderProps,
} from "@/components/molecules/TextHolder";
import { type ResponsiveImageProps } from "@/interfaces/base";

type AboutBoxProps = Omit<
	ResponsiveImageProps,
	"sizes" | "style" | "className" | "alt" | "mobileSrc" | "desktopSrc"
> &
	TextHolderProps & {
		icon?: React.ReactNode;
	};

export const AboutBox = ({ title, description, icon }: AboutBoxProps) => {
	return (
		<div className="relative aspect-square h-full overflow-hidden laptop:rounded-3xl">
			<div className="absolute left-0 top-0 z-10 h-full w-full bg-[#282E39]/75" />
			<TextHolder title={title} description={description} icon={icon} />
		</div>
	);
};
