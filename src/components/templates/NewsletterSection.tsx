import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { NewsletterForm } from "../organisms/NewsletterForm";

export const NewsletterSection = () => {
	return (
		<Section className="3xl:container 3xl:rounded-3xl bg-primaryLight">
			<div className="container mx-auto space-y-8">
				<SectionHeading
					title="Zapisz się do newslettera"
					description="Odbierz 10% rabatu na swoje pierwsze zamówienie w glamoons"
					containerStyle="text-center items-center justify-center mx-auto"
				/>
				<NewsletterForm
					newsletterContainerClassName="flex flex-col items-center tabletLg:flex-row tabletLg:space-x-4 tabletLg:space-y-0 tabletLg:justify-center"
					inputClassName="bg-white/60 tablet:w-3/4 tabletLg:w-full tabletLg:max-w-96"
					butttonClassName="tablet:w-1/2 tabletLg:w-auto"
				/>
			</div>
		</Section>
	);
};
