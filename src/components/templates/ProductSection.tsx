import {
	SectionHeading,
	type SectionHeadingProps,
} from "@/components/molecules/SectionHeading";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@//components/atoms/Section";
import { type ButtonProps } from "@/components/atoms/DefaultButton";
import { type ResponsiveImageProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type ProductSectionProps = Omit<
	SectionHeadingProps,
	| "headingClassName"
	| "subHeadingClassName"
	| "descriptionClassName"
	| "containerStyle"
	| "containerHeadingStyle"
> &
	ResponsiveImageProps & {
		href?: ButtonProps["href"];
		btnName?: ButtonProps["children"];
		right: boolean;
	};

export const ProductSection = ({
	subHeading,
	title,
	description,
	btnName,
	href,
	mobileSrc,
	alt,
	desktopSrc,
	right = false,
}: ProductSectionProps) => {
	return (
		<Section className="overflow-hidden bg-slate50">
			<div className="relative tablet:flex tablet:flex-row tablet:items-center">
				<div
					className={cn(
						"w-full pb-[50px] tablet:w-1/2 tablet:pb-0 4xl:w-full",
						right ? "order-2" : "order-1",
					)}
				>
					<div
						className={cn(
							"container bottom-0 left-0 right-0 top-0 mx-auto laptop:absolute 4xl:relative 4xl:flex 4xl:flex-row 4xl:items-center",
							right ? "laptop:ml-[50%] 4xl:ml-auto" : "",
						)}
					>
						<div
							className={cn(
								"flex h-full flex-col items-start justify-center space-y-6",
								right ? "order-2 4xl:ml-[8.75rem]" : "order-1 4xl:mr-[8.75rem]",
							)}
						>
							<SectionHeading
								subHeading={subHeading}
								title={title}
								description={description}
								containerStyle="text-left items-start"
								descriptionClassName="line-clamp-3 laptop:line-clamp-none"
							/>
							{btnName && href && (
								<SecondaryButton
									className="w-full max-w-none tabletLg:w-auto"
									href={href}
									aria-label={btnName}
								>
									{btnName}
								</SecondaryButton>
							)}
						</div>
						<div
							className={cn(
								"relative hidden aspect-square h-full w-[45rem] desktop:-mb-[100px] desktop:-mt-[100px] 4xl:block",
								right ? "order-1 -ml-[3.25rem]" : "order-2 -mr-[3.25rem]",
							)}
						>
							<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/20" />
							<ResponsiveImage
								mobileSrc={mobileSrc}
								alt={alt}
								desktopSrc={desktopSrc}
								sizes="(max-width: 601px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
				<div
					className={cn(
						"relative -mb-[50px] aspect-square h-full tablet:-mt-[50px] tablet:w-1/2 desktop:-mb-[100px] desktop:-mt-[100px] 4xl:hidden",
						right ? "order-1" : "order-2",
					)}
				>
					<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/20" />
					<ResponsiveImage
						mobileSrc={mobileSrc}
						alt={alt}
						desktopSrc={desktopSrc}
						sizes="(max-width: 601px) 100vw, 50vw"
					/>
				</div>
			</div>
		</Section>
	);
};
