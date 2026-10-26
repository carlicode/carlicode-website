// Datos del media kit. Los usan /media-kit, el inicio y scripts/media-kit-pdf.mjs (el PDF descargable).
// Solo métricas confirmadas con capturas; si no hay dato, el campo queda en null y no se muestra.
export const socialChannels = [
  { name: "TikTok", handle: "@carli.code", followers: "163.9K", detail: { es: "2.2M me gusta", en: "2.2M likes" }, href: "https://www.tiktok.com/@carli.code", accent: "pink" },
  { name: "Instagram", handle: "@carli.code", followers: "42.2K", detail: { es: "seguidores", en: "followers" }, href: "https://www.instagram.com/carli.code/", accent: "orange" },
  { name: "YouTube", handle: "@CarliCode", followers: null, detail: { es: "charlas y videos largos", en: "talks and long-form videos" }, href: "https://www.youtube.com/@CarliCode", accent: "red" },
  { name: "Twitch", handle: "carlicode", followers: null, detail: { es: "directos", en: "live streams" }, href: "https://www.twitch.tv/carlicode", accent: "violet" },
];

export const services = [
  { name: "Collaborative Live / Livestream", description: { es: "Hasta 60 minutos con interacción y demostración.", en: "Up to 60 minutes with interaction and demonstration." }, price: "$200" },
  { name: "Main Video", description: { es: "31–90 segundos, con guion, edición y llamado a la acción.", en: "31–90 seconds, including script, editing and a call to action." }, price: "$90" },
  { name: "Short Video", description: { es: "Gancho de 30 segundos, demo rápida o formato best seller.", en: "30-second hook, quick demo or best-seller format." }, price: "$80", featured: true },
  { name: "Mini clip / teaser", description: { es: "Menos de 29 segundos, pensado para audio viral o en tendencia.", en: "Under 29 seconds, designed for viral or trending audio." }, price: "$60" },
  { name: "Educational carousel", description: { es: "3–5 imágenes o clips verticales para TikTok e Instagram.", en: "3–5 vertical images or clips adapted for TikTok and Instagram." }, price: "$50" },
  { name: "Story with mention", description: { es: "Hasta 3 historias con enlace o etiqueta.", en: "Up to 3 story frames or clips, including a link or tag." }, price: "$20" },
];

export const packages = [
  { name: "Start", description: { es: "1 video corto (30–40 s, gancho/demo) + 2 menciones en historias. Ideal para una primera colaboración.", en: "1 short video (30–40s, hook/demo) + 2 story mentions. Ideal for first collaborations." }, price: "$100" },
  { name: "Impact", description: { es: "2 videos cortos (gancho/demo) + 1 mención en historias. Pensado para impacto y conversión rápidos.", en: "2 short videos (hook/demo) + 1 story mention. Designed for quick impact and conversion." }, price: "$150", featured: true },
  { name: "Educational", description: { es: "1 video principal (31–90 s) + 1 carrusel educativo + 2 menciones en historias.", en: "1 main video (31–90s) + 1 educational carousel + 2 story mentions." }, price: "$150" },
  { name: "Launch", description: { es: "2 videos cortos + 1 video principal + 3 menciones en historias. Ideal para lanzamientos.", en: "2 short videos + 1 main video + 3 story mentions. Ideal for launches or campaigns." }, price: "$230" },
  { name: "Authority", description: { es: "1 live colaborativo + 1 video principal + 2 videos cortos + 5 menciones en historias.", en: "1 collaborative live + 1 main video + 2 short videos + 5 story mentions." }, price: "$500" },
];

export const brands = ["GreenCloud", "Wallbit", "Google Partner", "Global Tecno Academy", "AssureSoft"];

const tiktok = (id) => `https://www.tiktok.com/@carli.code/video/${id}`;

// Los 5 TikToks que se embeben en el sitio. results solo con números vistos en capturas.
export const cases = [
  { brand: "Wallbit", tiktokId: "7594863165230304523", href: tiktok("7594863165230304523"), topic: { es: "Cobrar del exterior: Deel, Ontop, Payoneer y Wallbit", en: "Getting paid from abroad: Deel, Ontop, Payoneer and Wallbit" }, results: [{ value: "1,132", label: { es: "me gusta", en: "likes" } }, { value: "475", label: { es: "guardados", en: "saves" } }, { value: "38", label: { es: "comentarios", en: "comments" } }] },
  { brand: "Wallbit", tiktokId: "7551670056627801355", href: tiktok("7551670056627801355"), topic: null, results: [] },
  { brand: "GreenCloud · Google Partner", tiktokId: "7559053295520582968", href: tiktok("7559053295520582968"), topic: null, results: [] },
  { brand: "Global Tecno Academy", tiktokId: "7448006686490561798", href: tiktok("7448006686490561798"), topic: null, results: [] },
  { brand: "AssureSoft", tiktokId: "7560506772188908811", href: tiktok("7560506772188908811"), topic: null, results: [] },
];

export const mediaKitPdf = { es: "/downloads/carli-code-media-kit-2026-es.pdf", en: "/downloads/carli-code-media-kit-2026-en.pdf" };
