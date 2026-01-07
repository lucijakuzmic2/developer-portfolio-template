# Plan 5 — CSS Architecture Foundation

## Goal

Create a CSS foundation for the portfolio template:

- CSS custom properties (colors, spacing, typography)
- CSS reset/normalize
- Base typography styles
- System font stack or web fonts

## Why

- Consistent design tokens (reusable variables)
- Predictable baseline across browsers
- Readable, accessible typography
- Easier future styling (components, sections)

## Scope

Files to create/modify:

- css/base.css (create)
- index.html (add stylesheet link + optional font link)
- 404.html (optional: also link stylesheet for consistent look)

## Design Direction

- Bold, large typography with generous spacing (inspired by modern portfolio templates)
- Dark “Ferrari red” background + off-white text
- Ensure WCAG AA contrast for body text

## Acceptance Criteria

- Variables defined in :root (colors, spacing scale, font sizes)
- Reset applied (box-sizing, margins, media elements, form inheritance)
- Base typography set (font-family, line-height, heading sizes via clamp)
- Page renders consistently and is readable on mobile/desktop
