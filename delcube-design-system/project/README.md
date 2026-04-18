# Delcube Design System

**Brand:** delcube — a German art toy & decorative collectibles label.
**Site:** [delcube.com](https://delcube.com)
**Flagship product line:** **Tag Bears** — limited-edition, handcrafted, 3D-printed and hand-finished art toy figures with an urban street-art aesthetic.

> _"Dekoration mit deinem persönlichen Touch."_
> — current hero line on delcube.com

---

## About the brand

Delcube is a small-batch, made-in-Germany label that positions itself between **streetwear culture** and **collector-grade art toys**. It is directly inspired by — and competes in the same mental space as — Mighty Jaxx, KAWS and Medicom, but works hard to have its own voice.

The signature product, the **Tag Bear**, is a blank white (or matte black) 3D-printed bear-shaped vinyl toy with "graffiti drips" applied by hand to the head. Drips look like molten spray-paint tags — "RED", "BLU", "Google-colored", etc. Every piece is numbered and signed.

Sub-characters exist within the Tag Bear universe, each with their own backstory written in first-person prose on the site (see `assets/site-character-story.png` — e.g. **Cryptooze**, a black, slick, drippy character with its own lore).

The second pillar of the business is **personalisierte Art Toys / Custom anfragen** — customers can commission a one-off, 3D-printed-and-hand-finished toy based on a name, a word, or an idea.

## Audience & tone

- **Audience:** Urban Millennials & Gen Z. Art-toy collectors, street-art fans, design-conscious consumers. DACH region primary, English-speaking markets secondary.
- **Language:** German primary, English where it fits. Sometimes both on the same page.
- **Tone:** Direct, confident, short. No marketing fluff. No exclamation points. No emoji.
- **Proof:** handmade, numbered, signed, limited — scarcity signals, never price flexing.

## Sources provided by the user

These were uploaded and live in `uploads/` (copied into `assets/` with cleaner names):

| Original upload | Use |
| --- | --- |
| `Delcube_Logo_NEU.svg` | Primary logo mark (black "e"-cube). → `assets/logo-black.svg` |
| `Delcube_Logo_White_single.svg` | White on dark variant. → `assets/logo-white.svg` |
| `Logo_Favicon_White.svg` | Favicon / app icon (white on black square). → `assets/favicon.svg` |
| `Tag-Bear-Schriftzug_V2.svg` | Tag Bear product wordmark ("graffiti drip" style). → `assets/tagbear-wordmark.svg` |
| `7590d4f6-…webp` | Product still — white bear, "RED" drip. → `assets/product-red-bear.webp` |
| `Tag-Bear-Titel_…webp` | Editorial product shot — black bear, multicolor drip, gallery setting. → `assets/product-solo-bear.webp` |
| `Cryptooze-header.webp` | Cryptooze character header. → `assets/product-cryptooze.webp` |
| `Screenshot 2026-04-18 134326.png` | delcube.com homepage hero. → `assets/site-hero.png` |
| `Screenshot 2026-04-18 134427.png` | Tag Bear section hero (dark, graffiti wrap). → `assets/site-tagbear-hero.png` |
| `Screenshot 2026-04-18 134616.png` | Story / product-detail layout. → `assets/site-story-product.png` |
| `Screenshot 2026-04-18 134625.png` | Character backstory layout. → `assets/site-character-story.png` |

No codebase or Figma was attached — every visual decision below is reverse-engineered from the screenshots + brand brief. **Flag:** there is no source for production component code, so the UI kit in `ui_kits/website/` is a high-fidelity recreation, not a mirror of shipped code. If a Figma or repo becomes available, we should diff this kit against it.

---

## Content fundamentals

### Voice

Confident, concise, human. Reads like a designer/founder talking, not a brand team. No superlatives ("amazing!", "revolutionary!"), no startup-speak, no em-dash-riddled hype.

### Mechanics

- **Casing:** Sentence case everywhere. Headings capitalize the first letter only (`Dekoration mit deinem persönlichen Touch.`). **No uppercase + wide letter-spacing.** Ever.
- **Pronouns (DE):** "du / dein" — never "Sie". Informal and direct.
- **Pronouns (EN):** "you / your". Never "we believe…".
- **Punctuation:** Periods close sentences, even in headlines. No exclamation points. No emoji. No ™/® visual noise.
- **Numbers:** Edition numbers written out in full — `Edition 12 / 50`, `handmade in Germany`. Scarcity is the value prop.
- **German-English mix:** Labels like `Store`, `Custom anfragen`, `Community` sit together in the same nav. That's on-brand; don't over-translate.

### Example copy (real, from the site)

- Eyebrow: _personalisierte Art Toys_
- Headline: _Dekoration mit deinem Persönlichen Touch._
- Body: _Kein Stück wie das andere. Wir verwandeln deine Idee in eine limitierte 3D-gedruckte Kunstfigur von Hand bearbeitet, nummeriert und signiert._
- Story (sub-character): _In einer Zeit, in der Nachrichten oft von Konflikten und Unsicherheit geprägt sind, wirkt das eigene Zuhause schnell wie der einzige Rückzugsort…_

### Do / don't (quick reference)

| ✓ Do | ✗ Don't |
| --- | --- |
| "Handgefertigt. Nummeriert. Signiert." | "🔥 EXCLUSIVE DROP 🔥" |
| "Edition 12 / 50" | "Limited edition!!!" |
| "Designer: Janis Langer" | "By our amazing designer…" |
| "Custom anfragen" | "Get in touch with us today" |

---

## Visual foundations

### Colors

- **Core palette:** black (`#0A0A0A`), white (`#FFFFFF`), and a warm-neutral grey scale.
- **Single accent:** **Delcube Yellow `#FFDB00`** — a saturated, sign-paint yellow. Used as a full-surface background for one moment per screen (hero card, tag, CTA), never as a text color on white. Never as a gradient. Never combined with another bright hue.
- **No other brand colors.** Semantic statuses (success/warn/danger) exist but are intentionally muted so they never compete with the accent.
- **Imagery color vibe:** high-contrast, cool-to-neutral product photography. Backgrounds are either pure white studio or moody near-black with a hint of cool purple/grey (see `assets/site-character-story.png`). Occasional graffiti/spray textures in the hero imagery itself, never applied as a UI background texture.

### Typography

- **One family: DM Sans.** Weights 400/500/600/700/800. It carries everything — display, UI, body.
- **DM Mono** for the rare moments that need monospace (edition numbers, SKU).
- **Type rules:**
  - No uppercase + wide letter-spacing. Eyebrows are sentence case.
  - Headlines use tight tracking (`-0.02em`) and weight 700–800.
  - Body is 16 px / `line-height: 1.6`.
  - `text-wrap: pretty` on body, `text-wrap: balance` on display.
- **If DM Sans is unavailable:** fall back to system sans. Do NOT substitute Inter/Roboto — they change the personality.

### Spacing

- 4 px base scale (`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`).
- Generous whitespace. Section vertical rhythm: `96 px` default, `128 px` for hero/section breaks.
- Content max-width: **1280 px** with a fluid `clamp(16px, 4vw, 48px)` gutter.

### Radii (the brand signature)

- **Everything is rounded.** Default `12px`. Buttons & inputs `10px`. Chips/tags `pill`. Hero cards go **big** — `32–48px` (see the yellow hero card in the homepage screenshot).
- Never use sharp (`0`) corners. The only exception is hairline dividers.

### Borders

- `1px` hairline in `--border-1` (`#E7E7E7`) for cards and inputs.
- On dark backgrounds: `rgba(255,255,255,0.10)`.
- Strong/hit borders on buttons: `1.5px`.
- **Rule:** no rounded-corner + colored-left-border accent pattern. (Common AI-slop trope — banned.)

### Shadows & elevation

- Three-tier shadow scale, all **subtle**.
  - `shadow-1` — input/chip rest state.
  - `shadow-2` — default card elevation.
  - `shadow-3` — popovers, modals, featured cards.
- No colored shadows. No glow. No neumorphism.
- Focus ring: `0 0 0 3px rgba(255,219,0,0.45)` — the yellow earns its place here.

### Backgrounds

- **Default:** pure white. Let products breathe.
- **Feature moments:** full-bleed product photography, or a yellow hero card with a rounded right edge that reveals the product image underneath (the signature Delcube homepage layout — see `assets/site-hero.png`).
- **Dark sections:** near-black (`#0A0A0A`) with a very subtle radial vignette (`assets/site-story-product.png` shows this).
- **No:** gradient washes, mesh gradients, repeating patterns, grain filters, glassmorphism.

### Motion & interaction

- **Philosophy:** "immediate interaction feedback, no theatrical animations." Motion is there to confirm intent, never to perform.
- Durations: 120 ms (micro), 180 ms (default), 260 ms (larger transitions).
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` (`ease-out`) for 95% of cases.
- **Hover:** slight darken (`color-mix` 6% with black) on primary surfaces, underline reveal on links.
- **Press:** 1 px translate-y down + shadow reduction. No scale-up bounces.
- **Focus:** yellow 3 px ring (above). Never removed.
- No scroll-hijacking. No parallax. No fade-in-on-scroll cascades.

### Layout rules

- Sticky top nav, `64 px` tall, translucent white with `backdrop-filter: blur(10px)` (see hero screenshot).
- Hero cards CAN extend beyond the content container width on the right (the yellow card bleeds into product photography).
- Grid: 12-col on desktop, 4-col on mobile. Gutter `24 px`.

### Transparency & blur

- Nav background: `rgba(255,255,255,0.85)` + `blur(10px)`.
- Dark overlays on imagery: `rgba(10,10,10,0.5–0.7)`, never tinted.
- No frosted-glass cards floating in the middle of content — reserved exclusively for fixed chrome.

---

## Iconography

- **No installed icon font in the provided materials.** The site screenshots show a very **small, deliberate** set of stroke icons (search, user, cart/bag, chevron-down). They are minimalist, 1.5 px stroke, rounded linecaps, rounded linejoin.
- **Decision:** we adopt **[Lucide](https://lucide.dev)** as the icon library via CDN (`https://unpkg.com/lucide@latest`). Lucide matches the weight, terminals and general geometry of what we see on delcube.com almost exactly (1.5 px stroke, rounded caps). **This is a substitution — flag to the user** if the team has a proprietary icon sheet we should use instead.
- **Size tokens:** 16, 20, 24. Never larger in UI chrome.
- **Color:** inherit `currentColor`. Default `var(--fg-1)`; hover `var(--dc-black)`.
- **Emoji:** **never** used in UI or copy. The brand's playfulness comes from product sculpture and the yellow accent, not emoji.
- **Unicode symbols:** avoid. Use a real icon or plain text.
- The **Tag Bear wordmark** (`assets/tagbear-wordmark.svg`) is a custom lettering asset, not an icon — treat it as a brand asset, use only for Tag Bear contexts.
- **Logo usage:** the Delcube mark is a stylized lowercase `e` (which doubles as an abstract cube with a rounded notch). Min size 24 px. Clearspace = height of the mark ÷ 4. Never rotate, never recolor beyond black or white.

---

## Manifest / index

| Path | What it is |
| --- | --- |
| `README.md` | You are here. |
| `SKILL.md` | Agent-skill front matter for reuse in Claude Code. |
| `colors_and_type.css` | All CSS variables + semantic type classes. **Import this first.** |
| `assets/` | Logos, product photography, site screenshots. |
| `preview/` | Small HTML cards shown in the Design System tab (one concept each). |
| `ui_kits/website/` | Hi-fi recreation of delcube.com components + a demo `index.html`. |

No slides template was provided, so there is no `slides/` folder.

---

## Caveats & open questions

- **Fonts:** DM Sans is loaded from Google Fonts. If Delcube has licensed font files (TTF/WOFF2), drop them in `fonts/` and update `colors_and_type.css` with `@font-face` declarations — the Google Fonts rendering is very close but not identical.
- **Icon set:** Lucide is a substitution for whatever the live site uses. Confirm with the team or share the source.
- **No codebase/Figma:** every component is reverse-engineered from four screenshots. Expect ~90% accuracy; we'll need a pass once source is available.
- **Product photography:** the assets we have are Tag Bear product shots; any other collection (Cryptooze, etc.) will need its own photography treatment documented.
