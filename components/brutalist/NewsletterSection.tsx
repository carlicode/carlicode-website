import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { NewsletterForm } from "./NewsletterForm";
import { SectionHeader } from "./SectionHeader";

export function NewsletterSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="newsletter">
      <SectionHeader
        num="/07"
        title={dict.newsletterKicker}
        meta={lang === "es" ? "MENSUAL" : "MONTHLY"}
      />
      <div className="br-news">
        <div className="br-news-left">
          <div className="br-news-tag">
            {lang === "es" ? "★ MENSUAL · GRATIS" : "★ MONTHLY · FREE"}
          </div>
          <h2 className="br-news-headline">
            {lang === "es" ? (
              <>
                ANTES QUE
                <br />
                EL FEED.
              </>
            ) : (
              <>
                BEFORE
                <br />
                THE FEED.
              </>
            )}
          </h2>
          <p className="br-news-text">{dict.newsletterSub}</p>
        </div>
        <div className="br-news-right">
          <NewsletterForm dict={dict} />
        </div>
      </div>
    </section>
  );
}
