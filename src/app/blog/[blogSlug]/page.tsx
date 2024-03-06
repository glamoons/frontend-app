import { type Metadata } from "next";
import { blogPosts } from "@/app/blog/page";
import { DefaultText } from "@/components/atoms/DefaultText";

export async function generateStaticParams() {
	return blogPosts?.map((blog) => ({
		blogSlug: blog.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { blogSlug: string };
}): Promise<Metadata> {
	const blogPost = blogPosts.find((blog) => blog.slug === params.blogSlug);
	return {
		title: blogPost?.title,
		description: blogPost?.description,
	};
}

export default async function ProductDetailsPage({
	params,
}: {
	params: { blogSlug: string };
}) {
	return <DefaultText>{params.blogSlug}</DefaultText>;
}
