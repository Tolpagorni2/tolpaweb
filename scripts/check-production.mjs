import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../dist/', import.meta.url);
const examples = JSON.parse(await readFile(new URL('../src/previews/homepage-examples.json', import.meta.url), 'utf8'));
async function filesAt(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesAt(new URL(`${entry.name}/`, directory))
    : new URL(entry.name, directory)))).flat();
}
const files = await filesAt(root);
assert(!files.some(file => /design-preview|homepage-examples/.test(file.pathname)), 'Local preview files must not be emitted.');
const forbidden = [examples.thought.title, examples.investigation.question, examples.episode.question, examples.question, 'Example content structure — not for publication', 'local design preview'];
for (const file of files.filter(file => ['.html', '.json', '.js', '.xml'].includes(path.extname(file.pathname)))) {
  const content = await readFile(file, 'utf8');
  for (const text of forbidden) assert(!content.includes(text), `Preview or draft content leaked into ${file.pathname}: ${text}`);
}
console.log('Production guard passed: no local preview route, example fixture or sample editorial content.');
