import { type Metadata } from "next";
import SingleProductPage from "./SingleProductPage";
import { getProductById, getProductsList } from "@/services/productsApi";
import { type ProductVariation } from "@/gql/graphql";

export const dynamicParams = false;

export async function generateStaticParams() {
	const products = await getProductsList();
	const variationsProduct: ProductVariation[] =
		products[0].variations?.nodes ?? [];

	return variationsProduct.map((variation) => ({
		slug: variation.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const products = await getProductsList();
	const variationsProduct: ProductVariation[] =
		products[0].variations?.nodes ?? [];
	const productBySlug = variationsProduct.find(
		(variation) => variation.slug === params.slug,
	);

	if (!productBySlug) {
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
	searchParams: { shape: string; size: string; color: string };
}) {
	const products = await getProductsList();
	const defaultProductId = products[0].id;

	return (
		<SingleProductPage
			params={params}
			searchParams={searchParams}
			defaultProductId={defaultProductId}
		/>
	);
}
