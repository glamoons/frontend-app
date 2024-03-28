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
    "fragment CartContent on Cart {\n  contents(first: 100) {\n    itemCount\n    nodes {\n      ...CartItemContent\n    }\n  }\n  appliedCoupons {\n    code\n    discountAmount\n    discountTax\n  }\n  needsShippingAddress\n  availableShippingMethods {\n    packageDetails\n    supportsShippingCalculator\n    rates {\n      id\n      instanceId\n      methodId\n      label\n      cost\n    }\n  }\n  subtotal\n  subtotalTax\n  shippingTax\n  shippingTotal\n  total\n  totalTax\n  feeTax\n  feeTotal\n  discountTax\n  discountTotal\n}": types.CartContentFragmentDoc,
    "query CartGetById($customerId: Int) {\n  cart {\n    ...CartContent\n  }\n  customer(customerId: $customerId) {\n    ...CustomerContent\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItemContent on CartItem {\n  key\n  product {\n    node {\n      ...ProductContentSlice\n    }\n  }\n  variation {\n    node {\n      ...ProductVariationContentSlice\n    }\n  }\n  quantity\n  total\n  subtotal\n  subtotalTax\n  extraData {\n    key\n    value\n  }\n}": types.CartItemContentFragmentDoc,
    "fragment CustomerContent on Customer {\n  id\n  sessionToken\n  shipping {\n    postcode\n    state\n    city\n    country\n  }\n}": types.CustomerContentFragmentDoc,
    "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  ... on VariableProduct {\n    id\n    name\n    variations(first: 50) {\n      nodes {\n        id\n        name\n        sku\n        price(format: FORMATTED)\n        regularPrice(format: FORMATTED)\n        attributes {\n          nodes {\n            id\n            name\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}": types.ProductContentFullFragmentDoc,
    "fragment ProductContentSlice on Product {\n  id\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  ... on VariableProduct {\n    price\n    regularPrice\n    soldIndividually\n  }\n}": types.ProductContentSliceFragmentDoc,
    "query ProductGetAttributesByProductId($id: ID!) {\n  product(id: $id) {\n    attributes {\n      nodes {\n        name\n        options\n      }\n    }\n  }\n}": types.ProductGetAttributesByProductIdDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductContentFull\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductsGetListItem on Product {\n  ... on VariableProduct {\n    id\n    name\n    variations(first: 50) {\n      nodes {\n        id\n        name\n        sku\n        price(format: FORMATTED)\n        regularPrice(format: FORMATTED)\n        attributes {\n          nodes {\n            name\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetListItemFragmentDoc,
    "fragment ProductGetMediaItem on MediaItem {\n  altText\n  sourceUrl\n  sizes\n}": types.ProductGetMediaItemFragmentDoc,
    "fragment ProductGetVariationAttribute on VariationAttribute {\n  id\n  name\n  value\n}": types.ProductGetVariationAttributeFragmentDoc,
    "fragment ProductVariationContentSlice on ProductVariation {\n  id\n  databaseId\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  price\n  regularPrice\n}": types.ProductVariationContentSliceFragmentDoc,
    "query ProductsGetList($field: ProductsOrderByEnum = DATE, $order: OrderEnum = ASC) {\n  products(where: {orderby: {field: $field, order: $order}}) {\n    nodes {\n      ...ProductContentFull\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartContent on Cart {\n  contents(first: 100) {\n    itemCount\n    nodes {\n      ...CartItemContent\n    }\n  }\n  appliedCoupons {\n    code\n    discountAmount\n    discountTax\n  }\n  needsShippingAddress\n  availableShippingMethods {\n    packageDetails\n    supportsShippingCalculator\n    rates {\n      id\n      instanceId\n      methodId\n      label\n      cost\n    }\n  }\n  subtotal\n  subtotalTax\n  shippingTax\n  shippingTotal\n  total\n  totalTax\n  feeTax\n  feeTotal\n  discountTax\n  discountTotal\n}"): typeof import('./graphql').CartContentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($customerId: Int) {\n  cart {\n    ...CartContent\n  }\n  customer(customerId: $customerId) {\n    ...CustomerContent\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItemContent on CartItem {\n  key\n  product {\n    node {\n      ...ProductContentSlice\n    }\n  }\n  variation {\n    node {\n      ...ProductVariationContentSlice\n    }\n  }\n  quantity\n  total\n  subtotal\n  subtotalTax\n  extraData {\n    key\n    value\n  }\n}"): typeof import('./graphql').CartItemContentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerContent on Customer {\n  id\n  sessionToken\n  shipping {\n    postcode\n    state\n    city\n    country\n  }\n}"): typeof import('./graphql').CustomerContentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  ... on VariableProduct {\n    id\n    name\n    variations(first: 50) {\n      nodes {\n        id\n        name\n        sku\n        price(format: FORMATTED)\n        regularPrice(format: FORMATTED)\n        attributes {\n          nodes {\n            id\n            name\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductContentFullFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductContentSlice on Product {\n  id\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  ... on VariableProduct {\n    price\n    regularPrice\n    soldIndividually\n  }\n}"): typeof import('./graphql').ProductContentSliceFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetAttributesByProductId($id: ID!) {\n  product(id: $id) {\n    attributes {\n      nodes {\n        name\n        options\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetAttributesByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductContentFull\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsGetListItem on Product {\n  ... on VariableProduct {\n    id\n    name\n    variations(first: 50) {\n      nodes {\n        id\n        name\n        sku\n        price(format: FORMATTED)\n        regularPrice(format: FORMATTED)\n        attributes {\n          nodes {\n            name\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListItemFragmentDoc;
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
export function graphql(source: "fragment ProductVariationContentSlice on ProductVariation {\n  id\n  databaseId\n  name\n  slug\n  image {\n    ...ProductGetMediaItem\n  }\n  price\n  regularPrice\n}"): typeof import('./graphql').ProductVariationContentSliceFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($field: ProductsOrderByEnum = DATE, $order: OrderEnum = ASC) {\n  products(where: {orderby: {field: $field, order: $order}}) {\n    nodes {\n      ...ProductContentFull\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
