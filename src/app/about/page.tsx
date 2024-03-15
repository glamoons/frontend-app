import { type Metadata } from "next";
import { PlayButton } from "@/components/atoms/PlayButton";
import { AboutSection } from "@/components/templates/AboutSection";
import { BenefitSection } from "@/components/templates/BenefitSection";
import { CallToActionSection } from "@/components/templates/CallToActionSection";
import { ContactSection } from "@/components/templates/ContactSection";
import { ProductSection } from "@/components/templates/ProductSection";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com/about",
		},
	};
}

const ProductPage = () => {
	return (
		<>
			<ProductSection
				subHeading="O produkcie"
				title="Unikalna Baza MDF"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710493907/product-image-mobile-01_bmbj4g.webp"
				alt="Baza MDF"
				desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710493587/about-product_l6xxbi.webp"
				btnName="Zamów bazę MDF"
				href="/"
				right={false}
			/>
			<ProductSection
				subHeading="Poczuj perfekcjonizm na własnej skórze"
				title="Oświetlenie LED"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve. 
				Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to the tone of voice. Try to win the customers’ trust by being positive."
				mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710493914/product-image-mobile-02_bmbj4g.webp"
				alt="Baza MDF z oświetleniem LED"
				desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710493580/product-image-02_dqjkxf.webp"
				right
			/>
			<ProductSection
				subHeading="Ekskluzywny wygląd"
				title="Dopasuj bazę MDF do swojego produktu"
				description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
				mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710493910/product-image-mobile-03_qrgqqy.webp"
				alt="Dopasuj bazę MDF do swojego produktu"
				desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710494116/product-image-03_mpj4r8.webp"
				right={false}
				picItems={
					<PlayButton
						aria-label="Konfigurator Glammoons - obejrzyj krótkie video"
						className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
					/>
				}
			/>
			<AboutSection />
			<BenefitSection />
			<CallToActionSection
				title="Zamów bazę MDF dokładnie taką jaką chcesz"
				btnName="Zamów teraz"
				href="/"
				description="Lorem ipsum dolor sit amet elipsum perolum, kuwesum hamed kaselim gubasi tupate katet"
				className="mt-[50px] desktop:mt-[100px]"
			/>
			<ContactSection />
		</>
	);
};

export default ProductPage;
