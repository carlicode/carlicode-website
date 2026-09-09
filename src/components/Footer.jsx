import { ArrowUpRight, Instagram, Linkedin, Twitch, Youtube } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/carli.code/", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@carli.code", icon: null },
  { label: "YouTube", href: "https://www.youtube.com/@CarliCode", icon: Youtube },
  { label: "Twitch", href: "https://www.twitch.tv/carlicode", icon: Twitch },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlicode/", icon: Linkedin },
];

export default function Footer() {
  const { language } = useLanguage();
  const copy = language === "es"
    ? { label: "ENCUÉNTRAME EN", title: <>Seguimos la<br /><em>conversación.</em></>, cta: "Escríbeme", made: "HECHO CON INTENCIÓN + NEÓN" }
    : { label: "FIND ME ON", title: <>Let’s keep the<br /><em>conversation going.</em></>, cta: "Get in touch", made: "MADE WITH INTENTION + NEON" };

  return <footer className="site-footer">
    <div className="footer-main">
      <div><p className="eyebrow"><span /> {copy.label}</p><h2>{copy.title}</h2></div>
      <div className="footer-links">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer">{Icon ? <Icon size={17} /> : <b>♪</b>} {label} <ArrowUpRight size={15} /></a>)}</div>
      <a className="footer-contact" href="/contacto">{copy.cta} <ArrowUpRight size={18} /></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} CARLI CODE</span><span>{copy.made}</span></div>
  </footer>;
}
