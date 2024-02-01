import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ContactInformation } from "../organisms/ContactInformation";

export const ContactSection = () => {
	return (
		<Section className="container mx-auto py-0">
			<article className="mx-[-1.563rem] flex flex-col space-y-6 bg-secondary px-[1.563rem] py-[50px]">
				<SectionHeading
					title="Skontaktuj się z nami"
					subHeading="Kontakt"
					headingClassName="text-slate-50"
					subHeadingClassName="text-primary"
				/>
				<ContactInformation
					address="Glamoons Sp. z o.o. Poręba Wielka 31 34-735 Niedźwiedź"
					phone="784 525 956"
					email="sklep@glamoons.com"
					workingHours="Pon-Pt 8:00-16:00 CET"
				/>
			</article>
		</Section>
	);
};
