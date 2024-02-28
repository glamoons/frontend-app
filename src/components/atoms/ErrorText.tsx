import { type BaseProps } from "@/interfaces/base";

export const ErrorText = ({ children }: BaseProps) => {
	return <span className="text-xs text-error">{children}</span>;
};
