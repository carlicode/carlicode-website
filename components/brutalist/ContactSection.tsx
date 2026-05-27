import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { contact, mailto, outbound } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SectionHeader } from "./SectionHeader";

export function ContactSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const es = lang === "es";

  return (
    <section className="br-section" id="contact">
      <SectionHeader
        num="/08"
        title={dict.contactKicker}
        meta={es ? "RESPUESTA · 48H" : "REPLY · 48H"}
      />
      <div className="br-contact">
        <div className="br-contact-info">
          <h2 className="br-contact-headline">
            {es ? (
              <>
                HAGAMOS
                <br />
                ALGO <span className="ac">JUNTAS</span>.
              </>
            ) : (
              <>
                LET&apos;S MAKE
                <br />
                SOMETHING <span className="ac">TOGETHER</span>.
              </>
            )}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              fontFamily:
                "var(--font-space-grotesk), ui-sans-serif, sans-serif",
            }}
          >
            {dict.contactSub}
          </p>
          <div className="br-contact-direct">
            <a className="br-contact-email" href={mailto}>
              {contact.email} →
            </a>
            <div className="br-contact-line">
              TIKTOK · <span>{contact.handle}</span>
            </div>
            <a
              className="br-contact-line br-contact-line-link"
              href={outbound.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN · <span>/in/carlicode</span>
            </a>
            <div className="br-contact-line">
              {es ? "BASE" : "BASED IN"} ·{" "}
              <span>{es ? contact.locationEs : contact.locationEn}</span>
            </div>
          </div>
        </div>
        <ContactForm dict={dict} />
      </div>
    </section>
  );
}
