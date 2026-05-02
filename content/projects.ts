import type { Project } from "./types";

export const projects: Project[] = [
  {
    code: "01",
    titleEs: "Sistema Cognitivo de Detección de Incendios",
    titleEn: "Cognitive Wildfire Detection System",
    descEs:
      "Visión por computadora + ML supervisado para reconocimiento temprano de incendios.",
    descEn:
      "Computer vision + supervised ML for early wildfire recognition.",
    tags: ["Computer Vision", "PyTorch", "ML"],
    year: "2024",
  },
  {
    code: "02",
    titleEs: "Clasificación de Violencia con Streaming de Audio",
    titleEn: "Violence Classification via Audio Streaming",
    descEs:
      "Análisis de audio en tiempo real para evaluar niveles de violencia en señales y texto.",
    descEn:
      "Real-time audio analysis to assess violence levels in signal and text.",
    tags: ["Audio ML", "NLP", "Streaming"],
    year: "2024",
  },
  {
    code: "03",
    titleEs: "Study-Buddy — Asistente con Grafos de Conocimiento",
    titleEn: "Study-Buddy — Knowledge Graph Assistant",
    descEs:
      "IA conversacional con LLMs y grafos de conocimiento para educación personalizada.",
    descEn:
      "Conversational AI with LLMs and knowledge graphs for personalized learning.",
    tags: ["LLM", "Knowledge Graph", "RAG"],
    year: "2025",
  },
  {
    code: "04",
    titleEs: "MATILDA — Chatbot de Mujeres Científicas",
    titleEn: "MATILDA — Women in Science Chatbot",
    descEs:
      "Chatbot en RASA entrenado con datos sobre mujeres científicas en español.",
    descEn:
      "RASA chatbot trained on data about women scientists in Spanish.",
    tags: ["RASA", "NLP", "Spanish"],
    year: "2024",
  },
];
