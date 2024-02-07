/** @type {import('next').NextConfig} */
const path = require("path");
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
				pathname: "/dstimijog/image/upload/**",
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
