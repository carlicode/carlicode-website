import type { Locale } from "@/lib/i18n";
import type { Dictionary, TikTokCard } from "@/content/types";
import Link from "next/link";

export function MinimalPreviewContent({
  lang,
  dict,
  videos,
}: {
  lang: Locale;
  dict: Dictionary;
  videos: TikTokCard[];
}) {
  return (
    <section className="min-preview-section" id="community">
      <div className="min-container">
        <div className="min-preview-header">
          <h2 className="min-section-title">{dict.tiktokTitle}</h2>
          <Link href={`/${lang}/content`} className="min-preview-link">
            {lang === "es" ? "Ver todo →" : "View all →"}
          </Link>
        </div>
        
        <p className="min-section-subtitle">{dict.tiktokSub}</p>
        
        <div className="min-community-stats">
          <div className="min-stat">
            <div className="min-stat-number">162K</div>
            <div className="min-stat-label">{dict.tiktokStatFollowers}</div>
          </div>
          <div className="min-stat">
            <div className="min-stat-number">2.1M</div>
            <div className="min-stat-label">{dict.tiktokStatLikes}</div>
          </div>
          <div className="min-stat">
            <div className="min-stat-number">25K</div>
            <div className="min-stat-label">Instagram</div>
          </div>
        </div>

        <div className="min-videos-grid">
          {videos.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="min-video-card"
            >
              <div className="min-video-thumbnail" style={{ background: `linear-gradient(135deg, ${video.color}22 0%, #0a0a0a 100%)` }}>
                <div className="min-video-play">▶</div>
                <div className="min-video-views">{video.views}</div>
              </div>
              <div className="min-video-info">
                <h3 className="min-video-title">
                  {lang === "es" ? video.titleEs : video.titleEn}
                </h3>
                <p className="min-video-likes">❤️ {video.likes}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="min-preview-cta">
          <Link href={`/${lang}/content`} className="min-btn min-btn-ghost">
            {lang === "es" ? "Ver más contenido" : "View more content"}
          </Link>
        </div>
      </div>
    </section>
  );
}
