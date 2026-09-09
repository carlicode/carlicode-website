import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../components/LanguageProvider";

export default function Contact() {
  const { language } = useLanguage();
  const copy = language === "es" ? {
    eyebrow: "CONTACTO", title: <>¿Hablamos de<br /><em>algo genial?</em></>, intro: "¿Tienes una pregunta, una idea, una invitación o quieres crear algo juntas? Cuéntame. Leo cada mensaje.", name: "Tu nombre", email: "Tu email", topic: "¿De qué quieres hablar?", options: ["Una colaboración", "Una pregunta", "Un evento o comunidad", "Otra idea"], message: "Cuéntame un poco más", send: "Enviar mensaje", direct: "O escríbeme directamente", sent: "Tu mensaje irá directo a mi bandeja de entrada." 
  } : {
    eyebrow: "CONTACT", title: <>Want to talk<br /><em>about something great?</em></>, intro: "Have a question, an idea, an invitation, or want to create something together? Tell me about it. I read every message.", name: "Your name", email: "Your email", topic: "What would you like to talk about?", options: ["A collaboration", "A question", "An event or community", "Another idea"], message: "Tell me a little more", send: "Send message", direct: "Or email me directly", sent: "Your message will go straight to my inbox."
  };
  return <main className="contact-page">
    <Helmet><title>Contact — Carli Code</title><meta name="description" content="Contacta a Carli Code para ideas, preguntas, comunidad o colaboraciones." /></Helmet>
    <section className="contact-page-hero"><div className="contact-grid" /><div className="contact-page-copy"><p className="eyebrow"><span /> {copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.intro}</p><div className="contact-direct"><Mail size={18} /><a href="mailto:carli.f.roman@gmail.com">carli.f.roman@gmail.com</a></div></div>
      <form className="contact-form" action="https://formspree.io/f/mrbqpbqb" method="POST"><label>{copy.name}<input required name="name" autoComplete="name" /></label><label>{copy.email}<input required type="email" name="email" autoComplete="email" /></label><label>{copy.topic}<select name="topic" defaultValue=""><option value="" disabled>—</option>{copy.options.map((option) => <option key={option}>{option}</option>)}</select></label><label className="form-message">{copy.message}<textarea required name="message" rows="6" /></label><button className="form-submit" type="submit">{copy.send} <Send size={17} /></button><p className="form-note">{copy.sent}</p></form>
    </section>
    <section className="contact-page-bottom"><p>{copy.direct}</p><a href="mailto:carli.f.roman@gmail.com">carli.f.roman@gmail.com <ArrowUpRight size={18} /></a></section>
  </main>;
}
