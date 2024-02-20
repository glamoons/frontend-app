import { DefaultText } from "@/components/atoms/DefaultText";
import { HeroTitle } from "@/components/atoms/HeroTitle";
import { Section } from "@/components/atoms/Section";
import ContactForm from "@/components/organisms/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com/contact",
		},
		title: "Skontaktuj się z nami - Glamoons",
		description:
			"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Skontaktuj się z zespołem Glamoons jeśli masz niestandardowy projekt lub pytania.",
		openGraph: {
			title: "Glamoons - konfigurowalne stoliki i zegary w stylu glamour.",
			description:
				"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
			type: "website",
			siteName: "Glamoons",
			url: "https://dev.glamoons.com/",
		},
	};
}

const ContactPage = () => {
	return (
		<Section className="container mx-auto">
			<div className="space-y-4">
				<HeroTitle>Skontaktuj się z nami</HeroTitle>
				<DefaultText>
					Jeśli masz pytania, informację zwrotną w sprawie Twojej przesyłki lub
					po prostu chcesz się przywitać - napisz do nas!
				</DefaultText>
			</div>
			<ContactForm className="mt-10" />
		</Section>
	);
};

export default ContactPage;
