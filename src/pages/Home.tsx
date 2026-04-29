import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { FloatingTiles } from "@/components/site/FloatingTiles";
import { WatchCard } from "@/components/site/WatchCard";
import { ContactForm } from "@/components/site/ContactForm";
import { FinalCTA } from "@/components/site/FinalCTA";
import { MediaModal } from "@/components/site/MediaModal";
import { publishedWatchContent, type WatchCategory, type WatchItem } from "@/content/watchContent";
import { useCases } from "@/content/useCases";
import { pillars } from "@/content/pillars";
import { services } from "@/content/services";

const tabs: WatchCategory[] = ["Product Worlds", "Deep Dives", "Head to Head"];

const TRUST_LOGOS = ["FOUNDERS·FUND", "RADIX", "NORTHWAVE", "MERIDIAN", "SUNDIAL", "OAKHAUS"];

const Home = () => {
  const [tab, setTab] = useState<WatchCategory>("Product Worlds");
  const [active, setActive] = useState<WatchItem | null>(null);
  const visible = publishedWatchContent.filter((w) => w.category === tab);
  // Pad from other categories if a tab is light, so the grid stays full.
  const padded = [...visible];
  if (padded.length < 4) {
    for (const w of publishedWatchContent) {
      if (padded.length >= 4) break;
      if (!padded.find((p) => p.id === w.id)) padded.push(w);
    }
  }
  const featured = padded[0];
  const rest = padded.slice(1, 6);

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative">
          <div className="container-wbg pt-16 md:pt-24 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow mb-6">A Product Strategy Studio</div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-ink tracking-tight">
                  Build products that feel coherent.
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-xl text-lg text-ink-muted leading-relaxed">
                  We analyze and design product worlds so users instantly understand what matters, how things work, and why they should care.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/watch"
                    className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                  >
                    Watch the Library <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/work-with-us"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-3 text-sm font-medium text-ink hover:border-sage transition-colors"
                  >
                    Work With Us
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <FloatingTiles />
              </Reveal>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="hairline-top hairline-bottom">
          <div className="container-wbg py-14">
            <Reveal>
              <p className="text-center text-sm md:text-base text-ink-muted">
                Used to rethink products through psychology, systems, and user behavior.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 opacity-60">
              {TRUST_LOGOS.map((l) => (
                <span key={l} className="text-xs md:text-sm tracking-[0.22em] text-ink-muted font-medium">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WATCH PREVIEW */}
        <section className="py-28 md:py-40">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-4">Watch</div>
            </Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
                  Watch Product Worlds
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-ink-muted max-w-md">
                  Short video breakdowns showing why some products feel effortless while others feel chaotic.
                </p>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="mt-10 flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                      tab === t
                        ? "border-sage text-ink bg-sage/10"
                        : "border-hairline text-ink-muted hover:text-ink hover:border-hairline-strong"
                    }`}
                  >
                    {t}
                  </button>
                ))}
                <Link
                  to="/watch"
                  className="ml-auto self-center text-sm text-ink-muted hover:text-ink inline-flex items-center gap-1"
                >
                  Browse all <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300" key={tab}>
              {featured && (
                <Reveal className="lg:col-span-2 lg:row-span-1">
                  <div className="lg:scale-100">
                    <WatchCard item={featured} featured onPlay={setActive} />
                  </div>
                </Reveal>
              )}
              {rest[0] && (
                <Reveal delay={60}>
                  <WatchCard item={rest[0]} onPlay={setActive} />
                </Reveal>
              )}
              {rest.slice(1).map((it, i) => (
                <Reveal key={it.id} delay={120 + i * 60}>
                  <WatchCard item={it} onPlay={setActive} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="hairline-top py-28 md:py-40">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-4">Use Cases</div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl text-ink max-w-3xl leading-tight">
                When to Use a World Builders Guide
              </h2>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
              {useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 60} className="bg-background">
                  <div className="group p-8 h-full bg-background hover:bg-elevated transition-colors min-h-[200px] flex flex-col">
                    <u.icon size={22} className="text-sage" strokeWidth={1.5} />
                    <h3 className="mt-6 font-display text-xl text-ink leading-snug">
                      {u.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {u.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="mt-12 text-center italic text-ink-muted max-w-2xl mx-auto">
                When products grow without shared world logic, friction compounds.
              </p>
            </Reveal>
          </div>
        </section>

        {/* METHOD */}
        <section className="hairline-top py-28 md:py-40">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-4">Method</div>
            </Reveal>
            <div className="grid lg:grid-cols-12 gap-10">
              <Reveal className="lg:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                  Products Are Worlds
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-5">
                <p className="text-ink-muted text-lg leading-relaxed">
                  Every product teaches users a hidden system. Great products make that system feel natural.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-hairline border border-hairline">
              {pillars.map((p, i) => (
                <Reveal key={p.name} delay={i * 70} className="bg-background">
                  <div className="p-7 h-full bg-background hover:bg-elevated transition-colors min-h-[260px] flex flex-col">
                    <div className="eyebrow text-sage">{p.number}</div>
                    <div className="mt-6 font-display text-2xl text-ink">{p.name}</div>
                    <div className="mt-2 text-sm text-ink-muted">{p.oneLiner}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-ink-muted max-w-xl">
                  World Builders Guide helps teams define these foundations before complexity takes over.
                </p>
                <Link
                  to="/method"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-3 text-sm font-medium text-ink hover:border-sage transition-colors w-fit"
                >
                  Explore Method <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WORK WITH US */}
        <section id="work" className="hairline-top py-28 md:py-40">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-4">Engagements</div>
            </Reveal>
            <div className="grid lg:grid-cols-12 gap-10">
              <Reveal className="lg:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                  Work With Us
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-5">
                <p className="text-ink-muted text-lg leading-relaxed">
                  For founders, product teams, and growing companies that need sharper product clarity.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Reveal key={s.number} delay={i * 80}>
                  <div className="card-hover bg-elevated border border-hairline p-7 h-full flex flex-col min-h-[260px]">
                    <div className="eyebrow text-sage">{s.number}</div>
                    <h3 className="mt-6 font-display text-2xl text-ink leading-snug">{s.name}</h3>
                    <p className="mt-3 text-sm text-ink-muted">{s.short}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                >
                  Start a Conversation <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <div className="mt-20 grid lg:grid-cols-12 gap-12">
              <Reveal className="lg:col-span-5">
                <h3 className="font-display text-3xl text-ink leading-tight">
                  Tell us what you're building.
                </h3>
                <p className="mt-4 text-ink-muted">
                  Short and direct is best. We respond within two business days.
                </p>
              </Reveal>
              <div className="lg:col-span-7">
                <Reveal delay={120}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <MediaModal item={active} onClose={() => setActive(null)} />
    </>
  );
};

export default Home;
