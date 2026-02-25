# NovaList Website

AI-powered growth partner for UK service businesses.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (planned)
- **Domain:** novalist.co

## Setup

```bash
cd projects/novalist/website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx          — Root layout with nav + footer
  page.tsx            — Homepage
  services/
    page.tsx          — Services overview
    content-engine/page.tsx
    lead-generation/page.tsx
    automation/page.tsx
  about/page.tsx      — About / Founder
  contact/page.tsx    — Discovery call booking
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  ServiceCard.tsx
  CTA.tsx
  TestimonialPlaceholder.tsx
```

## Deployment
1. Chief to create GitHub repo
2. Connect to Vercel
3. Point novalist.co DNS to Vercel
4. Done — auto-deploys on push

## Brand
- **Colours:** Deep navy (#0F172A), Electric blue (#3B82F6), White (#FFFFFF)
- **Font:** Inter (clean, professional)
- **Voice:** Expert but approachable. Practical, not hype. UK-focused.
