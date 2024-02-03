import Link from "next/link";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-col space-y-4 py-6">
				<li className="text-3xl font-light uppercase text-secondary">
					<Link href="/">O produkcie</Link>
				</li>
				<li className="text-3xl font-light uppercase text-secondary">
					<Link href="/">Konfigurator</Link>
				</li>
				<li className="text-3xl font-light uppercase text-secondary">
					<Link href="/">Blog</Link>
				</li>
				<li className="text-3xl font-light uppercase text-secondary">
					<Link href="/">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
};
