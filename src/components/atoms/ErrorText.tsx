import { type PropsWithChildren } from "react";
import { type BaseProps } from "@/interfaces/base";

export const ErrorText = ({ children }: PropsWithChildren<BaseProps>) => {
	return <span className="text-xs text-error">{children}</span>;
};
