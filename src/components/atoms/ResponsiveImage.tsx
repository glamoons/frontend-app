import NextImage from "next/image";

type ResponsiveImageProps = {
	mobileSrc: string;
	alt: string;
	desktopSrc: string;
	style?: Record<string, string>;
};

export const ResponsiveImage = ({ style, mobileSrc, alt, desktopSrc }: ResponsiveImageProps) => {
	return (
		<picture>
			<source media="(min-width: 768px)" srcSet={desktopSrc} />
			<NextImage src={mobileSrc} alt={alt} quality={100} fill sizes="100vw" style={style} />
		</picture>
	);
};
