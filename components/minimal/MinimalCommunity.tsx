import type { Locale } from "@/lib/i18n";
import type { Dictionary, TikTokCard } from "@/content/types";

export function MinimalCommunity({
  lang,
  dict,
  videos,
}: {
  lang: Locale;
  dict: Dictionary;
  videos: TikTokCard[];
}) {
  return (
    <section className="min-community" id="community">
      <div className="min-container">
        <h2 className="min-section-title">{dict.tiktokTitle}</h2>
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
            <div className="min-stat-number">56K</div>
            <div className="min-stat-label">Views (7 days)</div>
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
      </div>
    </section>
  );
}
