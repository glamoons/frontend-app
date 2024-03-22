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
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductsGetListItem\n    galleryImages {\n      nodes {\n        ...ProductGetMediaItem\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductsGetListItem on Product {\n  ... on SimpleProduct {\n    id\n    slug\n    name\n    price\n    image {\n      ...ProductGetMediaItem\n    }\n    attributes {\n      nodes {\n        id\n        name\n        options\n      }\n    }\n  }\n}": types.ProductsGetListItemFragmentDoc,
    "fragment ProductGetMediaItem on MediaItem {\n  altText\n  sourceUrl\n  sizes\n}": types.ProductGetMediaItemFragmentDoc,
    "query ProductsGetList {\n  products {\n    nodes {\n      ...ProductsGetListItem\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductsGetListItem\n    galleryImages {\n      nodes {\n        ...ProductGetMediaItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsGetListItem on Product {\n  ... on SimpleProduct {\n    id\n    slug\n    name\n    price\n    image {\n      ...ProductGetMediaItem\n    }\n    attributes {\n      nodes {\n        id\n        name\n        options\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductGetMediaItem on MediaItem {\n  altText\n  sourceUrl\n  sizes\n}"): typeof import('./graphql').ProductGetMediaItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    nodes {\n      ...ProductsGetListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
