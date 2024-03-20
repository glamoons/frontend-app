"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { RoundedButton } from "@/components/atoms/RoundedButton";
import { Section } from "@/components/atoms/Section";
import { CategoryHolder } from "@/components/molecules/CategoryHolder";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Category } from "@/components/organisms/Category";
import { cn } from "@/lib/utils";
import "swiper/css";
import {
	type VariationAttribute,
	type ProductVariation,
	type VariableProduct,
} from "@/gql/graphql";

export const CategorySection = ({
	products,
}: {
	products: VariableProduct[];
}) => {
	const swiperRef = useRef<SwiperType>();
	const swiperInstanceRef = useRef<SwiperType>();
	const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
	const [swiperSlidesCount, setSwiperSlidesCount] = useState(0);

	return (
		<Section className="overflow-hidden">
			<div className="container mx-auto">
				<SectionHeading
					title="Twój projekt, twoja baza"
					description="A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
					subHeading="Produkty"
					containerStyle="tablet:text-center tablet:items-center tablet:mx-auto"
					containerHeadingStyle="tablet:text-center tablet:items-center"
					descriptionClassName="tablet:text-center "
				/>
				<div className="group relative mx-[-1.563rem] mt-[50px] space-y-11 laptop:mx-0 laptop:space-x-10">
					<Swiper
						init={false}
						modules={[FreeMode, Navigation]}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						className="w-full max-w-full !overflow-visible"
						freeMode
						spaceBetween={1}
						slidesPerView={2}
						breakpoints={{
							768: {
								spaceBetween: 16,
								slidesPerView: 3,
							},
						}}
						onSlideChange={(swiper) => {
							swiperInstanceRef.current = swiper;
							setSwiperActiveIndex(swiper.activeIndex);
							setSwiperSlidesCount(swiper.slides.length);
						}}
					>
						{products.map((product) => {
							if (!product.variations) return [];
							const productVariations: ProductVariation[] =
								product.variations.nodes;
							return productVariations.map((variation) => {
								if (!variation.attributes) return [];
								const productAttributes: VariationAttribute[] =
									variation.attributes.nodes;
								return (
									<SwiperSlide key={variation.id}>
										<Category
											href="/"
											mobileSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710536717/product-item_bgacz4.webp"
											alt="Stoliki"
											desktopSrc="https://res.cloudinary.com/dstimijog/image/upload/v1710536717/product-item_bgacz4.webp"
											title="Stoliki"
										/>
										<CategoryHolder
											title={String(product.name)}
											price={String(variation.price)}
											btnName="Zamów teraz"
											productAttributes={productAttributes}
										/>
									</SwiperSlide>
								);
							});
						})}
					</Swiper>
					<div
						slot="navigation"
						className="z-50 flex flex-row justify-center space-x-3 laptop:absolute laptop:top-1/2 laptop:!mt-0 laptop:w-full laptop:-translate-y-1/2 laptop:justify-between laptop:space-x-0 laptop:opacity-0 laptop:transition-opacity laptop:duration-500 laptop:group-hover:opacity-100"
					>
						<RoundedButton
							slot="prev-button"
							onClick={() => swiperRef.current?.slidePrev()}
							className={cn(
								"border-none bg-slate50 opacity-100 transition-opacity duration-500 hover:bg-slate100",
								{ "laptop:!opacity-0": swiperActiveIndex === 0 },
							)}
							aria-label="Poprzedni"
						>
							<IconChevronLeft size={16} stroke={1} />
						</RoundedButton>
						<RoundedButton
							slot="next-button"
							onClick={() => swiperRef.current?.slideNext()}
							className={cn(
								"relative border-none bg-slate50 opacity-100 transition-opacity duration-500 hover:bg-slate100 laptop:right-8 desktop:right-0",
								{
									"laptop:!opacity-0":
										swiperInstanceRef.current &&
										swiperActiveIndex ===
											swiperSlidesCount -
												swiperInstanceRef.current.slidesPerViewDynamic(),
								},
							)}
							aria-label="Następny"
						>
							<IconChevronRight size={16} stroke={1} />
						</RoundedButton>
					</div>
				</div>
			</div>
		</Section>
	);
};
