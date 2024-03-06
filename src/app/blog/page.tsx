import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";
import { TagButton } from "@/components/atoms/TagButton";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { BlogPost } from "@/components/organisms/BlogPost";

export const blogPosts = [
	{
		title:
			"Think of a catchy title for your blog post. Be concise and creative",
		description:
			"A short paragraph describing the main idea or key takeaways of the blog post. A short paragraph describing the main idea or key takeaways of the blog post. A short paragraph describing the main idea or key takeaways of the blog post",
		slug: "think-of-a-catchy-title-for-your-blog-post",
		mobileSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp",
		desktopSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621656/entry-blog-example-desktop_dd8j0r.webp",
		date: "05.03.2024, 10:00",
		tags: ["Pomysły na projekt", "Rozwój"],
	},
	{
		title:
			"Be concise and creative. Think of a catchy title for your blog post",
		description:
			"A short paragraph describing the main idea or key takeaways of the blog post",
		slug: "be-concise-and-creative",
		mobileSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp",
		desktopSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621656/entry-blog-example-desktop_dd8j0r.webp",
		date: "06.03.2024, 12:00",
		tags: ["Inspiracje"],
	},
];

const BlogPage = () => {
	return (
		<>
			<div className="relative aspect-square h-full tabletLg:max-h-[30rem] tabletLg:w-1/2 4xl:max-h-[50rem]">
				<div className="absolute left-0 top-0 z-10 h-full w-full bg-[#F6F6F4]/85">
					<SectionHeading
						subHeading="Opowieści o stolikach"
						title="Poznaj sztukę tworzenia stolików kawowych"
						containerStyle="container justify-center h-full w-full tabletLg:ml-[75%] 4xl:ml-[80%] max-w-none"
						containerHeadingStyle="space-y-4"
						headingClassName="tabletLg:text-4xl laptop:text-5xl 3xl:text-6xl"
					/>
				</div>
				<ResponsiveImage
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709616751/blog-mobile_jl97j1.webp"
					alt="Blog o meblach Glammoons"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709616751/blog-desktop_qeevgn.webp"
					sizes="(max-width: 768px) 100vw, 50vw"
					className="rounded-3xl rounded-tr-3xl grayscale"
				/>
			</div>
			<div className="container mx-auto overflow-hidden pt-[3.125rem] desktop:pt-[6.25rem]">
				<div className="-mr-[1.563rem] flex flex-row gap-4 overflow-x-scroll laptop:mr-0 laptop:flex-wrap laptop:overflow-x-hidden">
					<TagButton count={47} tagName="Wszystkie" />
					<TagButton count={1} tagName="Pomysły na projekt" />
					<TagButton count={5} tagName="Rzemiosło" />
					<TagButton count={12} tagName="Rozwój" />
					<TagButton count={8} tagName="Biznes" />
					<TagButton count={4} tagName="Stylizacja stolików" />
					<TagButton count={6} tagName="Inspiracje" />
				</div>
			</div>
			<Section className="container mx-auto">
				<div className="flex flex-col flex-wrap space-y-10 tablet:flex-row tablet:space-y-0">
					{blogPosts.map((blog) => (
						<BlogPost key={blog.slug} blog={blog} />
					))}
				</div>
			</Section>
		</>
	);
};

export default BlogPage;
