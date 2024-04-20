import { redirect } from "next/navigation";
import Stripe from "stripe";
import { IconCheck } from "@tabler/icons-react";
import { Heading } from "@/components/atoms/Heading";
import { Section } from "@/components/atoms/Section";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { ProductInformationBox } from "@/components/organisms/ProductInformationBox";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(
		searchParams.sessionId,
	);

	return (
		<>
			{session.payment_status === "paid" && (
				<Section className="container mx-auto">
					<div className="flex flex-col items-center justify-center space-y-5 text-center">
						<div className="flex max-w-md flex-col items-center space-y-6">
							<div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-success">
								<IconCheck
									size={48}
									stroke={2}
									className="mx-auto text-slate50"
								/>
							</div>
							<div className="text-center">
								<Heading>Zamówienie potwierdzone</Heading>
								<p className="mt-2">
									Bardzo dziękujemy za zaufanie i Twoje zamówienie w GLAMOONS.
								</p>
								<p className="mt-6">
									Zakasamy rękawy i zabieramy się za produkcję Twojego
									zamówienia. Zrobimy co w naszej mocy by Twoja paczka GLAMOONS
									dotarła do Ciebie jak najszybciej.
								</p>
							</div>
							<SecondaryButton href="/" className="w-full max-w-md">
								Kupuj dalej
							</SecondaryButton>
						</div>
					</div>
				</Section>
			)}
			<ProductInformationBox />
		</>
	);
}
