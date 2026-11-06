# Initial foundation verification

- Astro diagnostics and TypeScript: passed with zero errors, warnings or hints.
- Publication eligibility regression: passed for published, draft, example, future, missing and invalid dates, including the exact publication-time boundary. Test dates are synthetic fixtures, not client publication dates.
- Production build: passed; one static homepage.
- Browser review: desktop 1280px, mobile 360px and 390px; artwork loads, entrance anchor works, purpose/footer readable, no horizontal overflow on mobile.
- Reduced motion: no animation is implemented; CSS disables smooth scrolling when reduced motion is requested.
- This is an initial layout review, not a complete WCAG audit.

Local verification used Node 23.11.0 (available host version). Node 24 LTS is specified in .nvmrc and CI; the GitHub workflow has not run remotely because nothing has been pushed.

Hosting, deployment URL/base path, approved launch content and final font selection remain pending. Scheduled rebuilding, forms, full search, Pulse, advanced animation and editorial page templates are deferred.

## Nine-section homepage design review

The homepage now shares a reusable nine-section layout between the public page and a development-only `/design-preview` route. The preview demonstrates the supplied kit examples without publication dates, alongside prominent example labels. Public sections use publication-filtered Markdown entries or honest empty states.

Self-hosted Hanken Grotesk, Source Serif 4 and Courier Prime follow the kit’s proposed typography. Approved emblem and mountain artwork are retained; gradients remain static. The cadence strip is a design treatment, not a live data-driven Pulse. Forms, submissions, video playback and remaining page templates are deferred.

A build-output guard checks that the preview route, fixtures and sample editorial strings are absent from production. The route is registered only for the development command.

Verification for this design update: Astro/TypeScript diagnostics passed with zero errors, warnings or hints; publication eligibility tests and production build passed. Desktop review at 1280px and mobile review at 360px/390px found no horizontal overflow or missing anchor targets. Native example disclosures respond to the Enter key. Fonts loaded from local assets. Reduced-motion CSS disables smooth scrolling; all decorative gradients are static. Public-page inspection found nine sections, zero forms, and no preview thought text. Screenshots are kept locally under ignored `artifacts/design-review/`. This is not a complete accessibility audit.

## Entrance film trial

The supplied Norrsken MP4 replaces the mountain still as the entrance background. A muted green-blue CSS treatment removes the original purple highlights to follow the brand rules. Playback is muted and looping, with a keyboard-accessible pause/play button. It pauses off-screen or when the tab is hidden. Reduced motion avoids loading the film and displays the supplied evening-light photograph; JavaScript being unavailable and playback errors also retain that photograph.

Astro/TypeScript checks, publication tests and static build passed. Browser playback was confirmed at 1920×1080, muted and looping. Pause/play and off-screen pause were verified. Mobile review at 360px and 390px checked overflow and control spacing. Reduced-motion behavior is implemented through matchMedia and CSS; OS preference switching was not manually exercised.

### Film framing correction

Replaced cover cropping with contain framing and reduced the desktop readability overlay. Below 900px the complete 16:9 film occupies a dedicated area above the entrance text. Browser checks confirmed that the displayed video ratio equals the 1920×1080 source ratio on mobile, the text sits below the film, playback runs, and there is no page overflow at 360px or 390px. Desktop framing was reviewed at 1280px. Astro/TypeScript checks, tests and the production build passed.

## Film trial reverted

At the user’s request, restored the entrance to its pre-film mountain SVG and static aurora background, including the original mobile composition. Removed the experimental playback component, controls, and copied film/fallback assets from public output. Approved reading typography remains in place. The original film remains available in the source ZIP.

## Link and disclosure audit

All 25 rendered links across the public homepage (12) and local design preview (13) were exercised: skip link, five navigation anchors, entrance and three direct routes, home identity, footer return link, and preview-to-public link. Keyboard activation resolved every destination. Both native example disclosures opened and closed with Enter. The public page remained free of preview example content after following the preview banner link.

Mobile checks at 360px and 390px found no horizontal overflow. A rapid automated click sequence overlapped ongoing smooth scrolling; an individual research-link click was rechecked and reached the correct section. No broken destinations or missing fragment targets were found, and no implementation changes were required.

Participation options, library covers and episode placeholders are intentionally plain content. Submission services, video playback and editorial detail pages remain deferred, so they are not presented as working links.

## Full-section mountain background

Expanded the supplied mountain artwork to fill the entrance with full inset positioning and object-fit cover, replacing the smaller offset composition. Mobile uses the same full-section sizing with reduced opacity. Browser review at 1280px, 360px and 390px confirmed section coverage and no horizontal overflow. Astro/TypeScript checks, publication tests and production build passed.

