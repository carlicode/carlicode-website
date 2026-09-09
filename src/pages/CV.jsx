import { ArrowUpRight, Award, Download, Globe2, GraduationCap, Sparkles, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { createElement } from "react";

const experience = [
  { company: "Beezero", dates: "Jun 2025 — Present", role: "AI Engineer / Tech Lead", summary: "Leading AI-driven logistics systems for B2B mobility and operations optimization.", points: ["Lead the development team and technical direction of core products.", "Built Beezy, a B2B scheduling system for ride coordination.", "Developed BeeTracked, a real-time tracking system."] },
  { company: "NowBit", dates: "Feb 2025 — Jul 2025", role: "AI & Automation Engineer", summary: "Developed AI-powered automation systems for growth and operations.", points: ["Built and validated MVPs powered by AI agents.", "Developed automation tools and HubSpot workflows.", "Trained internal teams in n8n."] },
  { company: "Platzi", dates: "2023 — 2024", role: "Professor & Teacher in House", summary: "Designed and taught AI, automation and Python education for one of LATAM’s largest tech learning platforms.", points: ["Published five courses spanning OpenAI chatbots, Python, data science, AI agents, Anaconda and Jupyter.", "Reached more than 50,000 learners across the platform.", "Taught practical LLM, AI-agent and Python best practices."] },
  { company: "Dapta", dates: "Feb 2024 — May 2024", role: "Head of Artificial Intelligence", summary: "Designed multi-agent systems and generative AI solutions.", points: ["Developed multi-agent systems for content generation.", "Built AI blog platforms and implemented NLP/RAG solutions.", "Presented the project to the Government of Colombia."] },
  { company: "Menti Academy", dates: "Nov 2021 — Mar 2024", role: "CEO & Founder", summary: "Founded and led a technology education initiative in Bolivia.", points: ["Connected technical education, community and accessible learning experiences."] },
  { company: "ICI UPB", dates: "Oct 2020 — Jun 2023", role: "Artificial Intelligence Researcher", summary: "Researched conversational AI and deep-learning systems.", points: ["Built conversational models using deep learning and Rasa.", "Presented research internationally in the USA, Switzerland and Uruguay."] },
  { company: "Trascender Global", dates: "Feb 2021 — Feb 2022", role: "Artificial Intelligence Engineer", summary: "Developed computer-vision solutions and production data pipelines.", points: ["Built computer-vision solutions with OpenCV and TensorFlow.", "Designed ETL pipelines."] },
];

const skills = [
  ["AI Products & Agentic Systems", "LLMs (OpenAI, Gemini), LangChain, RAG, multi-agent orchestration, prompt engineering and fine-tuning."],
  ["Automation", "n8n, ETL pipelines, webhooks, resilient workflows, error handling, retries and branching logic."],
  ["Programming & Data", "Python, modular architectures, Apache Spark, PySpark and large-scale data pipelines."],
  ["Machine Learning & Cloud", "TensorFlow, PyTorch, Keras, AWS, Docker and containerization."],
];

const impact = [
  { icon: Sparkles, label: "n8n", title: "Official Ambassador", text: "Co-organizer of the first n8n meetups in Bolivia, bringing together more than 150 attendees." },
  { icon: Globe2, label: "AWS", title: "Community Builder", text: "AWS Community Builder 2025 and AWS User Group Leader, creating spaces for cloud learning." },
  { icon: Users, label: "WTM", title: "Women Techmakers Ambassador", text: "Supporting women and underrepresented talent through knowledge, visibility and professional growth." },
  { icon: Award, label: "STAGES", title: "International Speaker", text: "Speaker at PyCon US, Platzi Conf and TEDx, translating complex technology into useful stories." },
];

export default function CV() {
  return <main className="cv-page">
    <Helmet><title>CV — Carla Florida | Carli Code</title><meta name="description" content="CV de Carla Florida, AI Engineer, Tech Lead, educator and community builder." /></Helmet>
    <section className="cv-hero"><p className="eyebrow"><span /> CURRICULUM VITAE</p><h1>Carla<br /><em>Florida.</em></h1><p className="cv-role">AI Engineer · Agentic Systems & Automation · Tech Lead</p><div className="cv-actions"><a href="/downloads/carla-florida-cv-2026.pdf" download="Carla_Florida_CV_2026.pdf" className="button button-primary"><Download size={17} /> Download PDF</a><a href="#experience" className="button hero-secondary">View experience <ArrowUpRight size={17} /></a></div><span className="cv-code">&lt;/&gt;</span></section>

    <section className="cv-profile"><div><p className="eyebrow"><span /> PROFESSIONAL PROFILE</p><h2>From prototype<br />to <em>production.</em></h2></div><div><p className="cv-profile-lede">I design and ship LLM-powered products — from multi-agent orchestration and RAG to end-to-end automations — that solve real operational problems.</p><p>Currently Tech Lead at Beezero, leading AI-driven logistics systems for B2B mobility. Beyond building products, I teach, speak and grow technical communities across Latin America.</p><div className="cv-tags"><span>LLMs</span><span>RAG</span><span>LangChain</span><span>n8n</span><span>Python</span><span>AWS</span><span>AI Product Development</span></div></div></section>

    <section className="cv-content" id="experience"><div className="cv-intro"><h2>Experience built<br />for <em>impact.</em></h2><p>Cochabamba, Bolivia · Building AI products, automation systems and technical communities.</p></div><div className="cv-experience">{experience.map(({ company, dates, role, summary, points }) => <article key={`${company}-${role}`}><div><span>{dates}</span><h3>{company}</h3><p className="cv-job-title">{role}</p></div><div><p>{summary}</p><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div><div className="cv-earlier"><p>EARLIER EXPERIENCE</p><span>Cisco Networking Academy · Instructor · 2020–2021</span><span>TRUEXTEND · Robotics Lab Assistant · 2018–2019</span><span>zékiri · Designer · 2019</span></div></section>

    <section className="cv-details"><div><p className="eyebrow"><span /> EXPERTISE</p><h2>Technical<br /><em>toolkit.</em></h2></div><div className="cv-skill-list">{skills.map(([name, detail]) => <article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

    <section className="cv-impact"><div className="cv-impact-heading"><p className="eyebrow"><span /> BEYOND BUILDING</p><h2>Technology grows<br />when <em>people do.</em></h2><p>I turn technical knowledge into practical opportunities through education, community leadership and public speaking.</p></div><div className="cv-impact-grid">{impact.map(({ icon, label, title, text }, index) => <article key={title}><div>{createElement(icon, { size: 22 })}<span>0{index + 1} / {label}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="cv-credentials"><div className="cv-credentials-heading"><p className="eyebrow"><span /> CREDENTIALS</p><h2>Education &<br /><em>recognition.</em></h2></div><div className="cv-credential-grid"><article><GraduationCap size={24} /><h3>Education</h3><p><b>Universidad Mayor de San Simón</b><br />B.Sc. in Systems Engineering · 2015–2021</p><p><b>Master’s in Software Product Development with AI</b><br />Nov 2025–Feb 2027 · In progress</p></article><article><Award size={24} /><h3>Certifications</h3><ul><li>Prompt Design in Vertex AI Skill Badge</li><li>Analyze Speech and Language with Google APIs</li><li>Supervised Learning with scikit-learn</li><li>Computational Thinking with Python</li></ul></article><article><Globe2 size={24} /><h3>Languages & recognition</h3><p><b>Spanish</b> · Native or bilingual<br /><b>English</b> · Professional working proficiency</p><ul><li>ACM-ICPC Bolivia — 3rd place</li><li>Grace Hopper Celebration scholarship</li><li>AWSome Women Summit Mexico organizer</li></ul></article></div><p className="cv-hobbies">Off screen: archery and making technology feel more human.</p></section>

    <section className="cv-links"><p>LINKS</p><div><a href="https://www.linkedin.com/in/carlicode/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/carlicode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a href="https://platzi.com/profes/carlicode/" target="_blank" rel="noreferrer">Platzi Courses <ArrowUpRight size={16} /></a><a href="https://www.cloudskillsboost.google/public_profiles/14e01263-8531-4600-88a2-320eea1f6c27" target="_blank" rel="noreferrer">Cloud Skills Boost <ArrowUpRight size={16} /></a><a href="https://www.credly.com/users/carli-code" target="_blank" rel="noreferrer">Credly <ArrowUpRight size={16} /></a><a href="https://g.dev/carlicode" target="_blank" rel="noreferrer">Google Developer <ArrowUpRight size={16} /></a></div><a className="cv-email" href="/downloads/carla-florida-cv-2026.pdf" download="Carla_Florida_CV_2026.pdf">Download CV <Download size={16} /></a></section>
  </main>;
}
