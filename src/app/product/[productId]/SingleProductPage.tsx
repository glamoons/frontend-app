import Image from "next/image";
import { notFound } from "next/navigation";
import { Label } from "@/components/atoms/Label";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";
import { cn } from "@/lib/utils";
import { getProductById } from "@/services/productsApi";
import { DefaultText } from "@/components/atoms/DefaultText";

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
							<form action={addProductToCartAction}>
								<input
									type="hidden"
									value={params.productId}
									name="productId"
								/>
								<Label htmlFor="shape" className="text-sm">
									Kształt
								</Label>
								<fieldset>
									<div className="flex items-center">
										<legend className="sr-only">Kształt kwadratowy</legend>
										<input
											type="radio"
											name="shape"
											id="square"
											value="square"
											aria-label="Kształt kwadratowy"
											hidden
										/>
										<Label htmlFor="square" aria-label="Kształt kwadratowy">
											Kształt kwadratowy
										</Label>
									</div>
									<div className="flex items-center">
										<legend className="sr-only">Kształt prostokątny</legend>
										<input
											type="radio"
											name="shape"
											id="rectangle"
											value="rectangle"
											aria-label="Kształt prostokątny"
											hidden
										/>
										<Label htmlFor="rectangle" aria-label="Kształt prostokątny">
											Kształt prostokątny
										</Label>
									</div>
									<div className="flex items-center">
										<legend className="sr-only">Kształt okrągły</legend>
										<input
											type="radio"
											name="shape"
											id="circle"
											value="circle"
											aria-label="Kształt okrągły"
											hidden
										/>
										<Label htmlFor="circle" aria-label="Kształt okrągły">
											Kształt okrągły
										</Label>
									</div>
								</fieldset>
								<button type="submit">Zamów</button>
							</form>
						</div>
						<DefaultText className="text-2xl font-bold">
							{product.price}
						</DefaultText>
					</div>
				</div>
			</article>
			<ProductInformationBox />
		</>
	);
}
