# Design system

`design/homepage-mockup.html` shows the direction. It is self-contained, so open it in a browser and read its CSS and JS. It is a starting point, not a pixel specification.

**Fixed versus open.** The rules in `CLAUDE.md` are fixed. The values in this file (exact colours, typefaces, sizes, timings, components and layout) are considered suggestions. The designer may change them as long as the result follows the rules. Bigger ideas go to Magnus as a sketch first.

## Colour tokens

| Token | Value | Use |
|---|---|---|
| `--night` | `#141A40` | Midnight blue, the page ground |
| `--night-2` | `#1B2250` | Raised surfaces: form fields, notes |
| `--line` | `#2C3466` | Hairlines and borders |
| `--paper` | `#F3EFE6` | Warm white, main text |
| `--muted` | `#A3AAC4` | Secondary text, meta, dates |
| `--glacier` | `#A9C8D8` | Muted glacial blue: links, northern lights |
| `--frost` | `#CFE0E8` | Light glacial chips (knowledge state) |
| `--mint` | `#A9D2BE` | Northern lights, line-art gradient |
| `--accent` | `#A6D66B` | Restrained green: current item, "now", focus. Use sparingly. |
| `--green` | `#3D8433` | Deep aurora green, only in the lights |
| `--sand` | `#E9E2D3` | The August publication and perspectives ("why it is here") |

Rules:
- **No purple or violet.**
- The site is dark-first. Build a light theme only if the client asks.
- Green marks "now" and the current state. Don't use it for decoration.

## Typography

| Role | Face | Notes |
|---|---|---|
| Statements and headings | Hanken Grotesk, 200–300 italic | Soft. Sentence case or lowercase, never all caps on the entrance. Entrance statement about `clamp(30px, 4.2vw, 54px)`. Section headings about `clamp(24px, 2.9vw, 34px)`. |
| Body and editorial | Source Serif 4, 400 | 16.5–19px, line-height 1.6, measure about 65ch |
| Menu, labels, meta, dates | Courier Prime | The typewriter voice. Lowercase. |

Fallback stacks are in the mockup. If Aptos is licensed for the web, it can replace Hanken Grotesk.

## Motion
Motion is restrained and never gets in the way of reading. **Every animation has a static fallback under `prefers-reduced-motion: reduce`.**

- **Mountain lines draw in** once on load: SVG `stroke-dasharray` with `pathLength="1"`, about 3.4s, ease-out. Lines sit at about 55% opacity. The gradient runs from warm white to glacier to mint.
- **Northern lights:** a canvas painted at about 1/10 resolution and scaled up, which gives the soft blur. About 25 fps, drifting slowly, in green and glacial blue bands. The ridges are filled with a midnight gradient so the lights stay behind the mountains. Alternative: the Norrsken film (`assets/film/`) as a muted, looping, `playsinline` background video with a poster frame. Compare performance before choosing.
- **Questions in motion:** blurred radial gradients in green, glacier and mint, transformed slowly over 16–21s, behind open questions and video frames.
- **Typewriter menu:** types in on the first page view of a session (store a flag in `sessionStorage`), under one second in total. Re-types on hover. A dashed underline marks the current section.
- **Pulse beat:** a small dot at "today" pulses slowly.
- Pause canvas animation when the entrance is off-screen (IntersectionObserver) or the tab is hidden.

## Components (from the mockup)
- `TypewriterNav`: emblem (home), five items, "sign in"
- `Entrance`: `AuroraCanvas`, `MountainLines` (SVG with ridge fill), veil gradient for text legibility, ident, statement, purpose, enter button (smooth scroll to the Pulse), direct routes
- `PulseLine`: SVG built from dates (see content model)
- `PulseColumns`: just happened / developing now / comes next
- `ThoughtFeature`
- `PerspectiveFeature`, with the "why it is here" note in sand
- `QuestionBand`: moving lights behind a question, plus a knowledge-state chip
- `MilestoneList`: done / now / next
- `EpisodeFeature`, `EpisodeList`
- `ContributionForm`: posts to a moderation queue
- `LibraryShelf` and `BookCover`: typographic covers with series number pill
- `ParticipateList`, plus a featured call (e.g. open for review)
- `Footer`: emblem, one-line purpose, short name story, legal name

## Layout
- Content max width 1160px. Side gutter at least 16px.
- Sections use a left label column (210px, typewriter, green) and a content column. They stack to one column under 900px.
- No horizontal scroll at 360px. The Pulse line may scroll horizontally inside its own container on small screens.
- Cards are used sparingly. Hairlines and space separate most things.

## Accessibility
- WCAG 2.2 AA contrast on midnight. Visible focus (2px green outline).
- All decorative layers have `aria-hidden`. The Pulse SVG has an `aria-label` and a text equivalent (the three columns).
- Video: captions, plus a transcript where possible.
- Forms: labels, clear success and error states, and a consent line.

## Assets
- `assets/brand/mountain-lines.svg`: the Speed Layers line art (stroke `currentColor`).
- `assets/brand/tolpagorni-emblem.svg`: the seal as a vector (fill `currentColor`). PNGs in black and warm white sit beside it. The original is in `logotype-and-silhouette.pptx`.
- `assets/film/norrsken-northern-lights-v4-1080p.mp4`: the northern-lights film (30 s).
- `assets/photos/`: the client's own photos of Tolpagorni.
- `reference/powerpoint-style-guide-v3.pdf`: the print and deck identity (brand green #155F43, sand, Aptos). The web palette is derived from it but is darker and softer.
