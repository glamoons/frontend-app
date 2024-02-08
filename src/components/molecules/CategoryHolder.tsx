import { CategoryHolderProps } from "@/interfaces/base";

export const CategoryHolder = ({ title, btnName }: CategoryHolderProps) => {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-end px-6 py-4">
			<h3 className="text-base font-bold text-secondary tablet:text-xl laptop:text-2xl desktop:text-3xl">
				{title}
			</h3>
			<span className="mt-[5px] h-auto bg-transparent p-0 text-[10px] font-normal uppercase leading-[0.875rem] tracking-[0.25em] text-secondary underline tablet:text-xs laptop:text-sm">
				{btnName}
			</span>
		</div>
	);
};
