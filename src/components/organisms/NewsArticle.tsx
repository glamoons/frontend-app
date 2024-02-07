import { DefaultText } from "@/components/atoms/DefaultText";
import Link from "next/link";
import NextImage from "next/image";

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
}: NewsArticleProps) => {
	return (
		<article className="laptop:even:pl-0 laptop:odd:pr-0 laptop:pb-0 tablet:even:pl-6 tablet:odd:pr-6 tablet:pb-6 tablet:w-1/2 flex flex-col space-y-6">
			<figure>
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
				/>
			</figure>
			<div className="flex flex-col space-y-2">
				<Link href={href}>
					<span className="line-clamp-3 text-ellipsis text-base font-bold tracking-[-0.014em] text-secondary">
						{title}
					</span>
				</Link>
				<DefaultText className="text-primaryDark">{date}</DefaultText>
			</div>
		</article>
	);
};
