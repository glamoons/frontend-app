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
    "mutation CartUpdate($cartId: Int!, $status: String!, $stripeCheckoutId: String!, $email: String!, $totalAmount: Float, $address: mutationOrderUpdate_AddressInput, $billingDetails: mutationOrderUpdate_BillingDetailsInput) {\n  updateOrder(\n    id: $cartId\n    data: {status: $status, stripeCheckoutID: $stripeCheckoutId, totalAmount: $totalAmount, email: $email, address: $address, billingDetails: $billingDetails}\n  ) {\n    id\n    status\n    totalAmount\n    email\n    address {\n      ...OrderDeliveryAddress\n    }\n    billingDetails {\n      ...OrderBillingDetails\n    }\n  }\n}": types.CartUpdateDocument,
    "mutation ContactCreateInNewsletter($data: mutationNewsletterInput!) {\n  createNewsletter(data: $data) {\n    id\n    listIds {\n      id\n      listId\n      title\n    }\n    email\n  }\n}": types.ContactCreateInNewsletterDocument,
    "fragment CustomerBillingDetails on Customer_BillingDetails {\n  deliveryData {\n    street\n    postalCode\n    city\n    country\n    companyName\n    vatId\n  }\n}": types.CustomerBillingDetailsFragmentDoc,
    "mutation CustomerCreate($customerName: String!, $registrationDate: String!, $email: String!, $orders: [Int], $totalExpenses: Float = 0, $averageOrderValue: Float = 0, $currency: String = \"PLN\", $phone: String = \"\", $address: mutationCustomer_AddressInput!, $billingDetails: mutationCustomer_BillingDetailsInput!) {\n  createCustomer(\n    data: {customerName: $customerName, registrationDate: $registrationDate, email: $email, orders: $orders, totalExpenses: $totalExpenses, averageOrderValue: $averageOrderValue, currency: $currency, phone: $phone, address: $address, billingDetails: $billingDetails}\n  ) {\n    ...CustomerShort\n  }\n}": types.CustomerCreateDocument,
    "fragment CustomerDeliveryAddress on Customer_Address {\n  deliveryAddress {\n    deliveryCity\n    deliveryCountry\n    deliveryPostalCode\n    deliveryStreet\n  }\n}": types.CustomerDeliveryAddressFragmentDoc,
    "fragment CustomerFull on Customer {\n  ...CustomerShort\n  customerName\n  registrationDate\n  phone\n  address {\n    ...CustomerDeliveryAddress\n  }\n  billingDetails {\n    ...CustomerBillingDetails\n  }\n  orders {\n    id\n    status\n  }\n  totalExpenses\n  averageOrderValue\n  currency\n}": types.CustomerFullFragmentDoc,
    "fragment CustomerShort on Customer {\n  id\n  email\n}": types.CustomerShortFragmentDoc,
    "mutation CustomerUpdate($customerId: Int!, $customerName: String, $registrationDate: String, $email: String, $orders: [Int], $totalExpenses: Float = 0, $averageOrderValue: Float = 0, $currency: String = \"PLN\", $phone: String = \"\", $address: mutationCustomerUpdate_AddressInput, $billingDetails: mutationCustomerUpdate_BillingDetailsInput) {\n  updateCustomer(\n    id: $customerId\n    data: {customerName: $customerName, registrationDate: $registrationDate, email: $email, orders: $orders, totalExpenses: $totalExpenses, averageOrderValue: $averageOrderValue, currency: $currency, phone: $phone, address: $address, billingDetails: $billingDetails}\n  ) {\n    ...CustomerFull\n  }\n}": types.CustomerUpdateDocument,
    "query CustomersGetList($email: EmailAddress) {\n  Customers(where: {email: {equals: $email}}) {\n    docs {\n      ...CustomerFull\n    }\n  }\n}": types.CustomersGetListDocument,
    "fragment OrderBillingDetails on Order_BillingDetails {\n  deliveryData {\n    street\n    postalCode\n    city\n    country\n    companyName\n    vatId\n  }\n}": types.OrderBillingDetailsFragmentDoc,
    "fragment OrderDeliveryAddress on Order_Address {\n  deliveryAddress {\n    deliveryCity\n    deliveryCountry\n    deliveryPostalCode\n    deliveryStreet\n  }\n}": types.OrderDeliveryAddressFragmentDoc,
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
export function graphql(source: "mutation CartUpdate($cartId: Int!, $status: String!, $stripeCheckoutId: String!, $email: String!, $totalAmount: Float, $address: mutationOrderUpdate_AddressInput, $billingDetails: mutationOrderUpdate_BillingDetailsInput) {\n  updateOrder(\n    id: $cartId\n    data: {status: $status, stripeCheckoutID: $stripeCheckoutId, totalAmount: $totalAmount, email: $email, address: $address, billingDetails: $billingDetails}\n  ) {\n    id\n    status\n    totalAmount\n    email\n    address {\n      ...OrderDeliveryAddress\n    }\n    billingDetails {\n      ...OrderBillingDetails\n    }\n  }\n}"): typeof import('./graphql').CartUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ContactCreateInNewsletter($data: mutationNewsletterInput!) {\n  createNewsletter(data: $data) {\n    id\n    listIds {\n      id\n      listId\n      title\n    }\n    email\n  }\n}"): typeof import('./graphql').ContactCreateInNewsletterDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerBillingDetails on Customer_BillingDetails {\n  deliveryData {\n    street\n    postalCode\n    city\n    country\n    companyName\n    vatId\n  }\n}"): typeof import('./graphql').CustomerBillingDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CustomerCreate($customerName: String!, $registrationDate: String!, $email: String!, $orders: [Int], $totalExpenses: Float = 0, $averageOrderValue: Float = 0, $currency: String = \"PLN\", $phone: String = \"\", $address: mutationCustomer_AddressInput!, $billingDetails: mutationCustomer_BillingDetailsInput!) {\n  createCustomer(\n    data: {customerName: $customerName, registrationDate: $registrationDate, email: $email, orders: $orders, totalExpenses: $totalExpenses, averageOrderValue: $averageOrderValue, currency: $currency, phone: $phone, address: $address, billingDetails: $billingDetails}\n  ) {\n    ...CustomerShort\n  }\n}"): typeof import('./graphql').CustomerCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerDeliveryAddress on Customer_Address {\n  deliveryAddress {\n    deliveryCity\n    deliveryCountry\n    deliveryPostalCode\n    deliveryStreet\n  }\n}"): typeof import('./graphql').CustomerDeliveryAddressFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerFull on Customer {\n  ...CustomerShort\n  customerName\n  registrationDate\n  phone\n  address {\n    ...CustomerDeliveryAddress\n  }\n  billingDetails {\n    ...CustomerBillingDetails\n  }\n  orders {\n    id\n    status\n  }\n  totalExpenses\n  averageOrderValue\n  currency\n}"): typeof import('./graphql').CustomerFullFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerShort on Customer {\n  id\n  email\n}"): typeof import('./graphql').CustomerShortFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CustomerUpdate($customerId: Int!, $customerName: String, $registrationDate: String, $email: String, $orders: [Int], $totalExpenses: Float = 0, $averageOrderValue: Float = 0, $currency: String = \"PLN\", $phone: String = \"\", $address: mutationCustomerUpdate_AddressInput, $billingDetails: mutationCustomerUpdate_BillingDetailsInput) {\n  updateCustomer(\n    id: $customerId\n    data: {customerName: $customerName, registrationDate: $registrationDate, email: $email, orders: $orders, totalExpenses: $totalExpenses, averageOrderValue: $averageOrderValue, currency: $currency, phone: $phone, address: $address, billingDetails: $billingDetails}\n  ) {\n    ...CustomerFull\n  }\n}"): typeof import('./graphql').CustomerUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CustomersGetList($email: EmailAddress) {\n  Customers(where: {email: {equals: $email}}) {\n    docs {\n      ...CustomerFull\n    }\n  }\n}"): typeof import('./graphql').CustomersGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderBillingDetails on Order_BillingDetails {\n  deliveryData {\n    street\n    postalCode\n    city\n    country\n    companyName\n    vatId\n  }\n}"): typeof import('./graphql').OrderBillingDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderDeliveryAddress on Order_Address {\n  deliveryAddress {\n    deliveryCity\n    deliveryCountry\n    deliveryPostalCode\n    deliveryStreet\n  }\n}"): typeof import('./graphql').OrderDeliveryAddressFragmentDoc;
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
