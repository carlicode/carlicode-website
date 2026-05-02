# Handoff: Carli Code — Landing Redesign (Brutalist Tech)

## Overview
Personal landing page for Carli Code — AI Engineer & Content Creator. Bilingual (ES/EN), dark mode, dual identity (engineer + creator) targeted at brands looking to collaborate (sponsors, ambassadorships, speaking, technical projects).

The chosen direction is **Brutalist Tech**: mono-everything, exposed grid, terminal aesthetic, all pink + white + black.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these HTML designs in the target codebase's environment** (e.g. Next.js + Tailwind, Astro, plain React, SvelteKit, etc.) using its established patterns and libraries. If no environment exists yet, **Next.js (App Router) + Tailwind CSS + TypeScript** is the recommended choice — well-suited for a static-first marketing/portfolio site with i18n routes (`/es`, `/en`) and excellent SEO.

## Fidelity
**High-fidelity (hifi).** All colors, typography, spacing, and interactions are final. Recreate pixel-perfectly using the chosen stack's component system. The reference implementation lives in `src/brutalist.jsx` — every section, color value, and grid line is intentional.

> Important: The HTML prototype includes TWO variations (Editorial Bold + Brutalist Tech). **Only ship the Brutalist Tech variation** (`src/brutalist.jsx`). Editorial is included for context only.

---

## Design Tokens

### Colors
```css
--ink:      #ffffff;              /* primary text */
--paper:    #0a0a0a;              /* main background */
--paper-2:  #0f0f0f;              /* terminal / elevated panel */
--pink:     #ff2d92;              /* accent — primary CTA, highlights */
--pink-2:   #ff79c6;              /* accent — hover */
--muted:    rgba(255,255,255,0.5);  /* secondary text */
--line:     rgba(255,255,255,0.18); /* all borders/grid lines */
```

Optional palettes (Tweaks panel exposes 4 swatches): Magenta `#ff2d92`, Hot Pink `#ff4fa3`, Fuchsia `#e040fb`, Coral `#ff6b9d`. Default = Magenta.

### Typography
- **Display / UI** — `Space Grotesk` (700), used for headlines, section titles, work names, brand names. Letter-spacing varies from `-0.02em` to `-0.06em` depending on size. Always uppercase.
- **Mono / Body** — `JetBrains Mono` (300–700), used for nav, labels, kickers, terminal code, footer bar, ticker. Always uppercase for UI labels with `letter-spacing: 0.1em` to `0.16em`.
- **Long-form body** — `Space Grotesk` (400) at 14–16px, normal case, line-height 1.5.

Load both via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@300..800&display=swap
```

### Type scale (px)
- Hero headline: **96** / weight 700 / line-height 0.95 / letter-spacing -0.04em
- Footer giant: **200** / weight 700 / line-height 0.85 / letter-spacing -0.06em
- Section title: **28** / weight 700 / uppercase
- Brand name: **80** / weight 700
- Newsletter headline: **56**
- Contact headline: **64**
- Work name: **32**
- About body: **28**
- Stat number: **56**
- Body text: **14–16**
- Labels / nav: **11–12**
- Tags / micro: **10–11**

### Spacing
- Canvas width: **1440px** (artboard reference)
- Section padding (horizontal): **64px**
- Section padding (vertical): **48–80px** (or 0 — sections are bordered, not padded)
- Cell padding (work cards): **48px**
- Border width: **1px** (always solid `var(--line)`)
- No border-radius anywhere — sharp corners are part of the aesthetic. Exception: 50% on the status pulse dot.

### Borders & dividers
The brutalist look depends on **exposed grid lines**. Every section has a top/bottom border. Major content blocks have internal dividers — work cards form a 2×2 grid where each cell has a right and bottom border (the last column/row drops them). Topbar, navbar, footer bar, and section headers are all 3-column or 4-column grids with vertical 1px dividers between cells.

### Background
```css
background-image:
  linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
