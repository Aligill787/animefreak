import { Chapter } from '../types';
import { wordpressRequest } from './wordpress';

export async function getChapters(mangaId?: string): Promise<Chapter[]> {
  const params = mangaId ? `?manga=${encodeURIComponent(mangaId)}` : '';
  return wordpressRequest<Chapter[]>(`wp/v2/chapters${params}`);
}

export async function getChapter(chapterId: string): Promise<Chapter> {
  return wordpressRequest<Chapter>(`wp/v2/chapters/${encodeURIComponent(chapterId)}`);
}
