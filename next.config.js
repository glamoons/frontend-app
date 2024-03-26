/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	output: "standalone",
	redirects: async () => {
		return [
			{
				source: "/product/:slug",
				destination: "/product/:slug/1",
				permanent: true,
			},
		];
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/dstimijog/**",
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
