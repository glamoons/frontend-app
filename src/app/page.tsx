import { HeroBaner } from "@/components/organisms/HeroBaner";
import { BenefitSection } from "@/components/templates/BenefitSection";
import { CategorySection } from "@/components/templates/CategorySection";
import { ConfiguratorSection } from "@/components/templates/ConfiguratorSection";
import { ContactSection } from "@/components/templates/ContactSection";
import { NewsletterSection } from "@/components/templates/NewsletterSection";

export default function Home() {
	return (
		<>
			<HeroBaner
				src={
					"https://res.cloudinary.com/dstimijog/image/upload/v1710228435/slider_image_mobile_b6f0da0bf2.webp"
				}
				laptopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1710228446/large_slider_image_desktop_42c5131783.webp"
				desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1710228446/slider_image_desktop_42c5131783.webp"
				alt={"Glamoons: konfigurowalne bazy MDF z oświetleniem LED."}
			/>
			<CategorySection />
			<ConfiguratorSection />
			<BenefitSection />
			<NewsletterSection />
			<ContactSection />
		</>
	);
}
