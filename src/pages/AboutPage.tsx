import React, { useEffect } from 'react';
import { Sparkles, Shield, BookOpen, HeartHandshake, Eye, Award } from 'lucide-react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/siteConfig';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About AnimeFreak – Independent Anime Culture & Publishing';
  }, []);

  return (
    <div className="min-h-screen pb-20">
      
      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-[#090b12]/50 py-3.5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="hover:text-purple-300 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-300">About</span>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-16 space-y-12">
        
        {/* Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Origin & Manifesto</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Stories Beyond the Screen
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            AnimeFreak was founded with a singular conviction: that anime and manga culture thrives when independent creators have the freedom to build original worlds outside the algorithmic constraints of commercial franchises.
          </p>
        </div>

        {/* Independence & Copyright Statement Box */}
        <div className="p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
            <Shield className="h-5 w-5 text-purple-400" />
            <span>Independent Platform Statement & Non-Affiliation</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {siteConfig.legalDisclaimer}
          </p>
          <div className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-2">
            <strong>Anti-Piracy Mandate:</strong> AnimeFreak is strictly NOT an anime streaming or pirated media repository. We do not host, index, or link to unauthorized video streams, torrents, or scans. Our platform is dedicated entirely to independent creative writing, cultural commentary, original manga publication, and authorized creator marketplaces.
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-white">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-bold text-white">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <span>Original Storytelling & Fiction</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We commission and publish serialized prose, dark fantasy sagas, space operas, and historical ninja dramas crafted by independent authors worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-bold text-white">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span>Original & AI-Assisted Manga</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We pioneer transparent generative workflows where assistive models enhance environment rendering while human authors direct the emotional narrative and panel choreography.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-bold text-white">
                <Award className="h-5 w-5 text-purple-400" />
                <span>Serious Cultural Journalism</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Deep essays examining character psychology, villain motivations, power system architectures, and the socio-economic evolution of the manga medium.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-bold text-white">
                <HeartHandshake className="h-5 w-5 text-purple-400" />
                <span>Creator Empowerment & Fair Pay</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our digital shop offers direct-to-consumer monetization with transparent 80% author royalty splits and DRM-free publication formats.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-white">
            Our AI Ethics & Attribution Framework
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We believe that generative tools should empower creators rather than obscure them. Every work on AnimeFreak that utilizes assistive diffusion or language modeling carries a clear, human-readable disclosure notice detailing what parts were synthesized and what parts were created by hand.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate({ type: 'creators' })}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
            >
              <span>Explore Creator Guidelines</span>
            </button>
          </div>
        </div>

      </main>

    </div>
  );
};
