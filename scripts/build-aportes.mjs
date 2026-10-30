// Genera src/data/aportes.json y las fotos WebP (public/museo/) desde content/aportes/aportes.csv.
// Uso: npm run museo:build   (necesita cwebp: brew install webp)
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SRC = "content/aportes";
const OUT_IMG = "public/museo";
// Piezas que no se muestran en el sitio: repos vacíos (ver HANDOFF.md) y duplicados.
const hidden = new Set(["A074", "A011"]); // A011 es la misma charla que A014 (TEDx Univalle)
const rooms = {
  "Charlas y paneles": "escenarios",
  "Podcasts y entrevistas": "contenido",
  "Contenido": "contenido",
  "Comunidad y reconocimientos": "comunidad",
  "Mentorías": "mentorias",
  "Talleres y cursos": "educacion",
  "Código y proyectos": "codigo",
};

// CSV con comillas, comas y saltos de línea dentro de campos.
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; } else if (c === '"') quoted = false; else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = ""; if (row.some(Boolean)) rows.push(row); row = [];
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows;
  return body.map((values) => Object.fromEntries(header.map((key, i) => [key.replace(/^﻿/, ""), values[i] ?? ""])));
}

function webp(input, output, width) {
  if (existsSync(output)) return;
  execFileSync("cwebp", ["-quiet", "-q", "78", "-resize", String(width), "0", input, "-o", output]);
}

mkdirSync(OUT_IMG, { recursive: true });
const rows = parseCsv(readFileSync(`${SRC}/aportes.csv`, "utf8"));
const pieces = [];
for (const row of rows) {
  if (hidden.has(row.id)) continue;
  if (!rooms[row.tipo]) throw new Error(`${row.id}: tipo desconocido "${row.tipo}"`);
  const files = [row.imagen, ...row.imagenes_extra.split(/[;|]/)].map((f) => f.trim()).filter(Boolean);
  const images = files.map((file) => {
    const name = file.replace(/^img\//, "").replace(/\.[^.]+$/, "");
    const input = `${SRC}/${file}`;
    if (!existsSync(input)) throw new Error(`${row.id}: falta ${input}`);
    webp(input, `${OUT_IMG}/${name}.webp`, 1000);
    webp(input, `${OUT_IMG}/${name}-thumb.webp`, 320);
    return name;
  });
  const youtube = row.link.match(/[?&]v=([\w-]{11})/)?.[1];
  const piece = { id: row.id, sala: rooms[row.tipo], date: row.fecha || null, title: row.titulo, event: row.evento || null, role: row.rol || null, place: row.lugar || null, text: row.descripcion || null, metric: row.metrica || null, href: row.link || null, images, youtubeId: youtube ?? null };
  pieces.push(piece);
}
writeFileSync("src/data/aportes.json", `${JSON.stringify(pieces, null, 1)}\n`);
console.log(`${pieces.length} piezas, ${pieces.reduce((n, p) => n + p.images.length, 0)} fotos`);
