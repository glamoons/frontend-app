import { HeroBaner } from "@/components/molecules/Hero/HeroBaner";

export default function Home() {
	return (
		<main>
			<HeroBaner
				src={"https://res.cloudinary.com/dstimijog/image/upload/v1706510334/image_rovc3s.jpg"}
				desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706510116/image_pkqf2b.jpg"
				alt={""}
			/>
		</main>
	);
}
