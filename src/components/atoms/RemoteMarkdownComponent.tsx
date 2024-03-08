import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";

export const RemoteMarkdownComponent = ({ ...props }: MDXRemoteProps) => {
	return (
		<MDXRemote
			{...props}
			components={{
				a: (props) => <Link href={props.href as string}>{props.children}</Link>,
			}}
		/>
	);
};
