import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";

const ContactPage = () => {
	return (
		<Section className="bg-slate50">
			<div className="relative tablet:flex tablet:flex-row">
				<div className="4xl:w-2/3 w-full pb-[50px] tablet:w-1/2 tablet:pb-0">
					<div className="container bottom-0 left-0 right-0 top-0 mx-auto flex flex-col items-start justify-center space-y-6 laptop:absolute">
						<SectionHeading
							subHeading="O produkcie"
							title="Zaprojektuj swój mebel"
							description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
							containerStyle="text-left items-start"
							descriptionClassName="line-clamp-3 laptop:line-clamp-none"
						/>
						<SecondaryButton
							className="w-full max-w-none tabletLg:w-auto"
							href={"/"}
							aria-label="skonfiguruj"
						>
							skonfiguruj
						</SecondaryButton>
					</div>
				</div>
				<div className="4xl:w-1/3 relative -mb-[50px] h-[24.375rem] tablet:-mt-[50px] tablet:w-1/2 laptop:h-[35rem] desktop:-mb-[100px] desktop:-mt-[100px] xl:h-[37.5rem] 2xl:h-[43.75rem]">
					<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/20" />
					<ResponsiveImage
						mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385345/informational_mobile_nphus5_qfd61k.webp"
						alt="Konfigurator"
						desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1708670729/about-product_l6xxbi.webp"
						sizes="(max-width: 601px) 100vw, 50vw"
					/>
				</div>
			</div>
		</Section>
	);
};

export default ContactPage;
