import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Category } from "@/components/organisms/Category";

export const CategorySection = () => {
	return (
		<Section className="container mx-auto">
			<SectionHeading
				title="Co możemy dla Ciebie zrobić"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				subHeading="Kategorie"
				containerStyle="tablet:text-center tablet:items-center tablet:mx-auto"
				containerHeadingStyle="tablet:text-center tablet:items-center"
				descriptionClassName="tablet:text-center "
			/>
			<div className="mx-[-1.563rem] mt-[50px] flex flex-row laptop:mx-0 laptop:space-x-10">
				<Category
					href="/"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-mobile_zbtmux.jpg"
					alt="Stoliki"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-desktop_jlpwqf.jpg"
					title="Stoliki"
				/>
				<Category
					href="/"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-mobile_revov9.jpg"
					alt="Zegary"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-desktop_kisu3w.jpg"
					title="Zegary"
				/>
			</div>
		</Section>
	);
};
