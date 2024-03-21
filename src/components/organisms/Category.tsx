import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import {
	type BaseProps,
	type CategoryHolderProps,
	type ResponsiveImageProps,
} from "@/interfaces/base";

type CategoryProps = {
	href: BaseProps["href"];
} & Omit<ResponsiveImageProps, "style" | "className"> &
	Omit<CategoryHolderProps, "size" | "price">;

export const Category = ({
	href,
	mobileSrc,
	alt,
	desktopSrc,
	title,
	sizes,
}: CategoryProps) => {
	return (
		<div className="relative aspect-square h-full overflow-hidden tablet:aspect-square">
			<Link href={String(href)} aria-label={title}>
				<ResponsiveImage
					mobileSrc={mobileSrc}
					alt={alt}
					desktopSrc={desktopSrc}
					className="h-full w-full transform transition-transform duration-500 hover:scale-[1.05]"
					sizes={sizes}
				/>
			</Link>
		</div>
	);
};
