import { test } from 'node:test';
import assert from 'node:assert/strict';
import { entryPath, kindInfo, publicationDate } from '../src/lib/editorial-routes';

test('all editorial kinds have public destinations and isolated preview destinations', () => {
  for (const kind of Object.keys(kindInfo) as (keyof typeof kindInfo)[]) {
    const entry = { id: 'nested/a title', data: { kind } };
    assert.equal(entryPath(entry), `/${kindInfo[kind].base}/nested/a%20title/`);
    assert.equal(entryPath(entry, true), '/design-preview/content/nested/a%20title/');
  }
});
test('publication dates use the Stockholm calendar day', () => {
  assert.equal(publicationDate('2026-04-08T23:00:00Z'), '9 April 2026');
});
