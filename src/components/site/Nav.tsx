import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/watch", label: "Watch" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/method", label: "Method" },
  { to: "/work-with-us", label: "Work With Us" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-wbg flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl text-ink tracking-tight">
          World Builders Guide
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-ink relative pb-1 ${
                  isActive
                    ? "text-ink after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-sage"
                    : "text-ink-muted"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/watch" className="btn-primary">
            Watch the videos
          </Link>
        </div>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <div className="container-wbg py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-ink" : "text-ink-muted"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/watch" className="btn-primary mt-2 w-fit">
              Watch the videos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
