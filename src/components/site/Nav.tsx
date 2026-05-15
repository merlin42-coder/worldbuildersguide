import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/wbg-logo.png";

const links = [
  { to: "/watch", label: "Watch" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/method", label: "Method" },
  { to: "/work-with-us", label: "Build your world" },
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
          ? "bg-white/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-wbg flex h-16 items-center justify-between md:h-20 gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="" className="h-9 w-auto md:h-10" />
          <span className="hidden sm:flex flex-col leading-[1.05] text-ink font-medium tracking-[0.1em] text-[10px] md:text-[11px] border-l border-hairline pl-3">
            <span>WORLD</span>
            <span>BUILDERS</span>
            <span>GUIDE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm whitespace-nowrap transition-colors hover:text-ink relative pb-1 ${
                  isActive
                    ? "text-ink after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-gold"
                    : "text-ink-muted"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link to="/watch" className="btn-primary whitespace-nowrap">
            Watch breakdowns
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
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
              Watch breakdowns
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
