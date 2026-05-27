import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import {
  mediaKitAbout,
  mediaKitAge,
  mediaKitCurrency,
  mediaKitFeaturedVideoIds,
  mediaKitGender,
  mediaKitLocations,
  mediaKitPricingInstagramReels,
  mediaKitPricingInstagramStories,
  mediaKitPricingTiktok,
  mediaKitSocialStats,
  mediaKitTrafficSources,
  type PricingRow,
} from "@/content/media-kit";
import { contact, mailto } from "@/lib/site";
import { SubPageShell } from "./SubPageShell";

function StatBar({
  label,
  value,
  max = 60,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const width = Math.min(100, (value / max) * 100);
  return (
    <div className="br-mk-bar-row">
      <div className="br-mk-bar-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="br-mk-bar-track">
        <div className="br-mk-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function PricingTable({
  title,
  rows,
  es,
}: {
  title: string;
  rows: PricingRow[];
  es: boolean;
}) {
  return (
    <div className="br-mk-price-block">
      <h3 className="br-mk-price-title">{title}</h3>
      <table className="br-mk-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.formatEn}>
              <td>{es ? row.formatEs : row.formatEn}</td>
              <td>
                {mediaKitCurrency} {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MediaKitPage({
  lang,
  dict,
  isoDate,
}: {
  lang: Locale;
  dict: Dictionary;
  isoDate: string;
}) {
  const es = lang === "es";
  const p = dict.mediaKitPage;
  const home = `/${lang}`;

  return (
    <SubPageShell lang={lang} dict={dict} pathSuffix="/media-kit" isoDate={isoDate}>
      <header className="br-sub-hero">
        <Link href={home} className="br-sub-back">
          {p.backHome}
        </Link>
        <div className="br-sub-kicker">{p.kicker}</div>
        <h1 className="br-sub-title">{p.title}</h1>
      </header>

      <section className="br-sub-section">
        <h2 className="br-sub-h2">{p.aboutTitle}</h2>
        <p className="br-sub-prose">{es ? mediaKitAbout.es : mediaKitAbout.en}</p>
      </section>

      <section className="br-sub-section">
        <h2 className="br-sub-h2">{p.socialTitle}</h2>
        <div className="br-mk-social-grid">
          {mediaKitSocialStats.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="br-mk-social-card"
            >
              <div className="br-mk-social-platform">{s.platform}</div>
              <div className="br-mk-social-followers">{s.followers}</div>
              <div className="br-mk-social-link">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="br-sub-section">
        <h2 className="br-sub-h2">{p.videosTitle}</h2>
        <div className="br-mk-embed-grid">
          {mediaKitFeaturedVideoIds.map((id) => (
            <div className="br-mk-embed" key={id}>
              <iframe
                src={`https://www.tiktok.com/embed/v2/${id}`}
                title={`TikTok ${id}`}
                allow="encrypted-media"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="br-sub-section br-mk-split">
        <div>
          <h2 className="br-sub-h2">{p.trafficTitle}</h2>
          {mediaKitTrafficSources.map((row) => (
            <StatBar
              key={row.sourceEn}
              label={es ? row.sourceEs : row.sourceEn}
              value={row.percentage}
              max={55}
            />
          ))}
        </div>
        <div>
          <h2 className="br-sub-h2">{p.demographicsTitle}</h2>
          <h3 className="br-mk-h3">{p.genderTitle}</h3>
          {mediaKitGender.map((row) => (
            <StatBar
              key={row.labelEn}
              label={es ? row.labelEs : row.labelEn}
              value={row.percentage}
            />
          ))}
          <h3 className="br-mk-h3">{p.ageTitle}</h3>
          {mediaKitAge.map((row) => (
            <StatBar
              key={row.labelEn}
              label={es ? row.labelEs : row.labelEn}
              value={row.percentage}
            />
          ))}
        </div>
      </section>

      <section className="br-sub-section">
        <h2 className="br-sub-h2">{p.locationsTitle}</h2>
        <div className="br-mk-loc-grid">
          {mediaKitLocations.map((row) => (
            <StatBar
              key={row.labelEn}
              label={es ? row.labelEs : row.labelEn}
              value={row.percentage}
              max={30}
            />
          ))}
        </div>
      </section>

      <section className="br-sub-section">
        <h2 className="br-sub-h2">{p.pricingTitle}</h2>
        <div className="br-mk-pricing-grid">
          <PricingTable
            title={p.tiktokPricing}
            rows={mediaKitPricingTiktok}
            es={es}
          />
          <PricingTable
            title={p.reelsPricing}
            rows={mediaKitPricingInstagramReels}
            es={es}
          />
          <PricingTable
            title={p.storiesPricing}
            rows={mediaKitPricingInstagramStories}
            es={es}
          />
        </div>
        <p className="br-mk-packages">
          {p.packagesNote}{" "}
          <a href={mailto}>{contact.email}</a>
        </p>
      </section>

      <section className="br-sub-section br-mk-contact">
        <h2 className="br-sub-h2">{p.contactTitle}</h2>
        <p className="br-sub-prose">
          {contact.phone} · {contact.handle}
        </p>
        <a href={mailto} className="br-cta br-cta-pink br-mk-cta">
          {p.contactCta} <span className="br-cta-arrow">→</span>
        </a>
      </section>
    </SubPageShell>
  );
}
