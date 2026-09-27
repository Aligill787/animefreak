import React from 'react';
import { ArrowRight, BookOpen, Compass, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/mockData';
import { PageRoute } from '../types';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-18 lg:pb-30">
      {/* Subtle ambient light glows */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-900/25 via-fuchsia-900/20 to-transparent blur-[120px]"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-20 h-[400px] w-[500px] rounded-full bg-purple-600/10 blur-[100px]"
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/30 text-xs font-mono tracking-wider uppercase text-purple-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>Independent Anime Culture</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] max-w-2xl">
              Stories beyond <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                the screen.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Discover original anime-inspired stories, creative articles, AI-generated manga and digital collections created for fans who love imaginative worlds.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onNavigate({ type: 'manga' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-600 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus:outline-none"
              >
                <span>Explore Manga</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => {
                  onNavigate({ type: 'blog' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap focus:outline-none"
              >
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span>Read the Blog</span>
              </button>
            </div>

            {/* Key Trust & Platform Markers */}
            <div className="pt-6 border-t border-white/8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>100% Original Characters & Worlds</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Ethical AI Disclosure</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <span>Independent Creator Imprint</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-fuchsia-500/20 to-pink-600/30 opacity-70 blur-lg transition duration-500 group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0c0d16] shadow-2xl">
                <img
                  src={ASSETS.hero}
                  alt="Original Anime Concept Artwork – The Wandering Storyteller"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/40 to-transparent" />
                
                {/* Overlay Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-purple-300">
                    <span>ORIGINAL ANTHOLOGY</span>
                    <span aria-hidden="true">·</span>
                    <span>KEY VISUAL #01</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    The Wandering Scholar of the Obsidian Sky
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    A celestial journey across forgotten moon shrines and shattered archives.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
