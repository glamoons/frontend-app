/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetAttributesByProductId($id: ID!) {\n  product(id: $id) {\n    attributes {\n      nodes {\n        name\n        options\n      }\n    }\n  }\n}": types.ProductGetAttributesByProductIdDocument,
    "query ProductGetById($id: ID!) {\n  productVariation(id: $id) {\n    id\n    name\n    image {\n      ...ProductGetMediaItem\n    }\n    price(format: FORMATTED)\n    attributes {\n      nodes {\n        ...ProductGetVariationAttribute\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductsGetListItem on Product {\n  ... on VariableProduct {\n    variations(where: {orderby: {field: $field, order: $order}}, first: $first) {\n      nodes {\n        id\n        name\n        slug\n        image {\n          ...ProductGetMediaItem\n        }\n        price(format: FORMATTED)\n        attributes {\n          nodes {\n            ...ProductGetVariationAttribute\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetListItemFragmentDoc,
    "fragment ProductGetMediaItem on MediaItem {\n  altText\n  sourceUrl\n  sizes\n}": types.ProductGetMediaItemFragmentDoc,
    "fragment ProductGetVariationAttribute on VariationAttribute {\n  id\n  name\n  value\n}": types.ProductGetVariationAttributeFragmentDoc,
    "query ProductsGetList($first: Int = 6, $field: ProductsOrderByEnum = IN, $order: OrderEnum = ASC) {\n  products {\n    nodes {\n      id\n      ...ProductsGetListItem\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetAttributesByProductId($id: ID!) {\n  product(id: $id) {\n    attributes {\n      nodes {\n        name\n        options\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetAttributesByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  productVariation(id: $id) {\n    id\n    name\n    image {\n      ...ProductGetMediaItem\n    }\n    price(format: FORMATTED)\n    attributes {\n      nodes {\n        ...ProductGetVariationAttribute\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsGetListItem on Product {\n  ... on VariableProduct {\n    variations(where: {orderby: {field: $field, order: $order}}, first: $first) {\n      nodes {\n        id\n        name\n        slug\n        image {\n          ...ProductGetMediaItem\n        }\n        price(format: FORMATTED)\n        attributes {\n          nodes {\n            ...ProductGetVariationAttribute\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductGetMediaItem on MediaItem {\n  altText\n  sourceUrl\n  sizes\n}"): typeof import('./graphql').ProductGetMediaItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductGetVariationAttribute on VariationAttribute {\n  id\n  name\n  value\n}"): typeof import('./graphql').ProductGetVariationAttributeFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int = 6, $field: ProductsOrderByEnum = IN, $order: OrderEnum = ASC) {\n  products {\n    nodes {\n      id\n      ...ProductsGetListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
