// Datos de marca que comparten todas las páginas. Las métricas solo se cambian con capturas confirmadas.
export const brand = { name: "Carli Code", community: "#CarliCodeArmy", cvName: "Carla Florida" };

export const contact = {
  email: "carli.f.roman@gmail.com",
  formspree: "https://formspree.io/f/mrbqpbqb",
};

export const socials = [
  { label: "TikTok", handle: "@carli.code", href: "https://www.tiktok.com/@carli.code" },
  { label: "Instagram", handle: "@carli.code", href: "https://www.instagram.com/carli.code/" },
  { label: "YouTube", handle: "@CarliCode", href: "https://www.youtube.com/@CarliCode" },
  { label: "Twitch", handle: "carlicode", href: "https://www.twitch.tv/carlicode" },
  { label: "LinkedIn", handle: "carlicode", href: "https://www.linkedin.com/in/carlicode/" },
  { label: "GitHub", handle: "carlicode", href: "https://github.com/carlicode" },
];

export const metrics = {
  updated: "2026-10",
  items: [
    { platform: "TikTok", value: "163.9K", label: { es: "seguidores", en: "followers" } },
    { platform: "TikTok", value: "2.2M", label: { es: "me gusta", en: "likes" } },
    { platform: "Instagram", value: "42.2K", label: { es: "seguidores", en: "followers" } },
    { platform: "LinkedIn", value: "3,614", label: { es: "seguidores", en: "followers" } },
    { platform: "Twitch", value: "3.1K", label: { es: "seguidores", en: "followers" } },
    { platform: "YouTube", value: "1.61K", label: { es: "suscriptores", en: "subscribers" } },
  ],
};

// Estimación propia (content/impacto/impacto-estimacion.csv, 87 filas). Reglas: evento pequeño 50, charla 70,
// evento grande 200, Platzi Conf 500, AWSome 350, bootcamp de Twitch 1,500, cursos Platzi 60K en total;
// podcasts/lives sin dato en 70; donde Carla dio su propia cifra (A004, A005, A019, A021, A026, A077) se usa esa. Seguidores = suma de los 5 canales de socialChannels (mediaKit.js).
export const impact = { people: 72630, followers: 214424, total: 287100 };
