import type { TikTokCard } from "./types";

/** IDs reales de videos destacados (portfolio.json). */
export const tiktokFeaturedIds = [
  "7205955488666651910",
  "7333576536383130886",
  "7429755114442788101",
  "7350286655393189125",
] as const;

export const tiktokProfileUrl = "https://www.tiktok.com/@carli.code";

export const tiktokStats = {
  followers: "145K",
  instagram: "14K",
  youtube: "1K+",
} as const;

export const tiktoks: TikTokCard[] = [
  {
    id: 1,
    videoId: tiktokFeaturedIds[0],
    titleEs: "Video destacado",
    titleEn: "Featured video",
    views: "",
    likes: "",
    color: "#ff2d92",
    url: `${tiktokProfileUrl}/video/${tiktokFeaturedIds[0]}`,
  },
  {
    id: 2,
    videoId: tiktokFeaturedIds[1],
    titleEs: "Video destacado",
    titleEn: "Featured video",
    views: "",
    likes: "",
    color: "#ff79c6",
    url: `${tiktokProfileUrl}/video/${tiktokFeaturedIds[1]}`,
  },
  {
    id: 3,
    videoId: tiktokFeaturedIds[2],
    titleEs: "Video destacado",
    titleEn: "Featured video",
    views: "",
    likes: "",
    color: "#c026d3",
    url: `${tiktokProfileUrl}/video/${tiktokFeaturedIds[2]}`,
  },
  {
    id: 4,
    videoId: tiktokFeaturedIds[3],
    titleEs: "Video destacado",
    titleEn: "Featured video",
    views: "",
    likes: "",
    color: "#ff2d92",
    url: `${tiktokProfileUrl}/video/${tiktokFeaturedIds[3]}`,
  },
];
