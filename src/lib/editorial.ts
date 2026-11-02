
export interface PublicationMetadata {
  status: 'draft' | 'published';
  example: boolean;
  publishedAt?: string;
}

export function isPublicEditorial(data: PublicationMetadata, now = new Date()): boolean {
  if (data.status !== 'published' || data.example || !data.publishedAt) return false;
  const published = Date.parse(data.publishedAt);
  return Number.isFinite(published) && published <= now.getTime();
}

// All future routes, feeds, search indexes and Pulse queries must use this gateway.
export async function getPublicEditorial() {
  const { getCollection } = await import('astro:content');
  const now = new Date();
  return (await getCollection('editorial', ({ data }) => isPublicEditorial(data, now)))
    .sort((a, b) => Date.parse(b.data.publishedAt!) - Date.parse(a.data.publishedAt!));
}
