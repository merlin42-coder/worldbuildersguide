import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.png";
import { Reveal } from "./Reveal";
import { HeroDiagrams } from "./HeroDiagrams";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <HeroDiagrams />

    <div className="container-wbg relative pt-12 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-7 relative z-10">
        <Reveal>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.12] text-ink">
            <span className="block">Whatever you build</span>
            <span className="block">It’s a little world</span>
            <span className="block relative text-gold mt-1">
              Make it make sense.
              <svg
                aria-hidden
                viewBox="0 0 600 18"
                preserveAspectRatio="none"
                className="absolute left-0 -bottom-2 w-[88%] h-3 text-gold"
              >
                <path
                  d="M3 12 C 120 4, 280 16, 597 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 max-w-xl text-lg text-ink-muted leading-relaxed">
            We break down how Spotify, Airbnb and Revolut actually work — then help you build the same clarity into your product.
          </p>
          <p className="mt-3 max-w-xl text-lg text-ink-muted leading-relaxed">
            Using a simple document that defines how your product world behaves before you design anything.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/watch" className="btn-primary">
              Watch breakdowns <ArrowRight size={16} />
            </Link>
            <Link to="/work-with-us" className="btn-default">
              Build your world
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink-subtle">
            When the world is clear, product decisions become obvious.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-5 relative z-10 flex justify-center lg:-mt-8">
        <img
          src={heroGlobe}
          alt="A small illustrated world with a person sketching its system on top"
          className="w-full max-w-[420px] md:max-w-[560px] lg:max-w-[620px] h-auto select-none"
          draggable={false}
        />
      </div>
    </div>
  </section>
);
