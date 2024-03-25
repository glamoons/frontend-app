import Link from "next/link";
import { Label } from "../atoms/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export enum SupportedColors {
	coldWhite = "coldWhite",
	warmWhite = "warmWhite",
}

const supportedColors: {
	[K in SupportedColors]: {
		name: string;
		bgColor: string;
		selectedColor: string;
		border: string;
	};
} = {
	coldWhite: {
		name: "zimny biały",
		bgColor: "bg-[#B0D6FD]",
		selectedColor: "ring-[#B0D6FD]",
		border: "border-[#B0D6FD]",
	},
	warmWhite: {
		name: "ciepły biały",
		bgColor: "bg-[#FFD15C]",
		selectedColor: "ring-[#FFD15C]",
		border: "border-[#FFD15C]",
	},
};

export const ProductColorPicker = ({
	currentColor,
	currentSize,
	colorVariationOptions,
}: {
	currentColor: string;
	currentSize: string;
	colorVariationOptions: SupportedColors[];
}) => {
	let selectedColor = currentColor;
	if (
		!Object.values(SupportedColors).includes(selectedColor as SupportedColors)
	) {
		selectedColor = SupportedColors.coldWhite;
	}

	return (
		<div className="grow-1">
			<RadioGroup value={selectedColor} className="mt-2" name="color">
				<Label className="sr-only">Wybierz kolor</Label>
				<div className="sm:grid-cols-6 grid grid-cols-3 gap-3">
					{colorVariationOptions.map((option) => (
						<div key={String()}>
							<RadioGroupItem
								value={option}
								id={option}
								className="peer sr-only"
							/>
							<Label
								htmlFor={option}
								className={cn(
									"border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex flex-col items-center justify-between rounded-md border-2 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
								)}
							>
								<Link
									href={
										currentSize
											? `?size=${currentSize}&color=${String(option)}`
											: `?color=${selectedColor}`
									}
									className={cn(
										supportedColors[option as SupportedColors]
											? supportedColors[option as SupportedColors].bgColor
											: "bg-gray-900",
										"w-full rounded-sm p-4 text-center",
									)}
								/>
							</Label>
						</div>
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
