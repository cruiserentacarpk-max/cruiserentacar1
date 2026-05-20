import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/cruise/logo.jpg";
import { SITE } from "@/lib/cruise-data";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/luxury", label: "Luxury" },
  { to: "/vans-buses", label: "Vans & Buses" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-xl ${
        scrolled || open
          ? "border-b border-gold/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Cruise Rent A Car" className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-cover" />
          <span className="font-display text-sm sm:text-base text-gradient-gold hidden xs:block">Cruise</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }: { isActive: boolean }) =>
                `text-[11px] tracking-[0.22em] uppercase transition-colors ${isActive ? "text-gold" : "text-foreground/80 hover:text-gold"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-3 py-2 rounded hover:bg-gold/10 transition"
          >
            <Phone className="h-3.5 w-3.5" /> {SITE.phone}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-gold p-2 rounded border border-gold/30 bg-background/60 backdrop-blur"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <nav
          className={`relative flex flex-col gap-1 px-6 pt-8 pb-12 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={({ isActive }: { isActive: boolean }) =>
                `block py-4 px-4 text-sm tracking-[0.28em] uppercase border-b border-border/60 transition-all duration-500 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                } ${isActive ? "text-gold" : "text-foreground hover:text-gold hover:pl-6"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground text-xs tracking-[0.25em] uppercase px-5 py-3.5 rounded"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
