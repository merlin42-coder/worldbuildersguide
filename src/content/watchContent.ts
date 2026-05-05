import { mediaUrl } from "@/lib/media";

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
  thumbnailUrl?: string;
  published: boolean;
}

export const watchContent: WatchItem[] = [
  // ============ PRODUCT WORLDS (video) ============
  {
    id: "spotify-product-world",
    title: "Inside Spotify",
    category: "Product Worlds",
    brand: "Spotify",
    duration: "7 min",
    description:
      "Why opening Spotify feels like the app already knows what you want.",
    variant: 1,
    mediaType: "video",
    mediaUrl: mediaUrl("videos/spotify-product-world.mp4"),
    thumbnailUrl: "/thumbs/spotify-product-world.jpg",
    published: true,
  },
  {
    id: "airbnb-product-world",
    title: "Inside Airbnb",
    category: "Product Worlds",
    brand: "Airbnb",
    duration: "7 min",
    description:
      "The little wording and layout choices that make a listing feel like a place, not a database row.",
    variant: 4,
    mediaType: "video",
    mediaUrl: mediaUrl("videos/airbnb-product-world.mp4"),
    thumbnailUrl: "/thumbs/airbnb-product-world.jpg",
    published: true,
  },
  {
    id: "youtube-music-product-world",
    title: "Inside YouTube Music",
    category: "Product Worlds",
    brand: "YouTube Music",
    duration: "6 min",
    description:
      "What happens when a music app is built like a search box instead of a place to hang out.",
    variant: 3,
    mediaType: "video",
    mediaUrl: mediaUrl("videos/youtube-music-product-world.mp4"),
    thumbnailUrl: "/thumbs/youtube-music-product-world.jpg",
    published: true,
  },
  {
    id: "revolut-product-world",
    title: "Inside Revolut",
    category: "Product Worlds",
    brand: "Revolut",
    duration: "7 min",
    description:
      "Why moving money in Revolut feels powerful — and how that feeling is designed on purpose.",
    variant: 2,
    mediaType: "video",
    mediaUrl: mediaUrl("videos/revolut-product-world.mp4"),
    thumbnailUrl: "/thumbs/revolut-product-world.jpg",
    published: true,
  },

  // ============ DEEP DIVES (audio) ============
  {
    id: "spotify-deep-dive",
    title: "Spotify, deep dive",
    category: "Deep Dives",
    brand: "Spotify",
    duration: "18 min",
    description:
      "A two-host chat unpacking the small choices that make Spotify feel effortless.",
    variant: 1,
    mediaType: "audio",
    mediaUrl: mediaUrl("audio/spotify-deep-dive.m4a"),
    thumbnailUrl: "/thumbs/spotify-product-world.jpg",
    published: true,
  },
  {
    id: "airbnb-deep-dive",
    title: "Airbnb, deep dive",
    category: "Deep Dives",
    brand: "Airbnb",
    duration: "18 min",
    description:
      "How Airbnb gets total strangers to trust each other — through copy, photos, and tiny design choices.",
    variant: 4,
    mediaType: "audio",
    mediaUrl: mediaUrl("audio/airbnb-deep-dive.m4a"),
    thumbnailUrl: "/thumbs/airbnb-product-world.jpg",
    published: true,
  },
  {
    id: "youtube-music-deep-dive",
    title: "YouTube Music, deep dive",
    category: "Deep Dives",
    brand: "YouTube Music",
    duration: "18 min",
    description:
      "What happened when YouTube Music quietly got rid of the music library — and what that cost it.",
    variant: 3,
    mediaType: "audio",
    mediaUrl: mediaUrl("audio/youtube-music-deep-dive.m4a"),
    thumbnailUrl: "/thumbs/youtube-music-product-world.jpg",
    published: true,
  },
  {
    id: "revolut-deep-dive",
    title: "Revolut, deep dive",
    category: "Deep Dives",
    brand: "Revolut",
    duration: "18 min",
    description:
      "How Revolut stacks speed, control and clarity to make complex money stuff feel obvious.",
    variant: 2,
    mediaType: "audio",
    mediaUrl: mediaUrl("audio/revolut-deep-dive.m4a"),
    thumbnailUrl: "/thumbs/revolut-product-world.jpg",
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
      "Two music apps. Two completely different vibes. Here's why one feels like a place and the other feels like a search box.",
    variant: 5,
    mediaType: "video",
    mediaUrl: mediaUrl("videos/spotify-vs-youtube-music.mp4"),
    thumbnailUrl: "/thumbs/spotify-vs-youtube-music.jpg",
    published: true,
  },
];

/** Items ready to play. Unpublished entries are kept in the file so URLs are pre-wired — drop the asset into public/ and flip published:true. */
export const publishedWatchContent = watchContent.filter((w) => w.published);
