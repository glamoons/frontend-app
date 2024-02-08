import NextImage from "next/image";
import { HeroBox } from "../molecules/HeroBox";

type HeroBanerProps = {
	src: string;
	laptopSrcSet: string;
	desktopSrcSet: string;
	alt: string;
};

export const HeroBaner = ({
	src,
	alt,
	laptopSrcSet,
	desktopSrcSet,
}: HeroBanerProps) => {
	return (
		<div className="relative flex h-screen max-h-[712px] min-h-[640px] w-full flex-col justify-between overflow-hidden bg-secondary laptop:max-h-screen">
			<picture>
				<source media="(min-width: 1536px)" srcSet={desktopSrcSet} />
				<source media="(min-width: 768px)" srcSet={laptopSrcSet} />
				<NextImage
					src={src}
					alt={alt}
					quality={100}
					fill
					sizes="100vw"
					style={{ objectFit: "cover", opacity: 0.7 }}
				/>
			</picture>
			<HeroBox />
		</div>
	);
};
