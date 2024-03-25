import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import { Label } from "@/components/atoms/Label";

export const FieldsetFormItem = ({
	...props
}: DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>) => {
	const {
		title,
		name,
		id,
		value,
		"aria-label": ariaLabel,
		defaultValue,
	} = props;

	return (
		<div className="flex items-center">
			<legend className="sr-only">{title}</legend>
			<input
				type="radio"
				name={name}
				id={id}
				value={value}
				defaultValue={defaultValue}
				aria-label={ariaLabel}
				hidden
			/>
			<Label
				htmlFor="square"
				aria-label={ariaLabel}
				className="min-w-[4.25rem] rounded-full border-2 border-transparent px-3 py-2 text-sm font-normal text-secondary checked:bg-white"
			>
				{title}
			</Label>
		</div>
	);
};
