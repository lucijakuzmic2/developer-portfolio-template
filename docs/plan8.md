# Plan 8 — Implement Contact Form (GitHub Pages)

## Goal

Implement a contact section that includes:

1. A large “get in / touch” headline (no image)
2. A light-styled contact form (Name, Email, Message, Submit) matching the reference layout
3. A dark contact details block (email/based in/available + pages/socials)
4. A large “big name” footer text

Because the site is hosted on GitHub Pages (static), the form must submit via a hosted form service.

---

## Hosting Constraint (GitHub Pages)

GitHub Pages does not run server code. Therefore:

- The form cannot submit to a custom backend unless it’s hosted elsewhere.
- The form should use a service like **Formspree** (recommended), Getform, Basin, etc.

Decision: use **Formspree** for submission.

---

## Scope

### In scope

- Update `index.html` contact section markup.
- Add scoped styles to `assets/css/components.css`.
- Configure the form to submit via **Formspree** endpoint.
- Add basic spam protection (honeypot) and clear success/error messaging.
- Optional JS: copy-to-clipboard button for email.

### Out of scope

- Building a backend server.
- Storing messages in a database.
- Advanced anti-bot systems (beyond honeypot/service protections).

---

## Requirements

### Functional requirements

- Inputs: name, email, message (required).
- Email must be valid format.
- Submits to Formspree endpoint using POST.
- User receives feedback:
  - success confirmation (message sent)
  - error confirmation (message failed, try again)

### UI requirements

Order of content:

1. Big “get in / touch” headline
2. Light form block (like reference)
3. Dark info block (contact details + pages/socials)
4. Big name at bottom

Responsive:

- Desktop: email-left / form-right
- Mobile: stacked

### Accessibility requirements

- Each input has an accessible label (visible or visually-hidden).
- Visible focus styles for keyboard navigation.
- Logical tab order and button operable via keyboard.

### Spam considerations

- Add a “honeypot” hidden input (`_gotcha`) supported by Formspree.
- Avoid exposing secrets (no private keys needed for Formspree basic usage).

---

## Technical Design

### Files to change

- `index.html`
  - Replace current placeholder section with final structure.
  - Add Formspree-compatible form attributes and field names.
- `assets/css/components.css`
  - Add scoped styles for the contact section (e.g., `.contact-stack`).
- `assets/js/main.js` (optional)
  - Copy email button behavior
  - Async submit UX (disable button, show success/error)

### Formspree integration

- Create a Formspree form and obtain endpoint:
  - `https://formspree.io/f/<form_id>`
- HTML form configuration:
  - `method="POST"`
  - `action="https://formspree.io/f/<form_id>"`
  - inputs must have `name="name"`, `name="email"`, `name="message"`
- Optional recommended hidden fields:
  - Honeypot: `<input type="text" name="_gotcha" style="display:none">`
  - Subject line: `<input type="hidden" name="_subject" value="New portfolio message">`

### Success behavior options

- Option A (no JS): use Formspree redirect:
  - `<input type="hidden" name="_next" value="https://<yourdomain>/thanks.html">`
  - Add a `thanks.html` page to repo.
- Option B (JS): intercept submit, POST via fetch, show inline success message.

Decision: start with **Option B (JS)** to keep the user on-page and match modern UX.
Fallback: if JS fails, normal POST still works.

---

## Implementation Steps

1. **Document plan**

   - Save this file as `./docs/plan8.md`.

2. **Markup**

   - Implement final contact section structure:
     - headline
     - light form block (email left + form right)
     - dark info block
     - big name footer
   - Add proper `name` attributes and required validation attributes.

3. **CSS**

   - Add scoped `.contact-stack` styling:
     - headline spacing and huge typography
     - white form card/block with gray inputs and dark submit bar
     - dark info rows (meta + pages/socials)
     - huge name footer
   - Verify no collisions with existing global styles.

4. **Formspree wiring**

   - Add the Formspree `action` URL.
   - Add honeypot and subject hidden fields.

5. **JS enhancements (recommended)**

   - Copy email button:
     - `data-copy` + clipboard API
   - Inline submit feedback:
     - disable button while sending
     - show success/error text beneath button
     - re-enable on error

6. **Testing**

   - Desktop + mobile layouts.
   - Keyboard navigation and focus visibility.
   - Required field validation.
   - Successful submission appears in Formspree dashboard/email.
   - Error path: temporarily break endpoint to confirm error UI.

7. **Polish & finalize**
   - Replace placeholder contact info, pages/social links, big name text.
   - Confirm contrast and spacing match reference.

---

## Acceptance Criteria

- Contact section matches intended structure and aesthetic.
- Form submits successfully on GitHub Pages via Formspree.
- User sees clear success/error feedback.
- CSS is scoped and doesn’t affect other sections.
- Plan is committed before implementation changes (Phase 1 complete).

---

## Notes / Risks

- Formspree free tiers may limit submissions; confirm plan matches project needs.
- GitHub Pages domain change requires updating `_next` URL only if using redirect flow.
