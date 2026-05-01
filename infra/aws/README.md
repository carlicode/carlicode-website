# Infraestructura AWS — carlicode.com

Exportaciones en JSON de la configuración vigente en la cuenta (CloudFront, OAC, S3, Route 53, resumen ACM). Sirven como documentación y como referencia si más adelante pasas esto a Terraform u otro IaC.

## Archivos (`exports/`)

| Archivo | Contenido |
|--------|-----------|
| `aws-resources-metadata.json` | IDs, ARNs y nombres de recurso |
| `cloudfront-distribution-config.json` | `DistributionConfig` (sin ETag) |
| `cloudfront-origin-access-control-config.json` | Config del Origin Access Control del origen S3 |
| `s3-bucket-website.json` | Hosting estático (documento índice) |
| `s3-bucket-policy.json` | Política de bucket actual |
| `route53-hosted-zone-records.json` | Registros del hosted zone `carlicode.com` |
| `acm-certificate-summary.json` | Datos no sensibles del certificado ACM (us-east-1) |

## Cómo se regeneran

Desde una sesión con AWS CLI configurado:

```bash
DIST_ID=E1LGUCJ0AW0ERL
ZONE_ID=Z04847522BNLNR2UXI4XB
aws cloudfront get-distribution-config --id "$DIST_ID" --query DistributionConfig > exports/cloudfront-distribution-config.json
aws route53 list-resource-record-sets --hosted-zone-id "$ZONE_ID" > exports/route53-hosted-zone-records.json
# …idem para OAC, ACM, etc.
```

Los valores de `CallerReference`, ETag y ARNs son propios de cada cuenta; para recrear en otra cuenta hay que sustituirlos o usar IaC con variables.

## Notas

- El certificado ACM debe estar en **us-east-1** para usarse con CloudFront.
- La distribución usa política de caché administrada (ID en metadata); el nombre AWS suele ser **CachingOptimized**.
- No hay `CustomErrorResponses` configuradas; si el sitio es SPA con rutas cliente, puede convenir mapear 403/404 a `index.html`.
