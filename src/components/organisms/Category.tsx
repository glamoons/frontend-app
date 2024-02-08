import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";
import {
	BaseProps,
	CategoryHolderProps,
	ResponsiveImageProps,
} from "@/interfaces/base";
import Link from "next/link";

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
		<div className="relative h-[270px] w-1/2 tablet:h-[360px] laptop:h-[460px] laptop:overflow-hidden laptop:rounded-3xl desktop:h-[560px]">
			<Link href={String(href)} className="group overflow-hidden">
				<ResponsiveImage
					mobileSrc={mobileSrc}
					alt={alt}
					desktopSrc={desktopSrc}
					className="block h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-[1.05]"
				/>
				<CategoryHolder title={title} btnName={btnName || "zobacz więcej"} />
			</Link>
		</div>
	);
};
