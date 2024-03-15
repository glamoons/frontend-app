import { DefaultText } from "@/components/atoms/DefaultText";
import { cn } from "@/lib/utils";
import { type BaseProps } from "@/interfaces/base";

export type TextHolderProps = {
	title: BaseProps["title"];
	description: BaseProps["description"];
	icon?: React.ReactNode;
};

export const TextHolder = ({ title, description, icon }: TextHolderProps) => {
	return (
		<div className="relative z-10 flex h-full w-full flex-col items-center justify-end space-y-2 px-6 py-8">
			{icon ? icon : false}
			<h3 className="text-xl font-bold text-slate50">{title}</h3>
			<DefaultText className={cn("text-center text-slate50")}>
				{description}
			</DefaultText>
		</div>
	);
};
