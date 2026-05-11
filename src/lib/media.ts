// Resolve media paths relative to the site root so the app works
// both at the domain root and under a subpath (e.g. GitHub Pages).
export const mediaUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
