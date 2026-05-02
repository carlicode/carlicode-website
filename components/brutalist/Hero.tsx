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
      <div className="br-hero-left">
        <div className="br-hero-tag">{dict.heroKicker}</div>
        <h1 className="br-hero-title">
          {lang === "es" ? (
            <>
              CONSTRUYO
              <br />
              <span className="accent">IA.</span>
              <br />
              ENSEÑO
              <br />
              <span className="accent">CÓDIGO.</span>
              <br />
              MUEVO
              <br />
              <span className="accent">AUDIENCIAS.</span>
            </>
          ) : (
            <>
              I BUILD
              <br />
              <span className="accent">AI.</span>
              <br />
              I TEACH
              <br />
              <span className="accent">CODE.</span>
              <br />
              I MOVE
              <br />
              <span className="accent">AUDIENCES.</span>
            </>
          )}
        </h1>
        <div className="br-hero-meta">
          <span>
            {"// "}
            {dict.available}
          </span>
          <a href="#about">SCROLL ↓</a>
        </div>
      </div>
      <div className="br-hero-right">
        <div className="br-terminal">
          <div className="br-terminal-head">
            <span className="br-dot" />
            <span className="br-dot" />
            <span className="br-dot" />
            <span className="br-terminal-name">~/carli/about.py</span>
          </div>
          <span className="br-line">
            <span className="br-comment">
              # {lang === "es" ? "resumen" : "summary"}
            </span>
          </span>
          <span className="br-line">
            <span className="br-key">name</span> ={" "}
            <span className="br-str">&quot;Carli Code&quot;</span>
          </span>
          <span className="br-line">
            <span className="br-key">focus</span> ={" "}
            <span className="br-str">
              &quot;{lang === "es"
                ? "IA · código · comunidad"
                : "AI · code · community"}&quot;
            </span>
          </span>
          <span className="br-line">
            <span className="br-key">stack</span> = [
            <span className="br-str">&quot;LLMs&quot;</span>,{" "}
            <span className="br-str">&quot;CV&quot;</span>,{" "}
            <span className="br-str">&quot;AWS&quot;</span>,{" "}
            <span className="br-str">&quot;n8n&quot;</span>]
          </span>
          <span className="br-line">
            <span className="br-prompt">&gt;</span>{" "}
            <span className="br-key">open</span>(collab)
            <span className="br-str">…</span>
            <span className="br-cursor" />
          </span>
        </div>
        <div className="br-hero-ctas">
          <Link href="#contact" className="br-cta br-cta-pink">
            {dict.heroCta1} <span className="br-cta-arrow">→</span>
          </Link>
          <a href={CV_PATH} className="br-cta br-cta-ghost" download>
            {dict.heroCta2} <span className="br-cta-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
