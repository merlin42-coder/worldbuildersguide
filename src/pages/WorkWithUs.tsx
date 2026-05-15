import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { services } from "@/content/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this for?",
    a: "Founders, heads of product, and design leaders at companies past their first product-market fit, who can feel that the product is drifting from the original idea but can't yet name where.",
  },
  {
    q: "How is this different from a UX agency?",
    a: "We don't redesign screens. We define the underlying logic that screens should express. Our work usually changes scope and roadmap before it changes pixels.",
  },
  {
    q: "Do you work with pre-launch products?",
    a: "Yes. The earlier the world is defined, the less rework later. Our Clarity Sprint is well-suited to teams about to ship their first version.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Engagements are scoped per project. We share a clear price after a 30-minute conversation about what you're building.",
  },
  {
    q: "How quickly can you start?",
    a: "We take a small number of engagements at a time. Lead time is usually two to four weeks.",
  },
];

const WorkWithUs = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-16 md:pt-28 pb-16 md:pb-24">
          <div className="container-wbg max-w-4xl">
            <Reveal>
              <div className="eyebrow mb-6">BUILD YOUR WORLD</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.12]">
                Sharper product clarity, on demand.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-lg text-ink-muted max-w-2xl leading-relaxed">
                Three focused engagements for founders and product teams that need to see their product as a coherent world — and act on what they find.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Services detailed */}
        <section className="hairline-top">
          {services.map((s, i) => (
            <div key={s.number} className="hairline-bottom">
              <div className="container-wbg py-16 md:py-24 grid lg:grid-cols-12 gap-10">
                <Reveal className="lg:col-span-4">
                  <div className="eyebrow text-sage">{s.number}</div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">
                    {s.name}
                  </h2>
                  <p className="mt-5 text-ink-muted">{s.short}</p>
                </Reveal>
                <Reveal delay={100} className="lg:col-span-8 grid md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-ink-muted leading-relaxed">{s.long}</p>
                    <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                      <div>
                        <div className="eyebrow mb-1">Timeline</div>
                        <div className="text-ink">{s.timeline}</div>
                      </div>
                      <div>
                        <div className="eyebrow mb-1">For</div>
                        <div className="text-ink">{s.forWho}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow mb-4">Deliverables</div>
                    <ul className="space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32">
          <div className="container-wbg max-w-4xl">
            <Reveal>
              <div className="eyebrow mb-4">Questions</div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Frequently asked.
              </h2>
            </Reveal>

            <Accordion type="single" collapsible className="mt-12 border-t border-hairline">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-b border-hairline">
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    <span className="font-display text-xl text-ink">{f.q}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-ink-muted leading-relaxed pb-4 max-w-2xl">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="hairline-top py-24 md:py-32">
          <div className="container-wbg grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow mb-4">Contact</div>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Tell us what world you're building.
              </h2>
              <p className="mt-5 text-ink-muted max-w-md">
                Short and direct is best. Early-stage ideas are welcome. Rough thoughts are fine.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="border-t border-hairline pt-10">
                  <div className="eyebrow mb-3">Email us directly</div>
                  <a
                    href="mailto:hi@worldbuildersguide.com"
                    className="font-display text-3xl md:text-4xl text-ink hover:text-sage transition-colors break-all"
                  >
                    hi@worldbuildersguide.com
                  </a>
                  <p className="mt-8 text-sm text-ink-subtle">
                    We usually reply within 1–2 business days.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default WorkWithUs;
