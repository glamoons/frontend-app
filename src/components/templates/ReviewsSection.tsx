import { DefaultText } from "@/components/atoms/DefaultText";
import { QuotationText } from "@/components/atoms/QuotationText";
import { Section } from "@/components/atoms/Section";
import { SubHeading } from "@/components/atoms/SubHeading";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { RoundedButton } from "../atoms/RoundedButton";

export const ReviewsSection = () => {
	return (
		<Section className="container mx-auto">
			<article className="tabletLg:max-w-[560px] tabletLg:mx-auto relative flex flex-col space-y-6">
				<SubHeading>Klienci o nas</SubHeading>
				<QuotationText>
					Świetne stoliki i profesjonalne wykonanie oraz obsługa.
				</QuotationText>
				<DefaultText className="font-light text-primaryDark">
					Anna Jarocka
				</DefaultText>
				<div
					className="
				laptop:absolute
				laptop:top-1/2
				laptop:-translate-y-1/2
				laptop:!mt-0
				laptop:justify-between
				laptop:w-full
				laptop:space-x-0
				flex
				flex-row
				justify-end
				space-x-3"
				>
					<RoundedButton className="laptop:-ml-[8.5rem]">
						<IconChevronLeft />
					</RoundedButton>
					<RoundedButton className="laptop:!-mr-[4.25rem]">
						<IconChevronRight />
					</RoundedButton>
				</div>
			</article>
		</Section>
	);
};
