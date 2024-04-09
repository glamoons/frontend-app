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
    "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  price\n  image {\n    ...ProductGetMediaItem\n  }\n  variants {\n    ... on Color {\n      id\n      color\n      blockName\n      blockType\n    }\n    ... on Size {\n      id\n      size\n      blockName\n      blockType\n    }\n    ... on Shape {\n      id\n      shape\n      blockName\n      blockType\n    }\n  }\n}": types.ProductContentFullFragmentDoc,
    "query ProductGetById($id: Int!) {\n  Product(id: $id) {\n    ...ProductContentFull\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductGetMediaItem on Media {\n  alt\n  url\n  height\n  width\n}": types.ProductGetMediaItemFragmentDoc,
    "query ProductsGetList($sort: String) {\n  Products(sort: $sort) {\n    docs {\n      ...ProductContentFull\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  price\n  image {\n    ...ProductGetMediaItem\n  }\n  variants {\n    ... on Color {\n      id\n      color\n      blockName\n      blockType\n    }\n    ... on Size {\n      id\n      size\n      blockName\n      blockType\n    }\n    ... on Shape {\n      id\n      shape\n      blockName\n      blockType\n    }\n  }\n}"): typeof import('./graphql').ProductContentFullFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: Int!) {\n  Product(id: $id) {\n    ...ProductContentFull\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductGetMediaItem on Media {\n  alt\n  url\n  height\n  width\n}"): typeof import('./graphql').ProductGetMediaItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($sort: String) {\n  Products(sort: $sort) {\n    docs {\n      ...ProductContentFull\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
