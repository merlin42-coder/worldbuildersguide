import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { pillars } from "@/content/pillars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    n: "01",
    name: "Diagnose",
    text: "We map your product as it actually behaves and surface the contradictions teams have stopped noticing.",
  },
  {
    n: "02",
    name: "Define",
    text: "We define the underlying world: its goals, rules, feedback, progress, and beliefs. The output is a shared language.",
  },
  {
    n: "03",
    name: "Align",
    text: "We translate the world into working principles your team can apply to every roadmap call from then on.",
  },
];

const Method = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-16 md:pt-28 pb-16 md:pb-20">
          <div className="container-wbg max-w-4xl">
            <Reveal>
              <div className="eyebrow mb-6">Method</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05]">
                Products Are Worlds.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-lg text-ink-muted max-w-2xl leading-relaxed">
                Every product teaches users a hidden system. Great products make that system feel natural. Our framework names the five forces that decide whether a product feels coherent — or quietly contradicts itself.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pillars accordion */}
        <section className="hairline-top">
          <div className="container-wbg py-16 md:py-24 max-w-4xl">
            <Accordion type="single" collapsible defaultValue={pillars[0].name} className="border-t border-hairline">
              {pillars.map((p) => (
                <AccordionItem key={p.name} value={p.name} className="border-b border-hairline">
                  <AccordionTrigger className="hover:no-underline py-7 group">
                    <div className="flex items-center gap-6 md:gap-10 text-left">
                      <span className="eyebrow text-sage w-8">{p.number}</span>
                      <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-sage transition-colors">
                        {p.name}
                      </span>
                      <span className="hidden md:inline text-ink-muted text-sm">{p.oneLiner}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-0 md:pl-[7.5rem] pr-2 pb-8 grid md:grid-cols-2 gap-10">
                      <div>
                        <p className="text-ink-muted leading-relaxed">{p.definition}</p>
                      </div>
                      <div>
                        <div className="eyebrow mb-4">Questions teams should answer</div>
                        <ul className="space-y-3">
                          {p.questions.map((q) => (
                            <li key={q} className="flex gap-3 text-sm text-ink">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* How we apply this */}
        <section className="hairline-top py-24 md:py-32">
          <div className="container-wbg">
            <Reveal>
              <div className="eyebrow mb-4">In practice</div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl text-ink max-w-3xl leading-tight">
                How we apply this with teams.
              </h2>
            </Reveal>
            <div className="mt-16 grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} className="bg-background">
                  <div className="p-8 h-full bg-background min-h-[220px]">
                    <div className="eyebrow text-sage">{s.n}</div>
                    <h3 className="mt-6 font-display text-2xl text-ink">{s.name}</h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-12">
                <Link
                  to="/work-with-us"
                  className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                >
                  Apply this to your product <ArrowRight size={16} />
                </Link>
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

export default Method;
