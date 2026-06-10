---
name: Serene Bloom
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#434842'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#747872'
  outline-variant: '#c3c8c0'
  surface-tint: '#506351'
  primary: '#506351'
  on-primary: '#ffffff'
  primary-container: '#8fa38e'
  on-primary-container: '#283929'
  inverse-primary: '#b7ccb6'
  secondary: '#7c5357'
  on-secondary: '#ffffff'
  secondary-container: '#fdc7cb'
  on-secondary-container: '#795154'
  tertiary: '#685d4e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a99c8b'
  on-tertiary-container: '#3d3427'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e8d1'
  primary-fixed-dim: '#b7ccb6'
  on-primary-fixed: '#0e1f11'
  on-primary-fixed-variant: '#394b3a'
  secondary-fixed: '#ffdadc'
  secondary-fixed-dim: '#eeb9bd'
  on-secondary-fixed: '#301216'
  on-secondary-fixed-variant: '#623c40'
  tertiary-fixed: '#f0e0cd'
  tertiary-fixed-dim: '#d3c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  motto:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The brand personality is rooted in the concept of "safe harbor"—a digital space that feels like a deep breath. It targets individuals seeking mental wellness and professional guidance through a lens of compassion and high-end care. The emotional response is one of immediate relief, tranquility, and blooming hope, encapsulated in the motto: *"Ruhunuzda çiçekler açsın."*

The design style is **Premium Minimalism with Tactile Elegance**. It avoids the clinical coldness of traditional healthcare in favor of a "lifestyle-wellness" aesthetic. It utilizes generous white space (macro-typography), organic watercolor motifs, and a soft, layered depth that feels both professional and intimately warm.

## Colors

The palette is derived directly from botanical watercolor aesthetics:
- **Ivory (#FAF7F2):** The primary canvas color. It is softer and warmer than pure white, reducing eye strain and evoking a sense of calm.
- **Sage Green (#8FA38E):** Used for primary actions and grounding elements. It represents growth and stability.
- **Blush Pink (#E8B4B8):** An accent color for highlights, notifications, and soft UI touches. It adds the feminine, empathetic warmth.
- **Warm Beige (#D4C5B3):** Used for secondary backgrounds and subtle borders.
- **Deep Earth (#4A443F):** The primary text color. A charcoal-brown that provides high legibility without the harshness of pure black.

## Typography

The typography strategy relies on the tension between the classical authority of **Playfair Display** and the modern clarity of **Montserrat**. 

Headlines should be treated as editorial elements. Use `display-lg` for hero sections and the clinic's title. The `motto` style is specifically for the phrase "Ruhunuzda çiçekler açsın," intended to be set in italics with ample surrounding space. Body text uses a generous 1.5 - 1.6 line height to ensure readability and a "breathing" layout.

## Layout & Spacing

The layout follows a **Fixed Centered Grid** for desktop to maintain an intimate, focused experience, transitioning to a fluid single-column for mobile.

The spacing rhythm is intentionally loose. Section vertical padding is set to a luxurious `120px` to allow each "thought" or "service" to stand alone without clutter. Elements within cards should follow an 8px base grid, but macro-elements (like image-to-text ratios) should favor asymmetrical balance, reflecting the natural, non-linear forms of the watercolor florals.

## Elevation & Depth

Hierarchy is established through **Soft Ambient Shadows** and **Tonal Layering**. 
- Surfaces should use very large blur radii (30px-50px) with extremely low opacity (5-8%) using a warm-tinted shadow color (e.g., `#4A443F` at 0.05 alpha).
- Avoid harsh borders. Use subtle value shifts between Ivory and Beige to define areas.
- Floral illustrations should exist on the "bottom-most" layer, often partially tucked under or floating over cards with a slight parallax effect to create a sense of physical immersion.

## Shapes

The shape language is consistently **Rounded**. In accordance with the "ROUND_EIGHT" requirement, the base unit is `0.5rem (8px)`. Large containers and image frames should utilize `rounded-xl (1.5rem)` to emphasize the softness and safety of the environment. Circles and organic blobs are encouraged for background decorative elements.

## Components

### Buttons
- **Primary:** Sage Green background with White text. Rounded corners (8px). Subtle lift on hover.
- **Secondary:** Transparent background with a thin Sage Green border or Warm Beige background.
- **Text:** Deep Earth text with a soft Blush Pink underline that expands on hover.

### Cards
- Background: Pure White.
- Border: None.
- Shadow: Soft ambient shadow.
- Content: Typically starts with a small watercolor floral icon or a Blush Pink label.

### Input Fields
- Background: Ivory (#FAF7F2).
- Border: Bottom-border only in Warm Beige, turning Sage Green on focus.
- Labels: `label-md` in Montserrat, placed above the field.

### Floral Accents
- Minimal watercolor florals (from reference) should be used as "anchors" in corners of sections or as subtle background watermarks at 20% opacity. They should never interfere with text legibility.