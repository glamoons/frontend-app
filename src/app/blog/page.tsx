import { type Metadata } from "next";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";
import { TagButton } from "@/components/atoms/TagButton";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { BlogPost } from "@/components/organisms/BlogPost";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com/blog",
		},
	};
}

export const blogPosts = [
	{
		title:
			"Think of a catchy title for your blog post. Be concise and creative",
		description:
			"A short paragraph describing the main idea or key takeaways of the blog post. A short paragraph describing the main idea or key takeaways of the blog post. A short paragraph describing the main idea or key takeaways of the blog post",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Erat velit scelerisque in dictum non consectetur a. Lectus nulla at volutpat diam ut venenatis tellus in. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Arcu cursus euismod quis viverra nibh cras pulvinar.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n## Example Heading 2\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n\n- First item\n- Second item\n- Third item\n- Fourth item\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n### Example Heading 3\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\nMauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Varius vel pharetra vel turpis nunc eget lorem. Morbi tristique senectus et netus et. Vitae sapien pellentesque habitant morbi tristique senectus et. Massa eget egestas purus viverra accumsan. Libero id faucibus nisl tincidunt eget nullam non nisi. I love supporting the **[Be Concise and Creative](/blog/be-concise-and-creative)**.\n## Example Heading 2\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n\n1.  First item\n2.  Second item\n3.  Third item\n    1.  Indented item\n    2.  Indented item\n4.  Fourth item\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis lectus. Aenean euismod elementum nisi quis. Faucibus interdum posuere lorem ipsum dolor sit. Ut placerat orci nulla pellentesque dignissim enim sit amet. A pellentesque sit amet porttitor. A erat nam at lectus urna duis convallis convallis tellus.",
		slug: "think-of-a-catchy-title-for-your-blog-post",
		mobileSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp",
		desktopSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621656/entry-blog-example-desktop_dd8j0r.webp",
		desktopEntrySrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709791937/desktop-entry-image_o2c5yd.webp",
		date: "05.03.2024, 10:00",
		tags: ["Pomysły na projekt", "Rozwój"],
	},
	{
		title:
			"Be concise and creative. Think of a catchy title for your blog post",
		description:
			"A short paragraph describing the main idea or key takeaways of the blog post",
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Erat velit scelerisque in dictum non consectetur a. Lectus nulla at volutpat diam ut venenatis tellus in. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Arcu cursus euismod quis viverra nibh cras pulvinar.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n## Example Heading 2\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n\n- First item\n- Second item\n- Third item\n- Fourth item\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n### Example Heading 3\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\nMauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Varius vel pharetra vel turpis nunc eget lorem. Morbi tristique senectus et netus et. Vitae sapien pellentesque habitant morbi tristique senectus et. Massa eget egestas purus viverra accumsan. Libero id faucibus nisl tincidunt eget nullam non nisi. I love supporting the <a href="https://www.google.com" target="_blank">Google</a>.\n## Example Heading 2\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. Nibh ipsum consequat nisl vel pretium lectus quam id leo.\n\n1.  First item\n2.  Second item\n3.  Third item\n    1.  Indented item\n    2.  Indented item\n4.  Fourth item\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis lectus. Aenean euismod elementum nisi quis. Faucibus interdum posuere lorem ipsum dolor sit. Ut placerat orci nulla pellentesque dignissim enim sit amet. A pellentesque sit amet porttitor. A erat nam at lectus urna duis convallis convallis tellus.',
		slug: "be-concise-and-creative",
		mobileSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp",
		desktopSrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709621656/entry-blog-example-desktop_dd8j0r.webp",
		desktopEntrySrc:
			"https://res.cloudinary.com/dstimijog/image/upload/v1709791937/desktop-entry-image_o2c5yd.webp",
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
						title="Blog o bazach MDF Glammoons"
						containerStyle="container justify-center h-full w-full tabletLg:ml-[75%] 4xl:ml-[80%] max-w-none"
						containerHeadingStyle="space-y-4"
						headingClassName="tabletLg:text-4xl laptop:text-5xl 3xl:text-6xl"
					/>
				</div>
				<ResponsiveImage
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709616751/blog-mobile_jl97j1.webp"
					alt="Blog o bazach MDF Glammoons"
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
