#!/usr/bin/env bash
# Publica el sitio: build, subida a S3 e invalidacion de CloudFront.
# Los assets llevan hash en el nombre, asi que se cachean un año; index.html y el resto se revalidan siempre.
set -euo pipefail
cd "$(dirname "$0")/.."
# shellcheck source=../infra/aws/scripts/config.sh
source infra/aws/scripts/config.sh

npm run build
aws s3 sync dist/assets "s3://$BUCKET/assets" --cache-control "public,max-age=31536000,immutable"
aws s3 sync dist "s3://$BUCKET" --exclude "assets/*" --delete --cache-control "public,max-age=0,must-revalidate"
aws s3 sync dist/assets "s3://$BUCKET/assets" --delete --cache-control "public,max-age=31536000,immutable"
aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/*" --query Invalidation.Id --output text
