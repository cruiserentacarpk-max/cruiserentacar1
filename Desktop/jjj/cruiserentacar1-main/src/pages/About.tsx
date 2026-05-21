import { Users, Crown, Car, Award } from "lucide-react";

const MILESTONES = [
  { y: "2014", t: "Founded in Lahore", d: "Cruise Rent A Car opens its doors with a small fleet and a big vision: redefine premium rental in Pakistan." },
  { y: "2017", t: "Luxury Expansion", d: "Mercedes-Benz, Audi and BMW added to the fleet — luxury becomes our signature." },
  { y: "2020", t: "Nationwide Service", d: "Operations expand across Pakistan with airport transfers and intercity service." },
  { y: "2023", t: "Supercar Collection", d: "Iconic vehicles — Bentley Continental GT, BMW i8, Porsche Taycan — join the lineup." },
  { y: "2026", t: "12+ Years Strong", d: "Trusted by thousands of clients, with a reputation built on detail and dedication." },
];

export default function About() {
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Our Story —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3">Driven by Excellence</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          Cruise Rent A Car has redefined premium car rental in Pakistan since 2014.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-display text-6xl text-gradient-gold">12+</div>
          <p className="eyebrow mt-2">Years of Service</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cruise Rent A Car started in 2014 with a clear mission: bring world-class luxury rental experiences to Pakistan.
            Today, with 12+ years behind us, we operate one of the country's most refined fleets.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We specialize in luxury cars, self-drive rentals, professional chauffeur services, group vans, corporate rentals,
            and premium airport transfers — all backed by 24/7 support and an obsession with detail.
          </p>
        </div>
        <blockquote className="font-display italic text-3xl md:text-4xl text-gradient-gold border-l-2 border-gold pl-6">
          "Every drive should feel like an arrival."
        </blockquote>
      </section>

      <section className="bg-card/40 border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-center">— Our Mission —</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-center">Deliver flawless, premium mobility experiences across Pakistan.</h2>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { i: Users, t: "Client First", d: "Every booking is personal — we obsess over satisfaction." },
              { i: Car, t: "Premium Fleet", d: "From economy to flagship — every car is showroom-ready." },
              { i: Crown, t: "Professional Drivers", d: "Trained, uniformed and discreet chauffeurs you can trust." },
              { i: Award, t: "12+ Years", d: "Battle-tested experience and a reputation that travels." },
            ].map((v) => (
              <div key={v.t} className="rounded-xl border border-border bg-background p-7">
                <v.i className="h-7 w-7 text-gold" />
                <h3 className="font-display text-xl mt-4">{v.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="eyebrow text-center">— Milestones —</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 text-center">Our Journey</h2>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <div key={m.y} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i%2 ? "md:[&>*:first-child]:order-2 md:text-left" : "md:text-right"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-gold ring-4 ring-background" />
                <div className="pl-10 md:pl-0 md:pr-10">
                  <div className="font-display text-4xl text-gradient-gold">{m.y}</div>
                  <h3 className="font-display text-2xl mt-1">{m.t}</h3>
                  <p className="text-muted-foreground mt-2">{m.d}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/40 border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">— Founder & Owner —</p>
          <h2 className="font-display text-5xl mt-3 text-gradient-gold">Abdullah Zain</h2>
          <p className="mt-6 italic text-xl md:text-2xl font-display text-foreground/90">
            "Cruise Rent A Car is more than a business — it's my promise of premium service, honest dealing,
            and unforgettable journeys to every client who trusts us."
          </p>
          <p className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">— Abdullah Zain, Founder</p>
        </div>
      </section>
    </>
  );
}
