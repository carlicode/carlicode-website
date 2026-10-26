#!/usr/bin/env bash
# Regenera infra/aws/exports/ con el estado real de la cuenta. Correr despues de cada cambio de infraestructura.
set -euo pipefail
AQUI="$(cd "$(dirname "$0")" && pwd)"
# shellcheck source=config.sh
source "$AQUI/config.sh"
OUT="$AQUI/../exports"

aws cloudfront get-distribution-config --id "$DIST_ID" --query DistributionConfig --output json > "$OUT/cloudfront-distribution-config.json"
aws cloudfront get-origin-access-control-config --id "$OAC_ID" --query OriginAccessControlConfig --output json > "$OUT/cloudfront-origin-access-control-config.json"
aws cloudfront describe-function --name "$FUNCTION_NAME" --stage LIVE --output json \
  --query 'FunctionSummary.{Name:Name,Status:Status,Runtime:FunctionConfig.Runtime,Comment:FunctionConfig.Comment,Stage:FunctionMetadata.Stage}' > "$OUT/cloudfront-function-summary.json"
aws route53 list-resource-record-sets --hosted-zone-id "$ZONE_ID" --output json > "$OUT/route53-hosted-zone-records.json"
aws acm describe-certificate --region us-east-1 --certificate-arn "$CERT_ARN" --output json \
  --query 'Certificate.{Arn:CertificateArn,DomainName:DomainName,SubjectAlternativeNames:SubjectAlternativeNames,Status:Status,Type:Type,KeyAlgorithm:KeyAlgorithm,RenewalEligibility:RenewalEligibility}' > "$OUT/acm-certificate-summary.json"
aws s3api get-bucket-policy --bucket "$BUCKET" --query Policy --output text | jq . > "$OUT/s3-bucket-policy.json"
aws s3api get-public-access-block --bucket "$BUCKET" --output json > "$OUT/s3-public-access-block.json"
echo "Exports actualizados en $OUT"
