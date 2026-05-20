import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { SITE, waDefault } from "@/lib/cruise-data";
import logo from "@/assets/cruise/logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Cruise" className="h-14 w-14 rounded-md object-cover mb-4" />
          <p className="text-sm text-muted-foreground max-w-sm">
            Premium car rental services in Pakistan since {SITE.since}. Luxury cars, SUVs, vans,
            and chauffeur services nationwide.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/fleet" className="hover:text-gold">Our Fleet</Link></li>
            <li><Link to="/luxury" className="hover:text-gold">Luxury Cars</Link></li>
            <li><Link to="/vans-buses" className="hover:text-gold">Vans & Buses</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /><a href={`tel:${SITE.phone.replace(/\s/g,"")}`}>{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" />{SITE.address}</li>
          </ul>
          <h4 className="eyebrow mt-6 mb-3">Connect</h4>
          <div className="flex gap-3">
            <a href={waDefault} target="_blank" rel="noreferrer" className="p-2 rounded border border-border hover:border-gold hover:text-gold transition"><MessageCircle className="h-4 w-4" /></a>
            <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer" className="p-2 rounded border border-border hover:border-gold hover:text-gold transition"><Instagram className="h-4 w-4" /></a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Available 24/7 in Lahore.</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
