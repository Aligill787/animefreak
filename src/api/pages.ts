import { wordpressRequest } from './wordpress';

export interface WordPressPage {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  link: string;
}

export async function getPages(params: Record<string, string> = {}): Promise<WordPressPage[]> {
  const query = new URLSearchParams({ per_page: '100', ...params });
  return wordpressRequest<WordPressPage[]>(`wp/v2/pages?${query.toString()}`);
}

export async function getPage(slug: string): Promise<WordPressPage | null> {
  const pages = await getPages({ slug });
  return pages[0] || null;
}
