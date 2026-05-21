import { VEHICLES } from "@/lib/cruise-data";
import { VehicleCard } from "@/components/cruise/VehicleCard";

export default function Luxury() {
  const cars = VEHICLES.filter((v) => v.category === "Luxury");
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Flagship Collection —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3 text-gradient-gold">Luxury Cars</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          Bentley, Mercedes-Benz, Porsche, Audi, BMW — the icons of refined motoring.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((v) => <VehicleCard key={v.name} v={v} />)}
      </section>
    </>
  );
}
