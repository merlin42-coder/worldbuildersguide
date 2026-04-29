export type WatchCategory = "Product Worlds" | "Deep Dives" | "Head to Head";

export interface WatchItem {
  id: string;
  title: string;
  category: WatchCategory;
  brand: string;
  duration: string;
  description: string;
  variant: 1 | 2 | 3 | 4 | 5;
  mediaType: "video" | "audio";
  mediaUrl: string;
  published: boolean;
}

export const watchContent: WatchItem[] = [
  // ============ PRODUCT WORLDS (video) ============
  {
    id: "spotify-product-world",
    title: "Spotify's Design Philosophy",
    category: "Product Worlds",
    brand: "Spotify",
    duration: "7 min",
    description:
      "How a deceptively simple home feed teaches you the rules of music discovery without ever explaining them.",
    variant: 1,
    mediaType: "video",
    mediaUrl: "/videos/spotify-product-world.mp4",
    published: true,
  },
  {
    id: "airbnb-product-world",
    title: "The Secret Blueprint of Airbnb",
    category: "Product Worlds",
    brand: "Airbnb",
    duration: "7 min",
    description:
      "The small editorial choices that make a marketplace feel like a story instead of a database.",
    variant: 4,
    mediaType: "video",
    mediaUrl: "/videos/airbnb-product-world.mp4",
    published: true,
  },
  {
    id: "youtube-music-product-world",
    title: "Building YouTube Music",
    category: "Product Worlds",
    brand: "YouTube Music",
    duration: "6 min",
    description:
      "How a search-shaped product tries — and sometimes struggles — to feel like a place.",
    variant: 3,
    mediaType: "video",
    mediaUrl: "/videos/youtube-music-product-world.mp4",
    published: true,
  },
  {
    id: "revolut-product-world",
    title: "Revolut and the Psychology of Control",
    category: "Product Worlds",
    brand: "Revolut",
    duration: "7 min",
    description:
      "Why moving money inside Revolut feels powerful — and how that feeling was carefully manufactured.",
    variant: 2,
    mediaType: "video",
    mediaUrl: "/videos/revolut-product-world.mp4",
    published: false,
  },

  // ============ DEEP DIVES (audio) ============
  {
    id: "spotify-deep-dive",
    title: "Spotify · Deep Dive",
    category: "Deep Dives",
    brand: "Spotify",
    duration: "18 min",
    description:
      "A two-voice conversation unpacking the systems, defaults, and small decisions that shape Spotify's world.",
    variant: 1,
    mediaType: "audio",
    mediaUrl: "/audio/spotify-deep-dive.m4a",
    published: false,
  },
  {
    id: "airbnb-deep-dive",
    title: "Airbnb · Deep Dive",
    category: "Deep Dives",
    brand: "Airbnb",
    duration: "18 min",
    description:
      "What Airbnb borrows from editorial design — and where the marketplace logic quietly takes over.",
    variant: 4,
    mediaType: "audio",
    mediaUrl: "/audio/airbnb-deep-dive.m4a",
    published: false,
  },
  {
    id: "youtube-music-deep-dive",
    title: "YouTube Music · Deep Dive",
    category: "Deep Dives",
    brand: "YouTube Music",
    duration: "18 min",
    description:
      "Two perspectives on a product caught between a search engine, a video library, and a music app.",
    variant: 3,
    mediaType: "audio",
    mediaUrl: "/audio/youtube-music-deep-dive.m4a",
    published: false,
  },
  {
    id: "revolut-deep-dive",
    title: "Revolut · Deep Dive",
    category: "Deep Dives",
    brand: "Revolut",
    duration: "18 min",
    description:
      "How Revolut layers control, speed, and clarity to make complex finance feel obvious.",
    variant: 2,
    mediaType: "audio",
    mediaUrl: "/audio/revolut-deep-dive.m4a",
    published: false,
  },

  // ============ HEAD TO HEAD (video) ============
  {
    id: "spotify-vs-youtube-music",
    title: "Spotify vs YouTube Music",
    category: "Head to Head",
    brand: "Spotify · YouTube Music",
    duration: "8 min",
    description:
      "Two libraries. Two world models. Why one feels like a place and the other feels like a search box.",
    variant: 5,
    mediaType: "video",
    mediaUrl: "/videos/spotify-vs-youtube-music.mp4",
    published: true,
  },
];

/** Items ready to play. Unpublished entries are kept in the file so URLs are pre-wired — drop the asset into public/ and flip published:true. */
export const publishedWatchContent = watchContent.filter((w) => w.published);
