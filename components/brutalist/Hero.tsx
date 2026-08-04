import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { CV_PATH } from "@/lib/site";

export function Hero({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="br-hero">
      <div className="br-hero-kicker">{dict.heroKicker}</div>
      <h1 className="br-hero-title">
        {lang === "es" ? (
          <>
            CONSTRUYO <span className="accent">IA.</span>{" "}
            ENSEÑO <span className="accent">CÓDIGO.</span>{" "}
            MUEVO <span className="accent">AUDIENCIAS.</span>
          </>
        ) : (
          <>
            I BUILD <span className="accent">AI.</span>{" "}
            I TEACH <span className="accent">CODE.</span>{" "}
            I MOVE <span className="accent">AUDIENCES.</span>
          </>
        )}
      </h1>
      <div className="br-hero-sub">{dict.heroSub}</div>
      <div className="br-hero-ctas">
        <Link href="#contact" className="br-cta br-cta-pink">
          {dict.heroCta1} <span>→</span>
        </Link>
        <a href={CV_PATH} className="br-cta br-cta-ghost" download>
          {dict.heroCta2} <span>↓</span>
        </a>
      </div>
    </section>
  );
}
