import { DefaultText } from "@/components/atoms/DefaultText";
import { QuotationText } from "@/components/atoms/QuotationText";
import { Section } from "@/components/atoms/Section";
import { SubHeading } from "@/components/atoms/SubHeading";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { RoundedButton } from "../atoms/RoundedButton";

export const ReviewsSection = () => {
	return (
		<Section className="container mx-auto">
			<article className="relative flex flex-col space-y-6 tabletLg:mx-auto tabletLg:max-w-[560px]">
				<SubHeading>Klienci o nas</SubHeading>
				<QuotationText>
					Świetne stoliki i profesjonalne wykonanie oraz obsługa.
				</QuotationText>
				<DefaultText className="font-light text-primaryDark">
					Anna Jarocka
				</DefaultText>
				<div
					className="
				flex
				flex-row
				justify-end
				space-x-3
				laptop:absolute
				laptop:top-1/2
				laptop:!mt-0
				laptop:w-full
				laptop:-translate-y-1/2
				laptop:justify-between
				laptop:space-x-0"
				>
					<RoundedButton className="laptop:-ml-[8.5rem]" aria-label="Poprzedni">
						<IconChevronLeft />
					</RoundedButton>
					<RoundedButton
						className="laptop:!-mr-[4.25rem]"
						aria-label="Następny"
					>
						<IconChevronRight />
					</RoundedButton>
				</div>
			</article>
		</Section>
	);
};
