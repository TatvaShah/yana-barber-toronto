# ClaudAura demo site starter

Next.js 16 (App Router) + TypeScript + Tailwind v4. One prospect site = one edited `site.config.ts` plus images. Do not touch components unless something is truly broken.

## What you get

- Sections (each hides itself when its config is empty): hero (variants `split`, `full`, `centered`), highlights strip, menu, products or services (`cards` or `list`, stacked or as category tabs, prices optional, dietary icons, per category notes, service durations), gallery (masonry), local reels (mp4 plus poster), embedded Instagram posts (official iframe), about, reviews, how to order with copy and DM button, FAQ, contact and location (map only when an address is given), footer with the small "Website by ClaudAura" credit linking https://www.claudaura.ca.
- Theme presets in `lib/themes.ts`: `bakery-pastel`, `warm-food`, `floral-elegant`, `salon-chic`, `barber-bold` (dark), `barber-bold-light`, `catering-events`. Pick one in `theme.preset`, optionally override any color, font, or radius. Which preset for which business: see the table in `fill-config.md`.
- Font rule: headings use clean faces only (DM Serif Display, Playfair Display, Cormorant, Anton, Montserrat, Outfit, Inter). Never Fraunces or other swashy display serifs (the old `fraunces` key now maps to Playfair Display). Script fonts (Great Vibes, Parisienne, Dancing Script) are only for the wordmark, via `theme.wordmark: "script"`.
- SEO: title, description, Open Graph and Twitter card tags with `metadataBase` from `siteUrl`, a static 1200x630 share image `public/og.jpg` under 200 KB (WhatsApp and Instagram skip previews over about 300 KB). `npm run og` builds the site, renders the card design from `app/og-card` (name, tagline, accent color, `seo.ogPhoto`) and saves it as a compressed JPEG with `scripts/make-og.mjs`; `publish.sh` runs it automatically and refuses to publish if the file is 200 KB or more. Metadata points og:image and twitter:image at the absolute `siteUrl/og.jpg` with type, width and height. Do not add `app/opengraph-image.*` or `app/twitter-image.*`, they would override it. Also: favicon and apple icon generated from `logo` (monogram fallback), JSON LD local business, robots and sitemap.
- Build guard: the build fails if any copy in `site.config.ts` contains two hyphens in a row.

## Recipe (about 15 minutes per site)

1. Copy the kit: `bash /workspace/claudaura-prospects/starter/scripts/new-site.sh <slug>` then `cd /workspace/<slug>`.
2. Fill `site.config.ts` from the lead entry in `/workspace/claudaura-prospects/leads/<date>.json` (field map in `fill-config.md` next to this README). Pick the preset that fits the category.
3. Assets: save the logo (IG profile picture) as `public/images/logo.png` (square PNG or JPG, 256px or more). Save 6 to 12 post images as `public/images/*.webp` or `.jpg` (do not hotlink Instagram CDN links, they expire). Make a 480x630 JPG crop of the best photo as `public/images/og-photo.jpg`. Optional: 2 or 3 reels as mp4 with poster images.
4. Build: `npm install && npm run build`. Fix only config errors.
5. Share image: `npm run og` (also run by publish.sh), check `public/og.jpg` looks right and is under 200 KB, and commit it.
6. Publish: `bash scripts/publish.sh <slug>` (creates public repo TatvaShah/<slug>, pushes main, creates and deploys the Vercel project, prints title, og image, and saves a screenshot). Or use your usual PR flow plus `deploy.sh`.
7. Record the result in `ready/<date>.json` as before.

Rules: facts only from the lead file, the IG bio, and post captions. Never invent hours, addresses, prices, or reviews; leave those fields empty and the section disappears. No double hyphens in copy. Canadian spelling.

## Compact builder prompt (paste into a cheap cloud agent or box executor)

```
Build a ClaudAura demo site for lead <slug> using the starter kit. Do not design or write a site from scratch.

1. Run: bash /workspace/claudaura-prospects/starter/scripts/new-site.sh <slug> ; cd /workspace/<slug>
2. Read only the <slug> entry in /workspace/claudaura-prospects/leads/<date>.json and /workspace/claudaura-prospects/starter/fill-config.md.
3. Quick Instagram check (profile bio, profile picture, 6 to 12 recent posts and captions, 1 to 3 post URLs to embed). No other research.
4. Edit ONLY site.config.ts and files in public/images. Pick the theme preset from the table in fill-config.md (bakery-pastel, warm-food, catering-events, floral-elegant, salon-chic, barber-bold, barber-bold-light); set accent color from the logo if obvious. Save logo as public/images/logo.png, post photos as public/images/*.webp or .jpg, and a 480x630 crop as public/images/og-photo.jpg. Never hotlink Instagram CDN URLs.
5. Facts only: never invent hours, addresses, prices, or reviews; leave unknown fields empty so sections hide. No double hyphens in any copy. Keep the ClaudAura footer credit.
6. npm install && npm run build must pass. Then bash scripts/publish.sh <slug> and report the live URL, repo URL, and any facts used.
```
