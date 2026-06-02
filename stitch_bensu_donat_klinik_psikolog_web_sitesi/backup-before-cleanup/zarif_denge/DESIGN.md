---
name: Zarif Denge
colors:
  surface: '#f5fceb'
  surface-dim: '#d5ddcc'
  surface-bright: '#f5fceb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff6e5'
  surface-container: '#e9f0df'
  surface-container-high: '#e3ebda'
  surface-container-highest: '#dee5d4'
  on-surface: '#171d13'
  on-surface-variant: '#43483d'
  inverse-surface: '#2c3227'
  inverse-on-surface: '#ecf3e2'
  outline: '#74796c'
  outline-variant: '#c4c8ba'
  surface-tint: '#486730'
  primary: '#486730'
  on-primary: '#ffffff'
  primary-container: '#87a96b'
  on-primary-container: '#213d0b'
  inverse-primary: '#aed18f'
  secondary: '#7b535c'
  on-secondary: '#ffffff'
  secondary-container: '#fecad4'
  on-secondary-container: '#7a525b'
  tertiary: '#5e5f5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f9f9c'
  on-tertiary-container: '#353634'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9eea9'
  primary-fixed-dim: '#aed18f'
  on-primary-fixed: '#0b2000'
  on-primary-fixed-variant: '#314e1b'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ecb9c4'
  on-secondary-fixed: '#2f121a'
  on-secondary-fixed-variant: '#613c45'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#f5fceb'
  on-background: '#171d13'
  surface-variant: '#dee5d4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max-width: 1120px
---

## Brand & Style

The design system is anchored in **Organic Minimalism** with a focus on therapeutic wellness. It prioritizes the emotional well-being of the visitor by utilizing vast white space, soft botanical motifs, and a refined editorial layout. The aesthetic is "Feminine Modern Wellness"—combining the clinical authority of a healthcare professional with the warmth and approachability of a personal sanctuary.

The visual narrative avoids sharp clinical coldness, instead opting for a "boutique clinic" feel. This is achieved through high-quality serif typography, watercolor textures, and a layout that breathes, ensuring users feel a sense of calm and relief the moment the page loads.

## Colors

The palette is inspired by nature and skin tones to evoke trust and serenity.
- **Primary (Sage Green):** Used for primary actions, success states, and key botanical accents. It represents growth and tranquility.
- **Secondary (Dusty Blush):** Used for supportive elements, soft highlights, and emotional resonance. It adds a human, compassionate touch.
- **Background (Ivory/Cream):** The foundation of the design system. It is warmer than pure white, reducing eye strain and feeling more "premium."
- **Typography (Deep Botanical Olive):** A dark, muted green-grey used for all text to ensure high readability while maintaining a softer contrast than pure black.

## Typography

Typography in the design system is a dialogue between authority and accessibility. 
- **Headings:** **Playfair Display** provides a sophisticated, scholarly, yet graceful presence. It should be used for all Turkish headings to convey the professional "Clinical Psychologist" title. 
- **Body & Interface:** **Montserrat** is chosen for its geometric clarity and warmth. It ensures that medical information and service descriptions are easily digestible.
- **Hierarchy:** Maintain large margins between headings and body text to emphasize the "spacious" layout. Use the `label-md` for small metadata or section eyebrows to add a structured, modern feel.

## Layout & Spacing

The design system utilizes a **Fixed Grid** approach for desktop to create a centered, focused experience that feels intentional and stable.
- **Desktop:** A 12-column grid with a maximum container width of 1120px. 
- **Spaciousness:** Generous vertical spacing (120px+) between sections is mandatory to prevent the user from feeling overwhelmed—mirroring the "breath" of a therapy session.
- **Mobile:** Content reflows to a single column with 24px side margins. Botanical line art should be placed strategically so as not to interrupt the reading flow, often serving as background watermarks or section breaks.

## Elevation & Depth

To maintain a "premium" and "calm" feel, this design system avoids heavy shadows. Depth is communicated through **Tonal Layering** and **Soft Ambient Shadows**:
- **Tiers:** Use subtle variations of the Ivory and Blush colors to stack elements. For example, a card might be a slightly lighter shade of cream than the background.
- **Shadows:** When necessary (e.g., on a booking card), use highly diffused, low-opacity shadows tinted with the Sage Green color (`rgba(135, 169, 107, 0.08)`) to create a soft, ethereal lift rather than a harsh drop-shadow.
- **Botanical Layers:** Watercolor elements should be placed on the lowest z-index, often appearing to "grow" from the edges of the screen behind the content containers.

## Shapes

The shape language is **Soft and Organic**. 
- Elements like buttons and input fields use a `0.5rem` (8px) border radius to feel approachable and safe. 
- Image containers for portraits or clinic photos may use larger, asymmetrical rounding or subtle "leaf" shapes to reinforce the botanical theme.
- Avoid 0px sharp corners, as they can evoke a sense of rigidity or anxiety, which contradicts the therapeutic brand goal.

## Components

- **Buttons:** Primary buttons are solid Sage Green with white or ivory text. Secondary buttons use a Sage Green outline with the Dusty Blush as a subtle hover background.
- **Cards:** Cards should have no borders. Instead, use a very soft Sage-tinted shadow or a slight color shift from Ivory to a lighter cream to define the boundary.
- **Input Fields:** Use a thin 1px border in a muted Olive-grey. The focus state should transition the border to Sage Green with a soft glow.
- **Botanical Accents:** Use line-art icons for services (e.g., "Individual Therapy", "Family Counseling"). These should be rendered in the Deep Botanical Olive.
- **Chips/Badges:** Small, pill-shaped tags in Dusty Blush with dark olive text, used for categories or "Session Available" indicators.
- **Lists:** Use custom bullet points—small watercolor petals or olive leaves instead of standard dots.