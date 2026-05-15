import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const FinalCTA = ({ className = "" }: Props) => (
  <section className={`hairline-top ${className}`}>
    <div className="container-wbg py-28 md:py-36 text-center">
      <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.15] max-w-3xl mx-auto">
        Good products feel obvious. They almost never start that way.
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link to="/watch" className="btn-primary">
          Watch breakdowns <ArrowRight size={16} />
        </Link>
        <Link to="/work-with-us" className="btn-default">
          Build your world
        </Link>
      </div>
    </div>
  </section>
);
