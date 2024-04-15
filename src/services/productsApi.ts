import { redirect } from "next/navigation";
import { executeQuery } from "./api/api-config";
import {
	type ProductContentFullFragment,
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type ProductGetByIdQueryVariables,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeQuery({
		query: ProductsGetListDocument,
		variables: {
			sort: "name",
		},
		next: {
			revalidate: 15,
		},
	});

	if (!graphqlResponse.Products || !graphqlResponse.Products.docs) {
		throw TypeError("Response does not contain products");
	}

	return graphqlResponse.Products.docs as ProductContentFullFragment[];
};

export const getProductById = async (
	id: ProductGetByIdQueryVariables["id"],
) => {
	const graphqlResponse = await executeQuery({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
		next: {
			revalidate: 1,
		},
	});

	if (!graphqlResponse.Product) {
		redirect("/");
	}

	return graphqlResponse.Product;
};
