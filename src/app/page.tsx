import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { HeroBaner } from "@/components/organisms/HeroBaner";
import { BenefitSection } from "@/components/templates/BenefitSection";
import { CategorySection } from "@/components/templates/CategorySection";
import { ConfiguratorSection } from "@/components/templates/ConfiguratorSection";
import { ContactSection } from "@/components/templates/ContactSection";
import { Menu } from "@/components/templates/Menu";
import { NewsSection } from "@/components/templates/NewsSections";
import { NewsletterSection } from "@/components/templates/NewsletterSection";
import { ReviewsSection } from "@/components/templates/ReviewsSection";

export default function Home() {
	return (
		<>
			<Header />
			<Menu />
			<main>
				<HeroBaner
					src={
						"https://res.cloudinary.com/dstimijog/image/upload/v1706510334/image_rovc3s.jpg"
					}
					desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706510116/image_pkqf2b.jpg"
					alt={"Glamoons: konfigurowalne stoliki i zegary w stylu glamour."}
				/>
				<CategorySection />
				<ConfiguratorSection />
				<BenefitSection />
				<NewsletterSection />
				<ReviewsSection />
				<NewsSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
