"use client";

import { ListWithLink } from "@/components/molecules/ListWithLink";
import { UnorderedList } from "@/components/molecules/UnorderedList";
import { Navigation } from "@/components/organisms/Navigation";
import { ContactBox } from "../molecules/ContactBox";
import { useNavigationContext } from "@/app/providers/navigation-provider";
import { cn } from "@/lib/utils";

export const Menu = () => {
	const { isOpen } = useNavigationContext();
	return (
		<div
			className={cn(
				"fixed left-0 right-0 top-0 z-50 mx-auto h-full w-screen translate-y-[-100%] bg-slate50 pb-16 pt-24 opacity-0 transition-all duration-500 ease-in-out",
				isOpen ? "translate-y-0 overflow-y-auto opacity-100" : "",
			)}
		>
			<div className="container mx-auto space-y-16 max-[360px]:px-3">
				<Navigation />
				<div className="flex flex-row flex-wrap justify-between">
					<UnorderedList title="Glamoons" className="mb-6 w-1/2 pr-3">
						<ListWithLink href={"/"} linkName={"Koszyk"} />
						<ListWithLink href={"/"} linkName={"Moje konto"} />
						<ListWithLink href={"/"} linkName={"Ulubione"} />
						<ListWithLink href={"/"} linkName={"Dla biznesu"} />
						<ListWithLink href={"/"} linkName={"FAQ"} />
					</UnorderedList>
					<UnorderedList title="Informacje" className="mb-6 w-1/2 pl-3">
						<ListWithLink href={"/"} linkName={"Regulamin"} />
						<ListWithLink href={"/"} linkName={"Polityka prywatności"} />
						<ListWithLink href={"/"} linkName={"Dostawa i zwroty"} />
						<ListWithLink href={"/"} linkName={"Reklamacje"} />
					</UnorderedList>
					<UnorderedList title="Social" className="mt-6 w-1/2 pr-3">
						<ListWithLink
							href="https://www.facebook.com/glamoons"
							linkName={"Facebook"}
							passHref={true}
						/>
						<ListWithLink
							href="https://www.instagram.com/glamoons_com/"
							linkName={"Instagram"}
							passHref={true}
						/>
						<ListWithLink
							href="https://www.pinterest.com/"
							linkName={"Pinterest"}
							passHref={true}
						/>
					</UnorderedList>
					<UnorderedList title="Kontak" className="mt-6 w-1/2 pl-3">
						<ContactBox
							phone="784 525 956"
							email="sklep@glamoons.com"
							workingHours="Pon-Pt 8:00-16:00 CET"
							textClassName="text-secondary max-w-none"
							wrapperClassName="w-auto"
						/>
					</UnorderedList>
				</div>
			</div>
		</div>
	);
};
