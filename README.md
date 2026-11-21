# Bangkok Beasts 2026 — Static Archive (`bkb-2026-static`)

Compiled 100% static archive of the **Bangkok Beasts 2026: Furbidden Vault** event website, built for zero-backend hosting on **Cloudflare Pages**.

## Included Pages
- `/` — Landing & Hero
- `/event` — Event Overview, 2026 Ticket Tiers & Venue Info
- `/event/schedule` — 2-Day Convention Schedule
- `/event/map` — Interactive Venue Map
- `/event/dealers` — Frozen 2026 Beast's Den Directory (39 dealers, localized WebP assets)
- `/event/art-submission` — Frozen 2026 Community Art Gallery (24 artworks, localized WebP assets)
- `/event/con-op` — Partner Furry Conventions
- `/event/memories` — Event Photo Archive
- `/tos` — Terms of Service & Code of Conduct
- `/sitemap.xml` & `/robots.txt`

## Cloudflare Pages Deployment
1. Connect this repository to **Cloudflare Pages**.
2. Set **Build command** to *(none / empty)* and **Build output directory** to `/`.
3. Security and immutable asset cache headers are configured in `_headers`.
