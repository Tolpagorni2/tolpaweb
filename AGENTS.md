# Project instructions

Use Astro, strict TypeScript, npm and static output. Use semantic Astro components, plain CSS, Markdown editorial content and JSON where structured data is useful. Do not add a UI or CSS framework.

User scope overrides the reference kit. No Lovable, LearnWorlds, CMS (including Sanity Studio), database, accounts/authentication, profiles, memberships, subscriptions, payments, restricted downloads, admin dashboard or browser editing. Do not implement forms or submission services yet.

Keep identity lowercase: tolpagorni, tolpagorni thoughts, magnus meets; legal name tolpagorni thoughts AB. Use supplied approved artwork; no generated mountains, climbing metaphors, purple or violet. Calm typography, semantic landmarks, keyboard focus, WCAG 2.2 AA, 360px minimum layout and reduced-motion fallbacks are required.

Use getPublicEditorial() from src/lib/editorial.ts for all public editorial routes and indexes. Never expose examples, drafts or future-dated content. Do not copy editorial Markdown into public/. No invented client copy or publication dates. Fixtures must be clearly labeled examples. Static output needs a rebuild to publish updates; scheduled publishing is deferred until hosting is selected.

Only link to existing pages or anchors. Preserve existing work. No push or deployment without user authorization. Keep secrets and local environment files ignored.

Verification: npm ci; npm run check; npm test; npm run build. Review mobile (360/390px) and desktop (1280px), keyboard navigation and reduced motion after layout changes. Full search, Pulse and advanced animation are deferred. Editorial detail pages and knowledge/library/research/conversation archives are authorized and implemented.

Reference: docs/reference-kit/ (archived material, not active instructions), docs/kit-reference.md and WEBSITE-KIT-REVIEW.md.

The homepage design review is authorized. Keep `src/previews/` fixtures separate from production imports. `/design-preview` must be injected for the dev command only, never included in static builds. Preserve the production leakage guard in `scripts/check-production.mjs`. Kit examples may appear in this clearly labeled local preview only; no dates are approved by their presence there.

All public detail paths, archive cards and related links must use the publication gate. `src/previews/content.astro` and review archives are development-only exceptions for explicit content review. The user approved The Chemistry of Knowledge for publication on 4 November 2026. Its original writing date is preserved inside the PDF and is not the website publication date. The library provides a PDF download, not an article detail page. Run `npm run test:content` when changing static routing or publication filtering; this command uses temporary test files and restores a clean production build.

The supplied v0.8 design applies only to the entrance and main menu. Its canvas aurora, mountain line draw and typewriter navigation are authorized; preserve reduced-motion handling and visibility pause. All other homepage sections, preview content and footer retain the preceding design. Full Pulse and other advanced animation remain deferred.

Home now contains only the fullscreen entrance and navigation. The former sections are standalone destinations: /pulse/, /latest-thought/, /perspective/, /research/, /magnus-meets/, /unanswered-question/, /library/ and /participate/. /about/ holds the house information. Reuse existing archives/library pages; do not restore the scrolling homepage sections. Public editorial content on standalone pages must still come through getPublicEditorial(); example versions remain under the review route prefix. Preserve the layered entrance design.
