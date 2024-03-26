import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DefaultText } from "@/components/atoms/DefaultText";
import { Label } from "@/components/atoms/Label";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { ProductColorPicker } from "@/components/organisms/ProductColorPicker";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	cn,
	generateNameByProductOption,
	type SupportedColors,
} from "@/lib/utils";
import {
	getProductAttributesByProductId,
	getProductById,
	getProductsList,
} from "@/services/productsApi";
import { type ProductVariation } from "@/gql/graphql";

export default async function SingleProductPage({
	searchParams,
	defaultProductId,
}: {
	searchParams: {
		productName: string;
		shape: string;
		size: string;
		color: string;
	};
	defaultProductId: string;
}) {
	const productsList = await getProductsList();
	const variationsProduct: ProductVariation[] =
		productsList[0].variations?.nodes ?? [];
	const productBySlug = variationsProduct.find(
		(variation) => variation.slug === searchParams.productName,
	);

	if (!productBySlug) {
		throw notFound();
	}

	const product = await getProductById(productBySlug.id);
	const productAttributes =
		await getProductAttributesByProductId(defaultProductId);

	if (!product) {
		throw notFound();
	}

	const shapeVariationOptions = productAttributes?.filter(
		(attribute) => attribute.name === "shape",
	);

	const sizeVariationOptions = productAttributes?.filter(
		(attribute) => attribute.name === "size",
	);

	const colorVariationOptions = productAttributes?.filter(
		(attribute) => attribute.name === "color",
	);

	const selectedShapeAttr = searchParams.shape;

	const selectedSizeAttr = searchParams.size;

	const selectedColorAttr = searchParams.color;

	const addProductToCartAction = async (formData: FormData) => {
		"use server";
		console.log(formData);
	};

	return (
		<>
			<article className="container mx-auto py-[3.125rem]">
				<div className="grid grid-cols-12">
					<div className="relative col-span-12 aspect-[4/5] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:row-span-3 tabletLg:row-start-1">
						<h2 className="sr-only">{product.name}</h2>

						<Image
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
					<div className="col-span-12 tabletLg:col-span-6 tabletLg:col-start-8 tabletLg:row-start-2">
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
									value={productBySlug.id}
									name="productId"
								/>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="shape"
										className="col-span-3 col-start-1 text-sm"
									>
										Kształt
									</Label>
									<fieldset className="col-span-5">
										<Select name="size" defaultValue={selectedShapeAttr}>
											<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
												<SelectValue
													placeholder="Wybierz kształt"
													className="text-sm font-bold text-secondary"
												/>
											</SelectTrigger>
											<SelectContent className="border-none bg-slate50">
												{shapeVariationOptions.map((val) => {
													return val.options?.map((option) => {
														return (
															<SelectItem
																key={String(option)}
																value={String(option)}
															>
																{generateNameByProductOption(String(option))}
															</SelectItem>
														);
													});
												})}
											</SelectContent>
										</Select>
									</fieldset>
								</fieldset>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="size"
										className="col-span-3 col-start-1 text-sm"
									>
										Średnica
									</Label>
									<fieldset className="col-span-5">
										<Select name="size" defaultValue={selectedSizeAttr}>
											<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
												<SelectValue
													placeholder="Wybierz średnicę"
													className="text-sm font-bold text-secondary"
												/>
											</SelectTrigger>
											<SelectContent className="border-none bg-slate50">
												{sizeVariationOptions.map((val) => {
													return val.options?.map((option) => {
														return (
															<SelectItem
																key={String(option)}
																value={String(option)}
															>
																{String(option)}
															</SelectItem>
														);
													});
												})}
											</SelectContent>
										</Select>
									</fieldset>
								</fieldset>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="color"
										className="col-span-3 col-start-1 text-sm"
									>
										Kolor
									</Label>
									<fieldset className="col-span-5">
										<ProductColorPicker
											productName={searchParams.productName}
											currentShape={selectedShapeAttr}
											currentColor={selectedColorAttr}
											currentSize={selectedSizeAttr}
											colorVariationOptions={
												colorVariationOptions[0].options as SupportedColors[]
											}
										/>
									</fieldset>
								</fieldset>
								<fieldset>
									<span className="flex items-end justify-end space-x-3 py-4">
										<span className="text-xs text-primaryDark">Cena</span>
										<DefaultText className="flex justify-end text-2xl font-bold leading-none">
											{product.price}
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
