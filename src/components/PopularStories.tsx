import React from 'react';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
  import { useContent } from '../data/ContentProvider';
  const { stories: STORIES } = useContent();
import { PageRoute } from '../types';

interface PopularStoriesProps {
  onNavigate: (route: PageRoute) => void;
}

export const PopularStories: React.FC<PopularStoriesProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-20 border-t border-white/6 bg-[#0a0c13]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-1.5">
              Original Serialized Prose
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Popular Original Stories
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5">
              Immerse yourself in rich prose narratives from independent fantasy and sci-fi novelists.
            </p>
          </div>

          <button
            onClick={() => onNavigate({ type: 'stories' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>View All Serialized Stories</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col sm:flex-row gap-6 group"
            >
              {/* Cover thumbnail */}
              <div className="w-full sm:w-44 aspect-[3/4] sm:aspect-auto rounded-xl overflow-hidden bg-[#0c0d16] shrink-0 relative">
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-mono text-purple-300 bg-black/80 px-2 py-0.5 rounded text-center backdrop-blur-sm">
                  {story.chaptersCount} Chapters
                </div>
              </div>

              {/* Story Content */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-purple-400 font-semibold">{story.genre}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {story.readingTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                    {story.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <User className="h-3.5 w-3.5 text-slate-500" />
                    <span>By {story.author}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed pt-1">
                    {story.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/8 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Latest: <strong className="text-slate-200">Chapter {story.chapters[0]?.number || 1}</strong>
                  </span>

                  <button
                    onClick={() => onNavigate({ type: 'story-detail', storySlug: story.slug })}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-xs font-semibold text-purple-200 hover:text-white transition-all focus:outline-none"
                  >
                    <span>Read Chapter</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
