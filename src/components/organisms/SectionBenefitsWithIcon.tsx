import {
	IconDeviceMobileCharging,
	IconPackageImport,
	IconShieldChevron,
} from "@tabler/icons-react";
import { BoxWithIcon } from "@/components/atoms/IconBox";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type SectionBenefitsWithIconProps = {
	className?: BaseProps["className"];
};

export const SectionBenefitsWithIcon = ({
	className,
}: SectionBenefitsWithIconProps) => {
	return (
		<article
			className={cn(
				"flex flex-col flex-wrap space-y-10 tablet:flex-row tablet:space-y-0",
				className,
			)}
		>
			<BoxWithIcon
				icon={<IconShieldChevron size={50} className="text-primaryDark" />}
				title="2 lata"
				subTitle="gwarancji na stolik"
				desctiption="Gwarancja door-to-door to spokój na lata. W przypadku awarii wymieniamy część na nową na nasz koszt."
			/>
			<BoxWithIcon
				icon={<IconPackageImport size={50} className="text-primaryDark" />}
				title="100"
				subTitle="dniowe prawo zwrotu"
				desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<BoxWithIcon
				icon={
					<IconDeviceMobileCharging size={50} className="text-primaryDark" />
				}
				title="1"
				subTitle="ładowanie indykcyjne"
				desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
		</article>
	);
};
