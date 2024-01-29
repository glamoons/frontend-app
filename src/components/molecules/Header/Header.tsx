import LogoLight from "@/assets/logo/LogoLight";
import { MobileMenuHandler } from "@/components/atoms/MobileMenuHandler";
import Link from "next/link";

export const Header = () => {
	return (
		<div className="container relative z-10 mx-auto flex flex-row items-center justify-between py-5">
			<Link href="/">
				<LogoLight />
			</Link>
			<MobileMenuHandler />
		</div>
	);
};
