import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";
import {
	type BaseProps,
	type CategoryHolderProps,
	type ResponsiveImageProps,
} from "@/interfaces/base";

type CategoryProps = {
	href: BaseProps["href"];
} & Omit<ResponsiveImageProps, "sizes" | "style" | "className"> &
	CategoryHolderProps;

export const Category = ({
	href,
	mobileSrc,
	alt,
	desktopSrc,
	title,
	btnName,
}: CategoryProps) => {
	return (
		<div className="relative aspect-[4/5] h-full w-full overflow-hidden tablet:aspect-square laptop:rounded-3xl">
			<Link href={String(href)} className="group" aria-label={title}>
				<ResponsiveImage
					mobileSrc={mobileSrc}
					alt={alt}
					desktopSrc={desktopSrc}
					className="h-full w-full transform transition-transform duration-500 group-hover:scale-[1.05]"
					sizes="50vw"
				/>
				<CategoryHolder title={title} btnName={btnName || "zobacz więcej"} />
			</Link>
		</div>
	);
};
