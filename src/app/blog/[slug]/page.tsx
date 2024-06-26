import { type Metadata } from "next";
import BlogEntry from "./BlogEntry";
import { blogPosts } from "@/app/blog/page";

export const dynamicParams = false;

export async function generateStaticParams() {
	return blogPosts?.map((blog) => ({
		slug: blog.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const blogPost = blogPosts.find((blog) => blog.slug === params.slug);
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: `https://dev.glamoons.com/blog/${params.slug}`,
		},
		title: blogPost?.title,
		description: blogPost?.description,
	};
}

export default async function BlogEntryPage({
	params,
}: {
	params: { slug: string };
}) {
	return <BlogEntry params={params} />;
}
