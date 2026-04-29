export type WatchCategory = "Product Worlds" | "Breakdowns" | "Head to Head";

export interface WatchItem {
  id: string;
  title: string;
  category: WatchCategory;
  brand: string;
  duration: string;
  isFree: boolean;
  description: string;
  variant: 1 | 2 | 3 | 4 | 5;
  videoUrl?: string; // future
}

export const watchContent: WatchItem[] = [
  {
    id: "spotify-effortless",
    title: "Why Spotify Feels Effortless",
    category: "Product Worlds",
    brand: "Spotify",
    duration: "12 min",
    isFree: true,
    description: "How a deceptively simple home feed teaches you the rules of music discovery without ever explaining them.",
    variant: 1,
  },
  {
    id: "revolut-control",
    title: "Revolut and the Psychology of Control",
    category: "Breakdowns",
    brand: "Revolut",
    duration: "9 min",
    isFree: false,
    description: "Why moving money inside Revolut feels powerful — and how that feeling was carefully manufactured.",
    variant: 2,
  },
  {
    id: "spotify-vs-ytm",
    title: "Spotify vs YouTube Music",
    category: "Head to Head",
    brand: "Spotify · YT Music",
    duration: "14 min",
    isFree: false,
    description: "Two libraries. Two world models. Why one feels like a place and the other feels like a search box.",
    variant: 3,
  },
  {
    id: "airbnb-human",
    title: "Why Airbnb Feels Human",
    category: "Product Worlds",
    brand: "Airbnb",
    duration: "11 min",
    isFree: false,
    description: "The small editorial choices that make a marketplace feel like a story instead of a database.",
    variant: 4,
  },
  {
    id: "products-teach",
    title: "How Great Products Teach Users",
    category: "Breakdowns",
    brand: "Cross-product",
    duration: "16 min",
    isFree: false,
    description: "Onboarding is the first lesson. The interface is the textbook. Most teams forget this.",
    variant: 5,
  },
  {
    id: "wise-vs-revolut",
    title: "Wise vs Revolut",
    category: "Head to Head",
    brand: "Wise · Revolut",
    duration: "13 min",
    isFree: false,
    description: "Calm precision versus confident control. Two opposite worlds for moving money across borders.",
    variant: 1,
  },
  {
    id: "notion-rooms",
    title: "Notion as a Set of Rooms",
    category: "Product Worlds",
    brand: "Notion",
    duration: "10 min",
    isFree: false,
    description: "How a flexible canvas avoids becoming chaos by giving every block a quiet sense of place.",
    variant: 2,
  },
  {
    id: "linear-pace",
    title: "Linear and the Pace of Software",
    category: "Breakdowns",
    brand: "Linear",
    duration: "8 min",
    isFree: false,
    description: "The keyboard, the latency, the typography. Why speed itself becomes a product feature.",
    variant: 3,
  },
  {
    id: "duolingo-vs-babbel",
    title: "Duolingo vs Babbel",
    category: "Head to Head",
    brand: "Duolingo · Babbel",
    duration: "12 min",
    isFree: false,
    description: "Game-world versus classroom-world. Two coherent answers to the same problem.",
    variant: 4,
  },
  {
    id: "apple-music-restraint",
    title: "Apple Music and the Discipline of Restraint",
    category: "Product Worlds",
    brand: "Apple Music",
    duration: "9 min",
    isFree: false,
    description: "What Apple chose not to ship — and why the absences shape the experience more than the features.",
    variant: 5,
  },
  {
    id: "stripe-trust",
    title: "Stripe and the Architecture of Trust",
    category: "Breakdowns",
    brand: "Stripe",
    duration: "15 min",
    isFree: false,
    description: "How documentation, dashboards, and defaults quietly do the work of a sales team.",
    variant: 1,
  },
  {
    id: "instagram-vs-tiktok",
    title: "Instagram vs TikTok",
    category: "Head to Head",
    brand: "Instagram · TikTok",
    duration: "14 min",
    isFree: false,
    description: "Identity-world versus attention-world. Why the same vertical video feels different in each.",
    variant: 2,
  },
];
