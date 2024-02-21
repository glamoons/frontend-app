import { type BaseProps } from "@/interfaces/base";

export const ErrorText = ({ children }: BaseProps) => {
	return <p className="text-xs text-error">{children}</p>;
};
