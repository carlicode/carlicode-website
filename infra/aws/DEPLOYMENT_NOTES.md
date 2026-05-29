# Deployment Notes - Portfolio Minimalista

## CloudFront Configuration Update (May 29, 2026)

### Problem
CloudFront was returning 403 errors when accessing `/es/` or `/en/` because:
- S3 "directories" return 403 when accessed without `index.html`
- CloudFront's `DefaultRootObject` only applies to the root domain, not subdirectories

### Solution (Final - Using CloudFront Function)
Created a CloudFront Function that rewrites URLs to append `/index.html` to directory requests.

**Why not CustomErrorResponses?**
- CustomErrorResponses caused redirect loops because the root `/index.html` redirects to `/es/`
- CloudFront Functions run at edge and rewrite the request before it hits S3
- More efficient and no redirect loops

### CloudFront Function
Location: `infra/aws/cloudfront-function.js`

```javascript
// Rewrites /es/ → /es/index.html
// Rewrites /en → /en/index.html
```

Function ARN: `arn:aws:cloudfront::447924811196:function/carlicode-index-rewrite`

### Old Solution (Deprecated)
~~Added CustomErrorResponses to CloudFront distribution `E1LGUCJ0AW0ERL`:~~

```json
{
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      {
        "ErrorCode": 403,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 300
      },
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      }
    ]
  }
}
```

### What This Does
- When CloudFront gets a 403 from S3, it serves `/index.html` with 200 status
- When CloudFront gets a 404, it serves `/404.html` with 404 status
- This allows SPA-style routing where `/es/` serves `/es/index.html`

### Deployment Steps Used
1. Get current CloudFront config and ETag
2. Update `CustomErrorResponses` in config
3. Apply update with `aws cloudfront update-distribution`
4. Create cache invalidation for `/*`
5. Wait for distribution to deploy (~5-10 minutes)

### Future Deployments
The deploy script (`scripts/deploy-to-s3.sh`) already handles:
- Building Next.js
- Syncing to S3 with proper cache headers
- Creating CloudFront invalidations

No need to update CloudFront config again unless changing error handling.

### Verification
```bash
# Should return 200
curl -I https://carlicode.com/es/

# Should return 200 (redirects to /es)
curl -I https://carlicode.com/

# Should return 404
curl -I https://carlicode.com/non-existent-page/
```

## Architecture Summary

```
User → CloudFront (E1LGUCJ0AW0ERL)
         ↓
       S3 (carlicode.com bucket)
         ↓
       Route53 (carlicode.com zone)
```

**SSL**: ACM certificate in us-east-1 for `carlicode.com` and `*.carlicode.com`
