import { HeroBaner } from "@/components/organisms/HeroBaner";
import { BenefitSection } from "@/components/templates/BenefitSection";
import { CategorySection } from "@/components/templates/CategorySection";
import { ConfiguratorSection } from "@/components/templates/ConfiguratorSection";
import { ContactSection } from "@/components/templates/ContactSection";
import { NewsSection } from "@/components/templates/NewsSections";
import { NewsletterSection } from "@/components/templates/NewsletterSection";
import { ReviewsSection } from "@/components/templates/ReviewsSection";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: "https://dev.glamoons.com",
		},
		title: "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.",
		description:
			"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
		openGraph: {
			title: "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.",
			description:
				"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
			type: "website",
			siteName: "Glamoons",
			url: "https://dev.glamoons.com/",
		},
	};
}

export default function Home() {
	return (
		<>
			<HeroBaner
				src={
					"https://res.cloudinary.com/dstimijog/image/upload/v1707385346/slider-image-mobile_vrefc4_neezfh.webp"
				}
				laptopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1707385346/slider-image-laptop_v8bksg_obkzn4.webp"
				desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1707385345/slider-image-desktop_ampklf_j6fqwz.webp"
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
