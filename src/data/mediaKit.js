// Datos del media kit. Los usan /media-kit, el inicio y scripts/media-kit-pdf.mjs (el PDF descargable).
// Solo métricas confirmadas con capturas; si no hay dato, el campo queda en null y no se muestra.
export const socialChannels = [
  { name: "TikTok", handle: "@carli.code", followers: "163.9K", count: 163900, fmt: "k1", detail: { es: "2.2M me gusta", en: "2.2M likes" }, href: "https://www.tiktok.com/@carli.code", accent: "pink" },
  { name: "Instagram", handle: "@carli.code", followers: "42.2K", count: 42200, fmt: "k1", detail: { es: "seguidores", en: "followers" }, href: "https://www.instagram.com/carli.code/", accent: "orange" },
  { name: "YouTube", handle: "@CarliCode", followers: "1.61K", count: 1610, fmt: "k2", detail: { es: "suscriptores", en: "subscribers" }, href: "https://www.youtube.com/@CarliCode", accent: "red" },
  { name: "Twitch", handle: "carlicode", followers: "3.1K", count: 3100, fmt: "k1", detail: { es: "seguidores", en: "followers" }, href: "https://www.twitch.tv/carlicode", accent: "violet" },
  { name: "LinkedIn", handle: "carlicode", followers: "3,614", count: 3614, fmt: "full", detail: { es: "seguidores", en: "followers" }, href: "https://www.linkedin.com/in/carlicode/", accent: "blue" },
];

export const services = [
  { id: "live", name: { es: "Live colaborativo / transmisión", en: "Collaborative Live / Livestream" }, description: { es: "Hasta 60 minutos con interacción y demostración.", en: "Up to 60 minutes with interaction and demonstration." }, price: "$200",
    length: { es: "Hasta 60 min", en: "Up to 60 min" },
    includes: [{ es: "Transmisión en vivo colaborativa", en: "Collaborative live stream" }, { es: "Interacción con la audiencia en tiempo real", en: "Real-time interaction with the audience" }, { es: "Demostración de tu producto o servicio", en: "Demonstration of your product or service" }],
    best: { es: "Cuando tu producto se entiende mejor haciéndolo en vivo y respondiendo preguntas.", en: "When your product makes more sense when you do it live and answer questions." } },
  { id: "main", name: { es: "Video principal", en: "Main Video" }, description: { es: "31–90 segundos, con guion, edición y llamado a la acción.", en: "31–90 seconds, including script, editing and a call to action." }, price: "$90",
    length: { es: "31–90 s", en: "31–90 s" },
    includes: [{ es: "Guion para tu mensaje", en: "Script for your message" }, { es: "Edición completa del video", en: "Full video editing" }, { es: "Llamado a la acción al final", en: "Call to action at the end" }],
    best: { es: "Para explicar con calma una idea, un producto o un proceso.", en: "To explain an idea, a product or a process without rushing." } },
  { id: "short", name: { es: "Video corto", en: "Short Video" }, description: { es: "Gancho de 30 segundos, demo rápida o formato best seller.", en: "30-second hook, quick demo or best-seller format." }, price: "$80", featured: true,
    length: { es: "Hasta 30 s", en: "Up to 30 s" },
    includes: [{ es: "Gancho en los primeros segundos", en: "A hook in the first seconds" }, { es: "Demo rápida o formato best seller", en: "Quick demo or best-seller format" }],
    best: { es: "Para que tu marca se entienda rápido y la gente se quede hasta el final.", en: "To get your brand across fast and keep people watching to the end." } },
  { id: "mini", name: { es: "Mini clip / teaser", en: "Mini clip / teaser" }, description: { es: "Menos de 29 segundos, pensado para audio viral o en tendencia.", en: "Under 29 seconds, designed for viral or trending audio." }, price: "$60",
    length: { es: "Menos de 29 s", en: "Under 29 s" },
    includes: [{ es: "Clip corto y directo", en: "A short, direct clip" }, { es: "Pensado para audio viral o en tendencia", en: "Designed for viral or trending audio" }],
    best: { es: "Para sumarte a una tendencia o adelantar algo sin hacer un video completo.", en: "To join a trend or tease something without making a full video." } },
  { id: "carousel", name: { es: "Carrusel educativo", en: "Educational carousel" }, description: { es: "3–5 imágenes o clips verticales para TikTok e Instagram.", en: "3–5 vertical images or clips adapted for TikTok and Instagram." }, price: "$50",
    length: { es: "3–5 piezas", en: "3–5 pieces" },
    includes: [{ es: "3 a 5 imágenes o clips verticales", en: "3 to 5 vertical images or clips" }, { es: "Adaptado a TikTok e Instagram", en: "Adapted for TikTok and Instagram" }],
    best: { es: "Para enseñar un concepto paso a paso, en piezas que se guardan y se comparten.", en: "To teach a concept step by step, in pieces people save and share." } },
  { id: "story", name: { es: "Historia con mención", en: "Story with mention" }, description: { es: "Hasta 3 historias con enlace o etiqueta.", en: "Up to 3 story frames or clips, including a link or tag." }, price: "$20",
    length: { es: "Hasta 3 historias", en: "Up to 3 stories" },
    includes: [{ es: "Hasta 3 historias o clips", en: "Up to 3 story frames or clips" }, { es: "Enlace o etiqueta a tu marca", en: "A link or tag to your brand" }],
    best: { es: "Para reforzar una campaña y llevar a la gente directo a tu enlace.", en: "To reinforce a campaign and send people straight to your link." } },
];

