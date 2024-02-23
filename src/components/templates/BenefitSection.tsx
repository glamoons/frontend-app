import { SectionBenefitsWithIcon } from "@/components/organisms/SectionBenefitsWithIcon";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";

export const BenefitSection = () => {
	return (
		<Section className="container mx-auto space-y-[50px]">
			<SectionHeading
				subHeading="korzyści"
				title="Postaw na liczby"
				description="Wybierz stolik, który sprosta Twoim największym wymaganiom"
			/>
			<SectionBenefitsWithIcon />
			<PrimaryButton
				href={"/"}
				className="mx-auto flex w-full tablet:w-1/2 tabletLg:w-auto tabletLg:max-w-44"
				aria-label="sprawdź korzyści"
			>
				sprawdź
			</PrimaryButton>
		</Section>
	);
};
