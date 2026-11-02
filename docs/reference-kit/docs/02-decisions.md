# Decisions and open questions

These decisions were made with the client while the concept and mockup evolved (October 2026). They refine the brief in `01-brief.md`. Where they differ from the brief, follow this file.

## Decisions

### Naming and voice
1. **Lowercase names, always:** `tolpagorni`, `tolpagorni thoughts` and `magnus meets`, including in headings, buttons, page titles and the menu. The legal name in the footer stays `tolpagorni thoughts AB`.
2. **Use the name sparingly.** The site shouldn't repeat "tolpagorni" everywhere. The emblem and a quiet wordmark carry the identity.
3. **It is not Magnus's personal site.** Magnus appears in the about page and in the magnus meets series name. Keep his name out of the entrance, the hero and most page copy. Episode cards say "with a CTO in industrial tech", not "Magnus meets a CTO".

### Atmosphere
4. **The mountain is a feeling, not a concept.** Use the line drawing and the emblem as atmosphere. Do not build metaphors on it: no altitude meters, no "summit" labels, no mountain markers, no "climb" language in the UI.
5. **The story of the name is told once**, briefly, in the footer and in full on the about page. The short version: on the way to Kebnekaise, Tolpagorni is the peak travellers use to find their way. The client recalls an old Sami map where only that mountain was named. **The historical details (the 1832 map) must be checked before publishing.**
6. **The mountain lines are the real artwork** from the Speed Layers cover (booklet 002). They are extracted as vectors in `assets/brand/mountain-lines.svg`. Do not redraw or generate a different mountain. An earlier attempt at a generated skyline was rejected.
7. **Northern lights in light green and light blue only.** No purple or violet anywhere. Earlier versions had purple, and the client removed it.
8. **Soft, not "screamy" typography.** The entrance statement is moderate in size (about 30–54px), thin italic, slightly toned-down white. No all-caps headlines. Headings across the site stay calm.

### Structure
9. **Navigation:** knowledge, research, magnus meets, participate, about. The emblem returns home. "sign in" sits apart, small, at the right.
10. **Typewriter menu.** The menu is set in a typewriter face and types itself in on first load, with a blinking carriage. It re-types an item on hover and marks the current section with a dashed underline. It must stay usable and calm, and is static under reduced motion.
11. **The homepage follows brief sections A–I.** See `design/homepage-mockup.html`, the primary visual reference.
12. **"Questions in motion":** the moving northern-light gradients sit behind open questions (Down the Rabbit Hole, The Unanswered Question, episode frames). The client liked this a lot.
13. **The Pulse is a heartbeat line** from September to the August publication. Small beats are thoughts, medium beats perspectives, larger beats quarterly updates, and a landmark marks the August publication. Today is marked. The line is solid in the past and dashed in the future. It is built from real dates, not decoration.

### Photos and assets
14. The photos in `assets/photos/` are owned by the client and may be used. Use them sparingly, mainly on the about page and in the story of the name.
15. An earlier reference photo carrying a naturfoto.se watermark is **not** included and must not be used.
16. The emblem now exists as a vector: `assets/brand/tolpagorni-emblem.svg` (one colour, `currentColor`).

### Settled by the client (29 Oct 2026)
17. **English only.**
18. **Video:** Vimeo (embed with `dnt=1` and captions).
19. **Ownership:** tolpagorni.com is owned by tolpagorni thoughts AB. Hosting, Lovable, Vimeo and GitHub accounts belong to the company, with the developer invited.
20. **Platform:** Lovable with its Supabase backend is recommended. LearnWorlds is optional and only later. See the brief and design document links in `README.md`.

## Open questions for the client

1. **LearnWorlds.** Earlier, the client planned LearnWorlds for logins and paid subscriptions. The v0.7 brief doesn't mention it. The suggested split is that the public site is built here and LearnWorlds runs at `learn.tolpagorni.com` (custom domain) for member material. "sign in" and members-only resources link there. Confirm this, or drop LearnWorlds from the first release.
2. **Contributions.** Who moderates them, how quickly, and what consent and privacy text is needed (GDPR)?
3. **Typeface licensing.** The decks use Aptos. The mockup uses Hanken Grotesk, Source Serif 4 and Courier Prime (all free on Google Fonts). Keep these, or license Aptos for the web?
4. **Example content.** Everything marked "example" in the mockup is a placeholder, including Cambio as the October perspective, the replatforming milestones, the episodes and the dates. The real first content is needed before launch.
5. **The name story.** Source for the old map detail.

## Version history (short)
- v0.1: inspiration sites and four-door structure.
- v0.2: Norrsken colours, typewriter menu, research status board, magnus meets.
- v0.3–v0.4: attempts to draw the real Tolpagorni silhouette (rejected as graphics).
- v0.5: the Speed Layers cover line art adopted.
- v0.6: mountain reduced to a feeling, purple removed, lowercase naming, questions in motion.
- v0.7: homepage rebuilt from the client brief, with softer entrance typography.

`design/concept-history-v0.6.html` keeps the v0.6 concept page, including the inspiration list (SPACE10, The Long Now Foundation, Superflux, The Creative Independent, Ink & Switch and others).
