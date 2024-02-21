"use client";

import { useNavigationContext } from "@/app/providers/navigation-provider";
import { ListWithLink } from "@/components/molecules/ListWithLink";
import { UnorderedList } from "@/components/molecules/UnorderedList";
import { Navigation } from "@/components/organisms/Navigation";
import { cn } from "@/lib/utils";
import { FooterHeading } from "@/components/atoms/FooterHeading";
import { ContactBox } from "@/components/molecules/ContactBox";

export const Menu = () => {
	const { isOpen } = useNavigationContext();
	return (
		<div
			className={cn(
				"fixed left-0 right-0 top-0 z-[100] mx-auto h-full w-screen translate-y-[-100%] bg-slate50 pb-16 pt-24 opacity-0 transition-all duration-500 ease-in-out",
				isOpen
					? "translate-y-0 overflow-y-auto opacity-100"
					: "pointer-events-none",
			)}
		>
			<div className="container mx-auto space-y-16 max-[360px]:px-3">
				<Navigation />
				<div className="flex flex-row flex-wrap justify-between">
					<UnorderedList title="Glamoons" className="mb-6 w-1/2 pr-3">
						<ListWithLink href={"/"} linkName={"Koszyk"} aria-label="Koszyk" />
						<ListWithLink
							href={"/"}
							linkName={"Moje konto"}
							aria-label="Moje konto"
						/>
						<ListWithLink
							href={"/"}
							linkName={"Ulubione"}
							aria-label="Ulubione"
						/>
						<ListWithLink
							href={"/"}
							linkName={"Dla biznesu"}
							aria-label="Dla biznesu"
						/>
						<ListWithLink href={"/"} linkName={"FAQ"} aria-label="FAQ" />
					</UnorderedList>
					<UnorderedList title="Informacje" className="mb-6 w-1/2 pl-3">
						<ListWithLink
							href={"/"}
							linkName={"Regulamin"}
							aria-label="Regulamin"
						/>
						<ListWithLink
							href={"/"}
							linkName={"Polityka prywatności"}
							aria-label="Polityka prywatności"
						/>
						<ListWithLink
							href={"/"}
							linkName={"Dostawa i zwroty"}
							aria-label="Dostawa i zwroty"
						/>
						<ListWithLink
							href={"/"}
							linkName={"Reklamacje"}
							aria-label="Reklamacje"
						/>
					</UnorderedList>
					<UnorderedList title="Social" className="mt-6 w-1/2 pr-3">
						<ListWithLink
							href="https://www.facebook.com/glamoons"
							linkName={"Facebook"}
							passHref={true}
							aria-label="Facebook Glamoons"
							target="_blank"
						/>
						<ListWithLink
							href="https://www.instagram.com/glamoons_com/"
							linkName={"Instagram"}
							passHref={true}
							aria-label="Instagram Glamoons"
							target="_blank"
						/>
						<ListWithLink
							href="https://www.pinterest.com/"
							linkName={"Pinterest"}
							passHref={true}
							aria-label="Pinterest Glamoons"
							target="_blank"
						/>
					</UnorderedList>
					<div className="mt-6 flex w-1/2 flex-col space-y-3 pl-3">
						<FooterHeading>Kontak</FooterHeading>
						<ContactBox
							phone="+48784525956"
							email="sklep@glamoons.com"
							workingHours="Pon-Pt 8:00-16:00 CET"
							textClassName="text-secondary max-w-none"
							wrapperClassName="w-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
