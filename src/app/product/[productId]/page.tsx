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
		productId: variation.id,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product?.name,
		openGraph: {
			title: `${product?.name}`,
		},
	};
}

export default async function ProductDetailsPage({
	params,
}: {
	params: { productId: string };
}) {
	const products = await getProductsList();
	const defaultProductId = products[0].id;
	return (
		<SingleProductPage params={params} defaultProductId={defaultProductId} />
	);
}
