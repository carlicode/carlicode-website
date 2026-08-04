import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { contact, mailto, outbound } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function ContactSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const es = lang === "es";

  return (
    <section className="br-contact-section" id="contact">
      <div className="br-contact-info">
        <p className="br-section-label">{dict.contactKicker}</p>
        <h2 className="br-contact-headline">
          {es ? "¿Trabajamos juntas?" : "Let's work together?"}
        </h2>
        <p className="br-contact-sub">{dict.contactSub}</p>
        <div className="br-contact-links">
          <a className="br-contact-email" href={mailto}>
            {contact.email}
          </a>
          <a
            className="br-contact-social"
            href={outbound.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok {contact.handle}
          </a>
          <a
            className="br-contact-social"
            href={outbound.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn /in/carlicode
          </a>
          <span className="br-contact-social">
            {es ? "Bolivia · Remoto" : "Bolivia · Remote"}
          </span>
        </div>
      </div>
      <ContactForm dict={dict} />
    </section>
  );
}
