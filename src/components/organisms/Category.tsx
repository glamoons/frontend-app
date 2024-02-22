import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";
import {
	type BaseProps,
	type CategoryHolderProps,
	type ResponsiveImageProps,
} from "@/interfaces/base";

interface CategoryProps extends ResponsiveImageProps, CategoryHolderProps {
	href: BaseProps["href"];
}

export const Category = ({
	href,
	mobileSrc,
	alt,
	desktopSrc,
	title,
	btnName,
}: CategoryProps) => {
	return (
		<div className="relative h-[270px] w-1/2 overflow-hidden tablet:h-[360px] laptop:h-[460px] laptop:rounded-3xl desktop:h-[560px]">
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
