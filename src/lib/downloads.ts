import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
export async function downloadResponse(filename: string): Promise<Response> {
  if (!/^[a-z0-9-]+\.pdf$/.test(filename)) throw new Error('Invalid download filename');
  const bytes = await readFile(resolve(process.cwd(), 'src/files', filename));
  return new Response(new Uint8Array(bytes), { headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${filename}"`,
  }});
}
