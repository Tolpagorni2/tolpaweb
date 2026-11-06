import type { APIRoute, GetStaticPaths } from 'astro';
import { getPublicEditorial } from '../../lib/editorial';
import { downloadResponse } from '../../lib/downloads';
export const getStaticPaths = (async () => (await getPublicEditorial())
  .filter(entry => entry.data.downloadFile)
  .map(entry => ({ params: { file: entry.data.downloadFile }, props: { filename: entry.data.downloadFile! } }))) satisfies GetStaticPaths;
export const GET: APIRoute = ({ props }) => downloadResponse(props.filename);
