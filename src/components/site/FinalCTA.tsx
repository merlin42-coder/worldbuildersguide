import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const FinalCTA = ({ className = "" }: Props) => (
  <section className={`hairline-top ${className}`}>
    <div className="container-wbg py-28 md:py-36 text-center">
      <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] max-w-3xl mx-auto">
        Great products feel obvious after they are built right.
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
    </div>
  </section>
);
