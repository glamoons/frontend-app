import { ResponsiveImageProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";
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
		<>
			<NextImage
				src={desktopSrc}
				alt={alt}
				quality={100}
				fill
				sizes="100vw"
				style={style}
				className={cn("hidden object-cover tablet:block", className)}
			/>
			<NextImage
				src={mobileSrc}
				alt={alt}
				quality={100}
				fill
				sizes="100vw"
				style={style}
				className={cn("object-cover tablet:hidden", className)}
			/>
		</>
	);
};
