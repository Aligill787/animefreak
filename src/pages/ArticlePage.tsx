import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Check, User, Sparkles, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';
import { PageRoute } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Newsletter } from '../components/Newsletter';

interface ArticlePageProps {
  articleSlug: string;
  onNavigate: (route: PageRoute) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  articleSlug,
  onNavigate,
}) => {
    const { articles: ARTICLES } = useContent();
  const article = ARTICLES.find((a) => a.slug === articleSlug) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${article.title} – AnimeFreak`;
  }, [article]);

  return (
    <div className="min-h-screen pb-20">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="border-b border-white/8 bg-[#090b12]/50 py-3.5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-400 font-mono">
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
            Blog
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate({ type: 'category', categorySlug: article.category.toLowerCase().replace(/\s+/g, '-') })}
            className="hover:text-purple-300 transition-colors"
          >
            {article.category}
          </button>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-[200px] sm:max-w-xs">
            {article.title}
          </span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Category & Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <span>{article.category}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {article.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/8 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-10 w-10 rounded-full object-cover border border-purple-500/30"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-semibold text-slate-200 text-sm">
                  {article.author.name}
                </div>
                <div className="text-[11px] text-slate-400">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                Published {article.publishedAt}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                {article.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/12 shadow-2xl relative aspect-[16/9] bg-[#0c0d16]">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-[11px] text-slate-400 font-mono">
            Original Artwork Archive · AnimeFreak Editorial
          </div>
        </div>

        {/* Advertisement Slot (Above the Fold) */}
        <AdPlaceholder slotName="Article Header Leaderboard" format="leaderboard" />

        {/* Table of Contents */}
        <div className="my-8 p-6 rounded-2xl border border-white/8 bg-[#0f111d]/70 backdrop-blur-sm space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            <span>In This Article</span>
          </div>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li className="hover:text-purple-300 transition-colors">
              • The Crucible of Internal Contradiction
            </li>
            <li className="hover:text-purple-300 transition-colors">
              • The Foil as a Moral Mirror
            </li>
            <li className="hover:text-purple-300 transition-colors">
              • Real Stakes Require Irreversible Consequences
            </li>
            <li className="hover:text-purple-300 transition-colors">
              • Crafting Cohesive Narrative Universes
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-purple max-w-none space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="text-lg sm:text-xl font-normal text-slate-200 leading-relaxed border-l-2 border-purple-500 pl-4 py-1 italic">
            "{article.excerpt}"
          </p>

          {article.content.map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2
                  key={index}
                  className="font-display text-2xl sm:text-3xl font-bold text-white pt-6 pb-2 tracking-tight"
                >
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}

          {/* Pull quote highlight */}
          <blockquote className="my-8 p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 text-purple-200 text-lg font-medium italic">
            "Characters survive across decades not through power levels, but through the emotional cost of their convictions."
          </blockquote>

          <p>
            As independent creators, our greatest strength is the liberty to build without corporate committee constraints. When we write characters with authentic internal conflict, we forge stories that resonate far beyond the ephemeral trends of the season.
          </p>
        </article>

        {/* Mid-Article Advertisement */}
        <AdPlaceholder slotName="In-Article Content Rectangle" format="banner" />

        {/* Tags */}
        <div className="my-8 pt-6 border-t border-white/8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0e101a] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="h-16 w-16 rounded-2xl object-cover border-2 border-purple-500/40 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-bold text-white">
                Written by {article.author.name}
              </span>
              <span className="text-[11px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                Staff Editorial
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {article.author.bio || 'Screenwriter and cultural essayist specializing in anime dramaturgy, manga panel mechanics, and narrative worldbuilding.'}
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="my-14 space-y-6">
          <h3 className="font-display text-2xl font-bold text-white">
            Related Culture & Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate({ type: 'article', articleSlug: rel.slug })}
                className="glass-panel glass-panel-hover rounded-xl overflow-hidden cursor-pointer flex flex-col group"
              >
                <div className="aspect-[16/10] bg-[#0c0d16] overflow-hidden">
                  <img
                    src={rel.featuredImage}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div className="text-[10px] font-mono text-purple-400 uppercase">
                    {rel.category}
                  </div>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-purple-300 line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="text-[11px] text-slate-400">{rel.readingTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Back to top/blog */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 flex justify-between items-center text-xs text-slate-400">
        <button
          onClick={() => onNavigate({ type: 'blog' })}
          className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Articles</span>
        </button>
      </div>

    </div>
  );
};
