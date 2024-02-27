"use client";

import { usePathname } from "next/navigation";
import { SectionBenefitsWithIcon } from "@/components/organisms/SectionBenefitsWithIcon";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { Section } from "@/components/atoms/Section";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { cn } from "@/lib/utils";

export const BenefitSection = () => {
	const pathName = usePathname();
	const isHomePage = pathName === "/";
	return (
		<Section className={cn(!isHomePage && "bg-slate50")}>
			<div className="container mx-auto space-y-[50px]">
				<SectionHeading
					subHeading="korzyści"
					title={isHomePage ? "Postaw na liczby" : "Poznaj korzyści"}
					description={
						isHomePage
							? "Wybierz stolik, który sprosta Twoim największym wymaganiom"
							: "Przyjrzyj się cechom naszych stolików i zdecyduj, czy Ci odpowiadają."
					}
				/>
				<SectionBenefitsWithIcon isHomePage={isHomePage} />
				{isHomePage && (
					<PrimaryButton
						href={"/"}
						className="mx-auto flex w-full tablet:w-1/2 tabletLg:w-auto tabletLg:max-w-44"
						aria-label="sprawdź korzyści"
					>
						sprawdź
					</PrimaryButton>
				)}
			</div>
		</Section>
	);
};
