#!/usr/bin/env bash
# Deja el bucket privado: solo la distribucion de CloudFront (via OAC) puede leerlo.
set -euo pipefail
AQUI="$(cd "$(dirname "$0")" && pwd)"
# shellcheck source=config.sh
source "$AQUI/config.sh"

aws s3api put-bucket-policy --bucket "$BUCKET" --policy "file://$AQUI/../politicas/s3-bucket-policy-solo-cloudfront.json"
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
aws s3api delete-bucket-website --bucket "$BUCKET"

echo "S3 directo (debe ser 403): $(curl -s -o /dev/null -w '%{http_code}' "https://$BUCKET.s3.us-east-1.amazonaws.com/index.html")"
echo "Sitio (debe ser 200):      $(curl -s -o /dev/null -w '%{http_code}' "https://carlicode.com/?v=$(date +%s)")"
