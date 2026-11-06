# Private client review

A separate Sites deployment hosts a snapshot of the local design preview, including clearly labeled examples and the Chemistry draft. The public Astro configuration and publication gate are unchanged. No visitor accounts or authentication code was added to the website: the hosting platform enforces access before serving the review snapshot.

- Review URL: https://tolpagorni-client-review.widebadge4.chatgpt.site
- Sites project ID: `appgprj_6ae8a5def50c8191a4b9944c0acc5e49`
- Audience: custom allowlist, project owner and `magnus.billgren@tolpagorni.com` as viewer.
- Reviewer signs in with ChatGPT using the allowed email. This is not a public or anonymous share link.
- Review version 1 uses the current hero/menu and the restored previous sections/footer. The supplied Word article has now been converted to a checked PDF and approved for publication on 4 November 2026.

## Snapshot and updates

The isolated source checkout and hosting manifest are in ignored `artifacts/client-review/`. It has its own Sites source repository; it is not the public GitHub remote. The review-only Astro config injects review routes during its build, and its root page displays the design preview. The review-only layout labels the site as private client review and emits noindex/nofollow. These are usability/search measures; the platform allowlist provides actual access control.

Changes made to the main project do not automatically update this snapshot. To update, copy the approved source changes into the separate review checkout, preserve its review-only config/root/layout and `.openai/hosting.json`, build, package and deploy a new version to this same Sites project. Never copy review build output into the public `dist/` or change the public Astro config to emit examples. Reuse the existing project ID; do not create a new Site for each update. Keep credentials out of source and documentation.

Before every update, run the public checks/build and leakage guard. Preserve the custom audience and both allowed users. No scheduled publishing is configured. No GitHub push was performed for this review deployment.

## Research and conversation route alignment

The client review menu and Home direct links use `/research/` and `/magnus-meets/` so they match the current localhost public pages rather than the separate example archives under `/design-preview/`. Preserve these two link overrides when synchronizing the review snapshot. All review-host pages emit noindex/nofollow, including the matching public-page copies. Platform access remains custom/allowlisted.
