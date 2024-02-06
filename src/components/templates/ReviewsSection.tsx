import { DefaultText } from "@/components/atoms/DefaultText";
import { QuotationText } from "@/components/atoms/QuotationText";
import { Section } from "@/components/atoms/Section";
import { SubHeading } from "@/components/atoms/SubHeading";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { RoundedButton } from "../atoms/RoundedButton";

export const ReviewsSection = () => {
	return (
		<Section className="container mx-auto">
			<article className="tabletLg:max-w-[560px] tabletLg:mx-auto flex flex-col space-y-6">
				<SubHeading>Klienci o nas</SubHeading>
				<QuotationText>
					Świetne stoliki i profesjonalne wykonanie oraz obsługa.
				</QuotationText>
				<DefaultText className="font-light text-primaryDark">
					Anna Jarocka
				</DefaultText>
				<div className="flex flex-row justify-end space-x-3">
					<RoundedButton>
						<IconChevronLeft />
					</RoundedButton>
					<RoundedButton>
						<IconChevronRight />
					</RoundedButton>
				</div>
			</article>
		</Section>
	);
};
