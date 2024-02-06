import { Button } from "@/components/ui/button";

type CategoryHolderProps = {
	title: string;
	btnName: string;
};

export const CategoryHolder = ({ title, btnName }: CategoryHolderProps) => {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-end px-6 py-4">
			<h3 className="desktop:text-3xl laptop:text-2xl tablet:text-xl text-base font-bold text-secondary">
				{title}
			</h3>
			<Button className="laptop:text-sm tablet:text-xs mt-[5px] h-auto bg-transparent p-0 text-[10px] font-normal uppercase leading-[0.875rem] tracking-[0.25em] text-secondary underline">
				{btnName}
			</Button>
		</div>
	);
};