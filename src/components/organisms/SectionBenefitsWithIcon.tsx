import {
	IconCircuitDiode,
	IconPackageImport,
	IconShadowOff,
	IconShieldChevron,
	IconTransitionTop,
	IconWeight,
} from "@tabler/icons-react";
import { BoxWithIcon } from "@/components/atoms/IconBox";
import { type BaseProps } from "@/interfaces/base";
import { cn } from "@/lib/utils";

type SectionBenefitsWithIconProps = {
	className?: BaseProps["className"];
	isHomePage?: boolean;
};

export const SectionBenefitsWithIcon = ({
	className,
	isHomePage,
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
				subTitle="gwarancji na bazę MDF"
				desctiption="Gwarancja door-to-door to spokój na lata. W przypadku awarii wymieniamy część na nową na nasz koszt."
			/>
			<BoxWithIcon
				icon={<IconPackageImport size={50} className="text-primaryDark" />}
				title="100"
				subTitle="dniowe prawo zwrotu"
				desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<BoxWithIcon
				icon={<IconCircuitDiode size={50} className="text-primaryDark" />}
				title="1"
				subTitle="oświetlenie LED"
				desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			{!isHomePage && (
				<>
					<BoxWithIcon
						icon={<IconWeight size={50} className="text-primaryDark" />}
						title="6 kg"
						subTitle="lekki jak piórko"
						desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<BoxWithIcon
						icon={<IconTransitionTop size={50} className="text-primaryDark" />}
						title="30 mm"
						subTitle="grubość blatu"
						desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<BoxWithIcon
						icon={<IconShadowOff size={50} className="text-primaryDark" />}
						title="30-80"
						subTitle="centymetrów średnicy"
						desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</>
			)}
		</article>
	);
};
