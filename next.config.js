/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	output: "standalone",
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
