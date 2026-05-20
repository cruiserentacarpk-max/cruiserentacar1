import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { SITE, waLink } from "@/lib/cruise-data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Cruise Rent A Car,\n\nName: ${form.name}\nPhone: ${form.phone}\nVehicle: ${form.vehicle}\n\n${form.message}\n\nThank you.`;
    window.open(waLink(msg), "_blank");
  };
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Get in Touch —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3">Contact Us</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          Our team is available 24/7 to help you book the perfect vehicle.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { i: Phone, t: "Call Us", v: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g,"")}` },
            { i: MessageCircle, t: "WhatsApp", v: SITE.phone, href: waLink("Hello Cruise Rent A Car,") },
            { i: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { i: MapPin, t: "Visit", v: SITE.address },
            { i: Instagram, t: "Instagram", v: `@${SITE.instagram}`, href: `https://instagram.com/${SITE.instagram}` },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex gap-4 items-start rounded-xl border border-border bg-card p-5 hover:border-gold/60 transition"
            >
              <div className="p-3 rounded bg-gold/10 text-gold"><c.i className="h-5 w-5" /></div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold">{c.t}</p>
                <p className="text-foreground mt-1">{c.v}</p>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={submit} className="lg:col-span-3 rounded-xl border border-border bg-card p-8 space-y-5">
          <h2 className="font-display text-3xl">Send Us a Message</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Your Name" value={form.name} onChange={(v) => setForm({...form,name:v})} required />
            <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({...form,phone:v})} required />
          </div>
          <Field label="Vehicle Interested In" value={form.vehicle} onChange={(v) => setForm({...form,vehicle:v})} />
          <Field label="Message" value={form.message} onChange={(v) => setForm({...form,message:v})} textarea />
          <button type="submit" className="w-full bg-[#25D366] text-white px-7 py-4 rounded text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-3 hover:opacity-95">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, value, onChange, required, textarea }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} required={required} rows={5} className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-gold" />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-gold" />
      )}
    </label>
  );
}
