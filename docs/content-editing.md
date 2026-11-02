# Editorial content guide

## Shared fields

Each Markdown entry needs `title`, `description` and `kind`. Supported kinds: thought, perspective, investigation, research-update, question, episode, resource and publication. Optional shared fields: `author`, `subjects` (string array), `related` (array of other entry IDs). IDs are Markdown paths under `src/content/editorial/`, without `.md`.

Start with `status: draft`. Use `example: true` for any illustrative content; examples are always excluded from production even if marked published. A real entry can publish only with `status: published`, `example: false` and an approved ISO publication timestamp including timezone. A date written inside an original document is not automatically its website publication date.

## Reading structure

The frontmatter title is the page H1; use `##` and `###` in the body. H2 headings generate an article contents list automatically. Keep text in Markdown, not HTML components. Related links only render when the referenced content is publicly eligible.

- Thoughts: short reflection in the body.
- Perspectives: optional `whyItIsHere`, plus optional HTTPS `sourceUrl`.
- Investigations: `centralQuestion`, `knowledgeState` (emerging, developing or established); use body headings for background/relevance, hypotheses, activities, findings, next steps, contribution context, and related material. Optional `milestones` entries contain a real `title`, ISO date (`YYYY-MM-DD`) and `state` (done, now or next). Do not invent dates or decorative progress.
- Conversations: `guests` array, optional numeric `vimeoId`; body headings for introduction, observations, transcript and resources. Provide captions on Vimeo. Do not add placeholder video IDs.
- Resources and publications: the shared reading template presents the approved text. Optional HTTPS `sourceUrl` can point to the original source. No restricted access is supported.

Archives update from eligible entries at build time. Subject/type filters work in the browser without a database. The content list stays visible when JavaScript is unavailable.

## Review and publication

Use `/design-preview/knowledge/` to review all supported knowledge entries and `/design-preview/content/{id}/` for drafts/examples. These development-only routes are never emitted in production.

Before publishing, confirm the real text, publication date and source/usage rights; run `npm run check`, `npm test` and `npm run build`. Publication changes require a static rebuild/deployment. Hosting and scheduled builds remain unconfigured.

The selected Chemistry of Knowledge essay is imported as a real draft, not an example. Publication date confirmation is the remaining content dependency. Its text intentionally retains the supplied wording, including original spelling and phrasing.
