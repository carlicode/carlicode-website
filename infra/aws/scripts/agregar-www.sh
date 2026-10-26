#!/usr/bin/env bash
# Agrega www.carlicode.com a CloudFront y crea los registros DNS (IPv4 e IPv6) de www y del dominio principal.
# El certificado ACM ya cubre *.carlicode.com. La redireccion de www a carlicode.com la hace la CloudFront Function.
set -euo pipefail
AQUI="$(cd "$(dirname "$0")" && pwd)"
# shellcheck source=config.sh
source "$AQUI/config.sh"
tmp=$(mktemp -d)

aws cloudfront get-distribution-config --id "$DIST_ID" > "$tmp/actual.json"
jq '.DistributionConfig | .Aliases = {Quantity: 2, Items: ["carlicode.com", "www.carlicode.com"]}' "$tmp/actual.json" > "$tmp/nueva.json"
aws cloudfront update-distribution --id "$DIST_ID" --if-match "$(jq -r .ETag "$tmp/actual.json")" \
  --distribution-config "file://$tmp/nueva.json" --query 'Distribution.Status' --output text
echo "Esperando a que CloudFront termine de desplegar (puede tardar unos minutos)..."
aws cloudfront wait distribution-deployed --id "$DIST_ID"

registro() {
  printf '{"Action":"UPSERT","ResourceRecordSet":{"Name":"%s","Type":"%s","AliasTarget":{"HostedZoneId":"%s","DNSName":"%s","EvaluateTargetHealth":false}}}' \
    "$1" "$2" "$CLOUDFRONT_HOSTED_ZONE" "$DIST_DOMAIN"
}
cambios="{\"Comment\":\"www y AAAA para carlicode.com\",\"Changes\":[$(registro www.carlicode.com A),$(registro www.carlicode.com AAAA),$(registro carlicode.com AAAA)]}"
cambio_id=$(aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" --change-batch "$cambios" --query ChangeInfo.Id --output text)
aws route53 wait resource-record-sets-changed --id "$cambio_id"
echo "DNS listo. Prueba: curl -sI https://www.carlicode.com/cv"
