import { API_BASE, PAGE_LIMIT } from '../app.config';

const fetch = require('node-fetch');

export default async function getPaginationPaths(): Promise<string[]> {
  const { count: totalCount }: { count: number } = await (await fetch(`${API_BASE}/pokemon`)).json();
  const pageCount = Math.ceil(totalCount / PAGE_LIMIT);
  const paginationPaths = [];
  for (let i = 1; i <= pageCount; i += 1) {
    paginationPaths.push(String(i));
  }
  return paginationPaths;
}
