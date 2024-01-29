import { IconMenuDeep } from "@tabler/icons-react";
export const MobileMenuHandler = () => {
	return (
		<button className="flex h-12 flex-row items-center space-x-3">
			<IconMenuDeep className="text-slate-50" />
			<small className="uppercase leading-5 text-slate-50">menu</small>
		</button>
	);
};
