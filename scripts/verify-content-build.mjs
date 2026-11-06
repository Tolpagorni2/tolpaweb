import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
const fixture = new URL('../src/content/editorial/build-verification/', import.meta.url);
const dist = new URL('../dist/', import.meta.url);
const kinds = ['thought', 'perspective', 'investigation', 'episode', 'resource'];
const downloadFixture = new URL('../src/files/build-verification.pdf', import.meta.url);
const downloadBytes = '%PDF-1.4\n% Example download fixture, not a client document\n';
const markers = ['DRAFT_BUILD_SENTINEL', 'FUTURE_BUILD_SENTINEL', 'EXAMPLE_BUILD_SENTINEL'];
const build = () => {
  const result = spawnSync('npm', ['run', 'build'], { cwd: new URL('../', import.meta.url), env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' }, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stdout + result.stderr);
};
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(new URL(`${entry.name}/`, directory)) : entry.name.endsWith('.html') ? [new URL(entry.name, directory)] : []))).flat();
}
let created = false;
let downloadCreated = false;
try {
  await mkdir(fixture); // Fail safely if the reserved temporary folder already exists.
  created = true;
  for (const kind of kinds) {
    await writeFile(new URL(`${kind}.md`, fixture), `---
title: BUILD_TEMPLATE_${kind}
description: Temporary build verification
kind: ${kind}
status: published
publishedAt: "2020-01-01T12:00:00Z"
related: ["build-verification/hidden-0"]
---

## Verification section

BUILD_BODY_${kind}
`);
  }
  for (let i = 0; i < markers.length; i++) {
    await writeFile(new URL(`hidden-${i}.md`, fixture), `---
title: ${markers[i]}
description: Not public
kind: thought
status: ${i === 0 ? 'draft' : 'published'}
example: ${i === 2}
publishedAt: "${i === 1 ? '2999' : '2020'}-01-01T12:00:00Z"
---

${markers[i]}
`);
  }
  await writeFile(downloadFixture, downloadBytes, { flag: 'wx' });
  downloadCreated = true;
  await writeFile(new URL('download-resource.md', fixture), `---
title: BUILD_DOWNLOAD_RESOURCE
description: Temporary download verification
kind: resource
status: published
publishedAt: "2020-01-01T12:00:00Z"
downloadFile: build-verification.pdf
---
`);
  build();
  assert.equal(await readFile(new URL('downloads/build-verification.pdf', dist), 'utf8'), downloadBytes);
  const libraryHTML = await readFile(new URL('library/index.html', dist), 'utf8');
  assert(libraryHTML.includes('href="/downloads/build-verification.pdf"'), 'Missing direct file link');
  assert(!libraryHTML.includes('/content/the-chemistry-of-knowledge/'), 'Removed article link remains');
  await assert.rejects(readFile(new URL('downloads/the-chemistry-of-knowledge-foundation.docx', dist)), 'Word source must not be emitted');
  const homePage = await readFile(new URL('index.html', dist), 'utf8');
  for (const target of ['pulse', 'latest-thought', 'research', 'unanswered-question', 'magnus-meets', 'library', 'participate', 'about']) {
    assert(homePage.includes(`href="/${target}/"`), `Missing homepage destination: ${target}`);
  }
  assert(!homePage.includes('class="editorial-section"'), 'Old sections remain on Home');
  assert(!homePage.includes('<footer'), 'Home must contain only the entrance and navigation');
  const pages = await htmlFiles(dist);
  const all = (await Promise.all(pages.map(file => readFile(file, 'utf8')))).join('\n');
  for (const marker of markers) assert(!all.includes(marker), `Excluded content leaked: ${marker}`);
  const bases = { thought: 'thoughts', perspective: 'perspectives', investigation: 'research', episode: 'magnus-meets', resource: 'library' };
  for (const kind of kinds) {
    const html = await readFile(new URL(`${bases[kind]}/build-verification/${kind}/index.html`, dist), 'utf8');
    assert(html.includes(`BUILD_BODY_${kind}`), `Missing rendered Markdown for ${kind}`);
    const archive = ['resource'].includes(kind) ? 'library' : ['thought', 'perspective'].includes(kind) ? 'knowledge' : kind === 'episode' ? 'magnus-meets' : 'research';
    const destination = `/${bases[kind]}/build-verification/${kind}/`;
    const archiveHTML = await readFile(new URL(`${archive}/index.html`, dist), 'utf8');
    if (kind === 'resource') assert(!archiveHTML.includes(`href="${destination}"`), 'File-only library must not list articles');
    else assert(archiveHTML.includes(`href="${destination}"`), `Missing archive link for ${kind}`);
    const homeHTML = await readFile(new URL('index.html', dist), 'utf8');
    assert(!homeHTML.includes(`href="${destination}"`), 'Opening-only homepage must link to hubs rather than individual entries');
    const hub = kind === 'thought' ? 'latest-thought' : kind === 'perspective' ? 'perspective' : kind === 'resource' ? 'knowledge' : archive;
    const hubHTML = await readFile(new URL(`${hub}/index.html`, dist), 'utf8');
    assert(hubHTML.includes(`href="${destination}"`), `Missing gated destination in ${hub}`);
    assert(html.includes('href="#verification-section"'), `Missing article navigation for ${kind}`);
    // A related draft must not expose its title or URL.
    assert(!html.includes('/thoughts/build-verification/hidden-0/'), 'Draft related content leaked');
  }
  console.log('Content build verification passed: five templates render; drafts, future items and examples stay absent.');
} finally {
  if (created) {
    if (downloadCreated) await rm(downloadFixture, { force: true });
    await rm(fixture, { recursive: true, force: true });
    build(); // Always leave the production output free of temporary test content.
  }
}
