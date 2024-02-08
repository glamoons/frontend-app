import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ResponsiveImage } from "../atoms/ResponsiveImage";
import { SecondaryButton } from "../atoms/SecondaryButton";

export const ConfiguratorSection = () => {
	return (
		<Section className="overflow-hidden bg-primaryLight 3xl:container 3xl:rounded-3xl">
			<div className="container mx-auto tablet:flex tablet:flex-row 3xl:px-0">
				<div className="mt-[-50px] flex min-h-[390px] flex-col items-center justify-center space-y-6 tablet:mr-[1.563rem] tablet:mt-0 tablet:min-h-max tablet:w-1/2 tabletLg:items-start desktop:mr-[3.125rem]">
					<SectionHeading
						subHeading="konfigurator"
						title="Dostosuj swój stolik"
						description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
						containerStyle="text-left items-start"
					/>
					<SecondaryButton
						className="w-full max-w-none tabletLg:w-auto"
						href={"/"}
						aria-label="skonfiguruj"
					>
						skonfiguruj
					</SecondaryButton>
				</div>
				<div className="relative -mx-[1.563rem] mb-[-50px] h-[390px] tablet:mx-0 tablet:-mr-[1.563rem] tablet:-mt-[50px] tablet:w-1/2 desktop:-mb-[100px] desktop:-mr-[calc(50%+8.75rem)] desktop:-mt-[100px] desktop:h-[476px] desktop:w-[700px] 2xl:h-[576px]">
					<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/15" />
					<ResponsiveImage
						mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385345/informational_mobile_nphus5_qfd61k.webp"
						alt="Konfigurator"
						desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385344/informational_desktop_icxcw9_m98ljp.webp"
					/>
				</div>
			</div>
		</Section>
	);
};
