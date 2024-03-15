import {
	IconAsteriskSimple,
	IconHandOff,
	IconRuler,
} from "@tabler/icons-react";
import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { AboutBox } from "@/components/organisms/AboutBox";

export const AboutSection = () => {
	return (
		<Section className="container mx-auto space-y-10">
			<SectionHeading
				subHeading="O nas"
				title="Tworzymy na zamówienie i dostarczamy bezpośrednio pod Twoje drzwi"
			/>
			<div className="-mx-[1.563rem] flex flex-col space-y-3 overflow-hidden tablet:flex-row tablet:space-y-0 laptop:mx-0 laptop:space-x-10">
				<AboutBox
					title="Tworzymy na zamówienie"
					description="A short description of the service you offer or section of the website to which the card leads."
					icon={
						<IconRuler size={120} className="mb-10 text-slate50" stroke={1} />
					}
				/>
				<AboutBox
					title="Wierzymy w prostotę"
					description="A short description of the service you offer or section of the website to which the card leads."
					icon={
						<IconAsteriskSimple
							size={120}
							className="mb-10 text-slate50"
							stroke={1}
						/>
					}
				/>
				<AboutBox
					title="Bez pośredników"
					description="A short description of the service you offer or section of the website to which the card leads."
					icon={
						<IconHandOff size={120} className="mb-10 text-slate50" stroke={1} />
					}
				/>
			</div>
		</Section>
	);
};
