# Plan 11 — Rolling Effect on Button

This plan follows the required two-phase AI workflow:

- Phase 1: Planning (this document)
- Phase 2: Implementation (only after this plan is saved)

---

## Phase 1: Planning

### 1) Define the rolling effect behavior (scope + acceptance criteria)

Goal: Add a “rolling” visual effect to a button.

Decisions to document before coding:

- **Trigger(s):**
  - Primary: `hover`
  - Optional: `focus-visible` (keyboard users)
  - Optional: `active/click` micro-interaction
- **What “rolling” means:**
  - Text roll: label slides/rolls vertically to a second label
  - Icon roll: an icon rotates/rolls in place
  - Background roll: gradient/pattern shifts to simulate rolling
  - (Choose one primary interpretation; avoid mixing effects unless needed.)
- **Direction & distance:**
  - Up/down roll (e.g., translateY by 100% of label height)
  - Or 3D roll (rotateX/rotateY) if your design allows
- **Timing tokens:**
  - fast: 150ms
  - base: 250ms (recommended for hover)
  - easing: `cubic-bezier(...)` or `ease-out` for a snappy feel
- **Accessibility + UX requirements:**
  - Must respect `prefers-reduced-motion` (disable roll or reduce to a simple fade)
  - Must not break button size/layout (no layout shift)
  - Must keep label readable and contrast-compliant during animation
- **Definition of Done:**
  - Roll effect occurs on hover and focus-visible
  - No layout shift (button width/height stable)
  - Reduced motion disables/simplifies animation
  - Works across modern browsers and input types (mouse + keyboard + touch fallback)

### 2) Choose implementation approach + architecture (reusable, consistent)

Implementation strategy:

- Use CSS-only transitions/animations to keep it lightweight and predictable.

Structure:

- Button contains an inner “roller” wrapper with two states:
  - **State A:** default label (or icon)
  - **State B:** hover label (or same label duplicated for continuous roll)
- The wrapper moves/rotates inside a fixed-height clipping area.

Planned CSS architecture:

- Add a dedicated class (example): `.btn--roll`
- Add a child wrapper (example): `.btn__roll-track`
- Add two children (example): `.btn__roll-face.btn__roll-face--a` and `--b`
- Use `overflow: hidden` and `display: inline-block` to clip motion cleanly.
- Only animate `transform` and `opacity` for performance.
- Add a `@media (prefers-reduced-motion: reduce)` override.

Testing plan:

- Verify hover, focus-visible, active states.
- Verify button sizing doesn’t change (no reflow).
- Verify reduced-motion behavior.
- Quick responsiveness check (different label lengths).

---

## Phase 2: Implementation (do only after this plan is saved)

### Step 1: Build the rolling button primitive

- Create/modify the button markup to include the roll track and faces.
- Add the `.btn--roll` styles:
  - stable dimensions
  - overflow clipping
  - baseline typography alignment
- Implement the roll animation:
  - On hover/focus-visible, move the track (e.g., translateY(-100%))
  - Ensure the second face is positioned correctly (stacked vertically)
- Add reduced-motion support:
  - Replace roll with a quick fade or no animation

### Step 2: Integrate + verify across the app

- Apply `.btn--roll` only to intended buttons (avoid global changes).
- Confirm:
  - No layout shift
  - Keyboard focus-visible triggers the effect
  - Touch devices behave acceptably (no stuck hover states)
- Document usage:
  - How to apply `.btn--roll`
  - Any constraints (label length, icon sizing, etc.)
