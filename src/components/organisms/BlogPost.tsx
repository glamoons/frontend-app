import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { DefaultText } from "@/components/atoms/DefaultText";
import { Button } from "@/components/ui/button";

type BlogListItem = {
	title: string;
	description: string;
	slug: string;
	mobileSrc: string;
	desktopSrc: string;
	date: string;
	tags: string[];
};

type BlogPostProps = {
	blog: BlogListItem;
};

export const BlogPost = ({ blog }: BlogPostProps) => {
	return (
		<article className="flex flex-col space-y-10 tablet:w-1/2 tablet:pb-10 tablet:odd:pr-5 tablet:even:pl-5">
			<div className="relative aspect-square h-64 w-full overflow-hidden rounded-2xl laptop:aspect-video laptop:h-auto">
				<Link href={`/blog/${blog.slug}`}>
					<ResponsiveImage
						mobileSrc={blog.mobileSrc}
						alt={blog.title}
						desktopSrc={blog.desktopSrc}
					/>
				</Link>
			</div>
			<div className="flex flex-col space-y-5">
				<Link href={`/blog/${blog.slug}`} className="flex flex-col space-y-2">
					<h3 className="line-clamp-3 text-2xl font-bold text-secondary">
						{blog.title}
					</h3>
					<DefaultText className="line-clamp-3">{blog.description}</DefaultText>
				</Link>
				<div className="flex flex-col">
					<DefaultText className="text-primaryDark">{blog.date}</DefaultText>
					<div className="flex flex-row space-x-3">
						{blog.tags.map((tag) => (
							<Button
								key={tag}
								type="button"
								className="h-auto cursor-pointer bg-transparent px-0 py-0 text-xs font-light uppercase text-secondary underline transition-colors duration-500 hover:text-primaryDark"
								aria-label={tag}
							>
								{tag}
							</Button>
						))}
					</div>
				</div>
			</div>
		</article>
	);
};
