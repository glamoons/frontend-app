import NextImage from "next/image";
import { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";
import { HeroBox } from "../molecules/HeroBox";

type HeroBanerProps = {
	src: string;
	laptopSrcSet: string;
	desktopSrcSet: string;
	alt: string;
};

export const HeroBaner = ({
	laptopSrcSet,
	desktopSrcSet,
	...props
}: HeroBanerProps &
	DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return (
		<div className="relative flex h-screen max-h-[712px] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-secondary laptop:max-h-screen">
			<picture className="absolute inset-0">
				<source media="(min-width: 1536px)" srcSet={desktopSrcSet} />
				<source media="(min-width: 768px)" srcSet={laptopSrcSet} />
				<NextImage
					src={props.src}
					alt={props.alt}
					quality={100}
					fill
					sizes="100vw"
					style={{ objectFit: "cover", opacity: 0.7 }}
					priority
				/>
			</picture>
			<HeroBox />
		</div>
	);
};
