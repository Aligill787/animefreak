import React, { createContext, useContext, useEffect, useState } from 'react';
import { getManga } from '../api/manga';
import { getPosts } from '../api/posts';
import { getProducts } from '../api/products';
import { isWordPressConfigured } from '../api/wordpress';
import {
  ARTICLES,
  ASSETS,
  CATEGORIES,
  MANGA_ITEMS,
  PRODUCTS,
  STORIES,
  TRENDING_TOPICS,
} from './contentRepository';
import { Article, Manga, Product, Story } from '../types';

interface ContentContextValue {
  articles: Article[];
  manga: Manga[];
  products: Product[];
  stories: Story[];
  categories: typeof CATEGORIES;
  trendingTopics: typeof TRENDING_TOPICS;
  assets: typeof ASSETS;
  isLoading: boolean;
  isWordPressConfigured: boolean;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export const ContentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [articles, setArticles] = useState(ARTICLES);
  const [manga, setManga] = useState(MANGA_ITEMS);
  const [products, setProducts] = useState(PRODUCTS);
  const [isLoading, setIsLoading] = useState(isWordPressConfigured);

  useEffect(() => {
    if (!isWordPressConfigured) return;

    let isMounted = true;

    Promise.allSettled([getPosts(), getManga(), getProducts()])
      .then(([postsResult, mangaResult, productsResult]) => {
        if (!isMounted) return;

        if (postsResult.status === 'fulfilled' && postsResult.value.length > 0) {
          setArticles(postsResult.value);
        }
        if (mangaResult.status === 'fulfilled' && mangaResult.value.length > 0) {
          setManga(mangaResult.value);
        }
        if (productsResult.status === 'fulfilled' && productsResult.value.length > 0) {
          setProducts(productsResult.value);
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ContentContext.Provider
      value={{
        articles,
        manga,
        products,
        stories: STORIES,
        categories: CATEGORIES,
        trendingTopics: TRENDING_TOPICS,
        assets: ASSETS,
        isLoading,
        isWordPressConfigured,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export function useContent(): ContentContextValue {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used inside ContentProvider.');
  }
  return context;
}
