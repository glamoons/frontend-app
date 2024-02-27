import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { AboutBox } from "@/components/organisms/AboutBox";

export const AboutSection = () => {
	return (
		<Section className="container mx-auto space-y-10">
			<SectionHeading
				subHeading="O nas"
				title="Tworzymy na zamówienie i dostarczamy bezpośrednio pod Twoje drzwi"
			/>
			<div className="-mx-[1.563rem] flex flex-col space-y-3 overflow-hidden">
				<AboutBox
					title="Tworzymy na zamówienie"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-mobile-01_sacrcx.webp"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-desktop-01_ha4p4w.webp"
					description="A short description of the service you offer or section of the website to which the card leads."
				/>
				<AboutBox
					title="Wierzymy w prostotę"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-mobile-02_c97ysk.webp"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-desktop-02_v2dgri.webp"
					description="A short description of the service you offer or section of the website to which the card leads."
				/>
				<AboutBox
					title="Bez pośredników"
					mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-mobile-03_yawpty.webp"
					desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1709014328/about-product-desktop-03_tnlj7e.webp"
					description="A short description of the service you offer or section of the website to which the card leads."
				/>
			</div>
		</Section>
	);
};
