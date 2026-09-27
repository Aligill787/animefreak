import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Sparkles, FileText, ShoppingBag, ArrowRight } from 'lucide-react';
import { ARTICLES, MANGA_ITEMS, STORIES, PRODUCTS, CATEGORIES } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';
import { PageRoute } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
    const { articles: ARTICLES, manga: MANGA_ITEMS, stories: STORIES, products: PRODUCTS, categories: CATEGORIES } = useContent();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const trimmedQuery = query.toLowerCase().trim();

  // Search logic across all collections
  const matchingArticles = trimmedQuery
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmedQuery) ||
          a.excerpt.toLowerCase().includes(trimmedQuery) ||
          a.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const matchingManga = trimmedQuery
    ? MANGA_ITEMS.filter(
        (m) =>
          m.title.toLowerCase().includes(trimmedQuery) ||
          m.genre.toLowerCase().includes(trimmedQuery) ||
          m.description.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const matchingStories = trimmedQuery
    ? STORIES.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmedQuery) ||
          s.synopsis.toLowerCase().includes(trimmedQuery) ||
          s.genre.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const matchingProducts = trimmedQuery
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmedQuery) ||
          p.description.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const matchingCategories = trimmedQuery
    ? CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmedQuery) ||
          c.desc.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const totalResults =
    matchingArticles.length +
    matchingManga.length +
    matchingStories.length +
    matchingProducts.length +
    matchingCategories.length;

  const handleSelectRoute = (route: PageRoute) => {
    onNavigate(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0e101a] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="h-5 w-5 text-purple-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, manga, original stories, digital shop..."
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white text-xs font-mono px-1.5 py-0.5 rounded bg-white/5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close search dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results / Empty State */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!trimmedQuery ? (
            <div className="py-8 text-center space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Popular Searches
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {['Crimson Eclipse', 'World-Building', 'Villain Design', 'AI Workflow', 'Soul Fragment', 'Power Systems'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg border border-white/8 bg-white/5 hover:bg-purple-600/20 hover:border-purple-500/30 text-xs text-slate-300 hover:text-white transition-all"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-base font-semibold text-slate-200">
                No results found for "{query}"
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for a different keyword, genre, author, or concept.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Manga results */}
              {matchingManga.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    <span>Original Manga ({matchingManga.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingManga.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => handleSelectRoute({ type: 'manga-detail', mangaSlug: m.slug })}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-colors group"
                      >
                        <img
                          src={m.cover}
                          alt={m.title}
                          className="h-12 w-9 rounded object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-white group-hover:text-purple-300 truncate">
                            {m.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">{m.description}</div>
                        </div>
                        <span className="text-xs font-mono text-purple-300">${m.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article results */}
              {matchingArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <FileText className="h-3 w-3" />
                    <span>Culture & Guides ({matchingArticles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingArticles.map((a) => (
                      <div
                        key={a.id}
                        onClick={() => handleSelectRoute({ type: 'article', articleSlug: a.slug })}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-colors group"
                      >
                        <img
                          src={a.featuredImage}
                          alt={a.title}
                          className="h-10 w-14 rounded object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-white group-hover:text-purple-300 truncate">
                            {a.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            {a.category} · {a.readingTime}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Story results */}
              {matchingStories.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <BookOpen className="h-3 w-3" />
                    <span>Prose Stories ({matchingStories.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingStories.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => handleSelectRoute({ type: 'story-detail', storySlug: s.slug })}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-colors group"
                      >
                        <img
                          src={s.cover}
                          alt={s.title}
                          className="h-12 w-9 rounded object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-white group-hover:text-purple-300 truncate">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            By {s.author} · {s.chaptersCount} Chapters
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product results */}
              {matchingProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <ShoppingBag className="h-3 w-3" />
                    <span>Digital Shop Items ({matchingProducts.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleSelectRoute({ type: 'product-detail', productSlug: p.slug })}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-colors group"
                      >
                        <img
                          src={p.cover}
                          alt={p.title}
                          className="h-10 w-12 rounded object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-white group-hover:text-purple-300 truncate">
                            {p.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">{p.format}</div>
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-300">
                          ${p.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-white/10 bg-[#08090e]/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Search AnimeFreak Platform</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
};
