import { executeQuery } from "./api/api-config";
import {
	HomepageProductsGetListDocument,
	type SimpleProduct,
} from "@/gql/graphql";

export const HomepageApi = () => {
	const getHomepageProductsList = async () => {
		const graphqlResponse = await executeQuery({
			query: HomepageProductsGetListDocument,
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

	return {
		getHomepageProductsList,
	};
};
