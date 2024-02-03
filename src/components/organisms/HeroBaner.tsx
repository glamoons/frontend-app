import NextImage from "next/image";
import { HeroBox } from "../molecules/HeroBox";

type HeroBanerProps = {
	src: string;
	desktopSrcSet: string;
	alt: string;
};

export const HeroBaner = ({ src, alt, desktopSrcSet }: HeroBanerProps) => {
	return (
		<div className="relative flex h-[712px] w-full flex-col justify-between overflow-hidden bg-secondary">
			<picture>
				<source media="(min-width: 768px)" srcSet={desktopSrcSet} />
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
