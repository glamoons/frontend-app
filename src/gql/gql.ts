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
    "mutation CartAddItem($totalAmount: Float!, $cartId: Int!, $productId: Int!, $productVariantId: String!) {\n  createOrderItem(\n    data: {quantity: 1, totalAmount: $totalAmount, order: $cartId, product: $productId, productVariantId: $productVariantId}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($itemId: Int!, $quantity: Float!, $totalAmount: Float!, $cartId: Int!) {\n  updateOrderItem(\n    id: $itemId\n    data: {order: $cartId, quantity: $quantity, totalAmount: $totalAmount}\n  ) {\n    id\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($status: String = \"created\") {\n  createOrder(data: {totalAmount: 0, status: $status}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: Int!) {\n  Order(id: $id) {\n    id\n    status\n  }\n}": types.CartGetByIdDocument,
    "query CartGetItemsByCartId($cartId: JSON, $productId: JSON, $productVariantId: String) {\n  OrderItems(\n    where: {order: {equals: $cartId}, product: {equals: $productId}, productVariantId: {equals: $productVariantId}}\n  ) {\n    docs {\n      id\n      order {\n        id\n        status\n      }\n      quantity\n      totalAmount\n      productVariantId\n      product {\n        ...ProductContentFull\n      }\n    }\n  }\n}": types.CartGetItemsByCartIdDocument,
    "mutation CartRemoveItem($itemId: Int!) {\n  deleteOrderItem(id: $itemId) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartUpdate($cartId: Int!, $status: String!, $stripeCheckoutId: String!, $totalAmount: Float) {\n  updateOrder(\n    id: $cartId\n    data: {status: $status, stripeCheckoutID: $stripeCheckoutId, totalAmount: $totalAmount}\n  ) {\n    id\n    status\n  }\n}": types.CartUpdateDocument,
    "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  price\n  image {\n    ...ProductGetMediaItem\n  }\n  variants {\n    ... on variant {\n      id\n      isDefault\n      sku\n      items {\n        ... on Color {\n          id\n          color\n          blockName\n          blockType\n        }\n        ... on Shape {\n          id\n          shape\n          blockName\n          blockType\n        }\n        ... on Size {\n          id\n          size\n          blockName\n          blockType\n        }\n      }\n      blockName\n      blockType\n    }\n  }\n}": types.ProductContentFullFragmentDoc,
    "query ProductGetById($id: Int!) {\n  Product(id: $id) {\n    ...ProductContentFull\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductGetMediaItem on Media {\n  alt\n  url\n  height\n  width\n}": types.ProductGetMediaItemFragmentDoc,
    "query ProductsGetList($sort: String) {\n  Products(sort: $sort) {\n    docs {\n      ...ProductContentFull\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($totalAmount: Float!, $cartId: Int!, $productId: Int!, $productVariantId: String!) {\n  createOrderItem(\n    data: {quantity: 1, totalAmount: $totalAmount, order: $cartId, product: $productId, productVariantId: $productVariantId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($itemId: Int!, $quantity: Float!, $totalAmount: Float!, $cartId: Int!) {\n  updateOrderItem(\n    id: $itemId\n    data: {order: $cartId, quantity: $quantity, totalAmount: $totalAmount}\n  ) {\n    id\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($status: String = \"created\") {\n  createOrder(data: {totalAmount: 0, status: $status}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: Int!) {\n  Order(id: $id) {\n    id\n    status\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetItemsByCartId($cartId: JSON, $productId: JSON, $productVariantId: String) {\n  OrderItems(\n    where: {order: {equals: $cartId}, product: {equals: $productId}, productVariantId: {equals: $productVariantId}}\n  ) {\n    docs {\n      id\n      order {\n        id\n        status\n      }\n      quantity\n      totalAmount\n      productVariantId\n      product {\n        ...ProductContentFull\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetItemsByCartIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: Int!) {\n  deleteOrderItem(id: $itemId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpdate($cartId: Int!, $status: String!, $stripeCheckoutId: String!, $totalAmount: Float) {\n  updateOrder(\n    id: $cartId\n    data: {status: $status, stripeCheckoutID: $stripeCheckoutId, totalAmount: $totalAmount}\n  ) {\n    id\n    status\n  }\n}"): typeof import('./graphql').CartUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductContentFull on Product {\n  id\n  name\n  slug\n  price\n  image {\n    ...ProductGetMediaItem\n  }\n  variants {\n    ... on variant {\n      id\n      isDefault\n      sku\n      items {\n        ... on Color {\n          id\n          color\n          blockName\n          blockType\n        }\n        ... on Shape {\n          id\n          shape\n          blockName\n          blockType\n        }\n        ... on Size {\n          id\n          size\n          blockName\n          blockType\n        }\n      }\n      blockName\n      blockType\n    }\n  }\n}"): typeof import('./graphql').ProductContentFullFragmentDoc;
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
