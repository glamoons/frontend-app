import { type Metadata } from "next";
import SingleProductPage from "./SingleProductPage";
import { getProductById, getProductsList } from "@/services/productsApi";

export const dynamicParams = false;

export async function generateStaticParams() {
	const products = await getProductsList();

	return products.map((product) => ({
		slug: product.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const products = await getProductsList();
	const productBySlug = products.find(
		(product) => product.slug === params.slug,
	);

	if (!productBySlug || !productBySlug.id) {
		throw TypeError("Product not found");
	}

	const product = await getProductById(productBySlug.id);

	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: `https://dev.glamoons.com/product/${params.slug}`,
		},
		title: product?.name,
		openGraph: {
			title: `${product?.name}`,
		},
	};
}

export default async function ProductDetailsPage({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { vId: string };
}) {
	return <SingleProductPage params={params} searchParams={searchParams} />;
}
