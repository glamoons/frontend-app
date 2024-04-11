import Link, { type LinkProps } from "next/link";
import NextImage from "next/image";
import {
	type CategoryHolderProps,
	type ResponsiveImageProps,
} from "@/interfaces/base";

type CategoryProps = {
	href: LinkProps["href"];
} & Omit<ResponsiveImageProps, "style" | "className" | "desktopSrc"> &
	Omit<CategoryHolderProps, "size" | "price" | "productId">;

export const Category = ({
	href,
	mobileSrc,
	alt,
	title,
	sizes,
}: CategoryProps) => {
	return (
		<div className="relative aspect-square h-full overflow-hidden tablet:aspect-square">
			<Link href={String(href)} aria-label={title}>
				<NextImage
					src={mobileSrc}
					alt={alt}
					quality={100}
					fill
					sizes={sizes}
					className="h-full w-full transform transition-transform duration-500 hover:scale-[1.05]"
				/>
			</Link>
		</div>
	);
};
