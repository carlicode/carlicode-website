import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import Link from "next/link";
import Image from "next/image";
import { NetworkAnimation } from "./NetworkAnimation";

export function MinimalHero({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="min-hero" id="inicio">
      <NetworkAnimation />
      <div className="min-container">
        <div className="min-hero-grid">
          <div className="min-hero-content">
            <div className="min-hero-kicker animate-fade-in">{dict.heroKicker}</div>
            <h1 className="min-hero-title animate-fade-in-up">
              {lang === "es" ? (
                <>
                  Construyo <span className="accent">IA</span>.<br />
                  Enseño <span className="accent">código</span>.<br />
                  Muevo <span className="accent">audiencias</span>.
                </>
              ) : (
                <>
                  I build <span className="accent">AI</span>.<br />
                  I teach <span className="accent">code</span>.<br />
                  I move <span className="accent">audiences</span>.
                </>
              )}
            </h1>
            <p className="min-hero-sub animate-fade-in">{dict.heroSub}</p>
            <div className="min-hero-ctas animate-fade-in-up">
              <Link href="#contact" className="min-btn min-btn-primary">
                {dict.heroCta1}
              </Link>
              <a href="/cv-carli-code-2026.pdf" className="min-btn min-btn-ghost" download>
                {dict.heroCta2}
              </a>
            </div>
          </div>
          
          <div className="min-hero-image">
            <div className="min-hero-image-wrapper">
              <Image
                src="/carli.png"
                alt="Carli Code"
                width={500}
                height={600}
                priority
                className="min-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Language switcher */}
      <div className="min-lang-switch">
        <Link href="/es" className={lang === "es" ? "active" : ""}>ES</Link>
        <span>/</span>
        <Link href="/en" className={lang === "en" ? "active" : ""}>EN</Link>
      </div>
    </section>
  );
}
