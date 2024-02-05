import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ResponsiveImage } from "../atoms/ResponsiveImage";
import { SecondaryButton } from "../atoms/SecondaryButton";

export const ConfiguratorSection = () => {
	return (
		<Section className="bg-primaryLight">
			<div className="tablet:flex tablet:flex-row container mx-auto">
				<div className="tablet:w-1/2 tablet:min-h-max tablet:mr-[1.563rem] tablet:mt-0 mt-[-50px] flex min-h-[390px] flex-col items-center justify-center space-y-6">
					<SectionHeading
						subHeading="konfigurator"
						title="Dostosuj swój stolik"
						description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
						containerStyle="text-left items-start"
					/>
					<SecondaryButton className="w-full max-w-none" href={"/"}>
						skonfiguruj
					</SecondaryButton>
				</div>
				<div className="tablet:w-1/2 tablet:mx-0 tablet:mt-[-50px] tablet:h-auto tablet:mr-[-1.563rem] relative mx-[-1.563rem] mb-[-50px] h-[390px]">
					<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/15" />
					<ResponsiveImage
						mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706681759/informational_mobile_nphus5.jpg"
						alt="Konfigurator"
						desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706681759/informational_desktop_icxcw9.jpg"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</Section>
	);
};
