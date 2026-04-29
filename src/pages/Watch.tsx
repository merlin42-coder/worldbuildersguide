import { useMemo, useState } from "react";
import { Search, Play, Lock } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WatchCard } from "@/components/site/WatchCard";
import { AbstractThumb } from "@/components/site/AbstractThumb";
import { FinalCTA } from "@/components/site/FinalCTA";
import { watchContent, type WatchCategory } from "@/content/watchContent";

const filters: ("All" | WatchCategory)[] = ["All", "Product Worlds", "Breakdowns", "Head to Head"];

const Watch = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const featured = watchContent.find((w) => w.isFree)!;

  const items = useMemo(() => {
    return watchContent
      .filter((w) => w.id !== featured.id)
      .filter((w) => (filter === "All" ? true : w.category === filter))
      .filter((w) =>
        query.trim()
          ? (w.title + w.brand + w.description).toLowerCase().includes(query.toLowerCase().trim())
          : true
      );
  }, [filter, query, featured.id]);

  return (
    <>
      <Nav />
      <main>
        {/* HERO featured */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-6">Watch · Featured Free Breakdown</div>
            </Reveal>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <Reveal className="lg:col-span-7">
                <div className="relative">
                  <AbstractThumb variant={featured.variant} />
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <span className="w-16 h-16 rounded-full bg-sage text-background flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Play size={22} className="ml-1" />
                    </span>
                  </button>
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] bg-sage text-background px-2 py-0.5 rounded-sm font-medium">
                    Free
                  </span>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <div className="eyebrow text-ink-subtle">{featured.category}</div>
                <h1 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-tight">
                  {featured.title}
                </h1>
                <p className="mt-5 text-ink-muted leading-relaxed">{featured.description}</p>
                <div className="mt-6 flex items-center gap-3 text-xs text-ink-subtle">
                  <span>{featured.brand}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-subtle" />
                  <span>{featured.duration}</span>
                </div>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity">
                  <Play size={14} /> Watch free
                </button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="hairline-top hairline-bottom sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur-md">
          <div className="container-wbg py-4 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                    filter === f
                      ? "border-sage text-ink bg-sage/10"
                      : "border-hairline text-ink-muted hover:text-ink hover:border-hairline-strong"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="ml-auto relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search breakdowns"
                maxLength={120}
                className="w-full bg-elevated border border-hairline rounded-full pl-9 pr-4 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-sage outline-none transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Library */}
        <section className="py-16 md:py-24">
          <div className="container-wbg">
            {items.length === 0 ? (
              <p className="text-ink-muted text-center py-20">
                No breakdowns match that search yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((it, i) => (
                  <Reveal key={it.id} delay={(i % 3) * 60}>
                    <WatchCard item={it} />
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal>
              <div className="mt-20 border border-hairline bg-elevated p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex items-start gap-4">
                  <Lock size={20} className="text-sage mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-2xl text-ink">Premium breakdowns coming soon.</h3>
                    <p className="mt-2 text-sm text-ink-muted max-w-xl">
                      Deeper analyses and head-to-heads, gated to a small audience of founders and product leaders.
                    </p>
                  </div>
                </div>
                <button className="rounded-full border border-hairline-strong px-5 py-3 text-sm text-ink hover:border-sage transition-colors">
                  Notify me
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Watch;
