import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { DefaultInput } from "@/components/atoms/DefaultInput";

export const NewsletterSection = () => {
	return (
		<Section className="bg-primaryLight">
			<div className="container mx-auto space-y-8">
				<SectionHeading
					title="Zapisz się do newslettera"
					description="Odbierz 10% rabatu na swoje pierwsze zamówienie w glamoons"
					containerStyle="text-center items-center"
				/>
				<div className="flex flex-col space-y-4">
					<DefaultInput type="email" placeholder="Twój adres email" className="" />
					<SubmitButton className="w-full border-secondary bg-secondary text-slate-50">
						subskrybuj
					</SubmitButton>
				</div>
			</div>
		</Section>
	);
};
