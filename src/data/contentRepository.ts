import { ARTICLES, ASSETS, CATEGORIES, MANGA_ITEMS, PRODUCTS, STORIES, TRENDING_TOPICS } from './mockData';

// This is the compatibility boundary for the current UI. Replace these local
// implementations with cached API calls when WordPress is connected.
export { ARTICLES, ASSETS, CATEGORIES, MANGA_ITEMS, PRODUCTS, STORIES, TRENDING_TOPICS };

export function getLocalPost(slug: string) {
  return ARTICLES.find((article) => article.slug === slug) || null;
}

export function getLocalManga(slug: string) {
  return MANGA_ITEMS.find((manga) => manga.slug === slug) || null;
}

export function getLocalStory(slug: string) {
  return STORIES.find((story) => story.slug === slug) || null;
}

export function getLocalProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug) || null;
}
