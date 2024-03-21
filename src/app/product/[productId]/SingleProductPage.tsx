import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/services/productsApi";
import { cn } from "@/lib/utils";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}
	return (
		<article className="sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 mx-auto mt-8 max-w-2xl px-4 pb-16">
			<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
				<div className="lg:col-span-5 lg:col-start-8">
					<div className="flex justify-between">
						<h1 className="text-xl font-medium text-zinc-900">
							{product.name}
						</h1>
						<p className="text-xl font-medium text-zinc-900">{product.price}</p>
					</div>
					{/* Reviews */}
					<div className="mt-4">
						<h2 className="sr-only">Reviews</h2>
						<div className="flex items-center">
							<div className="ml-1 flex items-center">
								{[1, 2, 3, 4, 5].map((rating) => (
									<IconStarFilled
										key={rating}
										className={cn(
											5.0 > rating ? "text-secondary" : "text-zinc-200",
											"h-5 w-5 flex-shrink-0",
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<div aria-hidden="true" className="ml-4 text-sm text-zinc-300">
								·
							</div>
							<div className="ml-4 flex">
								<a
									href="#"
									className="text-sm font-medium text-zinc-600 hover:text-zinc-500"
								>
									24 opinie klientów
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Image gallery */}
				<div className="lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 mt-8">
					<h2 className="sr-only">Images</h2>

					<Image
						width={696}
						height={696}
						priority
						key={product.image?.altText}
						src={String(product.image?.sourceUrl)}
						alt={product.image?.altText ?? String(product.name)}
						className={cn(
							true ? "lg:col-span-2 lg:row-span-2" : "lg:block hidden",
							"rounded-lg",
						)}
					/>
				</div>
				<div className="lg:col-span-5 mt-8">
					{/* Add to cart form and variations picker */}

					<p>{`Still 2 items in stock.`}</p>

					{/* Product details */}
					<div className="mt-10">
						<h2 className="text-sm font-medium text-zinc-900">Description</h2>
						<div className="prose prose-sm mt-4 text-zinc-500">
							{product.description}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