## Small design refinements

Added a dashed current-location navigation underline and matching target-section label colour; native anchor behaviour is preserved. Refined the entrance button with a separated arrow and hover/focus treatment, direct-route underlines, and restrained pointer-hover motion. Added decorative plus/minus indicators to the two native example disclosures. Selection colours follow the existing palette. Hover motion is gated by reduced-motion preference.

Astro/TypeScript checks, publication tests and production build passed. Desktop review at 1280px verified current-link state and reset, and Enter-key opening/closing of disclosures with corresponding icon changes. Mobile widths 360px and 390px showed no horizontal overflow. No new routes, editorial content or deferred features were added.

## Editorial pages and initial content

Implemented a shared Markdown reading template with type-specific perspective notes, investigation question/milestones, conversation metadata and optional Vimeo media. Added knowledge, library, research and conversation archives with progressive subject/type filters. Navigation opens real section routes; participation/about still lead to homepage sections. Related reading only includes publication-eligible entries. Footer links from reading pages now return to the actual entrance.

The user selected The Chemistry of Knowledge. All 123 nonempty source paragraphs are represented in Markdown, including the title in frontmatter; a paragraph comparison found none missing. The source has no tables, external hyperlinks, drawings or footnotes to migrate. The writing date and wording are preserved. Website publication date is awaiting user confirmation, so it remains draft and is available through the local review route only. Four labeled example fixtures exercise the other templates.

Verification: Astro/TypeScript diagnostics passed; three unit tests passed. A build integration check exercises five public page types with temporary fixtures, verifies Markdown/contents rendering and homepage/archive links, and checks that draft/example/future content and related drafts stay absent. Fixtures are removed and a clean production build restored afterward. Browser review covered 1280px desktop and all five reading templates plus archives at 360px/390px without horizontal overflow. Filters were checked for matching results, no-results feedback and reset; article contents links work by keyboard. A local crawl checked 193 internal links across 15 pages with no broken paths or fragments. Full accessibility audit and actual episode caption/media review remain future checks when real episodes are supplied.

## Section scroll pacing

Same-page section links use a distance-aware 800–1400ms cubic ease-in/out scroll. Native destinations and browser history are preserved; focus moves to the destination heading or section after arrival. Wheel, touch, pointer input, navigation keys, Escape and history changes cancel the animation. Skip links retain native behaviour. Reduced-motion preferences bypass the animation and CSS remains the no-JavaScript fallback. Links to separate archive pages remain normal page navigation.

Astro/TypeScript checks, unit tests and static build passed. Browser review confirmed gradual movement after clicking about, arrival at the footer within the document bounds, current-link indication, and return-to-entrance navigation.

## Professional article reading template

Refined the title, deck and byline into a grid aligned with the reading column. Added a clearly estimated reading time derived from Markdown word count, quiet subject metadata, more consistent chapter/paragraph spacing, and an end-of-article return link. Desktop uses 19px and mobile 18px upright weight-400 body text at line-height 1.7, capped at 62ch. Source wording is unchanged. When the source opens with the same subtitle as the frontmatter description, that duplicate body paragraph is hidden because the same words are already displayed in the deck.

The desktop contents rail is sticky and highlights the current chapter. Mobile uses a collapsed native disclosure enhanced by JavaScript; without JavaScript its contents remain open and readable. Keyboard activation of the disclosure was verified. Mobile checks at 360px/390px found no horizontal overflow. Desktop review used 1280px.

Final article checks passed with zero Astro/TypeScript diagnostics, all unit tests and five-type build integration passing, and a clean production build restored. Browser verification confirmed the sticky rail stays 32px from the top and its current chapter matches the selected heading after scrolling. Article source and publication gating remain unchanged.

## Menu and secondary-page structure review

Reviewed 15 active destinations across desktop 1280px and mobile 360px/390px. All 45 structure checks found one H1, one main landmark, no duplicate IDs, no missing local fragment targets and no horizontal page overflow. Refined archive alignment, secondary knowledge/library navigation, explicitly labeled desktop/mobile filters and reset feedback. Mobile filters now start collapsed; browser checks confirmed filter selection, active-filter count, no-results state, reset and keyboard disclosure. Main navigation distinguishes exact current page from parent section. Added an H2 to the about footer.

Final checks, unit tests and five-type content-build integration passed, with clean production output restored. A subsequent crawl of the real pages checked 199 internal links across 15 destinations without broken paths or fragments. No draft/sample content was promoted to production. Details and remaining scope are in page-layout-review.md.

## Taller entrance and expanded sky

