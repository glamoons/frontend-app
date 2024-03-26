import Link from "next/link";
import { Label } from "../atoms/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SupportedColors, cn, supportedColors } from "@/lib/utils";

export const ProductColorPicker = ({
	currentShape,
	currentColor,
	currentSize,
	colorVariationOptions,
}: {
	currentShape: string;
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
				<div className="flex flex-row gap-3">
					{colorVariationOptions.map((option) => (
						<div key={option} className="h-9 w-9">
							<RadioGroupItem
								value={option}
								id={option}
								className="peer sr-only"
							/>
							<Label
								htmlFor={option}
								className={cn(
									"border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex h-full w-full flex-col items-center justify-between rounded-md border-2 peer-data-[state=checked]:border-secondary [&:has([data-state=checked])]:border-secondary",
								)}
							>
								<Link
									href={
										currentShape && currentSize
											? `?shape=${currentShape}&size=${currentSize}&color=${String(option)}`
											: `?color=${selectedColor}`
									}
									className={cn(
										supportedColors[option as SupportedColors]
											? supportedColors[option as SupportedColors].bgColor
											: "bg-gray-900",
										"h-full w-full rounded-sm text-center",
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
