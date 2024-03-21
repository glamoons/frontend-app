import { redirect } from "next/navigation";
import { executeQuery } from "./api/api-config";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetByIdQueryVariables,
	type SimpleProduct,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeQuery({
		query: ProductsGetListDocument,
	});

	if (!graphqlResponse.products || !graphqlResponse.products.nodes) {
		throw TypeError("Response does not contain products");
	}

	return graphqlResponse.products.nodes.map((product) => {
		return {
			...(product as SimpleProduct),
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

	return graphqlResponse.product as SimpleProduct;
};
