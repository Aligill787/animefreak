import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/mockData';
import { PageRoute } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (route: PageRoute) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onNavigate,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const currentCategory = CATEGORIES.find(
    (c) => c.slug === categorySlug
  ) || {
    slug: categorySlug,
    name: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1).replace(/-/g, ' '),
    count: 12,
    desc: 'Articles, essays, and creative resources curated under this cultural classification.',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${currentCategory.name} – AnimeFreak Culture`;
  }, [currentCategory]);

  const filteredArticles = ARTICLES.filter(
    (a) =>
      a.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
      a.tags.some((t) => t.toLowerCase().replace(/\s+/g, '-') === categorySlug) ||
      categorySlug === 'all'
  );

  const displayArticles = filteredArticles.length > 0 ? filteredArticles : ARTICLES;

  const totalPages = Math.ceil(displayArticles.length / itemsPerPage);
  const paginatedArticles = displayArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen pb-20">
      
      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-[#090b12]/50 py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-purple-300 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'blog' })}
            className="hover:text-purple-300 transition-colors"
          >
            Categories
          </button>
          <span>/</span>
          <span className="text-slate-300">{currentCategory.name}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-10">
        
        {/* Category Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Category Archive
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
            {currentCategory.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentCategory.desc}
          </p>
        </div>

        {/* Category Filter Pills (Interactive Filter Tabs) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/8 pb-6">
          <button
            onClick={() => onNavigate({ type: 'category', categorySlug: 'all' })}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              categorySlug === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 border border-white/8 text-slate-300 hover:text-white'
            }`}
          >
            All Essays
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onNavigate({ type: 'category', categorySlug: cat.slug })}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                categorySlug === cat.slug
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 border border-white/8 text-slate-300 hover:text-white'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate({ type: 'article', articleSlug: article.slug })}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d16]">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent opacity-70" />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono tracking-wide uppercase px-2.5 py-1 rounded bg-[#08090e]/85 backdrop-blur-md text-purple-300 border border-white/10">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-500" />
                      {article.publishedAt}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                  <span className="text-xs text-slate-400">By {article.author.name}</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ad Placement */}
        <AdPlaceholder slotName="Category Archive In-Feed Leaderboard" format="leaderboard" />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-xl border border-white/10 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-30"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-xl text-xs font-semibold transition-colors ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 border border-white/8 text-slate-300 hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-xl border border-white/10 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-30"
            >
              Next
            </button>
          </div>
        )}

      </main>

    </div>
  );
};
