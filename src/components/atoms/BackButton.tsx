"use client";
import { useRouter } from "next/navigation";
import { type PropsWithChildren } from "react";
import { SubmitButton } from "./SubmitButton";
import { type BaseProps } from "@/interfaces/base";

export const BackButton = ({
	className,
	children,
}: PropsWithChildren<BaseProps>) => {
	const router = useRouter();
	return (
		<SubmitButton className={className} onClick={() => router.back()}>
			{children}
		</SubmitButton>
	);
};
