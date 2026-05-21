import { useState } from "react";
import { Users, Settings2, Fuel, Calendar, X, Check, MessageCircle, Phone } from "lucide-react";
import type { Vehicle } from "@/lib/cruise-data";
import { waVehicle, SITE } from "@/lib/cruise-data";

const accentByCat: Record<Vehicle["category"], string> = {
  Economic: "from-zinc-800 to-zinc-950",
  Luxury: "from-amber-900/40 to-zinc-950",
  Group: "from-stone-800 to-zinc-950",
};

const featuresFor = (v: Vehicle): string[] => {
  const base = [
    "Air Conditioning",
    "Power Steering",
    "ABS Brakes",
    "Airbags",
    "Bluetooth Audio",
    "Comfortable Seating",
  ];
  const luxury = ["Leather Interior", "Sunroof", "Premium Sound System", "Ambient Lighting", "Heated Seats"];
  const group = ["Spacious Cabin", "Roof Rack", "USB Charging", "Reading Lights", "Tinted Windows"];
  const suv = ["4WD Capability", "Ground Clearance", "Cruise Control"];
  if (v.category === "Luxury") return [...base, ...luxury];
  if (v.category === "Group") return [...base, ...group];
  if (v.type === "SUV" || v.type === "Crossover" || v.type === "Pickup") return [...base, ...suv];
  return base;
};

export function VehicleCard({ v }: { v: Vehicle }) {
  const [open, setOpen] = useState(false);
  const features = featuresFor(v);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:border-gold/60 hover:shadow-[0_12px_40px_-12px_hsl(var(--gold)/0.4)] transition-all duration-300 flex flex-col"
      >
        <div className={`relative aspect-[4/3] bg-gradient-to-br ${accentByCat[v.category]} overflow-hidden`}>
          <img
            src={v.image}
            alt={v.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-background/70 backdrop-blur px-2 py-1 rounded text-gold border border-gold/30">
            {v.category}
          </span>
          <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.2em] uppercase bg-gold/90 text-primary-foreground px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            View Details
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 text-gold" /> {v.year} Model
          </div>
          <h3 className="font-display text-2xl mt-1">{v.name}</h3>
          <p className="text-sm text-muted-foreground italic mt-1 mb-4">"{v.tagline}"</p>
          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground border-y border-border py-3">
            <span className="flex items-center gap-1"><Users className="h-3 w-3 text-gold" />{v.seats}</span>
            <span className="flex items-center gap-1"><Settings2 className="h-3 w-3 text-gold" />{v.transmission}</span>
            <span className="flex items-center gap-1"><Fuel className="h-3 w-3 text-gold" />{v.fuel.slice(0, 4)}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {v.drive.map((d) => (
              <span key={d} className="text-[10px] tracking-wider uppercase px-2 py-1 rounded bg-secondary text-foreground/80">{d}</span>
            ))}
          </div>
          <div className="mt-auto pt-5 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Call For Price</span>
            <a
              href={waVehicle(v.name)}
              onClick={(e) => e.stopPropagation()}
              target="_blank" rel="noreferrer"
              className="text-xs tracking-[0.2em] uppercase bg-gradient-gold text-primary-foreground px-4 py-2 rounded hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card border border-gold/30 rounded-t-2xl sm:rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.3)] animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-zinc-900 overflow-hidden">
              <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur border border-gold/30 text-gold hover:bg-background"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-background/80 backdrop-blur px-3 py-1.5 rounded text-gold border border-gold/40">
                {v.category}
              </span>
            </div>

            <div className="p-5 sm:p-8">
              <p className="eyebrow text-gold/80">{v.year} · {v.type}</p>
              <h2 className="font-display text-3xl sm:text-4xl mt-1">{v.name}</h2>
              <p className="text-muted-foreground italic mt-2">"{v.tagline}"</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <Spec icon={<Users className="h-4 w-4" />} label="Seats" value={String(v.seats)} />
                <Spec icon={<Settings2 className="h-4 w-4" />} label="Transmission" value={v.transmission} />
                <Spec icon={<Fuel className="h-4 w-4" />} label="Fuel" value={v.fuel} />
                <Spec icon={<Calendar className="h-4 w-4" />} label="Model" value={String(v.year)} />
              </div>

              <div className="mt-6">
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">Available Options</p>
                <div className="flex flex-wrap gap-2">
                  {v.drive.map((d) => (
                    <span key={d} className="text-xs tracking-wider uppercase px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/30">{d}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">Features & Amenities</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-gold shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={waVehicle(v.name)}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground text-xs tracking-[0.25em] uppercase px-5 py-3.5 rounded hover:opacity-90 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold text-xs tracking-[0.25em] uppercase px-5 py-3.5 rounded hover:bg-gold/10 transition"
                >
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/40 p-3">
      <div className="flex items-center gap-2 text-gold">{icon}<span className="text-[10px] tracking-[0.2em] uppercase">{label}</span></div>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