Increased the desktop entrance from 690px to a responsive 840–1020px and the mobile minimum from 650px to 780px. Positioned the transparent mountain artwork lower while retaining its proportions, exposing more of the full-section sky gradient above it. Desktop and 360px/390px mobile review found no horizontal overflow. Astro/TypeScript checks, unit tests and production build passed.

## Simple library and original-file downloads

Removed the Chemistry detail route from both public/review route generation and replaced the review library entry with a direct download of the supplied DOCX original. No PDF was supplied or fabricated. Original bytes match the kit and generated review output exactly. The library has a simple heading and file list with no archive filters or article layout. Public draft files remain absent. Checks, unit tests, content-build integration and public/review builds passed; the integration test now verifies a published download fixture and exclusion of the actual draft file. Local download bytes and 404 for the removed article were verified over HTTP. Updated the existing access-controlled client preview, preserving its audience.

## Supplied entrance picture replacement

Replaced the first-section still with the user-supplied `ChatGPT Image Nov 2, 2026, 06_38_20 PM.png`, copied unchanged as `public/assets/brand/entrance-landscape.png`. Removed the separate mountain SVG from the entrance because the supplied image already includes its mountain lines. Existing canvas lights remain as a subtle transparent screen-blended layer; visibility pause and reduced-motion logic are unchanged. All later sections and menu remain intact. Checked 360px, 390px and 1280px layouts; no overflow. Astro/TypeScript checks, all three tests, and public/review builds passed, including the production leakage guard.

## Fullscreen entrance with protected foreground

Separated the supplied image using a code-native SVG silhouette mask; no image generation or bitmap repainting. The original image remains unchanged. Layer order is canvas sky, opaque original mountain foreground, readability veil, text/links. Both image and mask share cover sizing and bottom-centred positioning. Moving lights cannot overlay the mountain foreground.

The hero now fills 100svh minus the measured menu and optional review banner heights, with ResizeObserver handling wrapping/font loading. On narrow/short screens the content may grow naturally rather than be clipped. At 1280×900, 360×800 and 390×844, the entrance bottom matched the viewport bottom exactly with no document overflow. Mobile direct links remain visible. Compared two sky-region screenshots: pixels changed; compared a mountain-region screenshot across the same interval: bytes remained identical. Keyboard Enter moved focus to pulse-title. Existing reduced-motion static frame and visibility pause code are preserved and source-reviewed; no browser preference emulation available. Checks, all three tests, public build/leakage guard and private-review build passed.

## Opening-only Home and standalone destinations

Moved the former scrolling homepage sections into simple destination pages, reusing the existing research, conversation and file-library pages. Added Pulse, latest thought, perspective, unanswered question, participate and about. Home retains only the fullscreen layered entrance, header and direct links; its footer is hidden so there is no extra section below the opening screen. Enter and the menu now navigate to pages instead of removed anchors. SectionPage uses one H1 and simple single-column reading layout with links to all eight destinations. No editorial text or publication dates were invented.

Astro/TypeScript checks passed with zero diagnostics. All three unit tests and the publication/content integration test passed; public builds retain the leakage guard. The routing harness now checks the opening-only homepage, new gated hubs and direct downloads. Reviewed ten destinations at 1280px, 360px and 390px (30 checks): one H1/main and no overflow. Keyboard Enter opens the Pulse page. Home remains exactly one viewport tall at desktop. A crawl checked 27 local destinations and 380 links without missing routes or fragments. Hero animation/reduced-motion logic remains unchanged. The private snapshot was rebuilt with the new review routes; public builds contain 11 pages and no examples/review routes.

## PDF library release

Converted the user-supplied Word original to a 12-page PDF and visually checked every page. Source text matches Poppler extraction after whitespace and Unicode normalization. The public library now includes the approved article (publication date explicitly supplied as 4 November 2026), with a simple document icon, title/author/description, PDF page count and size, and a download button. Downloads are PDF-only. No article detail page was reintroduced. Astro/TypeScript checks, all three tests, publication/content integration tests and public/review builds passed. Browser keyboard activation downloaded a PDF whose bytes match the served source. Reviewed desktop and 360/390px mobile layouts without overflow. Updated the existing private review with its allowlist preserved.

## Repeated navigation removed and footer alignment

Removed the repeated eight-destination link directory from SectionPage and its unused CSS. Page routes, menu and Home direct links remain. Added a viewport-height flex column shell so main content grows on short pages and the footer stays at the document bottom. Removed arbitrary minimum heights from section pages, the library and archive content. Reviewed six short/long destinations at 1280px, 360px and 390px (18 checks): footer bottom matches the document/viewport bottom, no horizontal overflow, and no repeated directory. Checks and public build/leakage guard passed. Existing reduced-motion behaviour is unchanged.
