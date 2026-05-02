# Carli Code — sitio

Landing **Brutalist Tech** bilingüe (**es** / **en**): portfolio, trabajo, TikTok, charlas, marcas, CV, newsletter y contacto.

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000): redirige a `/es`. Inglés: `/en`.

## Scripts

| Comando      | Descripción              |
|-------------|---------------------------|
| `npm run dev`    | Servidor de desarrollo    |
| `npm run build`  | Build de producción       |
| `npm run start`  | Servir el build           |
| `npm run lint`   | ESLint                    |

## Estructura principal

- `app/` — App Router: `[lang]/page.tsx`, `layout.tsx`, `actions.ts` (formularios)
- `components/brutalist/` — UI de la landing y `brutalist.css`
- `content/` — Textos y datos tipados (diccionarios, proyectos, etc.)
- `lib/` — i18n, helpers, URLs del sitio
- `public/` — assets estáticos (p. ej. `cv-carli-code-2026.pdf`)
- `design-reference/` — prototipo HTML/Babel anterior (solo referencia; ignorado por ESLint)

## Entorno

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (canonical / Open Graph en producción). Ejemplo: `https://www.carlicode.com`

## Prototipo legado

En `design-reference/` está el bundle con `Carli Code Landing.html` y React vía Babel; no forma parte del build de Next.

## Licencia

Privado — **Carli Code**.
