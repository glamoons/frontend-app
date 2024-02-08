import { ResponsiveImageProps } from "@/interfaces/base";
import NextImage from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const ResponsiveImage = ({
	style,
	mobileSrc,
	alt,
	desktopSrc,
	className,
}: ResponsiveImageProps &
	DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
	return (
		<picture>
			<source media="(min-width: 601px)" srcSet={desktopSrc} />
			<NextImage
				src={mobileSrc}
				alt={alt}
				quality={100}
				fill
				sizes="100vw"
				style={style}
				className={className}
			/>
		</picture>
	);
};
