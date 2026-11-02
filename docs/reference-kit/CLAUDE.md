# tolpagorni thoughts website

You are building the website for tolpagorni thoughts AB: a knowledge house for practical thinking and knowledge development in technology-intensive B2B businesses. The guiding principle is **mystery at the entrance, clarity when exploring**.

## Read first, in this order
1. `docs/01-brief.md`: the client's brief (v0.7).
2. `docs/02-decisions.md`: decisions that refine the brief. **These win where they differ.**
3. `design/mockup-pages/` (start with `guide.html`, then `index.html`): the direction, not a pixel spec. Its `site.css` and `site.js` are a starting point for tokens, motion and components.
4. `docs/03-content-model.md`, `docs/04-design-system.md`, `docs/05-build-plan.md`.

## Room to design
The rules below are fixed. Everything else (layout, exact colours, typefaces, motion details, components, the tech stack) is open to the designer's and developer's judgement. Propose alternatives, and show Magnus a sketch before building bigger departures.

## Non-negotiable rules
- Write `tolpagorni`, `tolpagorni thoughts` and `magnus meets` **in lowercase everywhere** in the UI. The only exception is the legal name "tolpagorni thoughts AB" in the footer.
- Don't make it a personal site. Keep Magnus's name out of the entrance and general copy. It belongs on the about page and in the series name.
- The mountain is atmosphere only. Use the real Speed Layers line art (`assets/brand/mountain-lines.svg`) and the emblem. No altitude, summit or climbing metaphors, and no generated mountains.
- Northern lights use green and glacial blue only. **No purple or violet.**
- Typography is soft and not "screamy". No all-caps statements, moderate sizes, thin italic display, serif body, typewriter labels.
- Every animation needs a static, readable fallback under `prefers-reduced-motion: reduce`. Pause canvas work when it's off-screen.
- Progress means real milestones with dates, never decorative percentages.
- Everything editorial comes from the CMS, so Magnus can publish without a developer.
- English only. Video is hosted on Vimeo.
- Mockup content marked "example" is placeholder. Never ship it as real.
- Accessibility target is WCAG 2.2 AA. There must be no horizontal page scroll at 360px.

## Structure
- Navigation: knowledge, research, magnus meets, participate, about. The emblem goes home, and a small "sign in" link sits at the right.
- Homepage sections A–I as in brief §3, in that order.

## Working style
- Build in the milestone order in `docs/05-build-plan.md`. Check each milestone against its acceptance criteria before moving on.
- When something in the brief is unclear, check `docs/02-decisions.md` → "Open questions". If it's still unclear, ask Magnus rather than guessing at product decisions.
- Keep components small and named as in `docs/04-design-system.md`.
