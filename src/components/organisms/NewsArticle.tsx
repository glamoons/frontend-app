import Link, { type LinkProps } from "next/link";
import NextImage from "next/image";
import { DefaultText } from "@/components/atoms/DefaultText";

type NewsArticleProps = {
	src: string;
	alt: string;
	title: string;
	date: string;
	href: string;
};

export const NewsArticle = ({
	src,
	alt,
	title,
	date,
	href = "/",
	...props
}: NewsArticleProps & LinkProps) => {
	return (
		<Link
			href={href}
			className="group flex flex-col space-y-6 tablet:w-1/2 tablet:pb-6 tablet:odd:pr-6 tablet:even:pl-6 laptop:pb-0 laptop:odd:pr-0 laptop:even:pl-0"
			{...props}
		>
			<figure className="overflow-hidden rounded-2xl">
				<NextImage
					src={src}
					alt={alt}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					width={360}
					height={200}
					className="block h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-[1.05]"
				/>
			</figure>
			<div className="flex flex-col space-y-2">
				<span className="line-clamp-3 text-ellipsis text-base font-bold tracking-[-0.014em] text-secondary">
					{title}
				</span>
				<DefaultText className="text-primaryDark">{date}</DefaultText>
			</div>
		</Link>
	);
};
