import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="hairline-top mt-32">
      <div className="container-wbg py-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="font-display text-xl text-ink tracking-tight">
            World Builders Guide
          </Link>
          <p className="mt-3 max-w-sm text-sm text-ink-muted">
            Product strategy through psychology, systems, and user behavior.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/watch" className="text-ink-muted hover:text-ink transition-colors">Watch</Link>
          <Link to="/use-cases" className="text-ink-muted hover:text-ink transition-colors">Use Cases</Link>
          <Link to="/method" className="text-ink-muted hover:text-ink transition-colors">Method</Link>
          <Link to="/work-with-us" className="text-ink-muted hover:text-ink transition-colors">Work With Us</Link>
        </nav>
      </div>

      <div className="hairline-top">
        <div className="container-wbg py-6 text-xs text-ink-subtle">
          © {new Date().getFullYear()} World Builders Guide
        </div>
      </div>
    </footer>
  );
};
