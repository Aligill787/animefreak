import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { ASSETS } from '../data/contentRepository';
  import { useContent } from '../data/ContentProvider';
import { PageRoute } from '../types';

interface FeaturedStoriesProps {
  onNavigate: (route: PageRoute) => void;
  onOpenMangaReader: (mangaId: string) => void;
}

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({
  onNavigate,
  onOpenMangaReader,
}) => {
    const { assets: ASSETS } = useContent();
  const featuredItems = [
    {
      id: 'story-1',
      title: 'The Last Shinobi of the Forgotten Moon',
      category: 'Original Story',
      description: 'When the clan of the Crescent Peak was wiped out in a single midnight raid, only a wounded shadow apprentice survived with an ancestral moon scroll.',
      date: 'March 2026',
      readTime: '45 min total',
      image: ASSETS.crimsonEclipse,
      action: () => onNavigate({ type: 'story-detail', storySlug: 'the-last-shinobi-of-the-forgotten-moon' }),
      buttonLabel: 'Read Story',
    },
    {
      id: 'manga-4',
      title: 'Beyond the Crimson Gate',
      category: 'Original Manga',
      description: 'A forbidden mountain gate separates mortals from the spirits of dusk. Armed with an ancestral bell, shrine maiden Yuna crosses the boundary.',
      date: 'February 2026',
      readTime: '36 pages',
      image: ASSETS.universeGuide,
      action: () => onNavigate({ type: 'manga-detail', mangaSlug: 'beyond-the-crimson-gate' }),
      buttonLabel: 'Read Manga',
    },
    {
      id: 'manga-3',
      title: 'Starborn: Zero',
      category: 'Sci-Fi Manga',
      description: 'Beyond the jump gates of Sector Nine lies the carcass of an ancient dreadnought and a scavenger crew ready to stake everything on humanity’s lost coordinates.',
      date: 'March 2026',
      readTime: '28 pages',
      image: ASSETS.starbornZero,
      action: () => onNavigate({ type: 'manga-detail', mangaSlug: 'starborn-zero' }),
      buttonLabel: 'Explore Series',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-white/6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-1.5">
              Curated Editorials
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Stories
            </h2>
          </div>
          <button
            onClick={() => onNavigate({ type: 'stories' })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>Browse all original narratives</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <article
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image Container with 16:10 aspect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d16]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent opacity-80" />
                
                {/* Category overlay */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono tracking-wide uppercase px-2.5 py-1 rounded bg-[#08090e]/85 backdrop-blur-md text-purple-300 border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-500" />
                      {item.date}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/8">
                  <button
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-600/20 hover:border-purple-500/30 text-xs font-semibold text-slate-200 hover:text-white transition-all group/btn"
                  >
                    <span>{item.buttonLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 text-purple-400" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
