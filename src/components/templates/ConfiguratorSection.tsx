import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";

export const ConfiguratorSection = () => {
	return (
		<Section className="overflow-hidden bg-slate50">
			<div className="container mx-auto tablet:flex tablet:flex-row">
				<div className="mt-[-50px] flex min-h-[390px] flex-col items-center justify-center space-y-6 tablet:mr-[1.563rem] tablet:mt-0 tablet:min-h-max tablet:w-1/2 tabletLg:items-start desktop:mr-[3.125rem]">
					<SectionHeading
						subHeading="inspiracje"
						title="Twórz produkty dzięki naszej bazie MDF"
						description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
						containerStyle="text-left items-start"
					/>
					<SecondaryButton
						className="w-full max-w-none tabletLg:w-auto"
						href={"/"}
						aria-label="sprawdź"
					>
						sprawdź
					</SecondaryButton>
				</div>
				<div className="relative -mx-[1.563rem] mb-[-50px] aspect-square h-full max-h-[36rem] w-screen max-w-[43.75rem] tablet:mx-0 tablet:-mr-[1.563rem] tablet:-mt-[50px] tablet:h-auto desktop:-mb-[100px] desktop:-mr-[calc(50%+8.75rem)] desktop:-mt-[100px]">
					<ResponsiveImage
						mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710484036/informational_mobile_nphus5_qfd61k.webp"
						alt="Glamoons - zegar z jeleniem i oświetleniem LED na bazie MDF"
						desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710484031/informational_desktop_icxcw9_m98ljp.webp"
						sizes="(max-width: 601px) 100vw, 50vw"
					/>
				</div>
			</div>
		</Section>
	);
};
