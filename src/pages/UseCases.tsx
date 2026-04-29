import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { AbstractThumb } from "@/components/site/AbstractThumb";
import { FinalCTA } from "@/components/site/FinalCTA";
import { scenarios } from "@/content/scenarios";

const UseCases = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-16 md:pt-28 pb-16 md:pb-20">
          <div className="container-wbg max-w-4xl">
            <Reveal>
              <div className="eyebrow mb-6">Use Cases</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05]">
                When the world inside your product needs sharpening.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-lg text-ink-muted max-w-2xl leading-relaxed">
                Every situation below is a moment where coherence matters more than features — and where defining the underlying world saves months of building toward the wrong answer.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="hairline-top">
          {scenarios.map((s, i) => {
            const variant = ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5;
            const reverse = i % 2 === 1;
            return (
              <div key={s.title} className="hairline-bottom">
                <div className="container-wbg py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <Reveal className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="eyebrow text-sage mb-4">{`0${i + 1} · Scenario`}</div>
                    <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-ink-muted leading-relaxed">{s.description}</p>
                    <ul className="mt-8 space-y-3">
                      {s.whatWeDo.map((w) => (
                        <li key={w} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={120} className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <AbstractThumb variant={variant} />
                  </Reveal>
                </div>
              </div>
            );
          })}
        </section>

        <section className="py-24 md:py-32">
          <div className="container-wbg flex flex-col md:flex-row md:items-center justify-between gap-8">
            <Reveal>
              <h3 className="font-display text-3xl md:text-4xl text-ink max-w-xl leading-tight">
                Not sure which scenario fits? That's a useful starting point.
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/work-with-us"
                className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default UseCases;
