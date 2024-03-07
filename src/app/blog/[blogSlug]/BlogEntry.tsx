import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { blogPosts } from "@/app/blog/page";
import { DefaultText } from "@/components/atoms/DefaultText";
import { EntryTag } from "@/components/atoms/EntryTag";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";

export default async function BlogEntry({
	params,
}: {
	params: { blogSlug: string };
}) {
	const blogPost = blogPosts.find((blog) => blog.slug === params.blogSlug);

	if (!blogPost) {
		throw notFound();
	}

	return (
		<Section className="container mx-auto grid grid-cols-12">
			<article className="col-span-12 space-y-4 laptop:col-span-9 laptop:col-start-3">
				<h1 className="text-3xl font-bold text-secondary">{blogPost.title}</h1>
				<div className="flex flex-col gap-y-2">
					<div className="flex flex-row gap-x-3">
						{blogPost.tags.map((tag) => (
							<EntryTag key={tag} aria-label={tag}>
								{tag}
							</EntryTag>
						))}
					</div>
					<DefaultText className="text-primaryDark">
						{blogPost.date}
					</DefaultText>
				</div>
				<div className="relative !my-7 aspect-square h-64 w-full overflow-hidden rounded-3xl laptop:aspect-video laptop:h-auto">
					<ResponsiveImage
						mobileSrc={blogPost.mobileSrc}
						alt={blogPost.title}
						desktopSrc={blogPost.desktopEntrySrc}
					/>
				</div>
			</article>
			<article className="prose col-span-12 laptop:col-span-9 laptop:col-start-3">
				<MDXRemote
					source={blogPost.content}
					components={{
						a: (props) => (
							<Link href={props.href as string}>{props.children}</Link>
						),
					}}
				/>
			</article>
		</Section>
	);
}
