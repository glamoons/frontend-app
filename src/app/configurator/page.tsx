import { type Metadata } from "next";
import SingleProductPage from "./SingleProductPage";
import { getProductById, getProductsList } from "@/services/productsApi";
import { type ProductVariation } from "@/gql/graphql";

export const runtime = "edge";

export async function generateMetadata({
	searchParams,
}: {
	searchParams: { productName: string };
}): Promise<Metadata> {
	const products = await getProductsList();
	const variationsProduct: ProductVariation[] =
		products[0].variations?.nodes ?? [];
	const productBySlug = variationsProduct.find(
		(variation) => variation.slug === searchParams.productName,
	);

	if (!productBySlug) {
		throw TypeError("Product not found");
	}

	const product = await getProductById(productBySlug.id);

	return {
		metadataBase: new URL("https://dev.glamoons.com"),
		alternates: {
			canonical: `https://dev.glamoons.com/configurator/?productName=${searchParams.productName}`,
		},
		title: product?.name,
		openGraph: {
			title: `${product?.name}`,
		},
	};
}

export default async function ConfiguratorPage({
	searchParams,
}: {
	searchParams: {
		productName: string;
		shape: string;
		size: string;
		color: string;
	};
}) {
	const products = await getProductsList();
	const defaultProductId = products[0].id;

	return (
		<SingleProductPage
			searchParams={searchParams}
			defaultProductId={defaultProductId}
		/>
	);
}
