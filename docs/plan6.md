# Plan 6 - About section

## Phase 1: Planning

### 1. Objective

Create an **About section** that clearly introduces the designer, showcases skills and tools, and optionally includes a profile image with a subtle hover interaction.  
The section should visually align with the existing design system and reference layout (large typography, grid-based structure, minimal dividers).

---

### 2. Scope

The About section will include:

- A brief bio / introduction
- A structured skills & services list
- A skills / technologies grid
- Optional profile image with hover effect

Out of scope:

- Animations beyond basic hover/fade
- CMS or dynamic data loading
- Advanced interactivity (filters, tabs)

---

### 3. Content Structure

#### 3.1 Section Header

- Large section title (e.g. **“About (01)”**)
- Optional dot or counter indicator
- Horizontal divider line beneath header
- Category labels row (e.g. _Approach / Skills / Tools / Profile_)

#### 3.2 Bio / Introduction

- 2–3 lines of text
- Focus on:
  - Who you are
  - What you do
  - Where you’re based / availability

#### 3.3 Skills / Services List

- Vertical list with dividers
- Each row contains:
  - Index number (01, 02, 03…)
  - Skill title (e.g. Art Direction)
  - Short description (1–2 lines)

Example structure:

- `01 / Art Direction / Description`
- `02 / Brand Identity / Description`

#### 3.4 Skills & Technologies Grid

- Grid or flex-wrap layout
- “Pill” or minimal tag style
- Examples:
  - Figma
  - Photoshop
  - Illustrator
  - After Effects
  - HTML / CSS

#### 3.5 Optional Profile Image

- Profile image displayed in the left column
- Hover interaction:
  - Image slightly scales
  - Overlay fades in
  - Optional text (e.g. “Available for projects”)

---

### 4. Layout Strategy

#### Desktop

- Two-column grid:
  - Left: Bio + profile image
  - Right: Skills/services list
- Large whitespace and strong hierarchy
- Dividers to structure content

#### Tablet

- Maintain two columns but reduce gaps
- Skills descriptions wrap naturally

#### Mobile

- Single-column layout
- Order:
  1. Title
  2. Bio
  3. Profile image
  4. Skills list
  5. Tools grid

---

### 5. Design Constraints

- Must reuse existing design tokens:
  - Colors
  - Fonts
  - Spacing scale
- Typography must match hero + services sections
- No horizontal overflow at any breakpoint
- Accessible contrast for text on dark backgrounds

---

### 6. Technical Constraints

- Pure HTML + CSS
- No JavaScript required
- Images served via ImageKit
- Responsive using CSS Grid / Flexbox only
- Respect `prefers-reduced-motion`

---

### 7. Success Criteria

- Clear visual hierarchy
- Consistent spacing and typography
- Matches reference aesthetic
- Fully responsive
- Easy to extend later (new skills, tools, or content)

---

## Phase 2: Implementation (Deferred)

To be started **only after Phase 1 approval**.

Planned steps:

1. Create HTML structure for About section
2. Add layout styles (grid, spacing)
3. Style skills list with dividers
4. Implement tools grid
5. Add optional profile hover effect
6. Add responsive breakpoints
7. QA and polish

---

## Notes

- Copy should be finalized before styling to avoid rework
- Profile image is optional and can be added later without layout changes
