import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { NewsArticle } from "@/components/organisms/NewsArticle";

export const NewsSection = () => {
	return (
		<Section className="bg-slate50">
			<div className="container mx-auto flex flex-col space-y-[50px]">
				<SectionHeading
					title="Najnowsze wpisy"
					subHeading="blog"
					subHeadingClassName="text-primaryDark"
				/>
				<div className="laptop:flex-nowrap laptop:space-x-10 tablet:flex-row tablet:space-y-0 flex flex-col flex-wrap space-y-10">
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1706768631/blog-post_qjswfl.jpg"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post."
						date={"May 31, 11:10"}
						href={"/"}
					/>
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1706768631/blog-post_qjswfl.jpg"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative"
						date={"May 31, 11:10"}
						href={"/"}
					/>
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1706768631/blog-post_qjswfl.jpg"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative"
						date={"May 31, 11:10"}
						href={"/"}
					/>
				</div>
			</div>
		</Section>
	);
};
