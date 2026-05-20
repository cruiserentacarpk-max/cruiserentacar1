import { useState } from "react";
import { VEHICLES } from "@/lib/cruise-data";
import { VehicleCard } from "@/components/cruise/VehicleCard";

const FILTERS = ["All Vehicles","Economic","Luxury","Vans & Buses","Self Drive","With Driver"] as const;
type Filter = (typeof FILTERS)[number];

export default function Fleet() {
  const [filter, setFilter] = useState<Filter>("All Vehicles");
  const filtered = VEHICLES.filter((v) => {
    if (filter === "All Vehicles") return true;
    if (filter === "Vans & Buses") return v.category === "Group";
    if (filter === "Self Drive") return v.drive.includes("Self Drive");
    if (filter === "With Driver") return v.drive.includes("With Driver");
    return v.category === filter;
  });
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Complete Collection —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3">Our Fleet</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          From efficient daily drivers to flagship luxury — find the perfect vehicle for any occasion.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] tracking-[0.25em] uppercase px-4 py-2.5 rounded border transition ${
                filter === f
                  ? "bg-gradient-gold text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >{f}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((v) => <VehicleCard key={v.name+v.year} v={v} />)}
        </div>
      </section>
    </>
  );
}
