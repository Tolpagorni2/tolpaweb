import type { CollectionEntry } from 'astro:content';
export type EditorialEntry = CollectionEntry<'editorial'>;
export const kindInfo = {
  thought: { label: 'a thought', base: 'thoughts', archive: 'knowledge', nav: 'knowledge' },
  perspective: { label: 'a perspective', base: 'perspectives', archive: 'knowledge', nav: 'knowledge' },
  investigation: { label: 'an investigation', base: 'research', archive: 'research', nav: 'research' },
  'research-update': { label: 'a research update', base: 'research-updates', archive: 'research', nav: 'research' },
  question: { label: 'an open question', base: 'questions', archive: 'knowledge', nav: 'knowledge' },
  episode: { label: 'magnus meets', base: 'magnus-meets', archive: 'magnus-meets', nav: 'magnus meets' },
  resource: { label: 'from the library', base: 'library', archive: 'library', nav: 'knowledge' },
  publication: { label: 'a publication', base: 'library', archive: 'library', nav: 'knowledge' },
} as const;
export function entryPath(entry: { id: string; data: Pick<EditorialEntry['data'], 'kind'> & { downloadFile?: string } }, preview = false): string {
  if (entry.data.downloadFile) return `${preview ? '/design-preview' : ''}/downloads/${encodeURIComponent(entry.data.downloadFile)}`;
  const id = entry.id.split('/').map(encodeURIComponent).join('/');
  return preview ? `/design-preview/content/${id}/` : `/${kindInfo[entry.data.kind].base}/${id}/`;
}
export function publicationDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'Europe/Stockholm' }).format(new Date(date));
}
export const archives = {
  knowledge: { title: 'knowledge', description: 'Thoughts, perspectives, and knowledge to return to.', kinds: ['thought', 'perspective', 'question', 'resource', 'publication'] },
  research: { title: 'research', description: 'Open questions, investigations, and emerging findings.', kinds: ['investigation', 'research-update'] },
  'magnus-meets': { title: 'magnus meets', description: 'Conversations about products, technology, and different perspectives.', kinds: ['episode'] },
  library: { title: 'the library', description: 'Established publications, frameworks, and practical resources.', kinds: ['resource', 'publication'] },
} as const;
export type ArchiveKey = keyof typeof archives;
