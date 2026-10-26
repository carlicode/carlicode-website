# Handoff: carlicode.com (Sprints 0–3 hechos, resto pendiente)

Contexto para el siguiente agente. Lee esto completo antes de tocar código.

## Quién y cómo trabaja
- Dueña: Carla (marca pública **Carli Code**, nombre profesional en el CV **Carla Florida**). Responder en español.
- Trabaja por **sprints numerados, un PR por sprint**. Ejecuta SOLO el sprint pedido y detente al terminar.
- Al cerrar, pega la salida real de `npm run lint`, `npm run test:infra` y `npm run build`, y di qué falló o qué no se pudo verificar.
- Reglas de contenido: nunca "influencer"; **sin teléfono** (solo `carli.f.roman@gmail.com` y `/contacto`); comunidad = **#CarliCodeArmy**; no inventar métricas, fechas ni resultados; tarifas siempre públicas; máximo ~5 TikToks embebidos; sitio ES/EN (`?lang=es|en` + toggle), CV en inglés.
- No mergear sin que ella lo pida.

## Stack y comandos
React 19 + React Router 7 + Vite + Tailwind + lucide-react. Node 22.
`npm ci` · `npm run dev` · `npm run lint` · `npm run test:infra` (tests de la CloudFront Function) · `npm run build` · `npm run media-kit:pdf` (regenera `public/downloads/carli-code-media-kit-2026-{es,en}.pdf` desde `src/data/mediaKit.js` con Chrome headless) · `npm run deploy`.

## PRs encadenados (mergear en orden)
1. #3 Sprint 0 infra: `infra/aws/` (CloudFront Function `viewer-request.js` con redirect www→apex y rewrite SPA, scripts `actualizar-funcion.sh`, `agregar-www.sh`, `bucket-privado.sh`, `exportar.sh`, `scripts/deploy.sh`).
2. #4 Sprint 1 arquitectura: rutas `/`, `/media-kit`, `/museo`, `/contacto`, `/cv` (noindex, fuera del navbar), redirects de URLs viejas, `src/data/profile.js`, `Seo.jsx`, 404, sin Analytics/AdSense, limpieza de páginas muertas.
3. #5 Sprint 2 inicio: `src/App.jsx` nuevo (titular "Tech en español, más fácil de lo que crees.").
4. #6 Sprint 3 media kit: `src/pages/Collaborations.jsx`, `src/data/mediaKit.js` (`cases` con los 5 TikToks), PDF.
5. Este PR: contenido crudo para los sprints siguientes (`content/`).

## AWS: NADA aplicado todavía
Cuenta 447924811196, distribución `E1LGUCJ0AW0ERL`, bucket `carlicode.com` (sigue **público**), zona `Z04847522BNLNR2UXI4XB`. La VM de Devin no tiene credenciales: usar el Mac de Carla (`local_exec`) con el clon de la rama de #3. Orden: `actualizar-funcion.sh` → `agregar-www.sh` → `bucket-privado.sh` (verifica S3 directo 403 y sitio 200) → `exportar.sh` y commitear los exports en #3. Verificado el 26-10-2026: la función LIVE sigue siendo la de mayo ("Add index.html to directory requests").

## Bugs abiertos (encontrados por las pruebas E2E del Sprint 3, sin corregir)
1. Formulario de `/media-kit`: email/select/textarea/botón se salen del fondo blanco (~97 px). Causa probable: `.media-contact>div:last-child{max-width:420px}` y inputs sin `width:100%;min-width:0;box-sizing:border-box`.
2. A 390 px el bloque de contacto no es responsive: título y formulario se salen por la derecha (oculto por `overflow-x` global).
3. Iframe de TikTok en `.case-grid` (5 columnas) queda en ~197×350 px y se recorta. Usar columnas de ≥300 px y más alto al reproducir.

## Pendiente (sprints aprobados en el plan, falta que Carla los pida)
- **Ajustes de métricas** (confirmados el 26-10-2026 con capturas): YouTube 1.61K suscriptores, Twitch 3.1K seguidores, LinkedIn 3,614 seguidores. Actualizar `socialChannels` (hoy YouTube/Twitch están en `null`) y `profile.js`.
- **Contador "Mi impacto en LATAM"**: datos en `content/impacto/` (xlsx + csv por aporte). Reglas de Carla: evento pequeño 50, charla 70, evento grande 200, Platzi Conf 500, AWSome 350, bootcamp Python en Twitch (pandemia) 1,500, cursos Platzi 60K en total; podcasts/lives sin dato estimados en 70. Resultado: ~67,340 personas en vivo/cursos + 214,424 seguidores ≈ 281,800. Mostrar las dos cifras por separado + total con la etiqueta "estimado". Falta que Carla diga si va en inicio, media kit o ambos.
- **Sprint 4 Museo**: `/museo` con línea de tiempo por año (sin fecha al final), salas (Escenarios, Contenido, Comunidad, Mentorías, Educación, Código, Vida), filtro `?sala=`, fichas por pieza. Comunidad/embajadurías viven aquí. Hitos iniciales a agregar: 2013 entra a la universidad, 2016 curso de IA con Eduardo Di Santi, 2016 ACM-ICPC 3.er lugar.
- **Sprint 5 Carga**: los 85 aportes de `content/aportes/aportes.csv` (A001–A085, imágenes `img/ID.jpg`, `img/ID-2.jpg`…) + A086 bootcamp Twitch + A087 video YouTube "Crea tu primer Agente de IA en 2 líneas de código con AWS Strands Agents" (https://www.youtube.com/watch?v=msMoNLbroF4). Optimizar fotos a WebP. Datos faltantes quedan marcados, no inventados.
- **Sprint 6 CV** (`/cv`, inglés, Carla Florida, sin teléfono, Santa Cruz no Cochabamba): repos públicos video-concepto-tech, experimento-lean-aws (BugDojo), aif-c01-study-lab, chroma-to-opensearch, andina-agent-demo, wabi-sabi (AI-Study-Squad-Tools está vacío: no mostrar); repos privados "pide acceso por correo".
- **Sprint 7 Inglés**: revisar que todo el sitio de marca tenga ES/EN completo.
- Warning de lint preexistente: Fast Refresh en `LanguageProvider.jsx`.
