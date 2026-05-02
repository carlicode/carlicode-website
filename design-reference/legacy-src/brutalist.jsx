// BRUTALIST TECH — mono-everything, exposed grid, terminal, all pink+white+black
const brutalistStyles = `
.br-root {
  --ink: #ffffff;
  --paper: #0a0a0a;
  --paper-2: #0f0f0f;
  --pink: #ff2d92;
  --pink-2: #ff79c6;
  --muted: rgba(255,255,255,0.5);
  --line: rgba(255,255,255,0.18);
  background: var(--paper);
  color: var(--ink);
  font-family: 'JetBrains Mono', monospace;
  width: 1440px;
  min-height: 3400px;
  position: relative;
  overflow: hidden;
}
.br-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  z-index: 0;
}
.br-content { position: relative; z-index: 1; }

/* TOP BAR */
.br-topbar {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--line);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.br-topbar > * { padding: 14px 24px; }
.br-topbar > *:not(:last-child) { border-right: 1px solid var(--line); }
.br-status {
  display: flex; align-items: center; gap: 8px;
  color: var(--pink);
}
.br-status::before {
  content: ''; width: 8px; height: 8px; background: var(--pink);
  border-radius: 50%; animation: br-blink 1.4s infinite;
}
@keyframes br-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.3; }
}
.br-stamp {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  color: var(--muted);
}
.br-stamp span { color: var(--ink); }
.br-lang {
  display: flex; gap: 8px; justify-content: flex-end;
}
.br-lang button {
  background: transparent; color: var(--muted); border: 1px solid var(--line);
  padding: 4px 10px; font-family: inherit; font-size: 10px; cursor: pointer;
  text-transform: uppercase; letter-spacing: 0.1em;
}
.br-lang button.active { background: var(--pink); color: #000; border-color: var(--pink); }

/* NAV */
.br-nav {
  display: flex; align-items: stretch;
  border-bottom: 1px solid var(--line);
}
.br-nav > div { padding: 20px 32px; border-right: 1px solid var(--line); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; cursor: pointer; transition: background .2s; }
.br-nav > div:hover { background: var(--pink); color: #000; }
.br-nav > div.br-logo { font-weight: 700; font-size: 14px; }
.br-nav > div.br-logo span { color: var(--pink); }
.br-nav-spacer { flex: 1; border-right: 1px solid var(--line); }

/* HERO */
.br-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--line);
  position: relative;
}
.br-hero-left {
  padding: 80px 64px;
  border-right: 1px solid var(--line);
  position: relative;
  min-height: 720px;
}
.br-hero-tag {
  display: inline-block;
  border: 1px solid var(--pink);
  color: var(--pink);
  padding: 6px 12px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 48px;
}
.br-hero-title {
  font-size: 96px;
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
}
.br-hero-title .accent { color: var(--pink); }
.br-hero-title .strike { text-decoration: line-through; text-decoration-thickness: 6px; text-decoration-color: var(--pink); }
.br-hero-meta {
  position: absolute; bottom: 64px; left: 64px; right: 64px;
  display: flex; justify-content: space-between; align-items: end;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);
}
.br-hero-right {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.br-terminal {
  background: var(--paper-2);
  border-bottom: 1px solid var(--line);
  padding: 24px 32px;
  flex: 1;
  font-size: 14px;
  line-height: 1.7;
}
.br-terminal-head {
  display: flex; gap: 8px; padding-bottom: 16px;
  border-bottom: 1px solid var(--line); margin-bottom: 20px;
  align-items: center;
}
.br-dot { width: 12px; height: 12px; border: 1px solid var(--line); }
.br-terminal-name { margin-left: auto; color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; }
.br-line { display: block; margin-bottom: 4px; }
.br-prompt { color: var(--pink); }
.br-comment { color: var(--muted); }
.br-key { color: var(--pink); }
.br-str { color: var(--ink); }
.br-cursor { display: inline-block; background: var(--pink); width: 8px; height: 16px; vertical-align: middle; margin-left: 4px; animation: br-blink 1s infinite; }

.br-hero-ctas {
  display: grid; grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--line);
}
.br-cta {
  padding: 32px 28px; font-size: 12px;
  text-transform: uppercase; letter-spacing: 0.12em; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center;
  font-family: inherit; border: 0;
  transition: background .2s;
}
.br-cta-pink { background: var(--pink); color: #000; font-weight: 700; }
.br-cta-pink:hover { background: var(--ink); color: var(--pink); }
.br-cta-ghost { background: transparent; color: var(--ink); border-left: 1px solid var(--line); }
.br-cta-ghost:hover { background: var(--ink); color: #000; }
.br-cta-arrow { font-size: 20px; }

/* TICKER */
.br-ticker {
  border-bottom: 1px solid var(--line);
  background: var(--pink); color: #000;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
.br-ticker-track {
  display: inline-flex; gap: 48px; align-items: center;
  animation: br-marquee 25s linear infinite;
}
@keyframes br-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* SECTION HEADER */
.br-section {
  border-bottom: 1px solid var(--line);
  position: relative;
}
.br-section-head {
  display: grid;
  grid-template-columns: 120px 1fr 200px;
  border-bottom: 1px solid var(--line);
  align-items: stretch;
}
.br-sec-num {
  padding: 24px;
  border-right: 1px solid var(--line);
  font-size: 14px;
  font-weight: 700;
  color: var(--pink);
  display: flex; align-items: center;
}
.br-sec-title {
  padding: 24px 32px;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  font-family: 'Space Grotesk', sans-serif;
  display: flex; align-items: center;
}
.br-sec-meta {
  padding: 24px;
  border-left: 1px solid var(--line);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  display: flex; align-items: center; justify-content: flex-end;
}

/* ABOUT */
.br-about {
  display: grid; grid-template-columns: 2fr 1fr;
}
.br-about-body {
  padding: 64px;
  border-right: 1px solid var(--line);
  font-family: 'Space Grotesk', sans-serif;
}
.br-about-text {
  font-size: 28px;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.85);
  margin: 0;
}
.br-about-text mark { background: var(--pink); color: #000; padding: 0 8px; }
.br-about-stats {
  display: flex;
  flex-direction: column;
}
.br-about-stat {
  padding: 32px;
  border-bottom: 1px solid var(--line);
  flex: 1;
  display: flex; flex-direction: column; justify-content: space-between;
}
.br-about-stat:last-child { border-bottom: 0; }
.br-stat-num {
  font-size: 56px; font-weight: 700; color: var(--pink); line-height: 1;
  font-family: 'Space Grotesk', sans-serif;
}
.br-stat-lab {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--muted); margin-top: 16px;
}

/* WORK */
.br-work {
  display: grid; grid-template-columns: repeat(2, 1fr);
}
.br-work-item {
  padding: 48px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  position: relative;
  cursor: pointer;
  transition: background .2s;
  min-height: 280px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.br-work-item:nth-child(2n) { border-right: 0; }
.br-work-item:nth-last-child(-n+2) { border-bottom: 0; }
.br-work-item:hover { background: var(--pink); color: #000; }
.br-work-item:hover .br-work-meta { color: rgba(0,0,0,0.7); }
.br-work-item:hover .br-work-tag { border-color: #000; color: #000; }
.br-work-item:hover .br-work-arrow { transform: translate(8px, -8px); }
.br-work-head {
  display: flex; justify-content: space-between; align-items: start;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
}
.br-work-code { font-weight: 700; }
.br-work-meta { color: var(--muted); }
.br-work-name {
  font-size: 32px; font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 32px 0 16px;
  max-width: 480px;
}
.br-work-desc {
  font-size: 14px; line-height: 1.5;
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(255,255,255,0.7);
  max-width: 460px;
}
.br-work-item:hover .br-work-desc { color: rgba(0,0,0,0.85); }
.br-work-foot {
  display: flex; justify-content: space-between; align-items: end;
  margin-top: 32px;
}
.br-work-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.br-work-tag {
  font-size: 10px; padding: 4px 8px; border: 1px solid var(--line);
  text-transform: uppercase; letter-spacing: 0.08em;
}
.br-work-arrow { font-size: 28px; transition: transform .3s; }

/* TIKTOK */
.br-tiktok-wrap {
  padding: 48px 0;
}
.br-tiktok-info {
  padding: 0 64px 32px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
}
.br-tiktok-statgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--line); }
.br-tiktok-statgrid > div { padding: 16px 20px; border-right: 1px solid var(--line); }
.br-tiktok-statgrid > div:last-child { border-right: 0; }
.br-tiktok-statgrid .num { font-size: 28px; font-weight: 700; color: var(--pink); font-family: 'Space Grotesk', sans-serif; }
.br-tiktok-statgrid .lab { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

.br-tt-carousel {
  display: flex; gap: 0; padding: 0 64px;
  overflow-x: auto;
  scrollbar-width: none;
  margin: 24px -64px 0;
}
.br-tt-carousel::-webkit-scrollbar { display: none; }
.br-tt-card {
  flex-shrink: 0;
  width: 220px; height: 391px;
  border: 1px solid var(--line);
  margin-right: -1px;
  position: relative;
  cursor: pointer;
  background: var(--paper-2);
  overflow: hidden;
  transition: transform .2s;
}
.br-tt-card:hover { transform: translateY(-4px); border-color: var(--pink); z-index: 2; }
.br-tt-card-bg {
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px);
}
.br-tt-num {
  position: absolute; top: 12px; left: 12px;
  font-size: 11px; color: var(--pink); font-weight: 700;
}
.br-tt-views {
  position: absolute; top: 12px; right: 12px;
  font-size: 10px; color: var(--ink);
  background: var(--pink); color: #000; padding: 4px 8px; font-weight: 700;
}
.br-tt-play {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 48px; height: 48px; border: 1px solid var(--ink);
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,0.6);
}
.br-tt-meta {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 16px;
  background: rgba(0,0,0,0.85);
  border-top: 1px solid var(--line);
}
.br-tt-title {
  font-size: 12px; line-height: 1.3; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.02em;
  font-family: 'Space Grotesk', sans-serif;
}
.br-tt-likes {
  font-size: 10px; color: var(--pink); margin-top: 8px;
  text-transform: uppercase; letter-spacing: 0.1em;
}

/* TALKS */
.br-talks { padding: 0; }
.br-talks-row {
  display: grid;
  grid-template-columns: 80px 1fr 1.5fr 120px 100px 80px;
  align-items: center;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
  transition: background .2s;
  cursor: pointer;
}
.br-talks-row:last-child { border-bottom: 0; }
.br-talks-row:hover { background: var(--pink); color: #000; }
.br-talks-row > div { padding: 24px 16px; border-right: 1px solid var(--line); }
.br-talks-row > div:last-child { border-right: 0; }
.br-talks-num { color: var(--pink); font-weight: 700; }
.br-talks-row:hover .br-talks-num { color: #000; }
.br-talks-event { font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; font-family: 'Space Grotesk', sans-serif; font-size: 16px; }
.br-talks-topic { color: rgba(255,255,255,0.7); font-style: italic; font-family: 'Space Grotesk', sans-serif; font-size: 14px; }
.br-talks-row:hover .br-talks-topic { color: rgba(0,0,0,0.8); }
.br-talks-meta { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
.br-talks-row:hover .br-talks-meta { color: rgba(0,0,0,0.7); }

/* BRANDS */
.br-brands {
  display: grid; grid-template-columns: repeat(3, 1fr);
}
.br-brand-cell {
  padding: 64px 48px;
  border-right: 1px solid var(--line);
  min-height: 280px;
  display: flex; flex-direction: column; justify-content: space-between;
  position: relative;
  transition: background .2s;
}
.br-brand-cell:last-child { border-right: 0; }
.br-brand-cell:hover { background: var(--paper-2); }
.br-brand-mark {
  font-size: 14px; color: var(--pink); font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
}
.br-brand-bigname {
  font-size: 80px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-transform: uppercase;
}
.br-brand-foot {
  display: flex; justify-content: space-between;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);
}

/* CV */
.br-cv-table { font-size: 13px; }
.br-cv-thead {
  display: grid; grid-template-columns: 200px 2fr 1fr 1.5fr;
  border-bottom: 1px solid var(--line);
  background: var(--paper-2);
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted);
}
.br-cv-thead > div { padding: 12px 24px; border-right: 1px solid var(--line); }
.br-cv-thead > div:last-child { border-right: 0; }
.br-cv-row {
  display: grid; grid-template-columns: 200px 2fr 1fr 1.5fr;
  border-bottom: 1px solid var(--line);
}
.br-cv-row:last-child { border-bottom: 0; }
.br-cv-row > div { padding: 28px 24px; border-right: 1px solid var(--line); }
.br-cv-row > div:last-child { border-right: 0; }
.br-cv-period { color: var(--pink); font-weight: 700; }
.br-cv-role { font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.01em; font-family: 'Space Grotesk', sans-serif; }
.br-cv-company { color: var(--muted); margin-top: 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
.br-cv-loc { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
.br-cv-bullets { list-style: none; padding: 0; margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 13px; line-height: 1.5; }
.br-cv-bullets li { padding-left: 16px; position: relative; color: rgba(255,255,255,0.75); margin-bottom: 6px; }
.br-cv-bullets li::before { content: '+'; position: absolute; left: 0; color: var(--pink); font-weight: 700; }

.br-cv-foot {
  padding: 32px;
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid var(--line);
}
.br-download {
  background: var(--pink); color: #000; border: 0;
  padding: 18px 32px; font-family: inherit; font-size: 12px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; cursor: pointer;
  display: inline-flex; align-items: center; gap: 12px;
  transition: all .2s;
}
.br-download:hover { background: var(--ink); color: var(--pink); }

/* NEWSLETTER */
.br-news {
  display: grid; grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--line);
}
.br-news-left {
  padding: 80px 64px;
  border-right: 1px solid var(--line);
  background: var(--pink); color: #000;
}
.br-news-tag {
  display: inline-block; border: 1px solid #000; padding: 4px 10px;
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700;
  margin-bottom: 32px;
}
.br-news-headline {
  font-size: 56px; font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.95;
  margin: 0 0 24px;
}
.br-news-text { font-family: 'Space Grotesk', sans-serif; font-size: 16px; line-height: 1.5; max-width: 420px; }
.br-news-right {
  padding: 80px 64px;
  display: flex; flex-direction: column; justify-content: center; gap: 16px;
}
.br-news-input {
  background: transparent; border: 1px solid var(--line); padding: 20px 24px;
  font-family: inherit; font-size: 16px; color: var(--ink); outline: none;
  transition: border-color .2s;
}
.br-news-input:focus { border-color: var(--pink); }
.br-news-input::placeholder { color: var(--muted); }
.br-news-cta {
  background: var(--pink); color: #000; border: 0;
  padding: 22px; font-family: inherit; font-size: 12px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; cursor: pointer;
  transition: all .2s;
}
.br-news-cta:hover { background: var(--ink); }

/* CONTACT */
.br-contact { display: grid; grid-template-columns: 1fr 1fr; }
.br-contact-info {
  padding: 64px;
  border-right: 1px solid var(--line);
  display: flex; flex-direction: column; gap: 32px;
}
.br-contact-headline {
  font-size: 64px; font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0;
}
.br-contact-headline .ac { color: var(--pink); }
.br-contact-direct {
  display: flex; flex-direction: column; gap: 16px;
  border-top: 1px solid var(--line); padding-top: 32px;
}
.br-contact-email {
  font-size: 24px; color: var(--pink);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
}
.br-contact-line { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
.br-contact-line span { color: var(--ink); }

.br-contact-form {
  padding: 64px;
  display: flex; flex-direction: column; gap: 0;
}
.br-form-row {
  display: grid; grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--line);
}
.br-form-row > input { border-right: 1px solid var(--line); }
.br-form-row > input:last-child { border-right: 0; }
.br-form input, .br-form textarea, .br-form select {
  background: transparent; border: 0;
  padding: 22px 16px; color: var(--ink);
  font-family: inherit; font-size: 14px; outline: none;
  width: 100%;
  transition: background .2s;
}
.br-form input:focus, .br-form textarea:focus, .br-form select:focus { background: rgba(255,45,146,0.06); }
.br-form input::placeholder, .br-form textarea::placeholder { color: var(--muted); }
.br-form > input, .br-form > textarea, .br-form > select {
  border-bottom: 1px solid var(--line);
}
.br-form textarea { resize: vertical; min-height: 140px; font-family: inherit; }
.br-form select { appearance: none; cursor: pointer; }
.br-form-send {
  background: var(--pink); color: #000;
  border: 0; padding: 24px; font-family: inherit;
  font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em;
  cursor: pointer; display: flex; justify-content: space-between; align-items: center;
  transition: all .2s;
}
.br-form-send:hover { background: var(--ink); color: var(--pink); }

/* FOOTER */
.br-footer-big {
  padding: 80px 64px 40px;
  font-size: 200px; font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.06em;
  border-bottom: 1px solid var(--line);
}
.br-footer-big .ac { color: var(--pink); font-style: italic; }
.br-footer-bar {
  display: grid; grid-template-columns: 200px 1fr auto 200px;
  align-items: center; font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.1em;
}
.br-footer-bar > * { padding: 20px 24px; }
.br-footer-bar > *:not(:last-child) { border-right: 1px solid var(--line); }
.br-socials a { color: var(--muted); text-decoration: none; margin-right: 16px; transition: color .2s; }
.br-socials a:hover { color: var(--pink); }
`;

