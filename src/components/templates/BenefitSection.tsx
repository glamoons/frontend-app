import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SectionBenefitsWithIcon } from "../organisms/SectionBenefitsWithIcon";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const BenefitSection = () => {
	return (
		<Section className="container mx-auto space-y-[50px]">
			<SectionHeading
				subHeading="korzyści"
				title="Postaw na liczby"
				description="Wybierz stolik, który sprosta Twoim największym wymaganiom"
			/>
			<SectionBenefitsWithIcon />
			<PrimaryButton href={"/"} className="tablet:w-1/2 mx-auto flex w-full">
				sprawdź
			</PrimaryButton>
		</Section>
	);
};
