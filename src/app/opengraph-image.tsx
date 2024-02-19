import LogoLight from "@/assets/logo/LogoLight";
import { ImageResponse } from "next/og";
import { CSSProperties } from "react";

// Route segment config
// export const runtime = "edge";

export const alt = "Glamoons: konfigurowalne stoliki i zegary w stylu glamour.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const backdropStyle: CSSProperties | undefined = {
	background: "#282E39",
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	right: 0,
	display: "flex",

	opacity: 0.5,
};

const style: CSSProperties | undefined = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	fontSize: "4rem",
	fontWeight: "700",
	background:
		"radial-gradient(123.65% 123.65% at 16.11% 18.28%, #BABABA 21.3%, #747474 100%)",
	color: "#F6F6F4",
	width: "100%",
	height: "100%",
	textAlign: "center",
	position: "relative",
};

export default async function Image() {
	const messageDecoded = decodeURIComponent(alt);
	const proximaBold = fetch(
		new URL("./ProximaNova-Bold.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		(
			<div style={style}>
				<div style={backdropStyle} />
				<LogoLight width={238} height={160} />
				<p>{messageDecoded}</p>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "proximanova",
					data: await proximaBold,
					style: "normal",
					weight: 700,
				},
			],
		},
	);
}
