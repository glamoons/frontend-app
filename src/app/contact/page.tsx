import type { Metadata } from "next";
import { DefaultText } from "@/components/atoms/DefaultText";
import { HeroTitle } from "@/components/atoms/HeroTitle";
import { Section } from "@/components/atoms/Section";
import { ContactForm } from "@/components/organisms/ContactForm";
import { ContactInformation } from "@/components/organisms/ContactInformation";

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
		<>
			<Section className="container mx-auto space-y-10">
				<div className="space-y-4">
					<HeroTitle>Skontaktuj się z nami</HeroTitle>
					<DefaultText>
						Jeśli masz pytania, informację zwrotną w sprawie Twojej przesyłki
						lub po prostu chcesz się przywitać - napisz do nas!
					</DefaultText>
				</div>
				<ContactForm />
				<ContactInformation
					address="Glamoons Sp. z o.o. Poręba Wielka 31 34-735 Niedźwiedź"
					phone="+48784525956"
					email="sklep@glamoons.com"
					workingHours="Pon-Pt 8:00-16:00 CET"
					color="text-secondary"
				/>
			</Section>
			<hr className="mx-[1.563rem] border-t border-primaryLight tabletLg:hidden" />
		</>
	);
};

export default ContactPage;
