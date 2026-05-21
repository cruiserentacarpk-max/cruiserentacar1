import { VEHICLES } from "@/lib/cruise-data";
import { VehicleCard } from "@/components/cruise/VehicleCard";

export default function VansBuses() {
  const cars = VEHICLES.filter((v) => v.category === "Group");
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Group Travel —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3">Vans & Buses</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          Spacious, comfortable and ready for your team, tour or family trip.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((v) => <VehicleCard key={v.name} v={v} />)}
      </section>
    </>
  );
}
