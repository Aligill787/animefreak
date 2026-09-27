export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  author: Author;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface MangaReview {
  id: string;
  user: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Manga {
  id: string;
  title: string;
  slug: string;
  description: string;
  storySynopsis: string;
  author: string;
  genre: string;
  pages: number;
  cover: string;
  previewPages: string[];
  price: number;
  aiDisclosure: string;
  publishedAt: string;
  rating: number;
  reviewsCount: number;
  reviews: MangaReview[];
  status?: 'draft' | 'published' | 'private';
  featured?: boolean;
  genres?: string[];
  chapters?: Chapter[];
}

export interface Chapter {
  id: string;
  mangaId: string;
  chapterNumber: number;
  title: string;
  pages: Array<{ pageNumber: number; imageUrl: string }>;
  publishedDate?: string;
}

export interface StoryChapter {
  number: number;
  title: string;
  readTime: string;
  content: string[];
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  synopsis: string;
  author: string;
  genre: string;
  cover: string;
  chaptersCount: number;
  readingTime: string;
  chapters: StoryChapter[];
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  cover: string;
  format: string;
  fileSize: string;
  features: string[];
  digitalDownloadInfo: string;
  category: 'manga-volume' | 'art-pack' | 'wallpapers';
  shortDescription?: string;
  salePrice?: number;
  images?: string[];
  stockStatus?: 'instock' | 'outofstock' | 'onbackorder';
  downloadable?: boolean;
  sku?: string;
  sourceProductId?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'blog' }
  | { type: 'stories' }
  | { type: 'manga' }
  | { type: 'shop' }
  | { type: 'creators' }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'category'; categorySlug: string }
  | { type: 'article'; articleSlug: string }
  | { type: 'manga-detail'; mangaSlug: string }
  | { type: 'story-detail'; storySlug: string }
  | { type: 'product-detail'; productSlug: string }
  | { type: 'privacy' }
  | { type: 'terms' }
  | { type: 'disclaimer' }
  | { type: 'copyright' }
  | { type: 'cookies' }
  | { type: 'refund' };
