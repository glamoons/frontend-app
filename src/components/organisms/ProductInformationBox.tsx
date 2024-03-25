import {
	IconStarFilled,
	IconTruckDelivery,
	IconCalendarClock,
	IconShieldChevron,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const ProductInformationBox = () => {
	return (
		<div className="bg-slate50 py-5">
			<div className="container mx-auto grid grid-cols-12 gap-x-3 gap-y-3 tabletLg:gap-x-6 tabletLg:gap-y-0 laptop:gap-x-10">
				<div className="col-span-6 self-center tabletLg:col-span-3">
					<h2 className="sr-only">Opinie</h2>
					<div className="flex flex-col space-y-1">
						<div className="flex">
							<a
								href="#"
								className="text-xs font-medium text-secondary tablet:text-sm"
							>
								24 opinie klientów
							</a>
						</div>
						<div className="flex items-center">
							{[1, 2, 3, 4, 5].map((rating) => (
								<IconStarFilled
									key={rating}
									size={16}
									className={cn(
										5.0 > rating ? "text-secondary" : "text-zinc-300",
										"flex-shrink-0",
									)}
									aria-hidden="true"
								/>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-6 self-center tabletLg:col-span-3">
					<h2 className="sr-only">Darmowa wysyłka</h2>
					<div className="flex flex-row items-center space-x-3">
						<IconTruckDelivery size={24} className="text-secondary" />
						<div className="flex flex-col">
							<p className="text-xs font-semibold text-secondary tablet:text-sm">
								Darmowa wysyłka
							</p>
							<p className="text-xs font-normal text-secondary">
								Do każdego miejsca w Polsce
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-6 self-center tabletLg:col-span-3">
					<h2 className="sr-only">Bezpłatne 100-dniowe zwroty</h2>
					<div className="flex flex-col space-y-1">
						<div className="flex flex-row items-center space-x-3">
							<IconCalendarClock size={24} className="text-secondary" />
							<div className="flex flex-col">
								<p className="text-xs font-semibold text-secondary tablet:text-sm">
									Bezpłatne 100-dniowe zwroty
								</p>
								<p className="text-xs font-normal text-secondary">
									Bez zbędnych pytań
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-6 self-center tabletLg:col-span-3">
					<h2 className="sr-only">Dodatkowa gwarancja</h2>
					<div className="flex flex-col space-y-1">
						<div className="flex flex-row items-center space-x-3">
							<IconShieldChevron size={24} className="text-secondary" />
							<div className="flex flex-col">
								<p className="text-xs font-semibold text-secondary tablet:text-sm">
									Dodatkowa gwarancja
								</p>
								<p className="text-xs font-normal text-secondary">
									Na terenie całej Polski
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
