import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Category } from "@/components/organisms/Category";

export const CategorySection = () => {
	return (
		<Section className="container mx-auto">
			<SectionHeading
				title="Twój dom, twój projekt"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				subHeading="Kategorie"
				containerStyle="tablet:text-center tablet:items-center tablet:mx-auto"
				containerHeadingStyle="tablet:text-center tablet:items-center"
				descriptionClassName="tablet:text-center "
			/>
			<div className="mx-[-1.563rem] mt-[50px] flex flex-row laptop:mx-0 laptop:space-x-10">
				<Category
					href="/"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385347/table-mobile_zbtmux_azge19.webp"
					alt="Stoliki"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385347/table-desktop_jlpwqf_h1i5pz.webp"
					title="Stoliki"
				/>
				<Category
					href="/"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385343/clock-mobile_revov9_djxphc.webp"
					alt="Zegary"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385343/clock-desktop_kisu3w_lkn1dt.webp"
					title="Zegary"
				/>
			</div>
		</Section>
	);
};
