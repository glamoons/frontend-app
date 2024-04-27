import { executeQuery } from "./api/api-config";
import {
	ContactCreateInNewsletterDocument,
	CustomerCreateDocument,
	CustomerUpdateDocument,
	// CustomerUpdateDocument,
	// type Customer_Address,
	// type Customer_BillingDetails,
	CustomersGetListDocument,
	type MutationCustomer_AddressInput,
	type MutationCustomer_BillingDetailsInput,
} from "@/gql/graphql";

type CustomerResponseProps = {
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
};

type CustomerUpdateProps = CustomerResponseProps & { customerId: number };

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
}: CustomerResponseProps) => {
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

export const getCustomers = async ({ email }: { email?: string }) => {
	return executeQuery({
		query: CustomersGetListDocument,
		variables: {
			email,
		},
	});
};

export const updateCustomer = async ({
	customerId,
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
}: CustomerUpdateProps) => {
	return executeQuery({
		query: CustomerUpdateDocument,
		variables: {
			customerId,
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

export const createContactInNewsletterList = async ({
	email,
	listIds,
}: {
	email: string;
	listIds: { listId: string; title: string }[];
}) => {
	return executeQuery({
		query: ContactCreateInNewsletterDocument,
		variables: {
			data: {
				email: email,
				listIds: listIds,
			},
		},
	});
};
