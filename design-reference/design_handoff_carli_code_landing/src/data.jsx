// Bilingual content + shared data for both variations
const COPY = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", work: "Trabajo", tiktok: "Contenido", talks: "Charlas", brands: "Marcas", contact: "Contacto" },
    heroKicker: "Ingeniera de IA · Creadora · Speaker",
    heroTitle: "Construyo IA.\nEnseño código.\nMuevo audiencias.",
    heroSub: "Carli Code — donde la ingeniería rigurosa se cruza con la cultura digital. Disponible para colaboraciones con marcas, talks y proyectos.",
    heroCta1: "Trabajemos juntas",
    heroCta2: "Descargar CV",
    aboutKicker: "Sobre mí",
    aboutTitle: "Dos perfiles, una misma voz.",
    aboutBody: "De día construyo sistemas de IA con visión por computadora, LLMs y grafos de conocimiento. De noche traduzco lo que aprendo a millones de personas en TikTok que están aprendiendo a programar. Soy AWS Student Ambassador, embajadora de n8n y trabajé con Wallbit.",
    aboutStat1: "AWS Student Ambassador",
    aboutStat2: "Embajadora n8n",
    aboutStat3: "Ex-Wallbit",
    workKicker: "Trabajo seleccionado",
    tiktokKicker: "Portfolio TikTok",
    tiktokTitle: "Donde la comunidad vive.",
    tiktokSub: "Contenido sobre IA, dev, herramientas y carrera tech — explicado para que cualquier persona lo entienda.",
    talksKicker: "Charlas & speaking",
    talksTitle: "He hablado en escenarios sobre IA, comunidad tech y carrera.",
    brandsKicker: "Marcas con las que he trabajado",
    cvKicker: "Experiencia",
    cvDownload: "Descargar CV en PDF",
    newsletterKicker: "Newsletter",
    newsletterTitle: "Recibe lo que estoy construyendo, antes que el feed.",
    newsletterSub: "Una vez al mes. Proyectos de IA, recursos y oportunidades para colabs.",
    newsletterCta: "Suscribirme",
    newsletterPh: "tu@email.com",
    contactKicker: "Contacto",
    contactTitle: "¿Trabajamos juntas?",
    contactSub: "Cuéntame de tu marca, evento o proyecto. Respondo en menos de 48h.",
    contactName: "Tu nombre",
    contactEmail: "Tu email",
    contactCompany: "Empresa / marca",
    contactType: "Tipo de colaboración",
    contactMsg: "Cuéntame más",
    contactSend: "Enviar mensaje",
    contactTypes: ["Colaboración con marca", "Speaking / charla", "Consultoría técnica", "Otro"],
    footerNote: "Hecho con código y café desde Latam.",
    available: "Disponible para proyectos · Q2 2026",
  },
  en: {
    nav: { home: "Home", about: "About", work: "Work", tiktok: "Content", talks: "Talks", brands: "Brands", contact: "Contact" },
    heroKicker: "AI Engineer · Creator · Speaker",
    heroTitle: "I build AI.\nI teach code.\nI move audiences.",
    heroSub: "Carli Code — where rigorous engineering meets digital culture. Open for brand collabs, talks, and selected projects.",
    heroCta1: "Let's work together",
    heroCta2: "Download CV",
    aboutKicker: "About",
    aboutTitle: "Two profiles, one voice.",
    aboutBody: "By day I build AI systems with computer vision, LLMs and knowledge graphs. By night I translate what I learn to millions on TikTok learning how to code. AWS Student Ambassador, n8n ambassador, and former Wallbit.",
    aboutStat1: "AWS Student Ambassador",
    aboutStat2: "n8n Ambassador",
    aboutStat3: "Ex-Wallbit",
    workKicker: "Selected work",
    tiktokKicker: "TikTok Portfolio",
    tiktokTitle: "Where the community lives.",
    tiktokSub: "Content about AI, dev, tools and tech careers — explained so anyone gets it.",
    talksKicker: "Talks & speaking",
    talksTitle: "I've spoken on stages about AI, tech community and career.",
    brandsKicker: "Brands I've worked with",
    cvKicker: "Experience",
    cvDownload: "Download CV (PDF)",
    newsletterKicker: "Newsletter",
    newsletterTitle: "Get what I'm building, before the feed does.",
    newsletterSub: "Once a month. AI projects, resources and collab opportunities.",
    newsletterCta: "Subscribe",
    newsletterPh: "your@email.com",
    contactKicker: "Contact",
    contactTitle: "Let's work together?",
    contactSub: "Tell me about your brand, event or project. I reply within 48h.",
    contactName: "Your name",
    contactEmail: "Your email",
    contactCompany: "Company / brand",
    contactType: "Collaboration type",
    contactMsg: "Tell me more",
    contactSend: "Send message",
    contactTypes: ["Brand collaboration", "Speaking / talk", "Tech consulting", "Other"],
    footerNote: "Built with code and coffee from Latam.",
    available: "Open for projects · Q2 2026",
  }
};

