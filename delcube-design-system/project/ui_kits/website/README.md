# Delcube Website — UI Kit

Hi-fi recreation of **delcube.com** — a German art-toy & decorative collectibles label.

> **Note:** No codebase or Figma was available. This kit is reverse-engineered from four screenshots + the brand brief. Treat as a close visual approximation, not a code mirror. When source becomes available, diff against it.

## Files

- `index.html` — demo page stitching the kit into a realistic browsing flow (home → product → custom commission).
- `styles.css` — page-level styles for the demo.
- `components.jsx` — all React components (Nav, Footer, Button, Tag, ProductCard, HeroCard, DripBanner, CharacterStory, CustomForm, Newsletter, Cart slide-out).
- `screens.jsx` — the three screens composing `index.html`: HomeScreen, ProductScreen, CustomScreen.

## Covered components

| Component | States |
| --- | --- |
| `<Nav />` | Sticky, blur, cart badge, hover, active link |
| `<Footer />` | Dark, newsletter input, link columns |
| `<Button />` | Primary, accent, secondary, ghost · sm/md/lg |
| `<Tag />` | Solid, outline, accent, status-dot |
| `<HeroCard />` | Yellow variant with curved photo reveal (the homepage signature) |
| `<DripBanner />` | Dark full-bleed Tag Bear hero section |
| `<ProductCard />` | Grid card with edition count + status pill |
| `<ProductDetail />` | Gallery + buy panel + story block |
| `<CharacterStory />` | Dark vignette block with centered prose |
| `<CustomForm />` | Labeled inputs with accent submit |
| `<Newsletter />` | Dark inline signup |
| `<CartDrawer />` | Right slide-over with line items |

## Interactions (fake)

- Click **Store** in the nav or the yellow hero CTA → product page.
- Click **In den Warenkorb** → cart drawer slides in (right side) with the item added.
- Click **Custom anfragen** → custom-commission form screen.
- The header logo returns to home.

None of this is real — no routing, no persistence. It's a clickable visual.
