import type {
  CvAchievement,
  CvCertification,
  CvEducation,
  CvSkillGroup,
} from "./types";

export const cvSkillGroups: CvSkillGroup[] = [
  {
    categoryEs: "IA y sistemas agénticos",
    categoryEn: "AI & Agentic Systems",
    itemsEs: [
      "LLMs (OpenAI, Gemini), LangChain, RAG",
      "Sistemas multi-agente y orquestación",
      "Prompt engineering, fine-tuning",
    ],
    itemsEn: [
      "LLMs (OpenAI, Gemini), LangChain, RAG",
      "Multi-agent systems and orchestration",
      "Prompt engineering, fine-tuning",
    ],
  },
  {
    categoryEs: "Automatización",
    categoryEn: "Automation",
    itemsEs: [
      "n8n, pipelines ETL, webhooks",
      "Manejo de errores, reintentos, ramificación",
    ],
    itemsEn: [
      "n8n, ETL pipelines, webhooks",
      "Error handling, retries, branching logic",
    ],
  },
  {
    categoryEs: "Programación",
    categoryEn: "Programming",
    itemsEs: [
      "Python (IA, automatización, pipelines)",
      "Arquitecturas modulares y escalables",
    ],
    itemsEn: [
      "Python (AI systems, automation, pipelines)",
      "Modular, scalable architectures",
    ],
  },
  {
    categoryEs: "Datos",
    categoryEn: "Data",
    itemsEs: ["Apache Spark, PySpark", "Pipelines de datos a gran escala"],
    itemsEn: ["Apache Spark, PySpark", "Large-scale data pipelines"],
  },
  {
    categoryEs: "Machine Learning",
    categoryEn: "Machine Learning",
    itemsEs: [
      "TensorFlow, PyTorch, Keras",
      "Entrenamiento, evaluación y optimización",
    ],
    itemsEn: [
      "TensorFlow, PyTorch, Keras",
      "Training, evaluation, optimization",
    ],
  },
  {
    categoryEs: "Cloud y DevOps",
    categoryEn: "Cloud & DevOps",
    itemsEs: ["AWS", "Docker y containerización"],
    itemsEn: ["AWS", "Docker and containerization"],
  },
];

export const cvEducation: CvEducation[] = [
  {
    institutionEs: "Universidad Mayor de San Simón",
    institutionEn: "Universidad Mayor de San Simón",
    degreeEs: "Ingeniería de Sistemas",
    degreeEn: "B.Sc. in Systems Engineering",
    period: "",
    noteEs: "",
    noteEn: "",
  },
  {
    institutionEs: "Maestría en IA para Desarrollo de Software",
    institutionEn: "Master's in AI for Software Development",
    degreeEs: "En curso",
    degreeEn: "In progress",
    period: "",
    noteEs: "",
    noteEn: "",
  },
];

export const cvAchievements: CvAchievement[] = [
  {
    textEs: "ACM-ICPC Bolivia (2016) — 3.er lugar",
    textEn: "ACM-ICPC Bolivia (2016) — 3rd place",
  },
  {
    textEs: "TEDx Univalle Cochabamba (2023)",
    textEn: "TEDx Univalle Cochabamba (2023)",
  },
  {
    textEs: "Women Techmakers Ambassador (2024)",
    textEn: "Women Techmakers Ambassador (2024)",
  },
  {
    textEs: "Speaker en Platzi Conf Colombia (2024)",
    textEn: "Speaker at Platzi Conf Colombia (2024)",
  },
  {
    textEs: "AWS Community Builder (2025)",
    textEn: "AWS Community Builder (2025)",
  },
  {
    textEs: "Speaker en PyCon US (2025)",
    textEn: "Speaker at PyCon US (2025)",
  },
  {
    textEs: "Organizadora AWSome Women Summit México",
    textEn: "Organizer AWSome Women Summit Mexico",
  },
  {
    textEs: "AWS User Group Leader",
    textEn: "AWS User Group Leader",
  },
];

export const cvCertifications: CvCertification[] = [
  {
    name: "Foundation of Generative AI",
    issuer: "Udacity",
    url: "https://www.udacity.com/certificate/e/e70454be-b7bc-11ef-8c5b-1fee656b8520",
  },
  {
    name: "Analyze Speech and Language with Google APIs",
    issuer: "Credly",
    url: "https://www.credly.com/badges/5b1fcac5-d620-4b15-b0eb-53b1fa0f68e3/linked_in_profile",
  },
  {
    name: "Explore Generative AI with the Vertex AI Gemini API",
    issuer: "Credly",
    url: "https://www.credly.com/badges/dba0e742-7da5-4846-b444-0f18e0edac06/linked_in_profile",
  },
  {
    name: "Get Started with Cloud Storage",
    issuer: "Credly",
    url: "https://www.credly.com/badges/24a6da56-ab03-4b5d-adfc-9d3dcd3efeeb/linked_in_profile",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Credly",
    url: "https://www.credly.com/badges/ab6a61c9-e0b0-410b-89bb-3aef91a29d51/linked_in_profile",
  },
  {
    name: "Build a Data Science Web App with Streamlit and Python",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/US3VUKHK7YSW",
  },
  {
    name: "Instructor 1 Year of Service",
    issuer: "Cisco / Credly",
    url: "https://www.credly.com/badges/5769ca48-d09c-4549-ba3a-e82545a31212?source=linked_in_profile",
  },
  {
    name: "Dynamic and Stochastic Programming with Python",
    issuer: "Platzi",
    url: null,
  },
  {
    name: "OOP and Algorithms in Python",
    issuer: "Platzi",
    url: null,
  },
  {
    name: "Intro to Probabilistic Thinking",
    issuer: "Platzi",
    url: null,
  },
  {
    name: "Computational Thinking with Python",
    issuer: "Platzi",
    url: null,
  },
  {
    name: "CNNs in TensorFlow",
    issuer: "Coursera",
    url: null,
  },
  {
    name: "AWS Machine Learning Foundations",
    issuer: "Udacity",
    url: null,
  },
  {
    name: "Supervised Learning with Scikit-learn",
    issuer: "Datacamp",
    url: null,
  },
];
