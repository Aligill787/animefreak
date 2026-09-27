import { Article } from '../types';
import { wordpressRequest } from './wordpress';

interface WordPressRendered<T = string> {
  rendered: T;
}

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link: string;
  title: WordPressRendered;
  content: WordPressRendered;
  excerpt: WordPressRendered;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{ name: string; description?: string; avatar_urls?: Record<string, string> }>;
    'wp:featuredmedia'?: Array<{ source_url?: string; alt_text?: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
  };
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function normalizePost(post: WordPressPost): Article {
  const author = post._embedded?.author?.[0];
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const terms = post._embedded?.['wp:term']?.flat() || [];
  const category = terms.find((term) => term.taxonomy === 'category');

  return {
    id: String(post.id),
    title: stripHtml(post.title.rendered),
    slug: post.slug,
    excerpt: stripHtml(post.excerpt.rendered),
    content: stripHtml(post.content.rendered).split(/\n+/).filter(Boolean),
    author: {
      name: author?.name || 'AnimeFreak Editorial',
      role: 'Contributor',
      avatar: author?.avatar_urls?.['96'] || '',
      bio: author?.description,
    },
    category: category?.name || 'Uncategorized',
    tags: terms.filter((term) => term.taxonomy === 'post_tag').map((term) => term.name),
    featuredImage: featuredMedia?.source_url || '',
    publishedAt: post.date,
    updatedAt: post.modified,
    readingTime: '5 min read',
  };
}

export async function getPosts(params: Record<string, string> = {}): Promise<Article[]> {
  const query = new URLSearchParams({ _embed: '1', per_page: '20', ...params });
  const posts = await wordpressRequest<WordPressPost[]>(`wp/v2/posts?${query.toString()}`);
  return posts.map(normalizePost);
}

export async function getPost(slug: string): Promise<Article | null> {
  const posts = await getPosts({ slug });
  return posts[0] || null;
}

export async function getCategories(): Promise<Array<{ id: number; name: string; slug: string }>> {
  return wordpressRequest<Array<{ id: number; name: string; slug: string }>>('wp/v2/categories?per_page=100');
}

export async function getTags(): Promise<Array<{ id: number; name: string; slug: string }>> {
  return wordpressRequest<Array<{ id: number; name: string; slug: string }>>('wp/v2/tags?per_page=100');
}

export async function searchPosts(query: string): Promise<Article[]> {
  return getPosts({ search: query });
}
