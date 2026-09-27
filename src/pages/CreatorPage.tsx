import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, BookOpen, ShieldCheck, UploadCloud, CheckCircle2, FileText } from 'lucide-react';
import { PageRoute } from '../types';
import { CreatorSection } from '../components/CreatorSection';

interface CreatorPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CreatorPage: React.FC<CreatorPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Creator Hub – Submit Your Manga & Stories – AnimeFreak';
  }, []);

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
          <span className="text-slate-300">Creators</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Independent Publishing Imprint</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Creator Publishing Program
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you are drawing your debut digital manga, crafting dark fantasy serialized prose, or experimenting with ethical AI-assisted worldbuilding, AnimeFreak provides an audience, an editorial team, and a fair digital store.
          </p>
        </div>

        {/* 3 Step Publishing Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-bold uppercase">
              Step 01
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Manuscript & Pitch Review
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Submit your portfolio link, logline, and sample chapter. Our editorial panel evaluates story cohesion, originality, and visual pacing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-bold uppercase">
              Step 02
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Formatting & AI Disclosure
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We assist in assembling DRM-free PDF and CBZ reading files, optimizing dual-page spreads, and certifying transparent tool attribution.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-bold uppercase">
              Step 03
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Release & Direct Royalties
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your title launches in our Digital Shop and interactive reader with 80% revenue going directly to you, accompanied by featured editorial coverage.
            </p>
          </div>
        </div>

        {/* Interactive Submission Form Embedded Component */}
        <CreatorSection onNavigate={onNavigate} />

      </main>
    </div>
  );
};
