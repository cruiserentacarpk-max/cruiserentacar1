import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, waLink } from "@/lib/cruise-data";

export default function Blog() {
  return (
    <>
      <section className="py-20 text-center">
        <p className="eyebrow">— Insights —</p>
        <h1 className="font-display text-5xl md:text-7xl mt-3">Journal</h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground px-6">
          Stories, guides and expert advice from the world of premium car rental.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((p) => (
          <article key={p.slug} className="group rounded-xl border border-border bg-card p-7 hover:border-gold/60 transition flex flex-col">
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span className="text-gold">{p.category}</span>
              <span>{p.date} · {p.read}</span>
            </div>
            <h2 className="font-display text-2xl mt-4 leading-snug">{p.title}</h2>
            <p className="text-sm text-muted-foreground mt-3 flex-1">{p.excerpt}</p>
            <a
              href={waLink(`Hello Cruise Rent A Car,\n\nI'd like to read more about: ${p.title}`)}
              target="_blank" rel="noreferrer"
              className="mt-5 text-xs tracking-[0.2em] uppercase text-gold inline-flex items-center gap-2"
            >
              Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