background-size: 80px 80px;
```
Subtle 80px grid overlay on the body.

---

## Page Structure (top → bottom)

### 0. Topbar
3-column grid: `200px 1fr 200px`. Border-bottom.
- Left: `● SYS · ONLINE` (animated blink, pink)
- Center: stamps — `CARLI CODE / PORTFOLIO V2` · `BOGOTÁ → REMOTO` · ISO date
- Right: ES / EN language toggle (active = pink fill, inactive = bordered transparent)

### 1. Navbar
Flex row of cells, each with right border. Padding: `20px 32px`. Hover: pink fill, black text. Logo cell: `CARLI·CODE` (the dot is pink). Items: Sobre mí · Trabajo · Contenido · Charlas · Marcas — then a flex spacer — then `Contacto ↗` on the right.

### 2. Hero
2-column grid (50/50). Min-height: 720px. Border-bottom.

**Left:**
- Tag pill (pink border, pink text): `INGENIERA DE IA · CREADORA · SPEAKER`
- 96px uppercase headline:
  - "CONSTRUYO **IA.**" (IA in pink)
  - "ENSEÑO **CÓDIGO.**" (CÓDIGO in pink)
  - "MUEVO **AUDIENCIAS.**" (AUDIENCIAS in pink)
- Bottom meta row: `// Disponible para proyectos · Q2 2026` and `SCROLL ↓`

**Right:** Terminal panel + CTA row.
- Terminal — `~/carli/about.py` header with 3 dot squares. Body uses syntax-coloring: `#` comments in muted, `name`/`role` keys in pink, string values in white. Last line has a blinking pink cursor.
- Below terminal, 2-column CTA row, full-width:
  - `TRABAJEMOS JUNTAS →` (pink fill, black text, weight 700)
  - `↓ DESCARGAR CV` (transparent, white)

### 3. Ticker
Pink background (`var(--pink)`), black text, 16px vertical padding, weight 700, uppercase, letter-spacing 0.16em. Marquee animation 25s linear infinite. Content:
`★ AI ENGINEER ★ AWS AMBASSADOR ★ N8N AMBASSADOR ★ EX-WALLBIT ★ CONTENT CREATOR ★ SPEAKER ★` (repeated).

### 4. Sections (/01 → /08)
Every section starts with a section-header row: 3-column grid `120px 1fr 200px`.
- Left cell: `/01`, `/02`… in pink, weight 700.
- Center: section title — uppercase Space Grotesk 28px.
- Right: meta (mono uppercase, muted).

#### /01 About
2-col split (2:1). Left: 28px Space Grotesk paragraph with `<mark>` highlight pills (pink bg, black text, padding 0 8px). Right: 3 stacked stats — `AWS` / `n8n` / `WB.` in pink 56px Space Grotesk + uppercase mono label below.

#### /02 Trabajo (Selected work)
2×2 grid, each cell 48px padding, min-height 280px. Each card:
- Top row: `PROJECT.01` in pink + year in muted
- Title (32px Space Grotesk uppercase) + 14px Space Grotesk description
- Bottom row: tag pills (10px mono, bordered) + `↗` arrow (28px)
- Hover: entire cell flips to pink bg / black text. Arrow translates `(8px, -8px)`.

#### /03 Contenido (TikTok)
2-col info row: description text + 3-cell stats grid (`14M+ views`, `800K followers`, `2.3M likes`).

Below: horizontal scroll carousel of TikTok cards. Each card 220×391px, sharp corners, 1px border (overlapping `-1px` margins so borders share). Card content:
- `VID.01` top-left (pink)
- View count chip top-right (pink fill, black text, weight 700)
- Center play button: 48×48 white-bordered square, transparent black 60% bg, white play triangle
- Bottom strip: title in 12px uppercase Space Grotesk + `♥ likes` in pink mono
- Background: linear-gradient from per-video color (varies — magenta / fuchsia / hot pink) to `#0a0a0a`
- Hover: translateY -4px, border becomes pink, z-index 2

