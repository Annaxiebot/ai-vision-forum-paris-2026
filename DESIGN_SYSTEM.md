# AI Vision Forum Paris 2026 - Design System

## Brand Identity

**Event:** AI Vision Forum Paris 2026  
**Theme:** "Agents Shaping Tomorrow"  
**Date:** May 5, 2026  
**Location:** Paris, France (Vacielle Palace)  
**Aesthetic:** Modern, forward-looking, tech-sophisticated, animation-rich

---

## Color Palette

### Primary Colors

**Deep Indigo/Purple** - Representing AI Intelligence
- Primary: `oklch(0.58 0.20 280)` (dark mode)
- Primary: `oklch(0.45 0.15 280)` (light mode)
- Usage: Buttons, links, primary actions, headings

**Electric Cyan/Blue** - Representing Connectivity & Code
- Secondary: `oklch(0.70 0.20 220)` (dark mode)
- Secondary: `oklch(0.65 0.18 220)` (light mode)
- Usage: Accents, hover states, tech elements, code highlights

**Warm Coral/Orange** - Representing Humanity & Warmth
- Accent: `oklch(0.72 0.20 35)` (dark mode)
- Accent: `oklch(0.68 0.18 35)` (light mode)
- Usage: CTAs, highlights, human-focused elements

### Neutral Colors

**Dark Charcoal** (Default Background - Dark Mode)
- Background: `oklch(0.12 0.02 264)`
- Card: `oklch(0.18 0.025 264)`
- Border: `oklch(0.30 0.03 264)`

**Soft Whites** (Light Mode Backup)
- Background: `oklch(0.98 0.005 264)`
- Card: `oklch(1 0 0)`
- Border: `oklch(0.88 0.015 264)`

---

## Typography

### Font Families

**Sans-serif (Headings & Body)**
- Primary: Inter (via Next.js font optimization)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui

**Monospace (Code Elements)**
- Primary: "JetBrains Mono" or "Fira Code"
- Fallback: "Courier New", monospace
- Usage: Code snippets, terminal aesthetic, technical callouts

### Type Scale

**Headings**
- H1 (Hero): 4.5rem / 72px (mobile: 2.5rem)
- H2 (Section): 3rem / 48px (mobile: 2rem)
- H3 (Subsection): 2rem / 32px (mobile: 1.5rem)
- H4 (Card Title): 1.5rem / 24px

**Body Text**
- Large: 1.25rem / 20px
- Regular: 1rem / 16px
- Small: 0.875rem / 14px
- Caption: 0.75rem / 12px

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Spacing System

Based on Tailwind's default scale (4px base):
- xs: 0.5rem / 8px
- sm: 1rem / 16px
- md: 1.5rem / 24px
- lg: 2rem / 32px
- xl: 3rem / 48px
- 2xl: 4rem / 64px
- 3xl: 6rem / 96px

---

## Animation Principles

### Motion Philosophy
- **Smooth & Delightful:** All animations should feel natural, not jarring
- **Performance-first:** 60fps minimum, GPU-accelerated transforms
- **Purposeful:** Every animation should serve a function (guide attention, provide feedback, reveal content)

### Animation Types

**Micro-interactions**
- Hover states: 200ms ease-out
- Button clicks: 150ms ease-in-out
- Toggle switches: 300ms ease

**Page Transitions**
- Fade in: 400ms ease-out
- Slide up: 500ms ease-out with 50px transform
- Stagger reveals: 100ms delay per item

**Hero Animations**
- Particle system: Three.js WebGL (continuous)
- Typewriter effect: 50ms per character
- Scroll-triggered parallax: GSAP ScrollTrigger

**Advanced Effects**
- Code stream: Custom canvas animation
- Agent network visualization: Three.js
- Countdown timer: Flip animation (300ms)

### Easing Curves
- **ease-out:** Default for entrances
- **ease-in:** Exits
- **ease-in-out:** State changes
- **spring:** Playful interactions (Framer Motion spring presets)

---

## Components

### Button Variants

**Primary**
- Background: `bg-primary`
- Hover: `hover:bg-primary/90 hover:glow-primary`
- Text: `text-primary-foreground`

**Secondary**
- Background: `bg-secondary`
- Hover: `hover:bg-secondary/90 hover:glow-secondary`
- Text: `text-secondary-foreground`

**Ghost**
- Background: transparent
- Hover: `hover:bg-accent/10`
- Border: `border border-border`

