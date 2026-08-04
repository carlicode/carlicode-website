import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function SiteNav({
  nav,
  lang,
}: {
  nav: Dictionary["nav"];
  lang: Locale;
}) {
  const base = `/${lang}`;

  return (
    <nav className="br-nav" aria-label="Primary">
      <Link href={base} className="br-logo">
        CARLI<span>·</span>CODE
      </Link>
      <Link href={`${base}#work`}>{nav.work}</Link>
      <Link href={`${base}/cv`}>{nav.cv}</Link>
      <Link href={`${base}/media-kit`}>{nav.mediaKit}</Link>
      <Link href={`${base}/hobbies`}>{nav.hobbies}</Link>
      <div className="br-nav-spacer" />
      <div className="br-lang">
        <Link href={`/es`} className={lang === "es" ? "active" : ""}>ES</Link>
        <Link href={`/en`} className={lang === "en" ? "active" : ""}>EN</Link>
      </div>
      <Link href={`${base}#contact`} className="br-nav-cta">
        {nav.contact} ↗
      </Link>
    </nav>
  );
}
