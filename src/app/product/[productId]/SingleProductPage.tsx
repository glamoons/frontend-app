import Image from "next/image";
import { notFound } from "next/navigation";
import { IconShoppingCart } from "@tabler/icons-react";
import { Label } from "@/components/atoms/Label";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";
import { cn } from "@/lib/utils";
import { getProductById } from "@/services/productsApi";
import { DefaultText } from "@/components/atoms/DefaultText";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { FieldsetFormItem } from "@/components/molecules/FieldsetFormItem";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	const addProductToCartAction = async (formData: FormData) => {
		"use server";
		console.log(formData);
	};

	return (
		<>
			<article className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="relative col-span-12 aspect-[4/5] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:row-span-3 tabletLg:row-start-1">
						<h2 className="sr-only">{product.name}</h2>

						<Image
							fill
							priority
							src={String(product.galleryImages?.nodes[0].sourceUrl)}
							alt={product.image?.altText ?? String(product.name)}
							className={cn(
								true ? "lg:col-span-2 lg:row-span-2" : "lg:block hidden",
								"rounded-lg",
							)}
							sizes={String(product.galleryImages?.nodes[0].sizes)}
						/>
					</div>
					<div className="col-span-12 tabletLg:col-span-6 tabletLg:col-start-8 tabletLg:row-start-2">
						<h1 className="text-2xl font-bold text-secondary">
							{product.name}
						</h1>
						<div className="flex justify-between">
							<form action={addProductToCartAction} className="space-y-8">
								<input
									type="hidden"
									value={params.productId}
									name="productId"
								/>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="shape"
										className="col-span-4 col-start-1 text-sm"
									>
										Kształt
									</Label>
									<fieldset className="flex max-w-fit rounded-full bg-slate100">
										<FieldsetFormItem
											title="kwadratowy"
											name="shape"
											id="square"
											value="square"
											aria-label="Kształt kwadratowy"
										/>
										<FieldsetFormItem
											title="prostokątny"
											name="shape"
											id="rectangle"
											value="rectangle"
											aria-label="Kształt prostokątny"
										/>
										<FieldsetFormItem
											title="okrągły"
											name="shape"
											id="circle"
											value="circle"
											aria-label="Kształt okrągły"
										/>
									</fieldset>
								</fieldset>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="shape"
										className="col-span-4 col-start-1 text-sm"
									>
										Średnica
									</Label>
									<fieldset className="col-span-4">
										<Select name="size">
											<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
												<SelectValue
													placeholder="Wybierz średnicę"
													className="text-sm font-bold text-secondary"
												/>
											</SelectTrigger>
											<SelectContent className="border-none bg-slate50">
												<SelectItem value="30cm">30cm</SelectItem>
												<SelectItem value="40cm">40cm</SelectItem>
												<SelectItem value="50cm">50cm</SelectItem>
												<SelectItem value="60cm">60cm</SelectItem>
												<SelectItem value="70cm">70cm</SelectItem>
												<SelectItem value="80cm">80cm</SelectItem>
											</SelectContent>
										</Select>
									</fieldset>
								</fieldset>
								<fieldset className="grid grid-cols-12 items-center">
									<Label
										htmlFor="shape"
										className="col-span-4 col-start-1 text-sm"
									>
										Kolor
									</Label>
									<fieldset className="col-span-4">
										<Select name="color">
											<SelectTrigger className="h-auto border-none bg-slate100 focus:ring-0">
												<SelectValue
													placeholder="Wybierz kolor"
													className="text-sm font-bold text-secondary"
												/>
											</SelectTrigger>
											<SelectContent
												className="border-none bg-slate50"
												defaultValue={"biały zimny"}
											>
												<SelectItem value="white-cold">
													<span className="flex items-center space-x-2">
														<span
															className={cn(
																"inline-block h-8 w-8 rounded-full drop-shadow-sm",
																`bg-[#B0D6FD]`,
															)}
														></span>
														<span>biały zimny</span>
													</span>
												</SelectItem>
												<SelectItem value="white-warm">
													<span className="flex items-center space-x-2">
														<span
															className={cn(
																"inline-block h-8 w-8 rounded-full drop-shadow-sm",
																`bg-[#FFD15C]`,
															)}
														></span>{" "}
														<span>biały ciepły</span>
													</span>
												</SelectItem>
											</SelectContent>
										</Select>
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
