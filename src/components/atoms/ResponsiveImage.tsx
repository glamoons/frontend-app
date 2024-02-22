import NextImage from "next/image";
import { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";
import { type ResponsiveImageProps } from "@/interfaces/base";

export const ResponsiveImage = ({
	style,
	mobileSrc,
	alt,
	desktopSrc,
	className,
	...props
}: ResponsiveImageProps &
	DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return (
		<picture className="absolute inset-0">
			<source media="(min-width: 601px)" srcSet={desktopSrc} />
			<NextImage
				src={mobileSrc}
				alt={alt}
				quality={100}
				fill
				sizes={props.sizes}
				style={style}
				className={className}
			/>
		</picture>
	);
};
