import { Section } from "@/components/atoms/Section";
import {
	SectionHeading,
	type SectionHeadingProps,
} from "@/components/molecules/SectionHeading";
import { NewsArticle } from "@/components/organisms/NewsArticle";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type NewsSectionsProps = {
	sectionClassName?: HTMLElements<HTMLDivElement>["className"];
	title?: SectionHeadingProps["title"];
	subHeading?: SectionHeadingProps["subHeading"];
};

export const NewsSection = ({
	sectionClassName,
	title,
	subHeading,
}: NewsSectionsProps) => {
	return (
		<Section className={cn("bg-slate100", sectionClassName)}>
			<div className="container mx-auto flex flex-col space-y-[50px]">
				<SectionHeading
					title={title || "Najnowsze wpisy"}
					subHeading={subHeading || "blog"}
					subHeadingClassName="text-primaryDark"
				/>
				<div className="flex flex-col flex-wrap space-y-10 tablet:flex-row tablet:space-y-0 laptop:flex-nowrap laptop:space-x-10">
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1707385343/blog-post_qjswfl_imrvqp.webp"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post. Be concise and creative, Think of a catchy title for your blog post."
						date={"May 31, 11:10"}
						href={"/"}
						aria-label="Prosty stolik kawowy w 5 krokach"
					/>
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1707385343/blog-post_qjswfl_imrvqp.webp"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative"
						date={"May 31, 11:10"}
						href={"/"}
						aria-label="Prosty stolik kawowy w 5 krokach"
					/>
					<NewsArticle
						src="https://res.cloudinary.com/dstimijog/image/upload/v1707385343/blog-post_qjswfl_imrvqp.webp"
						alt="Prosty stolik kawowy w 5 krokach"
						title="Think of a catchy title for your blog post. Be concise and creative"
						date={"May 31, 11:10"}
						href={"/"}
						aria-label="Prosty stolik kawowy w 5 krokach"
					/>
				</div>
			</div>
		</Section>
	);
};
