import { redirect } from "next/navigation";
import { executeQuery } from "./api/api-config";
import {
	ProductGetAttributesByProductIdDocument,
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetAttributesByProductIdQueryVariables,
	type ProductGetByIdQueryVariables,
	type VariableProduct,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeQuery({
		query: ProductsGetListDocument,
		variables: {
			field: "DATE",
			order: "ASC",
		},
		next: {
			revalidate: 15,
		},
	});

	if (!graphqlResponse.products || !graphqlResponse.products.nodes) {
		throw TypeError("Response does not contain products");
	}

	const products = graphqlResponse.products.nodes as VariableProduct[];

	return products.map((product) => {
		return {
			...product,
		};
	});
};

export const getProductById = async (
	id: ProductGetByIdQueryVariables["id"],
) => {
	const graphqlResponse = await executeQuery({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});

	if (!graphqlResponse.product) {
		redirect("/");
	}

	return graphqlResponse.product as VariableProduct;
};

export const getProductAttributesByProductId = async (
	id: ProductGetAttributesByProductIdQueryVariables["id"],
) => {
	const graphqlResponse = await executeQuery({
		query: ProductGetAttributesByProductIdDocument,
		variables: {
			id,
		},
	});

	if (!graphqlResponse.product || !graphqlResponse.product.attributes) {
		throw TypeError("Response does not contain product attributes");
	}

	return graphqlResponse.product.attributes.nodes;
};
