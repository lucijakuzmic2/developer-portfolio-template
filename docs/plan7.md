# Projects Grid — Development Plan (Phase 1: Planning)

## Goal

Build a **Projects** section that meets the assignment requirements:

- Uses **CSS Grid or Flexbox** for layout
- Shows **project cards with images**
- Includes **hover effects or modals** to reveal project info
- Provides **links to a live demo** and **code repository** for each project

We’ll start with a clean, accessible, “basic but solid” structure, then iterate on layout, typography, spacing, and motion to match your site’s style.

---

## Inputs / Data

For each project we need:

- `title`
- `category` or `type` (optional but nice)
- `short description`
- `image URL` (ImageKit)
- `live demo URL`
- `repo URL`
- `tools/stack` (optional tags)

We’ll store these in HTML first (static), and later you can optionally move them into a JS array and render them.

---

## UX / Interaction

### Hover reveal (default)

- Card shows image by default
- On hover/focus:
  - dark overlay fades in
  - title + short description appear
  - buttons/links appear (Demo / Code)

### Accessibility requirements

- Whole card must be keyboard reachable (`<a>` or `tabindex` + focus styles)
- Hover behavior must also work on **focus**
- Images must have `alt` text
- Links must be clear and have visible focus outlines

### Optional modal (Phase 2+)

- If you decide you want modals later, we’ll add:
  - `dialog` element or a simple overlay component
  - ESC to close, click outside to close
  - focus trap

---

## Visual System (match your site)

- Background: your existing dark red theme
- Cards:
  - rounded corners (match hero card)
  - subtle border with low opacity
  - image cover (no stretching)
  - smooth hover transitions (opacity/transform)

---

## Layout Decisions

### Grid behavior

- Desktop: 2–3 columns depending on width
- Tablet: 2 columns
- Mobile: 1 column

### Recommended CSS

- `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));`
- `gap: clamp(1rem, 2.5vw, 2rem);`

---

## File/Code Plan

### Phase 2 implementation will add:

1. **HTML section**
   - Section header (Projects)
   - Grid wrapper
   - Card markup repeated per project
2. **CSS**
   - Grid layout
   - Card base styles
   - Overlay hover/focus reveal
   - Buttons/links styles
   - Responsive adjustments
3. **QA checklist**
   - Check keyboard navigation
   - Check hover + focus
   - Check image loading
   - Validate links

---

## Acceptance Criteria

- Projects section renders in a grid using CSS Grid/Flexbox
- Each card has an image + hover/focus info reveal
- Each project contains **two links**: Live Demo + Code Repo
- Works on mobile (1 column)
- No layout shifts / overflow

---

## Phase 2 Next Step

Create the baseline **Projects HTML + CSS** (no fancy filtering yet). After that, we fine-tune:

- card size, spacing, typography
- hover animation style
- optional tags, filtering, or modal details
