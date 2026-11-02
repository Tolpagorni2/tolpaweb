# Build plan

Everything here is a suggestion. The developer may choose another stack or order, as long as Magnus can publish without a developer and the code lives in a GitHub account owned by tolpagorni thoughts AB. The simpler route the client currently prefers is Lovable with its Supabase backend.

## Recommended stack (developer to confirm)
- **Framework:** Astro, which builds fast static pages and adds islands only where interaction is needed (aurora, Pulse, forms). Next.js is fine if the developer prefers it.
- **CMS:** Sanity. It supports structured types, references, scheduled publishing, an image pipeline, and an editor Magnus can use without a developer. Payload CMS or Storyblok are reasonable alternatives.
- **Hosting:** Vercel or Netlify, with preview deploys for every branch.
- **Search:** Pagefind (static) to begin with.
- **Forms:** a serverless endpoint that writes `Contribution` documents to the CMS with `moderation: pending` and notifies Magnus by email. Add spam protection (honeypot plus rate limit, or Turnstile).
- **Video:** Vimeo, embedded with `dnt=1` and captions.
- **Members:** if LearnWorlds is confirmed, run it at `learn.tolpagorni.com` and link to it. There is no shared login at launch.

## Milestones

### M0: Foundations
- Repository, Astro project, CMS project, deploy previews
- Design tokens and fonts from `04-design-system.md`
- Schema from `03-content-model.md`, seeded with the mockup's example content (clearly marked)

### M1: The entrance and navigation
- Typewriter nav, entrance with aurora, mountain line draw-in and direct routes
- Reduced-motion and mobile versions
- **Accept when:** Magnus has approved the direction (sketch one or two before building), and it works at 1280px and 390px. Under reduced motion it is static and readable, there is no layout shift, and LCP is under 2.5s on a mid-range phone.

### M2: The homepage (sections B–I)
- The Pulse (computed from data), latest thought, perspective, rabbit hole, magnus meets, unanswered question with contribution form, library, participate
- **Accept when:** every block is driven by the CMS, and publishing or scheduling an item updates the Pulse with no code change.

### M3: Section and detail pages
- knowledge (thoughts, perspectives, library), research (investigation index and investigation pages with the 8 parts from brief §5), magnus meets (episode page and archive by topic, person and date), participate (all six forms), about (people, purpose, the story of the name with photos)
- Automatic archives, subject filters, search

### M4: Hardening and launch
- Accessibility audit (WCAG 2.2 AA), Lighthouse at least 90 in every category, OG images, sitemap, redirects from the old site, analytics (privacy-friendly, e.g. Plausible), cookie and privacy text
- Editor guide for Magnus: how to publish a thought, schedule a perspective, add a milestone, and moderate a contribution

## Second stage (not in the first release)
Contributor profiles and roles (Member, Contributor, Reviewer, Fellow), review workflows, knowledge groups, research collaborations, personalised subscriptions.
