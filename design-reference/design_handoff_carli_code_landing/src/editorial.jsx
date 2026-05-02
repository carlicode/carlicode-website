// EDITORIAL BOLD — magazine, asymmetric, dramatic typography
const editorialStyles = `
.ed-root {
  --ink: #fff;
  --paper: #0a0a0a;
  --paper-2: #141414;
  --pink: #ff2d92;
  --pink-soft: #ff79c6;
  --muted: rgba(255,255,255,0.55);
  --line: rgba(255,255,255,0.12);
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter Tight', system-ui, sans-serif;
  width: 1440px;
  min-height: 3400px;
  position: relative;
  overflow: hidden;
}
.ed-root::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(ellipse 80% 50% at 80% 0%, rgba(255, 45, 146, 0.18), transparent 60%),
    radial-gradient(ellipse 60% 40% at 0% 30%, rgba(192, 38, 211, 0.12), transparent 60%);
  pointer-events: none;
  z-index: 0;
}
.ed-noise {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
}
.ed-content { position: relative; z-index: 2; }

/* NAV */
.ed-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 32px 64px;
  border-bottom: 1px solid var(--line);
}
.ed-logo { font-family: 'Fraunces', serif; font-weight: 600; font-size: 22px; letter-spacing: -0.02em; }
.ed-logo b { color: var(--pink); font-style: italic; }
.ed-nav-links { display: flex; gap: 36px; }
.ed-nav-links a {
  color: var(--ink); text-decoration: none; font-size: 13px; letter-spacing: 0.04em;
  text-transform: uppercase; opacity: 0.7; transition: opacity .2s, color .2s;
}
.ed-nav-links a:hover { opacity: 1; color: var(--pink); }
.ed-lang {
  display: flex; gap: 0; border: 1px solid var(--line); border-radius: 999px; overflow: hidden;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
}
.ed-lang button { background: transparent; color: var(--muted); border: 0; padding: 8px 14px; cursor: pointer; font-family: inherit; font-size: inherit; }
.ed-lang button.active { background: var(--pink); color: #000; font-weight: 600; }

/* HERO */
.ed-hero { padding: 80px 64px 120px; position: relative; }
.ed-hero-kicker {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--pink); margin-bottom: 40px;
}
.ed-hero-kicker::before {
  content: ''; width: 32px; height: 1px; background: var(--pink);
}
.ed-hero-title {
  font-family: 'Fraunces', serif;
  font-weight: 300;
  font-size: 156px;
  line-height: 0.92;
  letter-spacing: -0.04em;
  margin: 0;
  white-space: pre-line;
  font-variation-settings: 'opsz' 144, 'SOFT' 50;
}
.ed-hero-title em {
  font-style: italic;
  font-weight: 400;
  color: var(--pink);
}
.ed-hero-row {
  display: grid; grid-template-columns: 1fr 480px;
  gap: 80px; margin-top: 60px; align-items: end;
}
.ed-hero-sub {
  font-size: 20px; line-height: 1.45; color: rgba(255,255,255,0.75);
  max-width: 560px; margin: 0;
}
.ed-hero-meta {
  display: flex; flex-direction: column; gap: 24px;
}
.ed-hero-ctas { display: flex; gap: 12px; }
.ed-btn {
  padding: 18px 28px; border-radius: 999px; font-size: 14px; font-weight: 500;
  letter-spacing: 0.02em; cursor: pointer; border: 0; transition: transform .2s, background .2s;
  font-family: inherit;
  display: inline-flex; align-items: center; gap: 10px;
}
.ed-btn:hover { transform: translateY(-2px); }
.ed-btn-pink { background: var(--pink); color: #000; }
.ed-btn-pink:hover { background: var(--pink-soft); }
.ed-btn-ghost { background: transparent; color: var(--ink); border: 1px solid var(--line); }
.ed-btn-ghost:hover { border-color: var(--pink); color: var(--pink); }
.ed-available {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted);
}
.ed-pulse {
  width: 8px; height: 8px; border-radius: 50%; background: var(--pink);
  box-shadow: 0 0 0 0 var(--pink);
  animation: ed-pulse 2s infinite;
}
@keyframes ed-pulse {
  0% { box-shadow: 0 0 0 0 rgba(255,45,146,0.7); }
  70% { box-shadow: 0 0 0 12px rgba(255,45,146,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,45,146,0); }
}

/* HERO PORTRAIT — placeholder card */
.ed-portrait {
  position: absolute; top: 80px; right: 64px;
  width: 280px; height: 360px;
  border: 1px solid var(--line);
  background:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 12px, transparent 12px 24px),
    linear-gradient(180deg, rgba(255,45,146,0.15), rgba(192,38,211,0.05));
  display: flex; align-items: flex-end; padding: 20px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted);
  text-transform: uppercase; letter-spacing: 0.1em;
  transform: rotate(2deg);
}
.ed-portrait::before {
  content: 'PORTRAIT'; position: absolute; top: 20px; left: 20px; color: var(--pink);
}

/* Marquee */
.ed-marquee {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 40px;
}
.ed-marquee-track {
  display: inline-flex; gap: 60px; align-items: center;
  animation: ed-scroll 30s linear infinite;
  font-family: 'Fraunces', serif; font-size: 32px; font-style: italic; font-weight: 300;
}
.ed-marquee-track span { color: var(--pink); }
@keyframes ed-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* SECTION */
.ed-section { padding: 120px 64px; position: relative; border-top: 1px solid var(--line); }
.ed-section-head {
  display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 60px;
}
.ed-kicker {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--pink);
}
.ed-section-title {
  font-family: 'Fraunces', serif; font-weight: 300;
  font-size: 72px; line-height: 1; letter-spacing: -0.02em;
  margin: 16px 0 0; max-width: 900px;
}
.ed-section-title em { font-style: italic; color: var(--pink); }

/* ABOUT */
.ed-about-grid {
  display: grid; grid-template-columns: 5fr 4fr; gap: 80px; align-items: start;
}
.ed-about-body {
  font-family: 'Fraunces', serif; font-weight: 300;
  font-size: 28px; line-height: 1.4; color: rgba(255,255,255,0.85);
}
.ed-about-body em { font-style: italic; color: var(--pink); }
.ed-stats {
  display: flex; flex-direction: column; gap: 0;
  border-top: 1px solid var(--line);
}
.ed-stat {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: 24px 0; border-bottom: 1px solid var(--line);
}
.ed-stat-num { font-family: 'Fraunces', serif; font-style: italic; font-size: 40px; color: var(--pink); }
.ed-stat-label { font-size: 14px; color: var(--muted); font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.08em; }

/* WORK */
.ed-work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); }
.ed-work-card {
  background: var(--paper);
  padding: 40px; min-height: 320px;
  display: flex; flex-direction: column; justify-content: space-between;
  position: relative; transition: background .3s;
  cursor: pointer;
}
.ed-work-card:hover { background: rgba(255,45,146,0.06); }
.ed-work-card:hover .ed-work-arrow { transform: translate(8px, -8px); color: var(--pink); }
.ed-work-num { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--pink); letter-spacing: 0.1em; }
.ed-work-title {
  font-family: 'Fraunces', serif; font-weight: 400; font-size: 36px; line-height: 1.1;
  letter-spacing: -0.01em; margin: 24px 0 16px;
}
.ed-work-desc { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.5; max-width: 460px; }
.ed-work-foot {
  display: flex; justify-content: space-between; align-items: end; margin-top: 32px;
}
.ed-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.ed-tag {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  border: 1px solid var(--line); padding: 6px 10px; border-radius: 999px;
  color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em;
}
.ed-work-arrow {
  font-family: 'Fraunces', serif; font-size: 28px; transition: transform .3s, color .3s;
  color: var(--muted);
}

/* TIKTOK CAROUSEL */
.ed-tiktok-carousel {
  display: flex; gap: 24px; padding: 0 64px;
  overflow-x: auto;
  scrollbar-width: none;
  margin: 0 -64px;
  padding-bottom: 12px;
}
.ed-tiktok-carousel::-webkit-scrollbar { display: none; }
.ed-tiktok-card {
  flex-shrink: 0;
  width: 240px; height: 426px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform .3s;
  background: var(--paper-2);
}
.ed-tiktok-card:hover { transform: translateY(-8px) scale(1.02); }
.ed-tiktok-card::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%);
  z-index: 2;
}
.ed-tiktok-bg {
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 14px);
}
.ed-tiktok-play {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 56px; height: 56px; border-radius: 50%;
  background: rgba(255,255,255,0.15); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.3);
  display: flex; align-items: center; justify-content: center;
  z-index: 3;
}
.ed-tiktok-meta {
  position: absolute; bottom: 16px; left: 16px; right: 16px;
  z-index: 3;
}
.ed-tiktok-stats {
  display: flex; gap: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--ink); margin-bottom: 8px;
}
.ed-tiktok-title {
  font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.2; font-weight: 400;
}
.ed-tiktok-views {
  position: absolute; top: 16px; left: 16px; z-index: 3;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);
  padding: 6px 10px; border-radius: 999px;
  color: var(--pink);
}

/* TALKS */
.ed-talks-list { border-top: 1px solid var(--line); }
.ed-talk-row {
  display: grid; grid-template-columns: 1fr 2fr 1fr 1fr 60px;
  gap: 32px; padding: 32px 0; border-bottom: 1px solid var(--line);
  align-items: baseline; transition: padding-left .3s;
  cursor: pointer;
}
.ed-talk-row:hover { padding-left: 16px; }
.ed-talk-row:hover .ed-talk-event { color: var(--pink); }
.ed-talk-event {
  font-family: 'Fraunces', serif; font-size: 28px; font-weight: 400;
  transition: color .2s;
}
.ed-talk-topic {
  font-style: italic; font-family: 'Fraunces', serif; font-size: 20px;
  font-weight: 300; color: rgba(255,255,255,0.75);
}
.ed-talk-meta {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em;
}
.ed-talk-arrow {
  text-align: right; font-family: 'Fraunces', serif; font-size: 24px;
  color: var(--muted);
}

/* BRANDS */
.ed-brands {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
  background: var(--line); border: 1px solid var(--line);
}
.ed-brand {
  background: var(--paper); padding: 48px;
  min-height: 220px;
  display: flex; flex-direction: column; justify-content: space-between;
  transition: background .3s;
}
.ed-brand:hover { background: rgba(255,45,146,0.04); }
.ed-brand-name {
  font-family: 'Fraunces', serif; font-size: 56px; font-weight: 400;
  letter-spacing: -0.02em;
}
.ed-brand-meta {
  display: flex; justify-content: space-between; align-items: end;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em;
}

/* CV */
.ed-cv-list { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--line); }
.ed-cv-item {
  display: grid; grid-template-columns: 200px 1fr 1fr;
  gap: 40px; padding: 40px 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}
.ed-cv-period { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--pink); letter-spacing: 0.06em; }
.ed-cv-role { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 400; line-height: 1.2; }
.ed-cv-company { font-style: italic; color: rgba(255,255,255,0.7); margin-top: 4px; font-size: 16px; }
.ed-cv-bullets { list-style: none; padding: 0; margin: 0; }
.ed-cv-bullets li {
  font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5;
  padding-left: 20px; position: relative; margin-bottom: 8px;
}
.ed-cv-bullets li::before {
  content: '—'; position: absolute; left: 0; color: var(--pink);
}

/* NEWSLETTER */
.ed-news {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: center;
  background: var(--pink); color: #000;
  padding: 100px 64px;
  margin: 0 -64px;
  border-radius: 0;
}
.ed-news-title { font-family: 'Fraunces', serif; font-weight: 400; font-size: 64px; line-height: 1; letter-spacing: -0.02em; }
.ed-news-title em { font-style: italic; }
.ed-news-form { display: flex; flex-direction: column; gap: 20px; }
.ed-news-sub { font-size: 17px; line-height: 1.5; color: rgba(0,0,0,0.7); }
.ed-news-row { display: flex; gap: 0; border: 1px solid #000; border-radius: 999px; overflow: hidden; }
.ed-news-input {
  flex: 1; background: transparent; border: 0; padding: 18px 24px;
  font-family: inherit; font-size: 15px; color: #000; outline: none;
}
.ed-news-input::placeholder { color: rgba(0,0,0,0.5); }
.ed-news-btn {
  background: #000; color: #fff; border: 0; padding: 0 32px;
  font-family: inherit; font-weight: 500; font-size: 14px; cursor: pointer;
  letter-spacing: 0.02em;
}

/* CONTACT */
.ed-contact-grid {
  display: grid; grid-template-columns: 5fr 6fr; gap: 80px;
}
.ed-contact-form { display: grid; gap: 16px; }
.ed-input-group { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.ed-input, .ed-textarea, .ed-select {
  background: transparent; border: 0;
  border-bottom: 1px solid var(--line);
  padding: 18px 0; color: var(--ink);
  font-family: inherit; font-size: 16px; outline: none;
  transition: border-color .2s;
  width: 100%;
}
.ed-input:focus, .ed-textarea:focus, .ed-select:focus { border-color: var(--pink); }
.ed-input::placeholder, .ed-textarea::placeholder { color: var(--muted); }
.ed-textarea { resize: vertical; min-height: 120px; font-family: inherit; }
.ed-select { color: var(--muted); appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23ff2d92' d='M6 8L0 0h12z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; }

/* FOOTER */
.ed-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding: 40px 64px; border-top: 1px solid var(--line);
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em;
}
.ed-footer-socials { display: flex; gap: 20px; }
.ed-footer-socials a { color: var(--muted); text-decoration: none; transition: color .2s; }
.ed-footer-socials a:hover { color: var(--pink); }

/* Big serif moments */
.ed-quote {
  padding: 80px 64px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-align: center;
}
.ed-quote-text {
  font-family: 'Fraunces', serif; font-weight: 300; font-style: italic;
  font-size: 56px; line-height: 1.15; letter-spacing: -0.02em;
  max-width: 1100px; margin: 0 auto;
}
.ed-quote-text b { font-style: normal; color: var(--pink); font-weight: 400; }
`;