**Accent (CTA)**
- Background: `bg-accent`
- Hover: `hover:bg-accent/90 hover:scale-105`
- Text: `text-accent-foreground`

### Card Styles

**Default Card**
- Background: `bg-card`
- Border: `border border-border/50`
- Radius: `rounded-lg` (0.625rem)
- Padding: `p-6`
- Shadow: `shadow-lg`

**Interactive Card (Tracks, Speakers)**
- Hover: `hover:border-primary hover:shadow-xl hover:-translate-y-1`
- Transition: 300ms ease-out
- Glow on hover: `hover:glow-primary`

**Glass Morphism Card (Hero Overlays)**
- Background: `bg-card/10 backdrop-blur-xl`
- Border: `border border-white/10`

---

## Visual Motifs

### Agent Network Pattern
- Nodes: Small circles (4-8px diameter)
- Connections: Lines with gradient (primary → secondary)
- Animation: Nodes pulse, connections form/break dynamically
- Colors: Primary, secondary with alpha transparency

### Code Aesthetic
- Syntax highlighting: Use Prism.js or Shiki
- Languages: Rust (Cello project), Python, TypeScript
- Theme: Dark with vibrant keyword colors (cyan for keywords, coral for strings, purple for functions)

### Neural Network Lines
- Background decorative element
- Subtle, low-opacity (10-15%)
- Animated paths drawing in on scroll

### Rust Branding (Cello Section)
- Orange accent: `oklch(0.70 0.22 30)` (Rust official color)
- Gear icon motif
- Terminal/IDE aesthetic

---

## Responsive Breakpoints

```typescript
{
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
```

### Mobile-first Approach
- Design for mobile first, enhance for larger screens
- Stack cards vertically on mobile
- Reduce animation complexity on mobile (respect `prefers-reduced-motion`)
- Touch-friendly targets: minimum 44x44px

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**
- Text on background: minimum 4.5:1
- Large text (18px+): minimum 3:1
- Interactive elements: clear focus indicators

**Keyboard Navigation**
- All interactive elements: focusable & keyboard-accessible
- Skip links for main content
- Logical tab order

**Screen Readers**
- Semantic HTML (nav, main, article, aside, footer)
- ARIA labels for icon buttons
- Alt text for all images
- Live regions for dynamic content (countdown, form feedback)

**Reduced Motion**
- Respect `prefers-reduced-motion` media query
- Disable parallax, complex animations
- Keep essential functionality intact

---

## File Structure

```
app/
├── (marketing)/       # Public-facing pages
│   ├── page.tsx       # Home (hero + overview)
│   ├── theme/         # Four tracks detail
│   ├── cello/         # Cello project spotlight
│   ├── speakers/      # Advisors & speakers
│   ├── schedule/      # Agenda timeline
│   ├── venue/         # Location & logistics
│   ├── register/      # Invitation request
│   └── about/         # AI Vision Forum background
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── hero/          # Hero section + animations
│   ├── tracks/        # Four track cards
│   ├── navigation/    # Header, footer, nav
│   └── effects/       # Particle systems, backgrounds
├── lib/
│   ├── utils.ts       # Utility functions
│   └── constants.ts   # Event details, config
└── globals.css        # Global styles + design tokens
```

---

## Development Guidelines

### Performance Budget
- Lighthouse Performance: >90
- First Contentful Paint: <2s
- Time to Interactive: <3.5s
- Total bundle size: <500KB (gzipped)

### Code Quality
- TypeScript strict mode
- ESLint + Prettier
- Semantic HTML5
- BEM-style class naming (when not using Tailwind utilities)

### Git Commit Convention
```
feat: Add hero particle animation
fix: Resolve mobile nav overflow
style: Update color palette to match brand
docs: Add design system documentation
perf: Optimize Three.js particle count
```

---

## Launch Checklist

- [ ] All pages responsive (mobile, tablet, desktop)
- [ ] Dark mode fully implemented
- [ ] All animations smooth (60fps)
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse scores >90 (Performance, Accessibility, SEO)
- [ ] SEO meta tags complete
- [ ] Open Graph images
- [ ] Analytics integrated
- [ ] Forms validated & tested
- [ ] 404 page designed
- [ ] Loading states for all async content
- [ ] Error boundaries implemented

---

**Last Updated:** 2026-02-10  
**Status:** Foundation Complete - Phase 1 ✓
