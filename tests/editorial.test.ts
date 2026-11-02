import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPublicEditorial } from '../src/lib/editorial';
const now = new Date('2026-11-01T12:00:00Z');
const published = { status: 'published' as const, example: false, publishedAt: '2026-11-01T11:00:00Z' };
test('only approved published content at or before the build time is eligible', () => {
  assert.equal(isPublicEditorial(published, now), true);
  assert.equal(isPublicEditorial({ ...published, publishedAt: now.toISOString() }, now), true);
  assert.equal(isPublicEditorial({ ...published, status: 'draft' }, now), false);
  assert.equal(isPublicEditorial({ ...published, example: true }, now), false);
  assert.equal(isPublicEditorial({ ...published, publishedAt: '2026-11-01T13:00:00Z' }, now), false);
  assert.equal(isPublicEditorial({ ...published, publishedAt: undefined }, now), false);
  assert.equal(isPublicEditorial({ ...published, publishedAt: 'invalid' }, now), false);
});
