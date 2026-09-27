import React from 'react';
import { ArrowUp, Sparkles, Twitter, Instagram, Youtube, Video } from 'lucide-react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/8 bg-[#06070a] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/8">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#0c0d16]">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                AnimeFreak
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Stories beyond the screen. An independent anime & manga culture publication, original fiction anthology, and digital publishing imprint for creators and readers worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="AnimeFreak on X/Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="AnimeFreak on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="AnimeFreak on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="AnimeFreak on TikTok"
              >
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'blog' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Anime Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'manga' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Original Manga
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'stories' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Prose Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'shop' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Digital Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'creators' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  For Creators
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'about' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  About AnimeFreak
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'contact' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'creators' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Submit Your Manga
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Policy
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'privacy' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'terms' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'disclaimer' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'copyright' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Copyright / DMCA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'cookies' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick({ type: 'refund' })}
                  className="hover:text-purple-300 transition-colors"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright Statement */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-1.5 max-w-3xl">
            <p className="font-medium text-slate-400">
              © {siteConfig.copyrightYear} AnimeFreak. All rights reserved.
            </p>
            <p className="leading-relaxed">
              AnimeFreak is an independent anime culture and creative publishing platform. AnimeFreak is NOT affiliated with, authorized, or endorsed by Naruto, One Piece, Dragon Ball, Bleach, Marvel, DC, Shueisha, Kodansha, MAPPA, Toei Animation, Crunchyroll, Netflix, or any other commercial anime studio, streaming service, or manga publisher. All original fictional stories, artwork, and characters published by AnimeFreak are the property of their respective creators.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
