# Menu and secondary page layout review

Reviewed 2 November 2026. Covers the active public site and development-only review routes; archived kit HTML is reference material.

| Destination | Current structure | Review outcome |
| --- | --- | --- |
| knowledge | Dedicated archive with title, introduction, knowledge/library submenu, subject/type filters, result count and linked summaries | Refined alignment and reduced excess header spacing |
| library | Dedicated archive under knowledge, using the same structure and a clear route back to all knowledge | Added consistent secondary navigation |
| research | Dedicated archive linked to investigation/research-update reading pages | Structured archive and reading template available; real content still needed |
| magnus meets | Dedicated archive linked to conversation reading pages, with guest metadata and optional Vimeo media | Structured archive and reading template available; real episodes/captions still needed |
| participate | Homepage section with heading and six contribution categories | Valid section layout; submissions remain deferred |
| about | Homepage footer section with purpose and legal identity | Added explicit heading; fuller about content/dedicated page remains later work |
| thoughts and perspectives | Shared editorial reading layout with type-specific notes, metadata and contents links | Structure reviewed across desktop/mobile |
| investigations | Question panel plus Markdown chapters, optional real dated milestones and related reading | Structure reviewed using clearly marked example content |
| conversations | Guest information, optional video, observations/transcript sections and related reading | Structure reviewed using clearly marked example content |
| The Chemistry of Knowledge | Source essay in the professional reading layout | Real draft imported; publication date still awaiting confirmation |

## Improvements made

- Aligned archive headings and result lists with the article reading grid.
- Added a knowledge/library secondary navigation with explicit current-page state.
- Moved filters into a desktop sidebar and a collapsible mobile filter panel.
- Connected filter labels explicitly; verified matching, no-results and clear/reset behaviour, including focus returning to the subject filter.
- Kept item counts visible with singular/plural wording and preserved no-JavaScript access to the full list.
- Distinguished current page from current parent section in primary navigation accessibility attributes.
- Added a real heading to the about footer section.

## Verification

A browser structure audit covered 15 destinations at 1280px, 360px and 390px (45 checks). Each had one H1 and one main landmark, no duplicate IDs, no missing local anchor targets and no horizontal page overflow. Desktop archive hierarchy and filter controls were visually reviewed. The mobile filter panel starts collapsed to keep the first result closer to the initial screen, and displays the number of active filters. Unit tests, Astro/TypeScript diagnostics and content-build integration passed; temporary build fixtures were removed and clean production output restored.

## Content boundaries

Public archives show honest empty states until real entries pass the publication gate. No sample content was promoted to production. About/participate remain homepage destinations. No participation forms, logins, CMS or database features were introduced. Actual episode media and captions need review when supplied. This is a layout/structure review, not a full WCAG audit.

Final local link crawl: 15 pages and 199 internal links checked; no broken paths/fragments or temporary build fixtures found.
