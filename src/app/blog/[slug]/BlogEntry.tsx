import { notFound } from "next/navigation";
import { blogPosts } from "@/app/blog/page";
import { BackButton } from "@/components/atoms/BackButton";
import { DefaultText } from "@/components/atoms/DefaultText";
import { EntryTag } from "@/components/atoms/EntryTag";
import { RemoteMarkdownComponent } from "@/components/atoms/RemoteMarkdownComponent";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";
import { CallToActionSection } from "@/components/templates/CallToActionSection";
import { NewsSection } from "@/components/templates/NewsSections";

type BlogEntryProps = {
	params: { slug: string };
};

const BlogEntry = async ({ params }: BlogEntryProps) => {
	const blogPost = blogPosts.find((blog) => blog.slug === params.slug);

	if (!blogPost) {
		throw notFound();
	}

	return (
		<>
			<Section className="container mx-auto grid grid-cols-12 space-y-4">
				<article className="col-span-12 space-y-4 laptop:col-span-9 laptop:col-start-3">
					<h1 className="text-3xl font-bold text-secondary">
						{blogPost.title}
					</h1>
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
					<RemoteMarkdownComponent source={blogPost.content} />
				</article>
				<BackButton className="col-span-12 tablet:col-span-2 laptop:col-start-3">
					Wróć
				</BackButton>
			</Section>
			<CallToActionSection
				title="Skonfiguruj własny stolik dokładnie tak jak chcesz"
				btnName="Skonfiguruj"
				href="/"
				description="Skorzystaj z naszego intuicyjnego konfiguratora, aby stworzyć stolik na miarę Twoich oczekiwań. To tylko kilka szybkich kliknięć."
			/>
			<NewsSection
				sectionClassName="bg-transparent"
				title="Przeczytaj również"
				subHeading="Inspiracje"
			/>
		</>
	);
};

export default BlogEntry;