#### /04 Charlas
6-column table-like rows: `80px / event / topic / city / year / 80px arrow`. Each row 24px padding, border-bottom. Hover: row flips to pink/black.
- Col 1: `/01` pink number
- Col 2: event name (16px Space Grotesk weight 700)
- Col 3: topic (italic, quoted, muted)
- Col 4–5: meta (mono uppercase muted)
- Col 6: `↗`

#### /05 Marcas
3-col grid: `★ PARTNER` label top-left (pink mono), giant 80px brand name (`AWS`, `n8n`, `WALLBIT`), bottom row meta (role + year). Hover: bg shifts to `paper-2`.

#### /06 Experiencia (CV.MD)
Section header includes a "DESCARGAR CV" pink button on the right.

Table layout: 4-col grid `200px 2fr 1fr 1.5fr` with header row in `paper-2` bg.
- Col 1: period (pink) + location (mono muted)
- Col 2: role (18px Space Grotesk uppercase) + company (mono muted)
- Col 3: type tag (`FREELANCE` / `FULL-TIME` / `AMBASSADOR`)
- Col 4: bullet list — `+` markers in pink, Space Grotesk 13px

Below table: foot bar with "PDF · Última actualización abril 2026" + giant pink download button.

#### /07 Newsletter
2-col split. Left half: pink fill, black text. Right half: paper bg, form.
- Left: small bordered tag `★ MENSUAL · GRATIS`, 56px uppercase headline (`ANTES QUE EL FEED.`), 16px description
- Right: 3 stacked inputs (name, email) + pink submit button. Inputs: transparent bg, 1px border, focus border becomes pink.

#### /08 Contacto
2-col split.
- Left: 64px uppercase headline (`HAGAMOS ALGO JUNTAS.`, with "JUNTAS" in pink), description, then a vertical block:
  - `hola@carlicode.com →` in 24px pink Space Grotesk
  - `TIKTOK · @carlicode`, `LINKEDIN · /in/carlicode`, `BASE · BOGOTÁ, COLOMBIA` (mono, muted labels, white values)
- Right: form — name + email row (split with vertical divider), company, type select, message textarea, then full-width pink submit button (`ENVIAR MENSAJE →`). Each input has `padding: 22px 16px`, transparent bg, no border-radius. Focus: bg shifts to `rgba(255,45,146,0.06)`. All separated by horizontal `var(--line)` dividers.

### 9. Big footer
Massive `CARLI·CODE` set at 200px Space Grotesk, line-height 0.85, padding 80px 64px 40px. The middle dot is pink and italic.

### 10. Footer bar
4-col grid: `200px / 1fr / auto / 200px`. Items:
- `© 2026`
- "Hecho con código y café desde Latam."
- Social links: TIKTOK · LINKEDIN · GITHUB · YOUTUBE (each links `↗` externally)
- `v2.0 · 2026-04-28`

---

## Interactions & Behavior

### Animations
- **Status pulse** — pink dot opacity blink, 1.4s infinite
- **Cursor** in terminal — same blink, 1s
- **Ticker marquee** — `transform: translateX(0 → -50%)` 25s linear infinite
- **Hover transitions** — 200ms on background, color, border-color, transform

### Hover states
- Nav cells → pink fill, black text
- Work cards → entire card flips to pink bg + black text; arrow translates `(8px, -8px)`
- Talks rows → row flips to pink/black
- Brand cells → bg shifts to `paper-2`
- TikTok cards → translateY(-4px), border becomes pink, z-index 2
- CTAs (`br-cta-pink`) → invert to white bg / pink text
- Form inputs on focus → bg becomes faint pink wash

### Language switch
Top-right toggle (ES/EN). Active button: pink fill + black text. All copy switches via the `COPY` object (see `src/data.jsx`). Implement as i18n in your stack of choice — recommend Next.js `[lang]` route segments.

