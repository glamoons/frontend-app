import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import {
	type BaseProps,
	type CategoryHolderProps,
	type ResponsiveImageProps,
} from "@/interfaces/base";

type CategoryProps = {
	href: BaseProps["href"];
} & Omit<ResponsiveImageProps, "sizes" | "style" | "className"> &
	Omit<CategoryHolderProps, "size" | "price">;

export const Category = ({
	href,
	mobileSrc,
	alt,
	desktopSrc,
	title,
}: CategoryProps) => {
	return (
		<div className="relative aspect-square h-full overflow-hidden tablet:aspect-square laptop:rounded-3xl">
			<Link href={String(href)} className="group" aria-label={title}>
				<ResponsiveImage
					mobileSrc={mobileSrc}
					alt={alt}
					desktopSrc={desktopSrc}
					className="h-full w-full transform transition-transform duration-500 group-hover:scale-[1.05]"
					sizes="50vw"
				/>
			</Link>
		</div>
	);
};
