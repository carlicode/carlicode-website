// Genera public/downloads/carli-code-media-kit-2026-{es,en}.pdf con los mismos datos que /media-kit.
// Uso: npm run media-kit:pdf  (necesita Google Chrome o Chromium; CHROME=/ruta/al/binario para elegir otro)
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { brands, cases, packages, services, socialChannels } from "../src/data/mediaKit.js";
import { brand, contact } from "../src/data/profile.js";

const chrome = process.env.CHROME || "google-chrome";
const text = {
  es: { title: "Media kit 2026", lede: "Creo contenido enseñando sobre tecnología y transformo conceptos complejos en lenguaje natural: inteligencia artificial, AWS, Python y automatización. Desde Bolivia, para toda Latinoamérica.", reach: "Alcance", cases: "Casos con marcas", brands: "Marcas que confiaron", rates: "Tarifas (USD)", packages: "Paquetes", contact: "Contacto", profile: "perfil" },
  en: { title: "Media kit 2026", lede: "I create content that teaches technology and I turn complex concepts into plain language: artificial intelligence, AWS, Python and automation. From Bolivia, for all of Latin America.", reach: "Reach", cases: "Brand case studies", brands: "Brands that trusted me", rates: "Rates (USD)", packages: "Packages", contact: "Contact", profile: "profile" },
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

function html(lang) {
  const t = text[lang];
  const row = (name, desc, price) => `<tr><td><b>${esc(name)}</b><br><small>${esc(desc)}</small></td><td class="p">${price}</td></tr>`;
  return `<!doctype html><html lang="${lang}"><meta charset="utf-8"><style>
  @page{size:A4;margin:16mm}body{font:11pt/1.45 system-ui,sans-serif;color:#1a1026}h1{font-size:30pt;margin:0;color:#071218}h1 em{color:#d61fb5;font-style:normal}
  h2{font-size:13pt;margin:22px 0 8px;color:#5430be;text-transform:uppercase;letter-spacing:.06em}.lede{font-size:12pt;max-width:150mm}
  .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.card{border:1px solid #ddd6ee;padding:10px}.card b{display:block;font-size:17pt;color:#d61fb5}
  table{width:100%;border-collapse:collapse}td{border-bottom:1px solid #eee;padding:6px 0;vertical-align:top}td.p{text-align:right;font-weight:700;font-size:12pt;white-space:nowrap}
  small{color:#5b5470}a{color:#5430be}.chips span{display:inline-block;border:1px solid #ddd6ee;border-radius:99px;padding:3px 10px;margin:0 6px 6px 0}.page{break-before:page}</style>
  <p style="color:#5430be;letter-spacing:.1em">CARLI CODE · ${esc(brand.community)}</p><h1>${t.title.replace("2026", "<em>2026</em>")}</h1><p class="lede">${esc(t.lede)}</p>
  <h2>${t.reach}</h2><div class="grid">${socialChannels.map((c) => `<div class="card">${c.name}<b>${c.followers ?? t.profile}</b><small>${esc(c.detail[lang])}<br>${c.handle}</small></div>`).join("")}</div>
  <h2>${t.cases}</h2><table>${cases.map((c) => `<tr><td><b>${esc(c.brand)}</b>${c.topic ? ` — ${esc(c.topic[lang])}` : ""}<br><small>${c.results.map((r) => `${r.value} ${r.label[lang]}`).join(" · ")}</small></td><td class="p"><a href="${c.href}">TikTok ↗</a></td></tr>`).join("")}</table>
  <h2>${t.brands}</h2><p class="chips">${brands.map((b) => `<span>${esc(b)}</span>`).join("")}</p>
  <h2 class="page">${t.rates}</h2><table>${services.map((s) => row(s.name[lang], s.description[lang], s.price)).join("")}</table>
  <h2>${t.packages}</h2><table>${packages.map((p) => row(p.name, p.description[lang], p.price)).join("")}</table>
  <h2>${t.contact}</h2><p><a href="mailto:${contact.email}">${contact.email}</a> · <a href="https://carlicode.com/contacto">carlicode.com/contacto</a> · <a href="https://carlicode.com/media-kit">carlicode.com/media-kit</a></p></html>`;
}

const dir = mkdtempSync(join(tmpdir(), "media-kit-"));
for (const lang of ["es", "en"]) {
  const src = join(dir, `${lang}.html`);
  writeFileSync(src, html(lang));
  const out = `public/downloads/carli-code-media-kit-2026-${lang}.pdf`;
  execFileSync(chrome, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${out}`, `file://${src}`], { stdio: "ignore" });
  console.log(out);
}
