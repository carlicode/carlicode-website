import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const experience = [
  ["Beezero", "Jul 2025 — Present", "AI Engineer / Tech Lead", "Leading AI-driven logistics systems for B2B mobility and operations optimization.", ["Led development team and technical direction of core products.", "Built Beezy, a B2B scheduling system for ride coordination.", "Developed BeeTracked, a real-time tracking system."]],
  ["NowBit", "Feb 2025 — Jul 2025", "AI & Automation Engineer", "Developing AI-powered automation systems for growth and operations.", ["Built and validated MVPs using AI agents.", "Developed LinkedIn automation tools and HubSpot workflows.", "Trained internal teams in n8n."]],
  ["Dapta", "Jan 2024 — Mar 2024", "Head of AI", "Designing multi-agent systems and generative AI solutions.", ["Developed multi-agent systems for content generation.", "Built AI blog platforms and implemented NLP/RAG solutions.", "Presented the project to the Government of Colombia."]],
  ["AI Institute (IIC)", "Mar 2020 — Mar 2023", "Associate Researcher", "Conversational AI research.", ["Built deep learning conversational models with Rasa.", "Presented internationally in the USA, Switzerland and Uruguay."]],
  ["Trascender Global", "Feb 2021 — Feb 2022", "ML Freelancer", "Computer vision and data pipelines.", ["Built computer-vision solutions with OpenCV and TensorFlow.", "Designed ETL pipelines."]],
];

const skills = [
  ["AI & Agentic Systems", "LLMs (OpenAI, Gemini), LangChain, RAG, multi-agent systems, orchestration, prompt engineering and fine-tuning."],
  ["Automation", "n8n, ETL pipelines, webhooks, error handling, retries and branching logic."],
  ["Programming & Data", "Python, modular architectures, Apache Spark, PySpark and large-scale data pipelines."],
  ["Machine Learning & Cloud", "TensorFlow, PyTorch, Keras, AWS, Docker and containerization."],
];

export default function CV() {
  return <main className="cv-page"><Helmet><title>CV — Carla Florida | Carli Code</title><meta name="description" content="CV de Carla Florida, AI Engineer, Tech Lead y creadora de Carli Code." /></Helmet>
    <section className="cv-hero"><p className="eyebrow"><span /> CURRICULUM VITAE</p><h1>Carla<br /><em>Florida.</em></h1><p className="cv-role">AI Engineer · Automation & Agentic Systems</p><div className="cv-actions"><a href="mailto:carli.f.roman@gmail.com" className="button button-primary"><Mail size={17} /> Email me</a><a href="#experience" className="button hero-secondary">View experience <ArrowUpRight size={17} /></a></div><span className="cv-code">&lt;/&gt;</span></section>
    <section className="cv-content" id="experience"><div className="cv-intro"><h2>Experience built<br />for <em>impact.</em></h2><p>Cochabamba, Bolivia · Available for AI, automation and technical leadership opportunities.</p></div><div className="cv-experience">{experience.map(([company, dates, role, summary, points]) => <article key={company}><div><span>{dates}</span><h3>{company}</h3><p className="cv-job-title">{role}</p></div><div><p>{summary}</p><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
    <section className="cv-details"><div><p className="eyebrow"><span /> EXPERTISE</p><h2>Technical<br /><em>toolkit.</em></h2></div><div className="cv-skill-list">{skills.map(([name, detail]) => <article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div></section>
    <section className="cv-credentials"><div><h2>Education &<br /><em>recognition.</em></h2><p><b>Universidad Mayor de San Simón</b><br />B.Sc. in Systems Engineering</p><p><b>Master’s in AI for Software Development</b><br />In Progress</p></div><div><ul><li>ACM-ICPC Bolivia (2016) — 3rd place</li><li>TEDx Univalle Cochabamba (2023)</li><li>Women Techmakers Ambassador (2024)</li><li>Speaker at Platzi Conf Colombia 2024 & PyCon US 2025</li><li>AWS Community Builder & AWS User Group Leader (2025)</li><li>Organizer, AWSome Women Summit Mexico</li></ul><p className="cv-hobbies">Off screen: archery and making tech feel more human.</p></div></section>
    <section className="cv-links"><p>LINKS</p><div><a href="https://www.linkedin.com/in/carlicode/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/carlicode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a href="https://platzi.com/profes/carlicode/" target="_blank" rel="noreferrer">Platzi Courses <ArrowUpRight size={16} /></a><a href="https://g.dev/carlicode" target="_blank" rel="noreferrer">Google Developer <ArrowUpRight size={16} /></a></div><a className="cv-email" href="mailto:carli.f.roman@gmail.com">carli.f.roman@gmail.com <Download size={16} /></a></section>
  </main>;
}
