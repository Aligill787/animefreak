import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
  import { useContent } from '../data/ContentProvider';
  const { trendingTopics: TRENDING_TOPICS } = useContent();
import { PageRoute } from '../types';

interface TrendingTopicsProps {
  onNavigate: (route: PageRoute) => void;
}

export const TrendingTopics: React.FC<TrendingTopicsProps> = ({ onNavigate }) => {
  return (
    <section className="py-6 border-y border-white/6 bg-[#0a0c13]/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 shrink-0">
            <TrendingUp className="h-4 w-4" />
            <span className="font-semibold">Trending Topics:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {TRENDING_TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => onNavigate({ type: 'blog' })}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/8 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 text-xs font-medium text-slate-300 hover:text-white transition-all group"
              >
                <span>{topic}</span>
                <ArrowUpRight className="h-3 w-3 text-slate-500 group-hover:text-purple-300 transition-colors" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
