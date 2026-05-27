export type SocialStat = {
  platform: string;
  followers: string;
  url: string;
};

export type TrafficSource = { sourceEs: string; sourceEn: string; percentage: number };

export type DemographicRow = { labelEs: string; labelEn: string; percentage: number };

export type PricingRow = { formatEs: string; formatEn: string; price: number };

export const mediaKitAbout = {
  es: "Principalmente comparto contenido en TikTok, donde tengo una comunidad sólida que siempre me apoya. Colaboro con Google como embajadora de Women Techmakers y participo activamente en la comunidad de programadores.",
  en: "I mainly share content on TikTok, where I have a strong community that always supports me. I collaborate with Google as a Women Techmakers ambassador and stay active in developer communities.",
};

export const mediaKitSocialStats: SocialStat[] = [
  {
    platform: "TikTok",
    followers: "145K",
    url: "https://www.tiktok.com/@carli.code",
  },
  {
    platform: "Instagram",
    followers: "14K",
    url: "https://www.instagram.com/carli.code/",
  },
  {
    platform: "Twitch",
    followers: "3K",
    url: "https://www.twitch.tv/carli_code",
  },
  {
    platform: "YouTube",
    followers: "1K",
    url: "https://www.youtube.com/@carli_code",
  },
];

export const mediaKitFeaturedVideoIds = [
  "7205955488666651910",
  "7333576536383130886",
  "7429755114442788101",
  "7350286655393189125",
] as const;

export const mediaKitTrafficSources: TrafficSource[] = [
  { sourceEs: "Buscar", sourceEn: "Search", percentage: 53.3 },
  { sourceEs: "Para ti", sourceEn: "For You", percentage: 31.2 },
  { sourceEs: "Perfil personal", sourceEn: "Profile", percentage: 9.6 },
  { sourceEs: "Siguiendo", sourceEn: "Following", percentage: 5.7 },
  { sourceEs: "Sonido", sourceEn: "Sound", percentage: 0.2 },
];

export const mediaKitGender: DemographicRow[] = [
  { labelEs: "Hombres", labelEn: "Men", percentage: 57 },
  { labelEs: "Mujeres", labelEn: "Women", percentage: 42 },
  { labelEs: "Otro", labelEn: "Other", percentage: 1 },
];

export const mediaKitAge: DemographicRow[] = [
  { labelEs: "18-24", labelEn: "18-24", percentage: 30.6 },
  { labelEs: "25-34", labelEn: "25-34", percentage: 48.9 },
  { labelEs: "35-44", labelEn: "35-44", percentage: 13.8 },
  { labelEs: "45-54", labelEn: "45-54", percentage: 5.0 },
  { labelEs: "55+", labelEn: "55+", percentage: 1.7 },
];

export const mediaKitLocations: DemographicRow[] = [
  { labelEs: "Bolivia", labelEn: "Bolivia", percentage: 29.0 },
  { labelEs: "Otros", labelEn: "Other", percentage: 19.9 },
  { labelEs: "México", labelEn: "Mexico", percentage: 13.3 },
  { labelEs: "Perú", labelEn: "Peru", percentage: 13.1 },
  { labelEs: "Colombia", labelEn: "Colombia", percentage: 6.0 },
  { labelEs: "Brasil", labelEn: "Brazil", percentage: 4.5 },
  { labelEs: "Ecuador", labelEn: "Ecuador", percentage: 4.1 },
  { labelEs: "Chile", labelEn: "Chile", percentage: 2.8 },
  { labelEs: "Argentina", labelEn: "Argentina", percentage: 2.7 },
  { labelEs: "Guatemala", labelEn: "Guatemala", percentage: 2.4 },
  { labelEs: "Estados Unidos", labelEn: "United States", percentage: 2.2 },
];

export const mediaKitPricingTiktok: PricingRow[] = [
  {
    formatEs: "Video 60-80 segundos",
    formatEn: "Video 60-80 seconds",
    price: 80,
  },
  {
    formatEs: "Video 40-59 segundos",
    formatEn: "Video 40-59 seconds",
    price: 75,
  },
  {
    formatEs: "Video menos de 40 segundos",
    formatEn: "Video under 40 seconds",
    price: 60,
  },
];

export const mediaKitPricingInstagramReels: PricingRow[] = [
  {
    formatEs: "Video 60-80 segundos",
    formatEn: "Video 60-80 seconds",
    price: 30,
  },
  {
    formatEs: "Video 40-59 segundos",
    formatEn: "Video 40-59 seconds",
    price: 25,
  },
  {
    formatEs: "Video menos de 40 segundos",
    formatEn: "Video under 40 seconds",
    price: 15,
  },
];

export const mediaKitPricingInstagramStories: PricingRow[] = [
  { formatEs: "Historia imagen", formatEn: "Image story", price: 10 },
  {
    formatEs: "Historia hablando y presentando",
    formatEn: "Talking head story",
    price: 25,
  },
  {
    formatEs: "Historia + compartir link",
    formatEn: "Story + link sticker",
    price: 30,
  },
];

export const mediaKitCurrency = "USD";
