import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.",
		short_name: "Glamoons",
		description:
			"Stoliki i zegary w stylu glamour do pełnej konfiguracji. Darmowa dostawa i zwroty do 100 dni.",
		start_url: "/",
		display: "standalone",
		background_color: "#F6F6F4",
		theme_color: "#D1D1C7",
		icons: [
			{
				src: "/images/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/images/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