export const packages = [
  { name: "Start", description: { es: "1 video corto (30–40 s, gancho/demo) + 2 menciones en historias. Ideal para una primera colaboración.", en: "1 short video (30–40s, hook/demo) + 2 story mentions. Ideal for first collaborations." }, price: "$100",
    includes: [{ es: "1 video corto (30–40 s, gancho/demo)", en: "1 short video (30–40s, hook/demo)" }, { es: "2 menciones en historias", en: "2 story mentions" }],
    best: { es: "Una primera colaboración para conocernos.", en: "A first collaboration to get to know each other." } },
  { name: "Impact", description: { es: "2 videos cortos (gancho/demo) + 1 mención en historias. Pensado para impacto y conversión rápidos.", en: "2 short videos (hook/demo) + 1 story mention. Designed for quick impact and conversion." }, price: "$150", featured: true,
    includes: [{ es: "2 videos cortos (gancho/demo)", en: "2 short videos (hook/demo)" }, { es: "1 mención en historias", en: "1 story mention" }],
    best: { es: "Impacto y conversión rápidos.", en: "Quick impact and conversion." } },
  { name: "Educational", description: { es: "1 video principal (31–90 s) + 1 carrusel educativo + 2 menciones en historias.", en: "1 main video (31–90s) + 1 educational carousel + 2 story mentions." }, price: "$150",
    includes: [{ es: "1 video principal (31–90 s)", en: "1 main video (31–90s)" }, { es: "1 carrusel educativo", en: "1 educational carousel" }, { es: "2 menciones en historias", en: "2 story mentions" }],
    best: { es: "Cuando tu audiencia necesita entender antes de decidir.", en: "When your audience needs to understand before deciding." } },
  { name: "Launch", description: { es: "2 videos cortos + 1 video principal + 3 menciones en historias. Ideal para lanzamientos.", en: "2 short videos + 1 main video + 3 story mentions. Ideal for launches or campaigns." }, price: "$230",
    includes: [{ es: "2 videos cortos", en: "2 short videos" }, { es: "1 video principal", en: "1 main video" }, { es: "3 menciones en historias", en: "3 story mentions" }],
    best: { es: "Lanzamientos y campañas.", en: "Launches and campaigns." } },
  { name: "Authority", description: { es: "1 live colaborativo + 1 video principal + 2 videos cortos + 5 menciones en historias.", en: "1 collaborative live + 1 main video + 2 short videos + 5 story mentions." }, price: "$500",
    includes: [{ es: "1 live colaborativo", en: "1 collaborative live" }, { es: "1 video principal", en: "1 main video" }, { es: "2 videos cortos", en: "2 short videos" }, { es: "5 menciones en historias", en: "5 story mentions" }],
    best: { es: "La campaña completa: en vivo, en video y en historias.", en: "The full campaign: live, on video and in stories." } },
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
