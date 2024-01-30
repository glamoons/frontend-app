import { Header } from "@/components/molecules/Header/Header";
import { HeroBaner } from "@/components/molecules/Hero/HeroBaner";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroBaner
					src={"https://res.cloudinary.com/dstimijog/image/upload/v1706510334/image_rovc3s.jpg"}
					desktopSrcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706510116/image_pkqf2b.jpg"
					alt={"Glamoons: konfigurowalne stoliki i zegary w stylu glamour."}
				/>
				<section className="container bg-white py-[50px]">
					<div className="flex flex-col items-center text-center">
						<h2 className="text-4xl font-bold tracking-[0.02em] text-secondary">
							Co możemy dla Ciebie zrobić
						</h2>
						<p className="mt-4 text-base font-normal text-secondary">
							A paragraph or two with information on your product/service or describes a problem
							your product/service is designed to solve.{" "}
						</p>
					</div>
					<div className="mx-[-1.563rem] mt-[50px] flex flex-row">
						<div className="relative h-[270px] w-1/2">
							<Link href="/">
								<picture>
									<source
										media="(min-width: 768px)"
										srcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-desktop_jlpwqf.jpg"
									/>
									<NextImage
										src="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/table-mobile_zbtmux.jpg"
										alt="Stoliki"
										quality={100}
										fill
										sizes="100vw"
										style={{ objectFit: "cover" }}
									/>
								</picture>
								<div className="relative flex h-full w-full flex-col items-center justify-end px-6 py-4">
									<h3 className="text-base font-bold text-secondary">Stoliki</h3>
									<Button className="mt-[5px] h-auto bg-transparent p-0 text-[10px] font-normal uppercase leading-[0.875rem] tracking-[0.25em] text-secondary underline">
										zobacz więcej
									</Button>
								</div>
							</Link>
						</div>
						<div className="relative h-[270px] w-1/2">
							<Link href="/">
								<picture>
									<source
										media="(min-width: 768px)"
										srcSet="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-desktop_kisu3w.jpg"
									/>
									<NextImage
										src="https://res.cloudinary.com/dstimijog/image/upload/v1706596875/clock-mobile_revov9.jpg"
										alt="Zegary"
										quality={100}
										fill
										sizes="100vw"
										style={{ objectFit: "cover" }}
									/>
								</picture>
								<div className="relative flex h-full w-full flex-col items-center justify-end px-6 py-4">
									<h3 className="text-base font-bold text-secondary">Zegary</h3>
									<Button className="mt-[5px] h-auto bg-transparent p-0 text-[10px] font-normal uppercase leading-[0.875rem] tracking-[0.25em] text-secondary underline">
										zobacz więcej
									</Button>
								</div>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