function BrutalistTech({ lang, setLang, theme }) {
  const t = window.COPY[lang];
  const themeStyle = {
    '--pink': theme.accent,
    '--paper': theme.bg,
    '--paper-2': theme.bg2,
  };

  const now = new Date().toISOString().slice(0, 10);

  return (
    <>
      <style>{brutalistStyles}</style>
      <div className="br-root" style={themeStyle}>
        <div className="br-grid-bg"></div>
        <div className="br-content">
          {/* TOPBAR */}
          <div className="br-topbar">
            <div className="br-status">SYS · ONLINE</div>
            <div className="br-stamp">
              <span>{lang === 'es' ? 'CARLI CODE / PORTFOLIO V2' : 'CARLI CODE / PORTFOLIO V2'}</span>
              <span>{lang === 'es' ? 'BOGOTÁ → REMOTO' : 'BOGOTÁ → REMOTE'}</span>
              <span>{now}</span>
            </div>
            <div className="br-lang">
              <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>

          {/* NAV */}
          <nav className="br-nav">
            <div className="br-logo">CARLI<span>·</span>CODE</div>
            <div>{t.nav.about}</div>
            <div>{t.nav.work}</div>
            <div>{t.nav.tiktok}</div>
            <div>{t.nav.talks}</div>
            <div>{t.nav.brands}</div>
            <div className="br-nav-spacer"></div>
            <div>{t.nav.contact} ↗</div>
          </nav>

          {/* HERO */}
          <section className="br-hero">
            <div className="br-hero-left">
              <div className="br-hero-tag">{t.heroKicker}</div>
              <h1 className="br-hero-title">
                {lang === 'es' ? <>
                  CONSTRUYO<br/>
                  <span className="accent">IA.</span><br/>
                  ENSEÑO<br/>
                  <span className="accent">CÓDIGO.</span><br/>
                  MUEVO<br/>
                  <span className="accent">AUDIENCIAS.</span>
                </> : <>
                  I BUILD<br/>
                  <span className="accent">AI.</span><br/>
                  I TEACH<br/>
                  <span className="accent">CODE.</span><br/>
                  I MOVE<br/>
                  <span className="accent">AUDIENCES.</span>
                </>}
              </h1>
              <div className="br-hero-meta">
                <span>// {t.available}</span>
                <span>SCROLL ↓</span>
              </div>
            </div>
            <div className="br-hero-right">
              <div className="br-terminal">
                <div className="br-terminal-head">
                  <span className="br-dot"></span>
                  <span className="br-dot"></span>
                  <span className="br-dot"></span>
                  <span className="br-terminal-name">~/carli/about.py</span>
                </div>
                <span className="br-line"><span className="br-comment"># {lang === 'es' ? 'quien soy' : 'who i am'}</span></span>
                <span className="br-line"><span className="br-key">name</span> = <span className="br-str">"Carli Code"</span></span>
                <span className="br-line"><span className="br-key">role</span> = [<span className="br-str">"AI Engineer"</span>, <span className="br-str">"Creator"</span>, <span className="br-str">"Speaker"</span>]</span>
                <span className="br-line"><span className="br-key">stack</span> = [<span className="br-str">"PyTorch"</span>, <span className="br-str">"LLMs"</span>, <span className="br-str">"AWS"</span>, <span className="br-str">"n8n"</span>]</span>
                <span className="br-line"><span className="br-key">audience</span> = <span className="br-str">"millones"</span></span>
                <span className="br-line"><span className="br-key">vibe</span> = <span className="br-str">"rigor + storytelling"</span></span>
                <span className="br-line"><span className="br-comment"># {lang === 'es' ? 'qué hago' : 'what i do'}</span></span>
                <span className="br-line"><span className="br-prompt">&gt;</span> <span className="br-key">def</span> <span className="br-str">collab</span>(brand):</span>
                <span className="br-line">&nbsp;&nbsp;<span className="br-key">return</span> <span className="br-str">build</span>(brand) + <span className="br-str">teach</span>(brand)<span className="br-cursor"></span></span>
              </div>
              <div className="br-hero-ctas">
                <button className="br-cta br-cta-pink">{t.heroCta1} <span className="br-cta-arrow">→</span></button>
                <button className="br-cta br-cta-ghost">{t.heroCta2} <span className="br-cta-arrow">↓</span></button>
              </div>
            </div>
          </section>

          {/* TICKER */}
          <div className="br-ticker">
            <div className="br-ticker-track">
              <span>★ AI ENGINEER ★ AWS AMBASSADOR ★ N8N AMBASSADOR ★ EX-WALLBIT ★ CONTENT CREATOR ★ SPEAKER ★ AI ENGINEER ★ AWS AMBASSADOR ★ N8N AMBASSADOR ★ EX-WALLBIT ★ CONTENT CREATOR ★ SPEAKER ★&nbsp;</span>
              <span>★ AI ENGINEER ★ AWS AMBASSADOR ★ N8N AMBASSADOR ★ EX-WALLBIT ★ CONTENT CREATOR ★ SPEAKER ★ AI ENGINEER ★ AWS AMBASSADOR ★ N8N AMBASSADOR ★ EX-WALLBIT ★ CONTENT CREATOR ★ SPEAKER ★&nbsp;</span>
            </div>
          </div>

          {/* ABOUT */}
          <section className="br-section" id="about">
            <div className="br-section-head">
              <div className="br-sec-num">/01</div>
              <div className="br-sec-title">{t.aboutKicker} — {t.aboutTitle}</div>
              <div className="br-sec-meta">{lang === 'es' ? 'BIO · 2026' : 'BIO · 2026'}</div>
            </div>
            <div className="br-about">
              <div className="br-about-body">
                <p className="br-about-text">
                  {lang === 'es' ? <>
                    De día construyo <mark>sistemas de IA</mark> con visión por computadora, LLMs y grafos de conocimiento. De noche traduzco lo que aprendo a <mark>millones</mark> en TikTok aprendiendo a programar.
                  </> : <>
                    By day I build <mark>AI systems</mark> with computer vision, LLMs and knowledge graphs. By night I translate what I learn to <mark>millions</mark> on TikTok learning to code.
                  </>}
                </p>
              </div>
              <div className="br-about-stats">
                <div className="br-about-stat">
                  <div className="br-stat-num">AWS</div>
                  <div className="br-stat-lab">{t.aboutStat1}</div>
                </div>
                <div className="br-about-stat">
                  <div className="br-stat-num">n8n</div>
                  <div className="br-stat-lab">{t.aboutStat2}</div>
                </div>
                <div className="br-about-stat">
                  <div className="br-stat-num">WB.</div>
                  <div className="br-stat-lab">{t.aboutStat3}</div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK */}
          <section className="br-section" id="work">
            <div className="br-section-head">
              <div className="br-sec-num">/02</div>
              <div className="br-sec-title">{t.workKicker}</div>
              <div className="br-sec-meta">04 {lang === 'es' ? 'PROYECTOS' : 'PROJECTS'}</div>
            </div>
            <div className="br-work">
              {window.PROJECTS.map(p => (
                <div className="br-work-item" key={p.code}>
                  <div className="br-work-head">
                    <span className="br-work-code">PROJECT.{p.code}</span>
                    <span className="br-work-meta">{p.year}</span>
                  </div>
                  <div>
                    <h3 className="br-work-name">{lang === 'es' ? p.titleEs : p.titleEn}</h3>
                    <p className="br-work-desc">{lang === 'es' ? p.descEs : p.descEn}</p>
                  </div>
                  <div className="br-work-foot">
                    <div className="br-work-tags">
                      {p.tags.map(tag => <span className="br-work-tag" key={tag}>{tag}</span>)}
                    </div>
                    <span className="br-work-arrow">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TIKTOK */}
          <section className="br-section" id="tiktok">
            <div className="br-section-head">
              <div className="br-sec-num">/03</div>
              <div className="br-sec-title">{t.tiktokKicker}</div>
              <div className="br-sec-meta">@CARLICODE ↗</div>
            </div>
            <div className="br-tiktok-wrap">
              <div className="br-tiktok-info">
                <p style={{margin: 0, fontSize: 16, lineHeight: 1.5, fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(255,255,255,0.8)'}}>{t.tiktokSub}</p>
                <div className="br-tiktok-statgrid">
                  <div><div className="num">14M+</div><div className="lab">{lang === 'es' ? 'Vistas' : 'Views'}</div></div>
                  <div><div className="num">800K</div><div className="lab">{lang === 'es' ? 'Followers' : 'Followers'}</div></div>
                  <div><div className="num">2.3M</div><div className="lab">{lang === 'es' ? 'Likes' : 'Likes'}</div></div>
                </div>
              </div>
              <div className="br-tt-carousel">
                {window.TIKTOKS.map((v, i) => (
                  <div className="br-tt-card" key={v.id} style={{background: `linear-gradient(135deg, ${v.color}33, #0a0a0a)`}}>
                    <div className="br-tt-card-bg"></div>
                    <div className="br-tt-num">VID.{String(i+1).padStart(2,'0')}</div>
                    <div className="br-tt-views">{v.views}</div>
                    <div className="br-tt-play">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><path d="M3 1l9 6-9 6z"/></svg>
                    </div>
                    <div className="br-tt-meta">
                      <div className="br-tt-title">{lang === 'es' ? v.titleEs : v.titleEn}</div>
                      <div className="br-tt-likes">♥ {v.likes}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TALKS */}
          <section className="br-section" id="talks">
            <div className="br-section-head">
              <div className="br-sec-num">/04</div>
              <div className="br-sec-title">{t.talksKicker}</div>
              <div className="br-sec-meta">{window.TALKS.length} {lang === 'es' ? 'CHARLAS' : 'TALKS'}</div>
            </div>
            <div className="br-talks">
              {window.TALKS.map((talk, i) => (
                <div className="br-talks-row" key={i}>
                  <div className="br-talks-num">/{String(i+1).padStart(2,'0')}</div>
                  <div className="br-talks-event">{lang === 'es' ? talk.eventEs : talk.eventEn}</div>
                  <div className="br-talks-topic">"{lang === 'es' ? talk.topicEs : talk.topicEn}"</div>
                  <div className="br-talks-meta">{talk.city}</div>
                  <div className="br-talks-meta">{talk.year}</div>
                  <div className="br-talks-meta">↗</div>
                </div>
              ))}
            </div>
          </section>

          {/* BRANDS */}
          <section className="br-section" id="brands">
            <div className="br-section-head">
              <div className="br-sec-num">/05</div>
              <div className="br-sec-title">{t.brandsKicker}</div>
              <div className="br-sec-meta">TRUSTED · 2024+</div>
            </div>
            <div className="br-brands">
              {window.BRANDS.map(b => (
                <div className="br-brand-cell" key={b.name}>
                  <div className="br-brand-mark">★ PARTNER</div>
                  <div className="br-brand-bigname">{b.name}</div>
                  <div className="br-brand-foot">
                    <span>{b.role}</span>
                    <span>{b.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CV */}
          <section className="br-section">
            <div className="br-section-head">
              <div className="br-sec-num">/06</div>
              <div className="br-sec-title">{t.cvKicker} — CV.MD</div>
              <div className="br-sec-meta">{lang === 'es' ? 'RESUMÉ' : 'RÉSUMÉ'}</div>
            </div>
            <div className="br-cv-table">
              <div className="br-cv-thead">
                <div>{lang === 'es' ? 'PERIODO / LUGAR' : 'PERIOD / LOCATION'}</div>
                <div>{lang === 'es' ? 'ROL · COMPAÑÍA' : 'ROLE · COMPANY'}</div>
                <div>{lang === 'es' ? 'TIPO' : 'TYPE'}</div>
                <div>{lang === 'es' ? 'IMPACTO' : 'IMPACT'}</div>
              </div>
              {window.CV.map((job, i) => (
                <div className="br-cv-row" key={i}>
                  <div>
                    <div className="br-cv-period">{job.period}</div>
                    <div className="br-cv-loc" style={{marginTop: 6}}>{lang==='es'?job.locEs:job.locEn}</div>
                  </div>
                  <div>
                    <div className="br-cv-role">{job.role}</div>
                    <div className="br-cv-company">{job.company}</div>
                  </div>
                  <div className="br-cv-loc">{job.company === 'Independent' ? 'FREELANCE' : (job.company === 'Wallbit' ? 'FULL-TIME' : 'AMBASSADOR')}</div>
                  <div>
                    <ul className="br-cv-bullets">
                      {(lang==='es'?job.bulletsEs:job.bulletsEn).slice(0,2).map((b,j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="br-cv-foot">
              <span style={{color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em'}}>{lang === 'es' ? 'PDF · Última actualización abril 2026' : 'PDF · Last updated April 2026'}</span>
              <button className="br-download">↓ {t.cvDownload}</button>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section>
            <div className="br-section-head">
              <div className="br-sec-num">/07</div>
              <div className="br-sec-title">{t.newsletterKicker}</div>
              <div className="br-sec-meta">{lang === 'es' ? 'MENSUAL' : 'MONTHLY'}</div>
            </div>
            <div className="br-news">
              <div className="br-news-left">
                <div className="br-news-tag">{lang === 'es' ? '★ MENSUAL · GRATIS' : '★ MONTHLY · FREE'}</div>
                <h2 className="br-news-headline">{lang === 'es' ? <>ANTES QUE<br/>EL FEED.</> : <>BEFORE<br/>THE FEED.</>}</h2>
                <p className="br-news-text">{t.newsletterSub}</p>
              </div>
              <div className="br-news-right">
                <input className="br-news-input" type="text" placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'} />
                <input className="br-news-input" type="email" placeholder={t.newsletterPh} />
                <button className="br-news-cta">{t.newsletterCta} →</button>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="br-section" id="contact">
            <div className="br-section-head">
              <div className="br-sec-num">/08</div>
              <div className="br-sec-title">{t.contactKicker}</div>
              <div className="br-sec-meta">{lang === 'es' ? 'RESPUESTA · 48H' : 'REPLY · 48H'}</div>
            </div>
            <div className="br-contact">
              <div className="br-contact-info">
                <h2 className="br-contact-headline">
                  {lang === 'es' ? <>HAGAMOS<br/>ALGO <span className="ac">JUNTAS</span>.</> : <>LET'S MAKE<br/>SOMETHING <span className="ac">TOGETHER</span>.</>}
                </h2>
                <p style={{margin: 0, fontSize: 16, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', fontFamily: "'Space Grotesk', sans-serif"}}>{t.contactSub}</p>
                <div className="br-contact-direct">
                  <a className="br-contact-email">hola@carlicode.com →</a>
                  <div className="br-contact-line">{lang === 'es' ? 'TIKTOK' : 'TIKTOK'} · <span>@carlicode</span></div>
                  <div className="br-contact-line">LINKEDIN · <span>/in/carlicode</span></div>
                  <div className="br-contact-line">{lang === 'es' ? 'BASE' : 'BASED IN'} · <span>{lang === 'es' ? 'BOGOTÁ, COLOMBIA' : 'BOGOTÁ, COLOMBIA'}</span></div>
                </div>
              </div>
              <form className="br-contact-form br-form" onSubmit={(e) => e.preventDefault()}>
                <div className="br-form-row">
                  <input placeholder={t.contactName} />
                  <input placeholder={t.contactEmail} />
                </div>
                <input placeholder={t.contactCompany} />
                <select>
                  <option>{t.contactType}</option>
                  {t.contactTypes.map(o => <option key={o}>{o}</option>)}
                </select>
                <textarea placeholder={t.contactMsg}></textarea>
                <button className="br-form-send">
                  <span>{t.contactSend}</span>
                  <span>→</span>
                </button>
              </form>
            </div>
          </section>

          {/* BIG FOOTER */}
          <div className="br-footer-big">
            CARLI<span className="ac">·</span>CODE
          </div>
          <div className="br-footer-bar">
            <div>© 2026</div>
            <div>{t.footerNote}</div>
            <div className="br-socials">
              <a>TIKTOK</a>
              <a>LINKEDIN</a>
              <a>GITHUB</a>
              <a>YOUTUBE</a>
            </div>
            <div style={{textAlign: 'right'}}>v2.0 · {now}</div>
          </div>
        </div>
      </div>
    </>
  );
}

window.BrutalistTech = BrutalistTech;
