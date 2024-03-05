import Link from "next/link";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";
import { TagButton } from "@/components/atoms/TagButton";
import { SectionHeading } from "@/components/molecules/SectionHeading";

const BlogPage = () => {
	return (
		<>
			<div className="relative aspect-square h-full">
				<div className="absolute left-0 top-0 z-10 h-full w-full bg-[#F6F6F4]/85">
					<SectionHeading
						subHeading="Opowieści o stolikach"
						title="Poznaj sztukę tworzenia stolików kawowych"
						containerStyle="container justify-center h-full w-full"
					/>
				</div>
				<ResponsiveImage
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709616751/blog-mobile_jl97j1.webp"
					alt="Blog o meblach Glammoons"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709616751/blog-desktop_qeevgn.webp"
					sizes="(max-width: 768px) 100vw, 50vw"
					className="grayscale"
				/>
			</div>
			<Section className="container mx-auto overflow-hidden">
				<div className="-mr-[1.563rem] flex flex-row space-x-4 overflow-x-scroll">
					<TagButton count={47} tagName="Wszystkie" />
					<TagButton count={1} tagName="Pomysły na projekt" />
					<TagButton count={5} tagName="Rzemiosło" />
					<TagButton count={12} tagName="Rozwój" />
					<TagButton count={8} tagName="Biznes" />
					<TagButton count={4} tagName="Stylizacja stolików" />
					<TagButton count={6} tagName="Inspiracje" />
				</div>
			</Section>
			<Section className="container mx-auto">
				<div className="relative aspect-square h-64 w-full overflow-hidden rounded-2xl">
					<Link href="/blog">
						<ResponsiveImage
							mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp"
							alt="Poznaj sztukę tworzenia stolików kawowych"
							desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709621432/entry-blog-example-mobile_u2muul.webp"
						/>
					</Link>
				</div>
				<div className="flex flex-col">
					<h3>
						Think of a catchy title for your blog post. Be concise and creative
					</h3>
					<p>
						A short paragraph describing the main idea or key takeaways of the
						blog post
					</p>
				</div>
			</Section>
		</>
	);
};

export default BlogPage;
