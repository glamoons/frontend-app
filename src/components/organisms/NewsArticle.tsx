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

export const NewsArticle = ({ src, alt, title, date, href = "/" }: NewsArticleProps) => {
	return (
		<article className="flex flex-col space-y-6">
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
