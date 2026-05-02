import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { TikTokCard } from "@/content/types";
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
        meta="@CARLICODE ↗"
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
              <div className="num">14M+</div>
              <div className="lab">{dict.tiktokStatViews}</div>
            </div>
            <div>
              <div className="num">800K</div>
              <div className="lab">{dict.tiktokStatFollowers}</div>
            </div>
            <div>
              <div className="num">2.3M</div>
              <div className="lab">{dict.tiktokStatLikes}</div>
            </div>
          </div>
        </div>
        <div className="br-tt-carousel">
          {videos.map((v, i) => (
            <div
              className="br-tt-card"
              key={v.id}
              style={{
                background: `linear-gradient(135deg, ${v.color}33, #0a0a0a)`,
              }}
            >
              <div className="br-tt-card-bg" />
              <div className="br-tt-num">
                VID.{String(i + 1).padStart(2, "0")}
              </div>
              <div className="br-tt-views">{v.views}</div>
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
                <div className="br-tt-likes">♥ {v.likes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
