import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";
import { Section } from "@/components/atoms/Section";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import Link from "next/link";

export const CategorySection = () => {
	return (
		<Section className="container mx-auto ">
			<SectionHeading
				title="Co możemy dla Ciebie zrobić"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				subHeading="Kategorie"
			/>
			<div className="mx-[-1.563rem] mt-[50px] flex flex-row">
				<div className="relative h-[270px] w-1/2">
					<Link href="/">
						<ResponsiveImage
							mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-mobile_zbtmux.jpg"
							alt="Stoliki"
							desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-desktop_jlpwqf.jpg"
							style={{ objectFit: "cover" }}
						/>
						<CategoryHolder title="Stoliki" btnName="zobacz więcej" />
					</Link>
				</div>
				<div className="relative h-[270px] w-1/2">
					<Link href="/">
						<ResponsiveImage
							mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-mobile_revov9.jpg"
							alt="Zegary"
							desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-desktop_kisu3w.jpg"
							style={{ objectFit: "cover" }}
						/>
						<CategoryHolder title="Zegary" btnName="zobacz więcej" />
					</Link>
				</div>
			</div>
		</Section>
	);
};
