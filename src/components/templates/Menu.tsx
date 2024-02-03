import { Navigation } from "@/components/organisms/Navigation";
import { UnorderedList } from "@/components/molecules/UnorderedList";
import { ListWithLink } from "@/components/molecules/ListWithLink";
import { ContactBox } from "../molecules/ContactBox";
import { MobileMenuHandler } from "../atoms/MobileMenuHandler";
import { IconX } from "@tabler/icons-react";

export const Menu = () => {
	return (
		<div className="container fixed left-0 top-0 z-50 mx-auto h-full w-full scale-0 space-y-6 overflow-hidden bg-slate-50 opacity-0">
			<div className="flex h-24 w-full justify-end">
				<MobileMenuHandler
					className="flex items-center space-x-1 text-secondary"
					icon={<IconX />}
					menuName="close"
				/>
			</div>
			<Navigation />
			<div className="flex flex-row flex-wrap justify-between">
				<UnorderedList title="Informacje" className="mb-6 w-1/2 pr-3">
					<ListWithLink href={"/"} linkName={"Regulamin"} />
					<ListWithLink href={"/"} linkName={"Polityka prywatności"} />
					<ListWithLink href={"/"} linkName={"Dostawa i zwroty"} />
					<ListWithLink href={"/"} linkName={"Reklamacje"} />
				</UnorderedList>
				<UnorderedList title="O firmie" className="mb-6 w-1/2 pl-3">
					<ListWithLink href={"/"} linkName={"FAQ"} />
					<ListWithLink href={"/"} linkName={"Dla biznesu"} />
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
	);
};
