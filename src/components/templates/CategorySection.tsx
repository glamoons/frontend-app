import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Category } from "@/components/organisms/Category";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";

export const CategorySection = () => {
	return (
		<Section className="container mx-auto">
			<SectionHeading
				title="Twój projekt, twoja baza"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				subHeading="Produkty"
				containerStyle="tablet:text-center tablet:items-center tablet:mx-auto"
				containerHeadingStyle="tablet:text-center tablet:items-center"
				descriptionClassName="tablet:text-center "
			/>
			<div className="mx-[-1.563rem] mt-[50px] laptop:mx-0 laptop:space-x-10">
				<div className="flex flex-row">
					<div className="flex w-full flex-col">
						<Category
							href="/"
							mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710536717/product-item_bgacz4.webp"
							alt="Stoliki"
							desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385347/table-desktop_jlpwqf_h1i5pz.webp"
							title="Stoliki"
						/>
						<CategoryHolder
							title="Baza MDF z podświetleniem LED"
							size="30 cm"
							price="99 zł"
						/>
					</div>
					<div className="flex w-full flex-col">
						<Category
							href="/"
							mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710536717/product-item_bgacz4.webp"
							alt="Stoliki"
							desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1707385347/table-desktop_jlpwqf_h1i5pz.webp"
							title="Stoliki"
						/>
						<CategoryHolder
							title="Baza MDF z podświetleniem LED"
							size="40 cm"
							price="120 zł"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};
