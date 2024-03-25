import { redirect } from "next/navigation";
import { executeQuery } from "./api/api-config";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetByIdQuery,
	type ProductGetByIdQueryVariables,
	type VariableProduct,
	type ProductGetAttributesByProductIdQueryVariables,
	ProductGetAttributesByProductIdDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeQuery({
		query: ProductsGetListDocument,
		variables: {
			first: 6,
			field: "IN",
			order: "DESC",
		},
	});

	if (!graphqlResponse.products || !graphqlResponse.products.nodes) {
		throw TypeError("Response does not contain products");
	}

	const variableProducts = graphqlResponse.products.nodes as VariableProduct[];

	return variableProducts.map((product) => {
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

	if (!graphqlResponse.productVariation) {
		redirect("/");
	}

	return graphqlResponse.productVariation as ProductGetByIdQuery["productVariation"];
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
