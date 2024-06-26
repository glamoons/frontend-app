import { type PropsWithChildren } from "react";
import { DefaultText } from "@/components/atoms/DefaultText";
import { Heading } from "@/components/atoms/Heading";
import { SubHeading } from "@/components/atoms/SubHeading";
import { type HTMLElements } from "@/interfaces/base";
import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
	title: PropsWithChildren["children"];
	description?: HTMLElements<HTMLParagraphElement>["children"];
	headingClassName?: HTMLElements<HTMLHeadingElement>["className"];
	subHeadingClassName?: HTMLElements<HTMLHeadingElement>["className"];
	descriptionClassName?: HTMLElements<HTMLParagraphElement>["className"];
	containerStyle?: HTMLElements<HTMLDivElement>["className"];
	subHeading?: HTMLElements<HTMLHeadingElement>["className"];
	containerHeadingStyle?: HTMLElements<HTMLHeadingElement>["className"];
};

export const SectionHeading = ({
	title,
	description,
	headingClassName,
	subHeadingClassName,
	descriptionClassName,
	containerStyle,
	subHeading,
	containerHeadingStyle,
}: SectionHeadingProps) => {
	return (
		<div
			className={cn(
				"flex max-w-[500px] flex-col items-start space-y-4 text-left",
				containerStyle,
			)}
		>
			<div className={cn("flex flex-col items-start", containerHeadingStyle)}>
				{subHeading && (
					<SubHeading className={cn(subHeadingClassName)}>
						{subHeading}
					</SubHeading>
				)}
				<Heading className={cn(headingClassName)}>{title}</Heading>
			</div>
			<DefaultText className={cn(descriptionClassName)}>
				{description}
			</DefaultText>
		</div>
	);
};
