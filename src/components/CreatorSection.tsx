import React, { useState } from 'react';
import { UploadCloud, CheckCircle, ShieldCheck, Sparkles, BookOpen, Send, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface CreatorSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const CreatorSection: React.FC<CreatorSectionProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    creatorName: '',
    projectTitle: '',
    genre: 'Fantasy / Adventure',
    description: '',
    portfolioUrl: '',
    aiDisclosure: 'hybrid', // 'none' | 'hybrid' | 'assisted'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectTitle) {
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/6 bg-gradient-to-b from-transparent via-[#0f111c]/60 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Creator Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Independent Creators Welcome</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Publish Your Vision on AnimeFreak
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We empower solitary artists, indie scriptwriters, and digital mangaka to bring imaginative worlds to a global audience with transparent royalties, editorial support, and respectful AI disclosure.
            </p>

            {/* Creator Guidelines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <ShieldCheck className="h-4 w-4 text-purple-400" />
                  <span>100% Original IP Only</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No fan-fiction or trademarked characters (Naruto, Dragon Ball, etc.). You retain 100% ownership of your IP.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>Transparent AI Disclosure</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We welcome assisted workflows, provided tools and processes are openly declared to your audience.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <BookOpen className="h-4 w-4 text-purple-400" />
                  <span>Digital Marketplace</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sell DRM-free digital volumes directly to readers with generous 80/20 revenue splits.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <UploadCloud className="h-4 w-4 text-purple-400" />
                  <span>Editorial Review</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every submission is reviewed by our narrative team within 5 business days.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate({ type: 'creators' })}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-4"
              >
                Read Full Creator Terms & Distribution Guidelines →
              </button>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/12 shadow-2xl relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="font-display text-xl font-bold text-white">
                  Submit Your Manga or Story
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your project brief to initiate creator onboarding with our editorial desk.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <CheckCircle className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    Proposal Received!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.creatorName || formData.name}</strong>. Our editorial team will review <em>"{formData.projectTitle}"</em> and reach out at <strong>{formData.email}</strong> within 5 business days.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        creatorName: '',
                        projectTitle: '',
                        genre: 'Fantasy / Adventure',
                        description: '',
                        portfolioUrl: '',
                        aiDisclosure: 'hybrid',
                      });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Submit another title</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Creator / Pen Name
                      </label>
                      <input
                        type="text"
                        value={formData.creatorName}
                        onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
                        placeholder="e.g. Studio Eclipse"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.projectTitle}
                        onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                        placeholder="e.g. Chrono Blade"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Genre
                      </label>
                      <select
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="Fantasy / Adventure">Fantasy / Adventure</option>
                        <option value="Dark Fantasy">Dark Fantasy</option>
                        <option value="Sci-Fi / Cyberpunk">Sci-Fi / Cyberpunk</option>
                        <option value="Mystery / Supernatural">Mystery / Supernatural</option>
                        <option value="Slice of Life / Drama">Slice of Life / Drama</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        AI Usage Disclosure *
                      </label>
                      <select
                        value={formData.aiDisclosure}
                        onChange={(e) => setFormData({ ...formData, aiDisclosure: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="none">100% Hand-drawn / No AI</option>
                        <option value="hybrid">Hybrid (AI background / Human character)</option>
                        <option value="assisted">Assisted (Generative layout & overpaint)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Portfolio / Manuscript Link (Google Drive, ArtStation, Dropbox)
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://drive.google.com/your-manga-preview"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Synopsis & Logline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the setting, protagonist's core dilemma, and what makes this universe unique..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/8 flex items-start gap-2 text-[11px] text-slate-400">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      By submitting, you confirm this work is original and does not infringe on third-party copyrighted manga or trademarked properties.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all focus:outline-none cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Proposal to Editors</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
