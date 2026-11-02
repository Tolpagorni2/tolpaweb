# Content model

This is a proposed CMS schema that covers brief §9. Field names are suggestions. Keep the concepts and relationships, and adapt the syntax to the chosen CMS.

All public content types share:
- `title`, `slug`
- `publishedAt` (supports scheduling a future date)
- `subjects` → many `Subject`
- `related` → many references to any content type
- `status`: draft | scheduled | published

## Taxonomy and people

**Subject**: `name`, `slug`, `description`. Thematic groups, for example replatforming, product perspective, products & projects, value in B2B, speed layers. The library is organised by subject.

**Person**: `name`, `role`, `organisation`, `portrait`, `bio`, `links`. Used for magnus meets guests, perspective creators and contributors. Episodes are browsable by person.

## Content types

### Thought (fortnightly)
- `number` (auto-incrementing, shown as "thought 04")
- `body` (rich text, 300–500 words)
- `excerpt` (about 60 words, used on the homepage)
- `readingTime` (computed)

### Perspective (monthly)
- `month` (e.g. 2026-10)
- `sourceKind`: artist | thinker | designer | scientist | author | book | film | website | other
- `creator` → Person (optional)
- `image`
- `externalUrl`
- `whyItIsHere` (one or two sentences, shown prominently)
- `body`

### Investigation ("Down the Rabbit Hole")
- `centralQuestion` (shown over the moving lights)
- `knowledgeState`: emerging | developing | established
- `background`, `relevance`
- `hypotheses[]` (`text`, `status`: open | supported | dropped)
- `activities` (rich text)
- `findings[]` (`title`, `body`, `attachments`)
- `milestones[]` (`title`, `date`, `state`: done | now | next). Real milestones only, never percentages.
- `nextSteps`
- `contributeCall` (what input is wanted right now)
- `partners` (optional, free text or Person/organisation)
- `resources` → Resource, Publication
- `featuredOnHome` (boolean; only one at a time)

### Research update (quarterly)
- `investigation` → Investigation
- `quarter` (e.g. 2026-Q4)
- `body`, `attachments`
- Shows in the Pulse as a large beat.

### Question ("The Unanswered Question")
- `text`
- `openSince`
- `state`: open | closed
- `investigation` → Investigation (optional)
- `featuredOnHome` (boolean; only one at a time)

### Contribution (not public until approved)
- `question` → Question, or `investigation` → Investigation, or `publication` → Publication
- `kind`: perspective | experience | review | suggestion-thought | suggestion-question | suggestion-perspective | suggestion-guest | join-investigation
- `text`
- `name`, `role` (optional, public if approved)
- `email` (private, never rendered)
- `consent` (boolean, with timestamp)
- `moderation`: pending | approved | rejected
- `createdAt`

### Episode (magnus meets)
- `number`
- `centralQuestion` (episodes are titled by their question)
- `guest` → Person (one or more)
- `recordedAt`, `publishedAt`
- `video` (provider URL or ID), `duration`
- `intro` (short)
- `observations[]` (short selected observations)
- `transcript` (optional, recommended for accessibility)
- `resources` → Resource, Publication

### Resource (library)
- `kind`: framework | model | tool | template | paper | report | curated-reference
- `description`
- `file` (downloadable) or `externalUrl`
- `access`: open | members (members links to LearnWorlds, if that is confirmed)

### Publication
- `seriesNumber` (e.g. 002)
- `year`
- `isAugustPublication` (boolean)
- `cover`
- `formats` (print, pdf, …) and links
- `lifecycle`: in-development | open-for-review | published
- `reviewOpenUntil` (date, when open for review)

## Site settings (singleton)
- `entranceStatement` (default "thoughts need room to breathe")
- `entrancePurpose`
- `directRoutes[]` (label and target)
- `rhythm`: thought every 14 days from an anchor date; perspective on day N of each month; quarterly update dates; August publication date
- `pulseWindow`: start and end dates (default 1 September to 31 August)

## The Pulse (computed, not edited)
Build from the data, not by hand:
- **just happened:** the latest published items of each kind (Thought, Episode, Perspective, Research update).
- **developing now:** investigations with a milestone in state `now`, publications `open-for-review`, and the featured open Question.
- **comes next:** scheduled items with a future `publishedAt`, the next expected beats from `rhythm`, upcoming milestones, and the August publication.
- **The line:** past beats come from published items, future beats from scheduled items plus `rhythm`. Today is marked.

## Archive and search
- Each type has an automatic archive page (by date, newest first) with filters by subject. Episodes can also be filtered by person.
- Full-text search covers Thoughts, Perspectives, Investigations, Episodes (including transcripts), Resources and Publications.
