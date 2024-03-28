import { IconShoppingCart } from "@tabler/icons-react";
import { revalidateTag } from "next/cache";
import NextImage from "next/image";
import { notFound, redirect } from "next/navigation";
import { SelectField } from "./SelectField";
import { DefaultText } from "@/components/atoms/DefaultText";
import { Label } from "@/components/atoms/Label";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";
import { type ProductVariation, type VariationAttribute } from "@/gql/graphql";
import {
	cn,
	generateLabelNameFromAttributeName,
	generateNameByProductOptionValue,
	supportedColors,
	type SupportedColors,
} from "@/lib/utils";
import { getProductById, getProductsList } from "@/services/productsApi";

export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { vId: number };
}) {
	const products = await getProductsList();
	const productBySlug = products.find(
		(product) => product.slug === params.slug,
	);

	if (!productBySlug) {
		redirect("/");
	}
	const product = await getProductById(productBySlug.id);

	if (!product) {
		throw notFound();
	}

	const addProductToCartAction = async (formData: FormData) => {
		"use server";
		console.log(formData);

		revalidateTag("cart");
	};

	const productVariations = product.variations?.nodes.find(
		(el: ProductVariation) => el.databaseId === Number(searchParams.vId),
	);

	const productVariantAttributes = productVariations?.attributes?.nodes.map(
		(el): VariationAttribute => el,
	);

	return (
		<>
			<article className="container mx-auto py-[3.125rem]">
				<div className="grid grid-cols-12">
					<div className="relative col-span-12 aspect-[4/5] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:row-span-3 tabletLg:row-start-1">
						<h2 className="sr-only">{product.name}</h2>

						<NextImage
							fill
							priority
							src={String(product.image?.sourceUrl)}
							alt={product.image?.altText ?? String(product.name)}
							className={cn(
								true ? "lg:col-span-2 lg:row-span-2" : "lg:block hidden",
								"rounded-lg",
							)}
							sizes={String(product.image?.sizes)}
						/>
					</div>
					<div className="col-span-12 pt-10 tabletLg:col-span-6 tabletLg:col-start-8 tabletLg:row-start-2 tabletLg:pt-0">
						<h1 className="text-2xl font-bold text-secondary">
							{product.name}
						</h1>
						<div className="flex w-full justify-between">
							<form
								action={addProductToCartAction}
								className="w-full space-y-8"
							>
								<input
									type="hidden"
									value={productBySlug.databaseId}
									name="productId"
								/>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="shape"
										className="col-span-3 col-start-1 text-sm"
									>
										Wariant
									</Label>
									<fieldset className="col-span-9 laptop:col-span-6">
										<SelectField
											name="variationId"
											productSlug={params.slug}
											options={product.variations?.nodes as ProductVariation[]}
										/>
									</fieldset>
								</fieldset>
								<fieldset className="space-y-4">
									{productVariantAttributes?.map((attribute) => (
										<fieldset
											key={attribute.id}
											className="grid grid-cols-12 items-center"
										>
											<Label className="col-span-3 col-start-1 text-sm">
												{generateLabelNameFromAttributeName(attribute)}
											</Label>
											<fieldset className="col-span-5">
												<Label className="col-span-3 col-start-1 text-sm font-bold">
													{attribute.name === "shape" ? (
														attribute.value &&
														generateNameByProductOptionValue(attribute.value)
													) : attribute.name === "color" ? (
														<div
															className={cn(
																"h-6 w-6 rounded-full",
																supportedColors[
																	attribute.value as SupportedColors
																]
																	? supportedColors[
																			attribute.value as SupportedColors
																		].bgColor
																	: "bg-[#B0D6FD]",
															)}
														></div>
													) : (
														attribute.value
													)}
												</Label>
											</fieldset>
										</fieldset>
									))}
								</fieldset>
								<fieldset>
									<span className="flex items-end justify-end space-x-3 py-4">
										<span className="text-xs text-primaryDark">Cena</span>
										<DefaultText className="flex justify-end text-2xl font-bold leading-none">
											{productVariations?.regularPrice}
										</DefaultText>
									</span>
									<SubmitButton type="submit" className="w-full">
										<span className="flex flex-row items-center space-x-3">
											<IconShoppingCart size={24} className="text-secondary" />
											<span>Dodaj do koszyka</span>
										</span>
									</SubmitButton>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</article>
			<ProductInformationBox />
		</>
	);
}
