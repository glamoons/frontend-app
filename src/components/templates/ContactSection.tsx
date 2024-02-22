import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ContactInformation } from "@/components/organisms/ContactInformation";

export const ContactSection = () => {
	return (
		<Section className="container mx-auto py-0 laptop:pt-[50px] desktop:py-0 desktop:pt-[100px]">
			<article className="mx-[-1.563rem] flex flex-col space-y-6 bg-secondary px-[1.563rem] py-[50px] desktop:container laptop:mx-0 laptop:rounded-3xl 2xl:py-[100px]">
				<SectionHeading
					title="Skontaktuj się z nami"
					subHeading="Kontakt"
					headingClassName="text-slate50"
					subHeadingClassName="text-primary"
				/>
				<ContactInformation
					address="Glamoons Sp. z o.o. Poręba Wielka 31 34-735 Niedźwiedź"
					phone="+48784525956"
					email="hello@glamoons.com"
					workingHours="Pon-Pt 8:00-16:00 CET"
				/>
			</article>
		</Section>
	);
};