const PROJECTS = [
  {
    code: "01",
    titleEs: "Sistema Cognitivo de Detección de Incendios",
    titleEn: "Cognitive Wildfire Detection System",
    descEs: "Visión por computadora + ML supervisado para reconocimiento temprano de incendios.",
    descEn: "Computer vision + supervised ML for early wildfire recognition.",
    tags: ["Computer Vision", "PyTorch", "ML"],
    year: "2024",
  },
  {
    code: "02",
    titleEs: "Clasificación de Violencia con Streaming de Audio",
    titleEn: "Violence Classification via Audio Streaming",
    descEs: "Análisis de audio en tiempo real para evaluar niveles de violencia en señales y texto.",
    descEn: "Real-time audio analysis to assess violence levels in signal and text.",
    tags: ["Audio ML", "NLP", "Streaming"],
    year: "2024",
  },
  {
    code: "03",
    titleEs: "Study-Buddy — Asistente con Grafos de Conocimiento",
    titleEn: "Study-Buddy — Knowledge Graph Assistant",
    descEs: "IA conversacional con LLMs y grafos de conocimiento para educación personalizada.",
    descEn: "Conversational AI with LLMs and knowledge graphs for personalized learning.",
    tags: ["LLM", "Knowledge Graph", "RAG"],
    year: "2025",
  },
  {
    code: "04",
    titleEs: "MATILDA — Chatbot de Mujeres Científicas",
    titleEn: "MATILDA — Women in Science Chatbot",
    descEs: "Chatbot en RASA entrenado con datos sobre mujeres científicas en español.",
    descEn: "RASA chatbot trained on data about women scientists in Spanish.",
    tags: ["RASA", "NLP", "Spanish"],
    year: "2024",
  },
];

const TIKTOKS = [
  { id: 1, titleEs: "Cómo entrené un modelo en 5 min", titleEn: "Trained a model in 5 min", views: "2.4M", likes: "412K", color: "#ff2d92" },
  { id: 2, titleEs: "El stack que uso para IA", titleEn: "My AI stack", views: "1.8M", likes: "297K", color: "#ff79c6" },
  { id: 3, titleEs: "Día de una ingeniera de IA", titleEn: "Day of an AI engineer", views: "3.1M", likes: "521K", color: "#c026d3" },
  { id: 4, titleEs: "n8n explicado en 60s", titleEn: "n8n in 60 seconds", views: "1.2M", likes: "189K", color: "#ff2d92" },
  { id: 5, titleEs: "Mi ruta para aprender ML", titleEn: "My ML learning roadmap", views: "4.5M", likes: "780K", color: "#a855f7" },
  { id: 6, titleEs: "AWS gratis siendo estudiante", titleEn: "AWS free as a student", views: "956K", likes: "143K", color: "#ff79c6" },
];

const TALKS = [
  { eventEs: "Conferencia de IA Latam", eventEn: "Latam AI Conference", topicEs: "El futuro de los agentes autónomos", topicEn: "The future of autonomous agents", year: "2025", city: "Bogotá" },
  { eventEs: "AWS Community Day", eventEn: "AWS Community Day", topicEs: "Sagemaker para estudiantes", topicEn: "Sagemaker for students", year: "2024", city: "Medellín" },
  { eventEs: "TikTok Creators Summit", eventEn: "TikTok Creators Summit", topicEs: "Educar tech a 1M de personas", topicEn: "Teaching tech to 1M people", year: "2024", city: "CDMX" },
  { eventEs: "Mujeres en Tech", eventEn: "Women in Tech", topicEs: "De student a embajadora", topicEn: "From student to ambassador", year: "2025", city: "Online" },
];

const BRANDS = [
  { name: "AWS", role: "Student Ambassador", year: "2024 — Now" },
  { name: "n8n", role: "Brand Ambassador", year: "2024 — Now" },
  { name: "Wallbit", role: "AI Engineer", year: "2023 — 2024" },
];

const CV = [
  {
    role: "AI Engineer & Content Creator",
    company: "Independent",
    period: "2024 — Now",
    locEs: "Remoto",
    locEn: "Remote",
    bulletsEs: [
      "Construyo sistemas de IA con LLMs, visión por computadora y grafos de conocimiento.",
      "Creo contenido educativo para una audiencia de millones en TikTok.",
      "Speaker en conferencias de IA, AWS y comunidades tech en Latam.",
    ],
    bulletsEn: [
      "Build AI systems with LLMs, computer vision and knowledge graphs.",
      "Create educational content for an audience of millions on TikTok.",
      "Speaker at AI, AWS and tech community conferences across Latam.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Wallbit",
    period: "2023 — 2024",
    locEs: "Remoto",
    locEn: "Remote",
    bulletsEs: [
      "Diseñé pipelines de ML para producto en producción.",
      "Implementé clasificación de audio y NLP para flujos críticos.",
    ],
    bulletsEn: [
      "Designed ML pipelines for production product use.",
      "Shipped audio classification and NLP for critical flows.",
    ],
  },
  {
    role: "AWS Student Ambassador",
    company: "Amazon Web Services",
    period: "2024 — Now",
    locEs: "Latam",
    locEn: "Latam",
    bulletsEs: [
      "Embajadora oficial del programa AWS para estudiantes.",
      "Workshops y talleres sobre cloud y ML para universidades.",
    ],
    bulletsEn: [
      "Official AWS ambassador for the student program.",
      "Workshops on cloud and ML for universities.",
    ],
  },
  {
    role: "n8n Ambassador",
    company: "n8n",
    period: "2024 — Now",
    locEs: "Global",
    locEn: "Global",
    bulletsEs: [
      "Embajadora de la plataforma de automatización n8n.",
      "Tutoriales y casos de uso para creadores y devs.",
    ],
    bulletsEn: [
      "Ambassador for the n8n automation platform.",
      "Tutorials and use cases for creators and devs.",
    ],
  },
];

window.COPY = COPY;
window.PROJECTS = PROJECTS;
window.TIKTOKS = TIKTOKS;
window.TALKS = TALKS;
window.BRANDS = BRANDS;
window.CV = CV;
