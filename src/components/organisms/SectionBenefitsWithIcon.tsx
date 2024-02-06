import { BoxWithIcon } from "@/components/atoms/IconBox";
import { BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";
import {
	IconPackageImport,
	IconShieldChevron,
	IconTruckDelivery,
} from "@tabler/icons-react";

type SectionBenefitsWithIconProps = {
	className?: BaseProps["className"];
};

export const SectionBenefitsWithIcon = ({
	className,
}: SectionBenefitsWithIconProps) => {
	return (
		<article
			className={cn(
				"laptop:flex-nowrap laptop:space-x-10 tablet:flex-row tablet:space-y-0 flex flex-col flex-wrap space-y-10",
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
				icon={<IconTruckDelivery size={50} className="text-primaryDark" />}
				title="Dostawa"
				subTitle="zawsze darmowa"
				desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
		</article>
	);
};
