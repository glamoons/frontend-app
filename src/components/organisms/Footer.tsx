import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandPinterest,
} from "@tabler/icons-react";
import { SocialLink } from "@/components/atoms/SocialLink";
import { ListWithLink } from "@/components/molecules/ListWithLink";
import { UnorderedList } from "@/components/molecules/UnorderedList";
import { NewsletterForm } from "./NewsletterForm";

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="container mx-auto flex w-full flex-col items-center justify-between space-y-10 py-[50px]">
			<div className="tablet:flex-row tablet:space-y-0 tablet:justify-between tablet:space-x-12 flex w-full flex-col space-y-10">
				<div className="tablet:w-2/3 tablet:space-x-0 flex flex-row justify-between space-x-10">
					<UnorderedList title="O firmie">
						<ListWithLink href={"/"} linkName={"Konfigurator"} />
						<ListWithLink href={"/"} linkName={"FAQ"} />
						<ListWithLink href={"/"} linkName={"Dla biznesu"} />
						<ListWithLink href={"/"} linkName={"Blog"} />
					</UnorderedList>
					<UnorderedList title="Informacje">
						<ListWithLink href={"/"} linkName={"Regulamin"} />
						<ListWithLink href={"/"} linkName={"Polityka prywatności"} />
						<ListWithLink href={"/"} linkName={"Dostawa i zwroty"} />
						<ListWithLink href={"/"} linkName={"Reklamacje"} />
					</UnorderedList>
				</div>
				<NewsletterForm
					title="Newsletter"
					butttonClassName="bg-primary border-border text-secondary"
					newsletterContainerClassName="table:w-1/3"
				/>
			</div>
			<hr className="w-full border-t border-primaryLight" />
			<div className="tablet:flex-row tablet:space-y-0 tablet:justify-between tablet:items-center tablet:w-full mt-10 flex flex-col space-y-8">
				<div className="tablet:w-1/3 flex flex-row justify-between">
					<SocialLink
						href="https://www.facebook.com/glamoons"
						icon={<IconBrandFacebook />}
						name="Facebook"
					/>
					<SocialLink
						href="https://www.instagram.com/glamoons_com/"
						icon={<IconBrandInstagram />}
						name="Instagram"
					/>
					<SocialLink
						href="https://www.pinterest.com/"
						icon={<IconBrandPinterest />}
						name="Pinterest"
					/>
				</div>
				<p className="text-sm font-light text-secondary">
					Copyright {year} © Glamoons. All rights reserved.
				</p>
			</div>
		</footer>
	);
};