function EditorialBold({ lang, setLang, theme }) {
  const t = window.COPY[lang];
  const accent = theme.accent;

  // Apply theme via inline style override
  const themeStyle = {
    '--pink': accent,
    '--paper': theme.bg,
    '--paper-2': theme.bg2,
  };

  const heroTitle = t.heroTitle.split('\n').map((line, i) => {
    if (i === 1) return <span key={i}><em>{line}</em>{i < 2 ? '\n' : ''}</span>;
    return <span key={i}>{line}{i < 2 ? '\n' : ''}</span>;
  });

  return (
    <>
      <style>{editorialStyles}</style>
      <div className="ed-root" style={themeStyle}>
        <div className="ed-noise"></div>
        <div className="ed-content">
          {/* NAV */}
          <nav className="ed-nav">
            <div className="ed-logo">carli<b>·</b>code</div>
            <div className="ed-nav-links">
              <a href="#about">{t.nav.about}</a>
              <a href="#work">{t.nav.work}</a>
              <a href="#tiktok">{t.nav.tiktok}</a>
              <a href="#talks">{t.nav.talks}</a>
              <a href="#brands">{t.nav.brands}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
            <div className="ed-lang">
              <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
          </nav>

          {/* HERO */}
          <section className="ed-hero">
            <div className="ed-hero-kicker">{t.heroKicker}</div>
            <h1 className="ed-hero-title">
              {t.heroTitle.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <em>{line}</em> : line}
                  {i < t.heroTitle.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <div className="ed-hero-row">
              <p className="ed-hero-sub">{t.heroSub}</p>
              <div className="ed-hero-meta">
                <div className="ed-available">
                  <span className="ed-pulse"></span>
                  {t.available}
                </div>
                <div className="ed-hero-ctas">
                  <button className="ed-btn ed-btn-pink">{t.heroCta1} →</button>
                  <button className="ed-btn ed-btn-ghost">↓ {t.heroCta2}</button>
                </div>
              </div>
            </div>
            <div className="ed-portrait">— Carli, on stage</div>
          </section>

          {/* MARQUEE */}
          <div className="ed-marquee">
            <div className="ed-marquee-track">
              <span>★</span> AI Engineer <span>★</span> Content Creator <span>★</span> AWS Ambassador <span>★</span> n8n Ambassador <span>★</span> Speaker <span>★</span>
              <span>★</span> AI Engineer <span>★</span> Content Creator <span>★</span> AWS Ambassador <span>★</span> n8n Ambassador <span>★</span> Speaker <span>★</span>
            </div>
          </div>

          {/* ABOUT */}
          <section className="ed-section" id="about">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.aboutKicker}</div>
                <h2 className="ed-section-title">{t.aboutTitle.split(',').map((part, i) => i === 0 ? <span key={i}>{part},</span> : <em key={i}>{part}</em>)}</h2>
              </div>
            </div>
            <div className="ed-about-grid">
              <p className="ed-about-body">{t.aboutBody}</p>
              <div className="ed-stats">
                <div className="ed-stat"><span className="ed-stat-label">★</span><span className="ed-stat-num">AWS</span></div>
                <div className="ed-stat"><span className="ed-stat-label">{t.aboutStat1}</span></div>
                <div className="ed-stat"><span className="ed-stat-label">★</span><span className="ed-stat-num">n8n</span></div>
                <div className="ed-stat"><span className="ed-stat-label">{t.aboutStat2}</span></div>
                <div className="ed-stat"><span className="ed-stat-label">★</span><span className="ed-stat-num">Wallbit</span></div>
                <div className="ed-stat"><span className="ed-stat-label">{t.aboutStat3}</span></div>
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <div className="ed-quote">
            <p className="ed-quote-text">
              {lang === 'es'
                ? <>"Programar es solo el principio. Lo difícil — y lo divertido — es <b>traducirlo para que llegue a alguien</b>."</>
                : <>"Coding is just the start. The hard part — and the fun part — is <b>translating it so it lands</b>."</>
              }
            </p>
          </div>

          {/* WORK */}
          <section className="ed-section" id="work">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.workKicker}</div>
                <h2 className="ed-section-title">{lang === 'es' ? <>Proyectos de <em>IA</em> en producción.</> : <>AI projects, <em>shipped</em>.</>}</h2>
              </div>
            </div>
            <div className="ed-work-grid">
              {window.PROJECTS.map(p => (
                <div className="ed-work-card" key={p.code}>
                  <div className="ed-work-num">/ {p.code}</div>
                  <div>
                    <h3 className="ed-work-title">{lang === 'es' ? p.titleEs : p.titleEn}</h3>
                    <p className="ed-work-desc">{lang === 'es' ? p.descEs : p.descEn}</p>
                  </div>
                  <div className="ed-work-foot">
                    <div className="ed-tags">
                      {p.tags.map(tag => <span className="ed-tag" key={tag}>{tag}</span>)}
                    </div>
                    <div className="ed-work-arrow">↗</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TIKTOK */}
          <section className="ed-section" id="tiktok">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.tiktokKicker}</div>
                <h2 className="ed-section-title">{t.tiktokTitle.replace(/\.$/, '')} <em>{lang === 'es' ? 'vive' : 'lives'}.</em></h2>
                <p style={{fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, marginTop: 16}}>{t.tiktokSub}</p>
              </div>
            </div>
            <div className="ed-tiktok-carousel">
              {window.TIKTOKS.map(v => (
                <div className="ed-tiktok-card" key={v.id} style={{background: `linear-gradient(135deg, ${v.color}33, #1a0a1a)`}}>
                  <div className="ed-tiktok-bg" style={{background: `linear-gradient(135deg, ${v.color}40, transparent)`}}></div>
                  <div className="ed-tiktok-views">{v.views} views</div>
                  <div className="ed-tiktok-play">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="white"><path d="M4 2l12 7-12 7z"/></svg>
                  </div>
                  <div className="ed-tiktok-meta">
                    <div className="ed-tiktok-stats">
                      <span>♥ {v.likes}</span>
                    </div>
                    <div className="ed-tiktok-title">{lang === 'es' ? v.titleEs : v.titleEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TALKS */}
          <section className="ed-section" id="talks">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.talksKicker}</div>
                <h2 className="ed-section-title">{lang === 'es' ? <>En el <em>escenario</em>, no solo en el feed.</> : <>On <em>stage</em>, not just on feed.</>}</h2>
              </div>
            </div>
            <div className="ed-talks-list">
              {window.TALKS.map((talk, i) => (
                <div className="ed-talk-row" key={i}>
                  <div className="ed-talk-event">{lang === 'es' ? talk.eventEs : talk.eventEn}</div>
                  <div className="ed-talk-topic">"{lang === 'es' ? talk.topicEs : talk.topicEn}"</div>
                  <div className="ed-talk-meta">{talk.city}</div>
                  <div className="ed-talk-meta">{talk.year}</div>
                  <div className="ed-talk-arrow">↗</div>
                </div>
              ))}
            </div>
          </section>

          {/* BRANDS */}
          <section className="ed-section" id="brands">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.brandsKicker}</div>
                <h2 className="ed-section-title">{lang === 'es' ? <>Confían en mí.</> : <>They <em>trust</em> me.</>}</h2>
              </div>
            </div>
            <div className="ed-brands">
              {window.BRANDS.map(b => (
                <div className="ed-brand" key={b.name}>
                  <div className="ed-brand-name">{b.name}</div>
                  <div className="ed-brand-meta">
                    <span>{b.role}</span>
                    <span>{b.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CV */}
          <section className="ed-section">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.cvKicker}</div>
                <h2 className="ed-section-title">{lang === 'es' ? <>El <em>resumé</em>.</> : <>The <em>résumé</em>.</>}</h2>
              </div>
              <button className="ed-btn ed-btn-pink">↓ {t.cvDownload}</button>
            </div>
            <div className="ed-cv-list">
              {window.CV.map((job, i) => (
                <div className="ed-cv-item" key={i}>
                  <div className="ed-cv-period">{job.period}<br/><span style={{color:'var(--muted)'}}>{lang==='es'?job.locEs:job.locEn}</span></div>
                  <div>
                    <div className="ed-cv-role">{job.role}</div>
                    <div className="ed-cv-company">{job.company}</div>
                  </div>
                  <ul className="ed-cv-bullets">
                    {(lang==='es'?job.bulletsEs:job.bulletsEn).map((b,j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* NEWSLETTER */}
          <section className="ed-section" style={{padding: 0, borderTop: 0}}>
            <div className="ed-news">
              <div>
                <div className="ed-kicker" style={{color: '#000'}}>— {t.newsletterKicker}</div>
                <h2 className="ed-news-title" style={{marginTop: 16}}>
                  {lang === 'es' ? <>Recibe lo que estoy <em>construyendo</em>.</> : <>Get what I'm <em>building</em>.</>}
                </h2>
              </div>
              <div className="ed-news-form">
                <p className="ed-news-sub">{t.newsletterSub}</p>
                <div className="ed-news-row">
                  <input className="ed-news-input" type="email" placeholder={t.newsletterPh} />
                  <button className="ed-news-btn">{t.newsletterCta} →</button>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="ed-section" id="contact">
            <div className="ed-section-head">
              <div>
                <div className="ed-kicker">— {t.contactKicker}</div>
                <h2 className="ed-section-title">{lang === 'es' ? <>¿<em>Trabajamos</em> juntas?</> : <>Let's <em>work</em> together?</>}</h2>
              </div>
            </div>
            <div className="ed-contact-grid">
              <div>
                <p style={{fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)', fontFamily: "'Fraunces', serif", fontWeight: 300}}>{t.contactSub}</p>
                <div style={{marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12}}>
                  <a style={{color: 'var(--pink)', textDecoration: 'none', fontSize: 20, fontFamily: "'Fraunces', serif"}}>hola@carlicode.com →</a>
                  <a style={{color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, fontFamily: "'JetBrains Mono', monospace"}}>@carlicode on TikTok</a>
                </div>
              </div>
              <form className="ed-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="ed-input-group">
                  <input className="ed-input" placeholder={t.contactName} />
                  <input className="ed-input" placeholder={t.contactEmail} />
                </div>
                <input className="ed-input" placeholder={t.contactCompany} />
                <select className="ed-select">
                  <option>{t.contactType}</option>
                  {t.contactTypes.map(o => <option key={o}>{o}</option>)}
                </select>
                <textarea className="ed-textarea" placeholder={t.contactMsg}></textarea>
                <button className="ed-btn ed-btn-pink" style={{marginTop: 12, justifySelf: 'start'}}>{t.contactSend} →</button>
              </form>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="ed-footer">
            <div>{t.footerNote}</div>
            <div className="ed-footer-socials">
              <a>TikTok ↗</a>
              <a>LinkedIn ↗</a>
              <a>GitHub ↗</a>
              <a>YouTube ↗</a>
            </div>
            <div>© 2026 Carli Code</div>
          </footer>
        </div>
      </div>
    </>
  );
}

window.EditorialBold = EditorialBold;
