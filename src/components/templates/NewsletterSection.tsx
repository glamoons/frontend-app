import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { NewsletterForm } from "../organisms/NewsletterForm";

export const NewsletterSection = () => {
	return (
		<Section className="bg-primaryLight">
			<div className="container mx-auto space-y-8">
				<SectionHeading
					title="Zapisz się do newslettera"
					description="Odbierz 10% rabatu na swoje pierwsze zamówienie w glamoons"
					containerStyle="text-center items-center"
				/>
				<NewsletterForm inputClassName="bg-white/60" />
			</div>
		</Section>
	);
};
