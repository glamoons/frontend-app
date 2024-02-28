import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import {
	TextHolder,
	type TextHolderProps,
} from "@/components/molecules/TextHolder";
import { type ResponsiveImageProps } from "@/interfaces/base";

type AboutBoxProps = Omit<
	ResponsiveImageProps,
	"sizes" | "style" | "className" | "alt"
> &
	TextHolderProps;

export const AboutBox = ({
	mobileSrc,
	desktopSrc,
	title,
	description,
}: AboutBoxProps) => {
	return (
		<div className="relative aspect-square h-full overflow-hidden tablet:aspect-[4/5] laptop:rounded-3xl">
			<div className="absolute left-0 top-0 z-10 h-full w-full bg-[#282E39]/75" />
			<ResponsiveImage
				mobileSrc={mobileSrc}
				alt={title || "Glamoons - konfigurowalne meble w stylu glamour."}
				desktopSrc={desktopSrc}
				className="h-full w-full transform transition-transform duration-500 group-hover:scale-[1.05]"
				sizes="(max-width: 601px) 100vw, 33vw"
			/>
			<TextHolder title={title} description={description} />
		</div>
	);
};
