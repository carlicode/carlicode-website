#!/usr/bin/env bash
# Sube cloudfront/viewer-request.js a la CloudFront Function, la prueba con los eventos
# de cloudfront/eventos/ y solo si todos pasan la publica (LIVE).
set -euo pipefail
AQUI="$(cd "$(dirname "$0")" && pwd)"
# shellcheck source=config.sh
source "$AQUI/config.sh"
CF="$AQUI/../cloudfront"

etag=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query ETag --output text)
etag=$(aws cloudfront update-function --name "$FUNCTION_NAME" --if-match "$etag" \
  --function-config 'Comment=www a carlicode.com y rutas SPA a /index.html,Runtime=cloudfront-js-2.0' \
  --function-code "fileb://$CF/viewer-request.js" --query ETag --output text)

for evento in "$CF"/eventos/*.json; do
  echo "Probando $(basename "$evento")"
  resultado=$(aws cloudfront test-function --name "$FUNCTION_NAME" --if-match "$etag" --stage DEVELOPMENT \
    --event-object "fileb://$evento" --query 'TestResult.[FunctionErrorMessage,FunctionOutput]' --output json)
  if [ "$(jq -r '.[0] // ""' <<<"$resultado")" != "" ]; then
    echo "Error en la funcion: $resultado" >&2
    exit 1
  fi
  jq -r '.[1] | fromjson | (.response // .request) | {statusCode, uri, location: .headers.location.value}' <<<"$resultado"
done

aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$etag" --query 'FunctionSummary.Status' --output text
