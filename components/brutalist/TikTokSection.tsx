import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { TikTokCard } from "@/content/types";
import { tiktokProfileUrl, tiktokStats } from "@/content/tiktoks";
import { SectionHeader } from "./SectionHeader";

export function TikTokSection({
  lang,
  dict,
  videos,
}: {
  lang: Locale;
  dict: Dictionary;
  videos: TikTokCard[];
}) {
  return (
    <section className="br-section" id="tiktok">
      <SectionHeader
        num="/03"
        title={dict.tiktokKicker}
        meta="@carli.code ↗"
      />
      <div className="br-tiktok-wrap">
        <div className="br-tiktok-info">
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
              fontFamily:
                "var(--font-space-grotesk), ui-sans-serif, sans-serif",
            }}
          >
            {dict.tiktokSub}
          </p>
          <div className="br-tiktok-statgrid">
            <div>
              <div className="num">{tiktokStats.followers}</div>
              <div className="lab">{dict.tiktokStatFollowers}</div>
            </div>
            <div>
              <div className="num">{tiktokStats.instagram}</div>
              <div className="lab">Instagram</div>
            </div>
            <div>
              <div className="num">{tiktokStats.youtube}</div>
              <div className="lab">YouTube</div>
            </div>
          </div>
          <a
            href={tiktokProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="br-tiktok-profile-link"
          >
            {tiktokProfileUrl} ↗
          </a>
        </div>
        <div className="br-tt-carousel">
          {videos.map((v, i) => {
            const card = (
              <>
                <div className="br-tt-card-bg" />
                <div className="br-tt-num">
                  VID.{String(i + 1).padStart(2, "0")}
                </div>
                <div className="br-tt-play">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <title>Play</title>
                    <path d="M3 1l9 6-9 6z" />
                  </svg>
                </div>
                <div className="br-tt-meta">
                  <div className="br-tt-title">
                    {lang === "es" ? v.titleEs : v.titleEn}
                  </div>
                  {v.videoId ? (
                    <div className="br-tt-likes">#{v.videoId.slice(-6)}</div>
                  ) : null}
                </div>
              </>
            );

            return v.url ? (
              <a
                className="br-tt-card br-tt-card-link"
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg, ${v.color}33, #0a0a0a)`,
                }}
              >
                {card}
              </a>
            ) : (
              <div
                className="br-tt-card"
                key={v.id}
                style={{
                  background: `linear-gradient(135deg, ${v.color}33, #0a0a0a)`,
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
