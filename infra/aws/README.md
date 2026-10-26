# Infraestructura AWS: carlicode.com

El sitio es una SPA de Vite + React. Se sirve desde un bucket S3 **privado** detrás de CloudFront, con dominio en Route 53 y certificado en ACM.

```
visitante ──▶ Route 53 (carlicode.com / www) ──▶ CloudFront ──(OAC)──▶ S3 privado "carlicode.com"
                                                    │
                                                    └─ CloudFront Function (viewer-request)
                                                         · www.carlicode.com → 301 a carlicode.com
                                                         · /cv, /museo, … → /index.html
```

| Recurso | Valor |
|---|---|
| Cuenta | `447924811196` |
| S3 | bucket `carlicode.com` (us-east-1), privado, sin hosting estático |
| CloudFront | `E1LGUCJ0AW0ERL` (`d38lhumv826eud.cloudfront.net`), alias `carlicode.com` y `www.carlicode.com` |
| OAC | `EXHYNBAHEH9E8` (sigv4, firma siempre) |
| CloudFront Function | `carlicode-index-rewrite` (cloudfront-js-2.0), código en [`cloudfront/viewer-request.js`](cloudfront/viewer-request.js) |
| ACM | `carlicode.com` y `*.carlicode.com`, us-east-1 (obligatorio para CloudFront) |
| Route 53 | zona `Z04847522BNLNR2UXI4XB`, registros A/AAAA alias de `carlicode.com` y `www` hacia CloudFront |

Todos los IDs están en [`scripts/config.sh`](scripts/config.sh).

## Por qué está armado así

- **Bucket privado + OAC.** Nadie lee el bucket directamente, solo la distribución de CloudFront firmando con OAC. La política ([`politicas/s3-bucket-policy-solo-cloudfront.json`](politicas/s3-bucket-policy-solo-cloudfront.json)) permite `s3:GetObject` únicamente al servicio `cloudfront.amazonaws.com` cuando `AWS:SourceArn` es esta distribución, y Block Public Access está activado.
- **Rutas de la SPA.** `/cv` o `/museo` no existen como archivos en S3: la función reescribe toda ruta sin extensión a `/index.html` y React Router muestra la página. Las respuestas de error 403/404 → `/index.html` (200) quedan como respaldo.
- **Una sola URL.** `www.carlicode.com` redirige con 301 a `https://carlicode.com` (misma ruta y query), así los links compartidos y Google ven un solo dominio.

## Scripts (`scripts/`)

Se corren desde una terminal con AWS CLI v2 y `jq`, con credenciales de la cuenta. Cada uno se puede repetir sin romper nada.

| Script | Qué hace |
|---|---|
| `actualizar-funcion.sh` | Sube `cloudfront/viewer-request.js`, lo prueba en CloudFront con los eventos de `cloudfront/eventos/` y solo si no hay errores lo publica. |
| `bucket-privado.sh` | Pone la política solo-CloudFront, activa Block Public Access, quita el hosting estático y verifica (S3 directo 403, sitio 200). |
| `agregar-www.sh` | Agrega el alias `www.carlicode.com` a CloudFront, espera el despliegue y crea los registros A/AAAA de `www` y AAAA del dominio principal. |
| `exportar.sh` | Regenera `exports/` con el estado real de la cuenta. Correrlo después de cada cambio. |

La función también se prueba sin AWS: `npm run test:infra`.

Para publicar el sitio: `npm run deploy` (ver [`scripts/deploy.sh`](../../scripts/deploy.sh)).

## Volver atrás

- Bucket público otra vez (solo si CloudFront no pudiera leer el bucket): `aws s3api delete-public-access-block --bucket carlicode.com` y luego `aws s3api put-bucket-policy` con la política anterior (está en el historial de git de `exports/s3-bucket-policy.json`).
- Función: CloudFront guarda la versión publicada; volver a publicar la versión anterior del archivo con `actualizar-funcion.sh`.

## `exports/`

JSON con la configuración vigente, sin secretos. Sirven como documentación y como base si más adelante esto pasa a IaC.
