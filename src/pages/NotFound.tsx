import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <main className="min-h-[70vh] flex items-center">
        <div className="container-wbg text-center py-32">
          <div className="eyebrow mb-6">404</div>
          <h1 className="font-display text-5xl md:text-7xl text-ink leading-tight">
            That world doesn't exist yet.
          </h1>
          <p className="mt-6 text-ink-muted max-w-md mx-auto">
            The page you're looking for isn't here. Let's get you back on the map.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center rounded-full bg-sage px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Return home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
