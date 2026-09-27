import React from 'react';
import { Eye, Info, Sparkles, BookOpen, Star, ArrowRight } from 'lucide-react';
import { MANGA_ITEMS } from '../data/mockData';
import { PageRoute } from '../types';

interface OriginalAiMangaProps {
  onNavigate: (route: PageRoute) => void;
  onOpenMangaReader: (mangaId: string) => void;
}

export const OriginalAiManga: React.FC<OriginalAiMangaProps> = ({
  onNavigate,
  onOpenMangaReader,
}) => {
  return (
    <section className="py-14 sm:py-20 relative">
      {/* Background ambient glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-900/10 blur-[120px]"
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Independent Imprint</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Original AI Manga
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-xl">
              Original stories, original characters and imaginative worlds.
            </p>
          </div>

          <button
            onClick={() => onNavigate({ type: 'manga' })}
            className="inline-flex items-center gap-1 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>Explore Full Manga Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* AI Transparency Notice Banner */}
        <div className="mb-10 p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-purple-200">
          <div className="flex items-start sm:items-center gap-2.5">
            <Info className="h-4 w-4 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Ethical Disclosure:</strong> Artwork in this collection is synthesized or enhanced using generative AI models under human artistic direction and overpainting. All characters, narratives, and lore are 100% original.
            </span>
          </div>
          <button
            onClick={() => onNavigate({ type: 'creators' })}
            className="text-purple-400 hover:text-purple-200 font-semibold underline underline-offset-2 shrink-0 text-left"
          >
            Read Our AI Ethics Policy
          </button>
        </div>

        {/* 4 Manga Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MANGA_ITEMS.map((manga) => (
            <div
              key={manga.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Cover Image Container (3:4 ratio) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0d16]">
                <img
                  src={manga.cover}
                  alt={`${manga.title} Manga Cover`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-[#12131c]/20 to-transparent" />

                {/* Genre Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono tracking-wide uppercase px-2 py-0.5 rounded bg-[#08090e]/90 backdrop-blur-md text-slate-300 border border-white/10">
                    {manga.genre}
                  </span>
                </div>

                {/* Rating & Page Count */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1 font-mono">
                    <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                    <span>{manga.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-amber-300">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{manga.rating}</span>
                  </div>
                </div>
              </div>

              {/* Info & Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {manga.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {manga.description}
                  </p>

                  {/* AI Label */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-300/80">
                      <Sparkles className="h-3 w-3 text-purple-400" />
                      <span>AI-Assisted Production</span>
                    </span>
                  </div>
                </div>

                {/* Action Buttons: Read Preview & View Details */}
                <div className="pt-3 border-t border-white/8 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenMangaReader(manga.id)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-xs font-semibold text-purple-200 transition-all focus:outline-none"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="truncate">Read Preview</span>
                  </button>

                  <button
                    onClick={() => onNavigate({ type: 'manga-detail', mangaSlug: manga.slug })}
                    className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all focus:outline-none"
                  >
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
