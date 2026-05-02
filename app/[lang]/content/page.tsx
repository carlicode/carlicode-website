import { MinimalNav } from "@/components/minimal/MinimalNav";
import { MinimalCommunity } from "@/components/minimal/MinimalCommunity";
import { MinimalFooter } from "@/components/minimal/MinimalFooter";
import { getDictionary, tiktoks } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/components/minimal/minimal.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);
  
  return {
    title: `Content - ${dict.metaTitle}`,
    description: "Contenido educativo sobre IA, programación y tech",
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = raw;
  const dict = getDictionary(lang);

  return (
    <div className="minimal-root">
      <MinimalNav dict={dict} />
      <div style={{ paddingTop: "80px" }}>
        <section className="min-content-hero">
          <div className="min-container">
            <h1 className="min-page-title">
              {lang === "es" ? "Contenido & Comunidad" : "Content & Community"}
            </h1>
            <p className="min-page-subtitle">
              {lang === "es" 
                ? "Comparto lo que aprendo sobre IA, código y tech con millones de personas en TikTok, YouTube y más."
                : "I share what I learn about AI, code and tech with millions on TikTok, YouTube and more."}
            </p>
          </div>
        </section>
        <MinimalCommunity lang={lang} dict={dict} videos={tiktoks} />
        
        {/* Sección adicional de plataformas */}
        <section className="min-platforms">
          <div className="min-container">
            <h2 className="min-section-title">
              {lang === "es" ? "Dónde me encuentras" : "Where to find me"}
            </h2>
            <div className="min-platforms-grid">
              <a href="https://www.tiktok.com/@carli.code" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <h3>TikTok</h3>
                <p>@carli.code</p>
                <span className="min-platform-stat">162K followers · 2.1M likes</span>
              </a>
              
              <a href="https://www.youtube.com/@carli_code" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3>YouTube</h3>
                <p>@carli_code</p>
                <span className="min-platform-stat">44K subscribers</span>
              </a>
              
              <a href="https://www.instagram.com/carli.code/" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3>Instagram</h3>
                <p>@carli.code</p>
                <span className="min-platform-stat">25.1K followers</span>
              </a>
              
              <a href="https://www.twitch.tv/carli_code" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </div>
                <h3>Twitch</h3>
                <p>@carli_code</p>
                <span className="min-platform-stat">3K followers</span>
              </a>
              
              <a href="https://www.linkedin.com/in/carlicode/" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3>LinkedIn</h3>
                <p>Carli Code</p>
                <span className="min-platform-stat">Professional network</span>
              </a>
              
              <a href="https://github.com/carlicode" target="_blank" rel="noopener noreferrer" className="min-platform-card">
                <div className="min-platform-logo">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <h3>GitHub</h3>
                <p>@carlicode</p>
                <span className="min-platform-stat">Open source projects</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <MinimalFooter dict={dict} />
    </div>
  );
}
