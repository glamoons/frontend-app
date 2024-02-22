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
			<Section className="container mx-auto">
				<div className="flex flex-col space-y-10 tablet:flex-row tablet:space-x-10">
					<div className="space-y-10 tablet:w-2/3">
						<div className="space-y-4 laptop:pr-[8.75rem]">
							<HeroTitle>Skontaktuj się z nami</HeroTitle>
							<DefaultText>
								Jeśli masz pytania, informację zwrotną w sprawie Twojej
								przesyłki lub po prostu chcesz się przywitać - napisz do nas!
							</DefaultText>
						</div>
						<ContactForm />
					</div>
					<ContactInformation
						address="Glamoons Sp. z o.o. Poręba Wielka 31 34-735 Niedźwiedź"
						phone="+48784525956"
						email="hello@glamoons.com"
						workingHours="Pon-Pt 8:00-16:00 CET"
						textClassName="text-secondary laptop:max-w-[10.25rem]"
						className="tablet space-x-0 tablet:w-1/3 tablet:flex-col tablet:space-y-10"
						addressBoxClassName="w-full tabletLg:flex-row tabletLg:space-y-0 tabletLg:space-x-5 tabletLg:justify-end"
						contactBoxClassName="w-full tabletLg:flex-row tabletLg:space-y-0 tabletLg:space-x-5 tabletLg:justify-end"
					/>
				</div>
			</Section>
			<hr className="mx-[1.563rem] border-t border-primaryLight tabletLg:hidden" />
		</>
	);
};

export default ContactPage;
