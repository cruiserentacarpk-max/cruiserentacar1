import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Shield, Clock, Star, Car } from "lucide-react";
import hero from "@/assets/cruise/hero.jpg";
import banner2 from "@/assets/cruise/banner-2.jpg";
import { waDefault, waVehicle, VEHICLES } from "@/lib/cruise-data";
import { VehicleCard } from "@/components/cruise/VehicleCard";

export default function Home() {
  const popular = VEHICLES.slice(0, 10);
  return (
    <>
      <section className="relative -mt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Luxury car" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
          <p className="eyebrow mb-6">— Since 2014 · Pakistan —</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-3xl">
            Premium <br />
            <em className="text-gradient-gold not-italic font-medium" style={{ fontStyle: "italic" }}>Car Rental</em>
            <br /> Services
          </h1>
          <p className="mt-8 max-w-lg text-base text-muted-foreground">
            Luxury Cars, SUVs, Vans & Chauffeur Services — Available for Self Drive & With Driver across Pakistan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/fleet" className="group bg-gradient-gold text-primary-foreground px-7 py-4 rounded text-xs tracking-[0.25em] uppercase font-medium flex items-center gap-3 hover:opacity-95">
              Explore Fleet <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={waDefault} target="_blank" rel="noreferrer" className="border border-gold text-gold px-7 py-4 rounded text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:bg-gold/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-20 grid grid-cols-3 max-w-md gap-8">
            {[["12+","Years"],["50+","Vehicles"],["5000+","Trips"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display text-4xl text-gradient-gold">{n}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="eyebrow">— Popular Picks —</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3">Our Top Vehicles</h2>
              <p className="mt-3 text-muted-foreground max-w-md">Tap any car to view full details, features and book instantly.</p>
            </div>
            <Link to="/fleet" className="text-xs tracking-[0.25em] uppercase text-gold inline-flex items-center gap-2">View All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popular.map((v) => <VehicleCard key={v.name+v.year} v={v} />)}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/fleet" className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded text-xs tracking-[0.25em] uppercase hover:opacity-95">
              View More Cars <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="eyebrow">— Why Cruise —</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Premium experience, end to end.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { i: Clock, t: "24/7 Support", d: "Available day and night across Lahore." },
              { i: Car, t: "50+ Vehicles", d: "From economy to flagship supercars." },
              { i: Star, t: "Top Rated", d: "Trusted by 5,000+ clients since 2014." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-border bg-background p-7 hover:border-gold/60 transition">
                <f.i className="h-7 w-7 text-gold" />
                <h3 className="font-display text-2xl mt-4">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <img src={banner2} alt="Wedding Car Rentals" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div>
            <p className="eyebrow mb-4">— Your Big Day —</p>
            <h2 className="font-display text-4xl md:text-5xl">Wedding Car Rentals</h2>
            <p className="mt-4 text-muted-foreground max-w-md">Mercedes-Benz, Bentley & Audi — decorated and chauffeured.</p>
            <a href={waVehicle("Wedding Car Rentals")} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-6 py-3 rounded text-xs tracking-[0.2em] uppercase">
              Reserve Wedding Car <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">— Ready to drive —</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Your journey starts with a message.</h2>
          <p className="mt-4 text-muted-foreground">Chat with us on WhatsApp — quick replies, transparent pricing.</p>
          <a href={waDefault} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded text-xs tracking-[0.25em] uppercase">
            <MessageCircle className="h-4 w-4" /> Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