### Forms
- Newsletter and Contact forms should be wired to your backend / form service (Formspree, Resend, custom API). HTML version uses `e.preventDefault()` placeholders.
- Contact form fields: Nombre, Email, Empresa/marca, Tipo de colaboración (select with 4 options), Mensaje. The `tipo` select default is the placeholder; options come from `t.contactTypes`.
- 48h reply expectation is shown in the section meta — keep it.

### Navigation
- Smooth-scroll to `#about`, `#work`, `#tiktok`, `#talks`, `#brands`, `#contact` anchors.
- CV download button → static `/cv-carli-code-2026.pdf` (TBD by Carli).
- Social links in footer → real handles (placeholder in code).

---

## State Management

For the marketing site, state is minimal:
- `lang: 'es' | 'en'` — current language. Persist via URL route segment (`/es/...` vs `/en/...`) for SEO.
- Newsletter form: `{ email, name, status: 'idle' | 'submitting' | 'success' | 'error' }`.
- Contact form: same pattern with all fields + a `success` toast on submit.

The HTML prototype uses React `useState` and a Tweaks panel — for production, drop the Tweaks panel entirely (it's a design-tool affordance, not a user feature).

---

## Real Data to Integrate

These are placeholders in the prototype — replace with real data:

### Brands (real)
- AWS — Student Ambassador (2024 — Now)
- n8n — Brand Ambassador (2024 — Now)
- Wallbit — AI Engineer (2023 — 2024) — past role

### Talks
Carli to provide real list. Prototype has 4 placeholders.

### TikToks
Carli to provide 6 real video URLs + thumbnails + view/like counts. Embed using TikTok oEmbed or static thumbnails + link out.

### CV bullets
Replace prototype copy with Carli's real bullets. Real PDF needs to be uploaded.

### Photo
The `[PORTRAIT]` placeholder is in the Editorial variation only — Brutalist doesn't use a portrait image. Carli may add one to the hero terminal column or elsewhere if desired.

---

## Responsive Behavior (NOT in prototype)

The HTML mock is fixed at **1440px**. Production site needs:
- Desktop: as designed (1280–1920px)
- Tablet (768–1280px): stack 2-col sections to 1-col, reduce hero headline to ~64px, keep grid lines, carousel still horizontal
- Mobile (<768px): single column everywhere, hero headline ~48px, navbar collapses to hamburger, CV table becomes stacked cards, talks rows become stacked blocks, footer giant text scales down to ~80px

The brutalist grid aesthetic should survive mobile — keep the 1px borders and exposed cells.

---

## SEO & Meta

- `<title>`: Carli Code — AI Engineer & Content Creator
- Description (ES/EN): "Construyo IA, enseño código y muevo audiencias. Disponible para colaboraciones con marcas, talks y proyectos."
- OG image: 1200×630 with the giant `CARLI·CODE` wordmark on dark + pink accent
- Twitter card: same
- Canonical per locale, `hreflang` tags for ES/EN

---

## Files in this Handoff

```
design_handoff_carli_code_landing/
├── README.md                       ← this file
├── Carli Code Landing.html         ← entry HTML (loads all React/Babel)
└── src/
    ├── data.jsx                    ← bilingual COPY + PROJECTS + TIKTOKS + TALKS + BRANDS + CV
    ├── brutalist.jsx               ← THE chosen design (recreate this)
    ├── editorial.jsx               ← reference only (other direction explored)
    └── app.jsx                     ← canvas + tweaks wiring (don't ship — design-tool only)
```

## Recommended Stack

If starting fresh: **Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion** (only for the ticker and pulse animations — pure CSS works too).

- Use Tailwind config to map the design tokens above to `theme.colors`, `theme.fontFamily`, `theme.fontSize`.
- Structure pages as `/app/[lang]/page.tsx` with a `dictionaries.ts` mirroring `src/data.jsx`.
- Components per section (`Hero.tsx`, `About.tsx`, `Work.tsx`, etc.) so each is independently editable.
- Form actions (Server Actions or API routes) → Resend for transactional email, or direct to Carli's inbox.
- Deploy on Vercel.
