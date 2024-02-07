import { HeroBaner } from "@/components/organisms/HeroBaner";
import { BenefitSection } from "@/components/templates/BenefitSection";
import { CategorySection } from "@/components/templates/CategorySection";
import { ConfiguratorSection } from "@/components/templates/ConfiguratorSection";
import { ContactSection } from "@/components/templates/ContactSection";
import { NewsSection } from "@/components/templates/NewsSections";
import { NewsletterSection } from "@/components/templates/NewsletterSection";
import { ReviewsSection } from "@/components/templates/ReviewsSection";

export default function Home() {
	return (
		<>
			<HeroBaner
				src={
					"https://res.cloudinary.com/dstimijog/image/upload/v1707294382/slider-image-mobile_vrefc4.jpg"
				}
				laptopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1707294382/slider-image-laptop_v8bksg.jpg"
				desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1707294382/slider-image-desktop_ampklf.jpg"
				alt={"Glamoons: konfigurowalne stoliki i zegary w stylu glamour."}
			/>
			<CategorySection />
			<ConfiguratorSection />
			<BenefitSection />
			<NewsletterSection />
			<ReviewsSection />
			<NewsSection />
			<ContactSection />
		</>
	);
}
