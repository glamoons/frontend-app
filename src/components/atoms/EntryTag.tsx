import { Button, type ButtonProps } from "@/components/ui/button";

export const EntryTag = ({ children, ...props }: ButtonProps) => {
	return (
		<Button
			{...props}
			type="button"
			className="h-auto cursor-pointer bg-transparent px-0 py-0 text-xs font-light uppercase text-secondary underline transition-colors duration-500 hover:text-primaryDark"
		>
			{children}
		</Button>
	);
};
