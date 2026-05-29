# 🎨 carlicode.com - Portfolio Minimalista

Portfolio personal de **Carli Code** - AI Engineer, Content Creator y Speaker.

[![Deploy Status](https://img.shields.io/badge/deploy-live-brightgreen)](https://carlicode.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black)](https://nextjs.org/)
[![AWS S3](https://img.shields.io/badge/AWS-S3-orange)](https://aws.amazon.com/s3/)
[![CloudFront](https://img.shields.io/badge/AWS-CloudFront-orange)](https://aws.amazon.com/cloudfront/)

## 🌐 URLs

- **Producción**: [https://carlicode.com](https://carlicode.com)
- **Blog**: [https://carlicode.com/es/blog](https://carlicode.com/es/blog)
- **CV**: [https://carlicode.com/es/cv](https://carlicode.com/es/cv)
- **Content**: [https://carlicode.com/es/content](https://carlicode.com/es/content)
- **English**: [https://carlicode.com/en](https://carlicode.com/en)

## ✨ Features

- 📝 **Blog section** - Artículos sobre IA, programación y tech
- 🌐 **Bilingual** - Español e Inglés
- 📧 **Contact form** - Conectado a Formspree
- 🎨 **Minimalist design** - Rosado (#FF6B9D), negro, grises y blanco
- ⚡ **Static export** - Fast loading con S3 + CloudFront
- 📱 **Fully responsive** - Mobile-first design

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production (static export)
npm run build

# Output in out/ directory
```

### Deployment

```bash
# Deploy to AWS S3 + CloudFront
npm run deploy:build

# Or just deploy existing build
npm run deploy
```

## 📂 Project Structure

```
carlicode-website/
├── app/
│   ├── [lang]/              # Bilingual routes (es/en)
│   │   ├── page.tsx         # Landing page
│   │   ├── blog/            # Blog section
│   │   ├── cv/              # CV/Experience
│   │   ├── content/         # Content & social media
│   │   └── asesorias/       # Consulting services
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   └── minimal/             # Minimal design components
│       ├── MinimalNav.tsx
│       ├── MinimalHero.tsx
│       ├── MinimalContact.tsx
│       └── minimal.css      # Component styles
├── content/
│   ├── dictionaries.ts      # i18n translations
│   ├── projects.ts          # Project data
│   └── cv.ts                # CV data
├── infra/
│   └── aws/                 # Infrastructure as code
│       ├── cloudfront-function.js
│       ├── DEPLOYMENT_NOTES.md
│       └── exports/         # AWS config exports
├── public/                  # Static assets
├── scripts/
│   └── deploy-to-s3.sh     # Deployment script
├── portfolio.json           # Complete portfolio data
└── next.config.ts           # Next.js config (static export)
```

## 🎨 Design System

### Colors

```css
--color-bg: #000000          /* Black background */
--color-text: #FFFFFF        /* White text */
--color-accent: #FF6B9D      /* Pink accent */
--color-border: rgba(255, 255, 255, 0.08)
```

### Typography

- **Headings**: Space Grotesk (Google Fonts)
- **Body/Mono**: JetBrains Mono (Google Fonts)

### Components

- `MinimalNav` - Navigation bar
- `MinimalHero` - Hero section with photo
- `MinimalProjects` - Project showcase
- `MinimalContact` - Contact form (Formspree)
- `MinimalFooter` - Footer

## 🏗️ Infrastructure

### AWS Stack

- **S3**: Static hosting (`carlicode.com` bucket)
- **CloudFront**: CDN distribution (`E1LGUCJ0AW0ERL`)
- **CloudFront Function**: URL rewriting for SPA routing
- **Route53**: DNS management
- **ACM**: SSL certificate

### CloudFront Function

Automatically rewrites directory URLs to serve `index.html`:

```javascript
/es/ → /es/index.html
/es/blog/ → /es/blog/index.html
```

Function ARN: `arn:aws:cloudfront::447924811196:function/carlicode-index-rewrite`

## 📝 Content Management

### Blog Posts

Blog posts are currently hardcoded in `app/[lang]/blog/page.tsx`. To add real blog posts:

1. Create a `content/blog/` directory
2. Add Markdown or MDX files
3. Use a library like `next-mdx-remote` or `contentlayer`
4. Update the blog page to read from the new source

### Portfolio Data

All portfolio data is in `portfolio.json`:

```json
{
  "personal": { ... },
  "projects": [ ... ],
  "experience": [ ... ],
  "skills": [ ... ],
  "certifications": [ ... ],
  "talks_and_videos": [ ... ]
}
```

## 🔧 Configuration

### Next.js Config

```typescript
// next.config.ts
export default {
  output: 'export',        // Static export for S3
  trailingSlash: true,     // Required for S3 hosting
  images: {
    unoptimized: true,     // No image optimization for static export
  },
};
```

### Environment Variables

```bash
# Contact form
NEXT_PUBLIC_FORMSPREE_ENDPOINT=mrbqpbqb

# Site URL (optional)
NEXT_PUBLIC_SITE_URL=https://carlicode.com
```

## 🚀 Deployment Process

1. **Build**: `npm run build` generates static files in `out/`
2. **Sync to S3**: Upload files with proper cache headers
3. **Invalidate CloudFront**: Clear CDN cache
4. **Wait**: CloudFront propagates changes (~2-5 minutes)

The `scripts/deploy-to-s3.sh` script automates all steps.

### Manual Deployment

```bash
# Build
npm run build

# Sync to S3
aws s3 sync out/ s3://carlicode.com/ \
  --profile claude-code-local \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html"

# Sync HTML files (shorter cache)
aws s3 sync out/ s3://carlicode.com/ \
  --profile claude-code-local \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html"

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id E1LGUCJ0AW0ERL \
  --paths "/*"
```

## 📚 Documentation

- **AWS Infrastructure**: `infra/aws/DEPLOYMENT_NOTES.md`
- **CloudFront Function**: `infra/aws/cloudfront-function.js`
- **AWS Exports**: `infra/aws/exports/`

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Fonts**: Space Grotesk, JetBrains Mono
- **Forms**: Formspree
- **Hosting**: AWS S3 + CloudFront
- **DNS**: AWS Route53
- **SSL**: AWS Certificate Manager

## 📄 License

© 2026 Carli Code. All rights reserved.

## 🤝 Contact

- **Email**: carli.f.roman@gmail.com
- **TikTok**: [@carli.code](https://www.tiktok.com/@carli.code) (145K followers)
- **LinkedIn**: [carlicode](https://www.linkedin.com/in/carlicode/)
- **GitHub**: [carlicode](https://github.com/carlicode)

---

**Made with code and ☕ from Latam**
