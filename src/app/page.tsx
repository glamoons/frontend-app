import { Header } from "@/components/molecules/Header/Header";
import { HeroBaner } from "@/components/molecules/Hero/HeroBaner";
import { BenefitSection } from "@/components/organisms/BenefitSection";
import { CategorySection } from "@/components/organisms/CategorySection";
import { ConfiguratorSection } from "@/components/organisms/ConfiguratorSection";
import { NewsletterSection } from "@/components/organisms/NewsletterSection";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroBaner
					src={"https://res.cloudinary.com/dstimijog/image/upload/v1706510334/image_rovc3s.jpg"}
					desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706510116/image_pkqf2b.jpg"
					alt={"Glamoons: konfigurowalne stoliki i zegary w stylu glamour."}
				/>
				<CategorySection />
				<ConfiguratorSection />
				<BenefitSection />
				<NewsletterSection />
			</main>
		</>
	);
}
