/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	output: "standalone",
	experimental: {
		typedRoutes: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
