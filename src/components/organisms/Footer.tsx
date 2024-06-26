import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandPinterest,
} from "@tabler/icons-react";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLink } from "@/components/atoms/SocialLink";
import { ListWithLink } from "@/components/molecules/ListWithLink";
import { UnorderedList } from "@/components/molecules/UnorderedList";

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="container mx-auto mb-[3.75rem] flex w-full flex-col items-center justify-between space-y-10 py-[3.125rem] tabletLg:mb-0 desktop:space-y-[3.125rem] desktop:py-[6.25rem]">
			<div className="flex w-full flex-col space-y-10 tablet:flex-row tablet:justify-between tablet:space-x-10 tablet:space-y-0">
				<div className="flex flex-row justify-between space-x-10 tablet:w-2/3">
					<UnorderedList title="O firmie" className="w-1/2">
						<ListWithLink href={"/"} linkName={"FAQ"} aria-label="FAQ" />
						<ListWithLink
							href={"/"}
							linkName={"Dla biznesu"}
							aria-label="Dla biznesu"
						/>
						<ListWithLink href={"/"} linkName={"Blog"} aria-label="Blog" />
					</UnorderedList>
					<UnorderedList title="Informacje" className="w-1/2">
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
				</div>
				<NewsletterForm
					title="Newsletter"
					butttonClassName="bg-primary border-border text-secondary"
					newsletterWrapperClassName="tablet:w-1/3"
				/>
			</div>
			<hr className="w-full border-t border-primaryLight" />
			<div className="mt-10 flex flex-col space-y-8 tablet:w-full tablet:flex-row tablet:items-center tablet:justify-between tablet:space-y-0 desktop:mt-[3.125rem]">
				<div className="flex flex-row justify-between tablet:w-1/3">
					<SocialLink
						href="https://www.facebook.com/glamoons"
						icon={<IconBrandFacebook />}
						name="Facebook"
						aria-label="Facebook Glamoons"
					/>
					<SocialLink
						href="https://www.instagram.com/glamoons_com/"
						icon={<IconBrandInstagram />}
						name="Instagram"
						aria-label="Instagram Glamoons"
					/>
					<SocialLink
						href="https://www.pinterest.com/"
						icon={<IconBrandPinterest />}
						name="Pinterest"
						aria-label="Pinterest Glamoons"
					/>
				</div>
				<p className="text-sm font-light text-secondary">
					Copyright {year} © Glamoons. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
