# Plan 9 — Implement Footer (Portfolio)

## Goal

Add a clean footer matching the reference style:

- Minimal black footer area
- Centered “quick links” to: Home, About, Work (anchor links to sections)
- Bottom-right link to the project’s GitHub repository (external link)
- Footer should look consistent with existing typography (Inter Display) and black/white theme

---

## Scope

### In scope

- Add footer markup to `index.html` (or shared layout file if present)
- Add scoped footer styles to `assets/css/components.css` (or a dedicated footer section inside the file)
- Ensure footer is responsive and accessible
- Add hover/focus states consistent with the site

### Out of scope

- Complex multi-column sitemaps
- Newsletter signup or social widgets (unless later requested)
- Sticky footer behavior beyond normal layout

---

## Requirements

### Functional requirements

- Quick links scroll to page sections:
  - Home → `#home` (or `#top` if home is top)
  - About → `#about`
  - Work → `#work`
- GitHub repository link opens in a new tab with `rel="noreferrer"` (or `noopener noreferrer`)

### UI requirements

- Footer content layout:
  - Center: “home / about / work” (simple)
  - Bottom-right: GitHub repo link (small but readable)
- Visual style:
  - Black background, white text
  - Rounded outline button style available (similar to “BACK TO TOP”) if needed
  - Spacing/padding consistent with the contact section

### Accessibility requirements

- Links have sufficient contrast (white on black)
- Keyboard focus visible (outline or underline)
- Footer uses semantic `<footer>` element
- External link announces itself via `aria-label` (optional but recommended)

### Responsiveness

- Desktop: centered quick links + GitHub link at bottom-right
- Mobile: stack nicely (center links remain centered; GitHub link can center or move below)

---

## Technical Design

### Files to change

- `index.html`
  - Add `<footer class="site-footer">...</footer>` near the bottom (after contact section)
- `assets/css/components.css`
  - Add `.site-footer` styles scoped to footer only

### Markup structure (proposed)

- `<footer class="site-footer">`
  - `<nav class="site-footer__nav" aria-label="Footer quick links">`
    - `<a href="#home">home</a>`, `<a href="#about">about</a>`, `<a href="#work">work</a>`
  - `<a class="site-footer__repo" href="...">github repo</a>`

Layout approach:

- Use CSS grid or position-relative container:
  - Center the nav via grid
  - Place repo link bottom-right via absolute positioning inside footer container
- On small screens, remove absolute positioning and stack/center with flex/grid

---

## Implementation Steps

1. **Create plan file**

   - Save this plan as `./docs/plan9.md`.

2. **Add footer markup**

   - Insert footer HTML at end of `index.html`.
   - Ensure section IDs match the href targets (`#home`, `#about`, `#work`).

3. **Add footer styles**

   - Apply black background, padding, typography
   - Center quick links
   - Position GitHub link bottom-right on desktop
   - Add hover/focus states

4. **Responsive behavior**

   - Add a mobile breakpoint:
     - Center GitHub link under nav or keep right-aligned if it still looks good

5. **Accessibility pass**

   - Verify tab navigation order
   - Confirm visible focus
   - Confirm contrast and external link attributes

6. **QA / Verification**
   - Click quick links → scroll to correct sections
   - Click GitHub link → opens new tab
   - Test desktop + mobile widths

---

## Acceptance Criteria

- Footer matches the intended reference style (minimal, black/white, clean)
- Quick links work correctly and are centered
- GitHub repo link is in the bottom-right on desktop
- Footer is responsive and accessible (keyboard + focus states)
- Plan is documented in `./docs/plan9.md` before implementation changes

---

## Notes / Risks

- If `#home` section does not exist, use `#top` and ensure a matching element exists.
- Absolute positioning for bottom-right link must be disabled on very small screens to avoid overlap.
