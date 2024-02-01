import { Heading } from "@/components/atoms/Heading";
import { DefaultText } from "@/components/atoms/DefaultText";
import { cn } from "@/lib/utils";
import { SubHeading } from "@/components/atoms/SubHeading";

type SectionHeadingProps = {
	title: string;
	description?: string;
	headingClassName?: string;
	subHeadingClassName?: string;
	descriptionClassName?: string;
	containerStyle?: string;
	subHeading?: string;
};

export const SectionHeading = ({
	title,
	description,
	headingClassName,
	subHeadingClassName,
	descriptionClassName,
	containerStyle,
	subHeading,
}: SectionHeadingProps) => {
	return (
		<div className={cn("flex flex-col items-start space-y-4 text-left", containerStyle)}>
			<div className="flex flex-col items-start">
				{subHeading && <SubHeading className={cn(subHeadingClassName)}>{subHeading}</SubHeading>}
				<Heading className={headingClassName}>{title}</Heading>
			</div>
			<DefaultText className={cn(descriptionClassName)}>{description}</DefaultText>
		</div>
	);
};
