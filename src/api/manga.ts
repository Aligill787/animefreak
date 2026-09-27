import { Manga } from '../types';
import { wordpressRequest } from './wordpress';

export async function getManga(params: Record<string, string> = {}): Promise<Manga[]> {
  return wordpressRequest<Manga[]>(`wp/v2/manga?${new URLSearchParams(params).toString()}`);
}

export async function getMangaBySlug(slug: string): Promise<Manga | null> {
  const manga = await getManga({ slug });
  return manga[0] || null;
}
