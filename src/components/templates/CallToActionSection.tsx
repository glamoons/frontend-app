import { Section } from "@/components/atoms/Section";
import {
	SectionHeading,
	type SectionHeadingProps,
} from "@/components/molecules/SectionHeading";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { type ButtonProps } from "@/components/atoms/DefaultButton";

type CallToActionSectionProps = Omit<
	SectionHeadingProps,
	| "headingClassName"
	| "subHeadingClassName"
	| "descriptionClassName"
	| "containerStyle"
	| "containerHeadingStyle"
	| "subHeading"
> & {
	btnName: ButtonProps["children"];
	href: ButtonProps["href"];
};

export const CallToActionSection = ({
	title,
	btnName,
	href,
	description,
}: CallToActionSectionProps) => {
	return (
		<Section className="!py-0 3xl:container">
			<div className="flex flex-col items-center space-y-8 bg-slate50 px-[1.563rem] py-[50px] desktop:py-[100px] 3xl:rounded-3xl">
				<SectionHeading
					title={title}
					description={description}
					containerStyle="text-center items-center justify-center mx-auto"
				/>
				<SecondaryButton
					href={href}
					aria-label={btnName}
					className="w-full max-w-none tabletLg:w-auto"
				>
					{btnName}
				</SecondaryButton>
			</div>
		</Section>
	);
};
