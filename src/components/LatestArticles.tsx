import React from 'react';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
  import { useContent } from '../data/ContentProvider';
  const { articles: ARTICLES } = useContent();
import { PageRoute } from '../types';

interface LatestArticlesProps {
  onNavigate: (route: PageRoute) => void;
}

export const LatestArticles: React.FC<LatestArticlesProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-20 border-t border-white/6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-1.5">
              Culture, Analysis & Guides
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Latest Anime & Manga Essays
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5">
              In-depth craft breakdowns, sociological worldbuilding, and independent creator journalism.
            </p>
          </div>

          <button
            onClick={() => onNavigate({ type: 'blog' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => onNavigate({ type: 'article', articleSlug: article.slug })}
            >
              {/* Featured Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d16]">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent opacity-70" />

                {/* Unboxed category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono tracking-wide uppercase px-2.5 py-1 rounded bg-[#08090e]/85 backdrop-blur-md text-purple-300 border border-white/10">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  
                  {/* Zero-Pill Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-500" />
                      {article.publishedAt}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
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

                {/* Author Info */}
                <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="h-7 w-7 rounded-full object-cover border border-purple-500/20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-slate-200">{article.author.name}</div>
                      <div className="text-[11px] text-slate-500">{article.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
