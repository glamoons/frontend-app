import LogoLight from "@/assets/logo/LogoLight";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="container absolute left-0 top-0 z-10 mx-auto flex w-full flex-row items-center justify-between py-5">
			<Link href="/">
				<LogoLight />
			</Link>
			<MobileMenuHandler />
		</header>
	);
};
