import React, { useEffect } from 'react';
import { PageRoute } from '../../types';
import { Shield } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  onNavigate: (route: PageRoute) => void;
  activeLegalRoute: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
  onNavigate,
  activeLegalRoute,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${title} – AnimeFreak Legal`;
  }, [title]);

  const legalNavItems = [
    { label: 'Privacy Policy', route: { type: 'privacy' } as PageRoute, id: 'privacy' },
    { label: 'Terms of Service', route: { type: 'terms' } as PageRoute, id: 'terms' },
    { label: 'Disclaimer', route: { type: 'disclaimer' } as PageRoute, id: 'disclaimer' },
    { label: 'Copyright / DMCA', route: { type: 'copyright' } as PageRoute, id: 'copyright' },
    { label: 'Cookie Policy', route: { type: 'cookies' } as PageRoute, id: 'cookies' },
    { label: 'Refund Policy', route: { type: 'refund' } as PageRoute, id: 'refund' },
  ];

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
          <span className="text-slate-400">Legal</span>
          <span>/</span>
          <span className="text-slate-200">{title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Legal Navigation Sidebar */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 px-3">
              Legal Documents
            </div>
            {legalNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.route)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  activeLegalRoute === item.id
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-6 px-3">
              <div className="p-3.5 rounded-xl border border-white/8 bg-white/5 space-y-1.5 text-xs text-slate-400">
                <div className="font-semibold text-slate-200">Legal Questions?</div>
                <p className="text-[11px] leading-relaxed">
                  Email our compliance desk at <a href={`mailto:${siteConfig.contactEmail}`} className="text-purple-400 hover:underline">{siteConfig.contactEmail}</a>.
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Document Content */}
          <article className="lg:col-span-9 glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 space-y-6">
            <div className="border-b border-white/8 pb-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Shield className="h-4 w-4" />
                <span>OFFICIAL POLICY DOCUMENT</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {title}
              </h1>
              <div className="text-xs text-slate-500 font-mono">
                Effective & Last Updated: {lastUpdated}
              </div>
            </div>

            <div className="prose prose-invert prose-purple max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-5">
              {children}
            </div>
          </article>

        </div>
      </main>

    </div>
  );
};
