#!/bin/bash

# Deploy carlicode.com to S3 + CloudFront
# Requires AWS CLI configured with profile 'claude-code-local'

set -e  # Exit on error

# Configuration
BUCKET="carlicode.com"
DISTRIBUTION_ID="E1LGUCJ0AW0ERL"
AWS_PROFILE="claude-code-local"
BUILD_DIR="out"

echo "🚀 Starting deployment to carlicode.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Step 1: Build the project
echo ""
echo "📦 Step 1: Building Next.js project..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Error: Build directory '$BUILD_DIR' not found"
  exit 1
fi

echo "✅ Build completed successfully"

# Step 2: Sync files to S3
echo ""
echo "☁️  Step 2: Syncing files to S3 bucket: s3://$BUCKET"
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET/" \
  --profile "$AWS_PROFILE" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.json"

# Upload HTML and JSON files with shorter cache
echo ""
echo "📄 Uploading HTML and JSON files with shorter cache..."
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET/" \
  --profile "$AWS_PROFILE" \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html" \
  --include "*.json"

echo "✅ Files synced to S3"

# Step 3: Invalidate CloudFront cache
echo ""
echo "🔄 Step 3: Invalidating CloudFront distribution: $DISTRIBUTION_ID"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --profile "$AWS_PROFILE" \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "✅ Invalidation created: $INVALIDATION_ID"

# Step 4: Wait for invalidation to complete (optional)
echo ""
echo "⏳ Waiting for invalidation to complete..."
echo "   (This may take a few minutes)"

aws cloudfront wait invalidation-completed \
  --profile "$AWS_PROFILE" \
  --distribution-id "$DISTRIBUTION_ID" \
  --id "$INVALIDATION_ID"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Deployment completed successfully!"
echo ""
echo "🌐 Your site is live at:"
echo "   https://carlicode.com"
echo ""
echo "📊 CloudFront distribution:"
echo "   https://d38lhumv826eud.cloudfront.net"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
