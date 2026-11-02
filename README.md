# tolpagorni thoughts

Public, static Astro website with TypeScript, npm, semantic Astro components, plain CSS and Markdown. No application server, CMS, database, accounts or member functionality.

## Install and develop

Use Node 24 LTS (`nvm use`) and npm. Run `npm ci`, then `npm run dev`, and open the URL Astro prints (normally `http://localhost:4321`).

- `npm run check`: Astro diagnostics and TypeScript checks.
- `npm test`: publication eligibility, route mapping and date-format tests.
- `npm run build`: generate `dist/` and check for preview/example leakage.
- `npm run test:content`: temporary integration fixtures exercise five editorial page types and publication exclusions, then clean up and rebuild the real production output.
- `npm run preview`: inspect the built public site locally.

GitHub Actions installs from the lockfile, runs checks/tests, and builds. It does not deploy.

## Public pages

- `/`: the approved nine-section homepage with public entries or honest empty states.
- `/knowledge/`: thoughts, perspectives, questions and library material.
- `/library/`: resources and publications.
- `/research/`: investigations and research updates.
- `/magnus-meets/`: conversations.

Publishing eligible Markdown creates a detail page automatically: `/thoughts/{id}/`, `/perspectives/{id}/`, `/research/{id}/`, `/research-updates/{id}/`, `/questions/{id}/`, `/magnus-meets/{id}/`, or `/library/{id}/`. Nested Markdown folders produce nested IDs. Navigation now opens these real section pages; participate and about continue to point to the homepage sections.

## Content editing

Store editorial Markdown under `src/content/editorial/`; `src/content.config.ts` validates it. Required fields are `title`, `description` and `kind`. Status defaults to `draft`; `example` defaults to `false`. To publish, set `status: published`, `example: false` and an approved ISO `publishedAt` timestamp with timezone. Do not invent dates. See [the content guide](docs/content-editing.md).

All public routes, homepage blocks, archives and related-content lists use `getPublicEditorial()`. Drafts, examples, missing dates and future dates are excluded. Entry titles and Markdown body render with the shared reading template. Archives offer subject/type filters as progressive enhancement; without JavaScript all entries remain readable. Full-text search is deferred.

The user selected **The Chemistry of Knowledge** as the first real item. Its supplied text is transferred to `src/content/editorial/the-chemistry-of-knowledge.md`, without editorial rewriting. It remains draft pending confirmation of a website publication date. The source date (9 April 2026) is preserved in the text and is not assumed to be the website publication date. See [content provenance](docs/content-provenance.md).

Updates reach a static site only after a new build and deployment. Future-dated content remains absent until a rebuild after its publication time. Scheduled publishing is not configured. Keep private material out of the repository; draft filtering is not repository access control.

## Local design and content review

Only `astro dev` registers these review routes:

- `/design-preview`: full homepage with clearly marked kit examples.
- `/design-preview/knowledge/`, `/design-preview/library/`, `/design-preview/research/`, `/design-preview/magnus-meets/`: review archives.
- `/design-preview/content/the-chemistry-of-knowledge/`: selected essay draft.
- `/design-preview/content/examples/knowledge-travels-like-a-song/`: thought template.
- `/design-preview/content/examples/cambio/`: perspective template.
- `/design-preview/content/examples/replatforming/`: investigation template.
- `/design-preview/content/examples/what-should-never-be-replatformed/`: conversation template.

Review pages are marked `noindex, nofollow` and labeled draft/example. They are absent from `astro build` and `astro preview`, and their data is not imported into public routes. The build guard checks generated output. Future dates in source content do not imply a configured publication schedule.

## Structure

- `src/pages/`: public archives and static detail-route generation.
- `src/previews/`: development-only review pages and homepage example JSON.
- `src/content/editorial/`: Markdown; example fixtures live under `examples/`.
- `src/components/`, `src/layouts/`, `src/styles/`: shared interface and reading design.
- `src/lib/editorial.ts`: publication gate; `editorial-routes.ts`: route metadata.
- `public/assets/brand/`: approved supplied artwork used by the site.
- `docs/reference-kit/`: historical kit documentation and mockups, outside public output.
- `scripts/`, `tests/`: output guard, integration verification and unit tests.

## Design and scope

The homepage direction is approved. Self-hosted Hanken Grotesk, Source Serif 4 and Courier Prime follow the kit. Body text uses upright weight 400, line-height 1.7 and a 62ch maximum reading measure. The mountain artwork fills the entrance over static aurora gradients. Restrained hover effects respect reduced motion. The film trial was reverted.

No forms, submission services, CMS, visitor authentication, memberships, payments or restricted downloads. The date-driven Pulse, full search, advanced animation and additional real editorial material remain later work. Episode templates support supplied Vimeo IDs; captions must be provided on Vimeo. No example video is embedded.

## Deployment (not configured)

Choose static hosting later. Build command: `npm run build`; publish directory: `dist/`. No server adapter or runtime credentials are needed. After hosting and the final URL are selected, configure Astro `site` (and `base` if needed), the deployment workflow and any rebuild policy. Nothing has been pushed or deployed.

Local `.env` files, dependencies, generated output and review screenshots are ignored. Commit `package-lock.json` with dependency changes. Never commit credentials. See `AGENTS.md` for project instructions and `docs/kit-reference.md` for reference precedence.

## Article reading design

Editorial detail pages use a dedicated reading stylesheet: aligned title/body columns, source author/publication metadata, an estimated reading time at 220 words per minute, 19px desktop / 18px mobile body text, 1.7 line height and a 62ch maximum measure. The contents rail stays visible on desktop and tracks the current chapter. On narrow screens it becomes a collapsed native disclosure, with all links available without JavaScript. A source subtitle repeated as the description is displayed once in the header while the Markdown source stays intact. No publication date is inferred from the document.

## Menu-linked page layouts

The knowledge, library, research and conversation archives share an aligned header/list grid, responsive filter controls and result counts. Knowledge/library navigation is available in both directions. Filters support clearing selections and keyboard focus recovery. About and participate currently link to homepage sections. See [the layout review](docs/page-layout-review.md) for coverage, fixes and remaining content dependencies.
