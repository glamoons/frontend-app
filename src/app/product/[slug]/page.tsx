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
		slug: `${variation.id},g,${variation.slug}`,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const productId = params.slug.split(",")[0];
	const product = await getProductById(productId);

	return {
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
	const productId = params.slug.split(",")[0];
	return (
		<SingleProductPage
			productId={productId}
			searchParams={searchParams}
			defaultProductId={defaultProductId}
		/>
	);
}
