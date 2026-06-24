---
name: Tabanco Olé Tú
description: Elegant bilingual brand site for a family-run tabanco in Sevilla.
colors:
  bg-main: "#FAF8F3"
  bg-soft: "#F6F4EC"
  bg-card: "#FFFDF8"
  bg-muted: "#F1EFE7"
  green-dark: "#0A4F36"
  green-ink: "#173C2C"
  green-muted: "#7F927B"
  green-soft: "#B9C5B1"
  green-faded: "#D7DED2"
  grape-main: "#A9A4D8"
  grape-light: "#C9C5EB"
  grape-dark: "#7671A6"
  wine-gold: "#D9B66F"
  beige-line: "#E8D7B8"
  beige-soft: "#EFE4CF"
  sand: "#D8C39A"
  grain-light: "rgba(23, 60, 44, 0.08)"
  grain-warm: "rgba(216, 195, 154, 0.25)"
  shadow-soft: "rgba(10, 79, 54, 0.08)"
typography:
  display:
    fontFamily: "Baskerville, Georgia, serif"
    fontSize: "clamp(3.6rem, 9vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0"
  body:
    fontFamily: "Optima, Candara, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
rounded:
  sm: "2px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "clamp(4.75rem, 10vw, 8.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.green-dark}"
    textColor: "{colors.bg-card}"
    rounded: "{rounded.pill}"
    padding: "0 1.35rem"
    height: "3.05rem"
  button-secondary:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.green-ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.35rem"
    height: "3.05rem"
---

# Design System: Tabanco Olé Tú

## 1. Overview

**Creative North Star: "The Cream Botanical Tabanco Label"**

The site should feel like a premium Andalusian wine-bar label placed on warm cream paper: the title mark leads, deep forest green gives structure, and sage/lavender botanical artwork sets the mood without turning the page into a photo collage.

**Key Characteristics:**
- Warm off-white botanical background across the full page.
- Deep tabanco green for navigation, calls to action, and important text.
- Lavender grape accents and pale sherry tones for decoration.
- The title artwork appears centered in the hero as the primary brand signal.
- The transparent logo appears as a compact header mark, never as a card.
- Supplied wine, grape, olive, tapa, and vine illustrations placed only where they support the section.

## 2. Colors

The palette is warm, botanical, and wine-led. Cream is the page atmosphere; green is the brand structure; lavender and gold are accents.

### Backgrounds
- **Warm Off-White:** Main page color.
- **Soft Beige Tint:** Section rhythm and subtle surfaces.
- **Card Cream:** Clean controls and framed content.

### Greens
- **Tabanco Green:** Primary actions and nav emphasis.
- **Forest Ink:** Main text and dark panels.
- **Muted Sage:** Leaves, borders, and soft botanical support.

### Wine / Grape
- **Lavender Grape:** Decorative grapes and occasional accent.
- **Muted Purple Shadow:** Hover and secondary emphasis.
- **Sherry Gold:** Fine lines, underlines, and wine-toned details.

### Named Rules

**The Quiet Ornament Rule.** Decorations may sit behind text only at 10-20% opacity. Full-opacity illustrations belong in empty corners or outside text flow.

**The Cream Background Rule.** The full page should use the warm off-white/radial botanical background, not a plain white canvas.

## 3. Typography

**Display Font:** Baskerville with Georgia fallback  
**Body Font:** Optima with Candara and Segoe UI fallback

The pairing should feel like a printed wine label: traditional enough for the tabanco, simple enough for a modern bilingual site.

### Hierarchy
- **Display** (400, `clamp(3.6rem, 9vw, 5.9rem)`, 0.92): Hero brand name only.
- **Headline** (400, `clamp(2.25rem, 5vw, 4.6rem)`, 1): Major section claims.
- **Title** (400, `clamp(1.45rem, 2.5vw, 2rem)`, 1.08): Offer item titles.
- **Body** (400, `1rem`, 1.65): Main copy, capped around 65ch.
- **Label** (800-900, `0.76rem-0.9rem`): Navigation, controls, and small section labels.

## 4. Layout

Use full-width atmosphere with constrained reading zones. The header is a full-width sticky bar. The hero is a full-width centered composition: title artwork first, promise underneath, and botanical decoration kept behind or around the content.

### Named Rules

**The Full-Width Hero Rule.** The first viewport must use the full browser width and center the supplied title artwork. Do not make the hero feel like a boxed logo card or split it with unrelated imagery.

**The Full Header Rule.** The navbar must span the viewport background while the logo, links, reservation CTA, and language switch stay aligned to the page container.

**The Section-Relevance Rule.** Menu illustrations belong with the menu, reservation illustrations belong with contact, and ambience photography belongs with the about/story section.

## 5. Components

### Navigation
- **Style:** Full-width cream sticky bar, centered inner grid.
- **Logo:** Plain mark, no circle, no decorative container.
- **Links:** Text links with a small sherry-gold underline on hover/focus.
- **Reserve CTA:** Deep green pill with direct phone link.
- **Mobile:** Nav wraps into a second row; number hides before crowding.
- **Social:** Instagram, Facebook, and Tripadvisor appear as compact icon links in the navbar.

### Buttons
- **Shape:** Full pill for tap clarity.
- **Primary:** Tabanco Green fill with card-cream text.
- **Secondary:** Light cream fill, sage border, green text.
- **Hover / Focus:** Small lift and clear focus outline.

### Hero
- **Style:** Full-width centered title-lockup composition on warm cream.
- **Logo:** Supplied title image in the hero, compact transparent mark in the header.
- **Decoration:** Botanical illustrations may sit low-opacity around the centered content.
- **Avoid:** No hero photo panel, no logo circle, no isolated logo card.

### Reservation Panel
- **Shape:** Squared label panel with 8px corners.
- **Color:** Cream/soft beige surface, green heading and primary phone action.
- **Behavior:** Phone links are tappable and never wrap awkwardly; social links open externally.

### Map Frame
- **Style:** Bordered cream frame with the embedded Google map.
- **Behavior:** Lazy-loaded iframe with accessible title.

## 6. Do's and Don'ts

### Do:
- **Do** keep Spanish as the default content language.
- **Do** use the supplied botanical decoration assets.
- **Do** keep decorations quiet around text and stronger in empty corners.
- **Do** preserve the logo as a plain first signal.
- **Do** make reservation/phone contact easy to find.

### Don't:
- **Don't** return to the blue hero slab treatment.
- **Don't** put the logo inside a circle.
- **Don't** put the logo on a white rectangle or large centered card.
- **Don't** reintroduce the hero photo unless the user explicitly asks for it.
- **Don't** use plain white as the main page atmosphere.
- **Don't** let decorative assets sit over important text at full opacity.
- **Don't** place illustrations in sections where they have no meaning.
- **Don't** use generic restaurant templates, glassmorphism, oversized rounded cards, or noisy collages.
