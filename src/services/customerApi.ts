import { executeQuery } from "./api/api-config";
import {
	CustomerCreateDocument,
	// CustomerUpdateDocument,
	// type Customer_Address,
	// type Customer_BillingDetails,
	// CustomersGetListDocument,
	type MutationCustomer_AddressInput,
	type MutationCustomer_BillingDetailsInput,
} from "@/gql/graphql";

export const createCustomer = async ({
	customerName,
	registrationDate,
	email,
	address,
	billingDetails,
	averageOrderValue,
	totalExpenses,
	currency,
	phone,
	orders,
}: {
	customerName: string;
	registrationDate: string;
	email: string;
	address: MutationCustomer_AddressInput;
	billingDetails: MutationCustomer_BillingDetailsInput;
	averageOrderValue?: number;
	totalExpenses?: number;
	currency?: string;
	phone?: string;
	orders?: number[];
}) => {
	return executeQuery({
		query: CustomerCreateDocument,
		variables: {
			customerName,
			registrationDate,
			email,
			address,
			billingDetails,
			averageOrderValue,
			totalExpenses,
			currency,
			phone,
			orders,
		},
	});
};
