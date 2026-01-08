# Plan 5 — CSS Architecture and Base Styling

## Goal

Establish a scalable CSS architecture for the portfolio template by separating concerns across multiple CSS files and defining global design foundations.

## Why

- Enforces a clear separation of concerns
- Improves maintainability and readability
- Matches industry-standard CSS architecture patterns
- Supports consistent design and accessibility across the site

## Scope

Files to create and configure:

- css/index.css
- css/base.css
- css/layout.css
- css/components.css
- css/other.css

Files to modify:

- index.html
- 404.html

## CSS Architecture Overview

### index.css (Entry Point)

- Acts as the main stylesheet
- Imports all other CSS files in a controlled order
- Contains no direct styling rules

### base.css (Foundation Layer)

- CSS custom properties (colors, spacing, typography)
- Global CSS reset / normalize
- Base typography styles (body, headings, paragraphs)
- System font stack configuration
- Global accessibility styles (focus, reduced motion)

### layout.css (Structural Layout)

- Page structure and spacing
- Containers and max-width constraints
- Header and hero layout rules
- Section spacing and alignment

### components.css (Reusable UI Components)

- Buttons and interactive elements
- Reusable interface components
- Component-level accessibility styling

### other.css (Utilities and Enhancements)

- Skip-to-content link styles
- Utility or helper classes
- Optional decorative or non-critical styles

## Accessibility Considerations

- Use of CSS variables to maintain WCAG-compliant contrast
- Visible focus indicators for keyboard navigation
- `prefers-reduced-motion` media query support
- Typography and spacing designed for readability

## Acceptance Criteria

- CSS is split logically across the required files
- index.css imports all CSS modules correctly
- Base typography and design tokens are defined in base.css
- Layout and components are separated into appropriate files
- Styles are applied consistently across index.html and 404.html
- The site renders correctly and remains accessible
