import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, BookOpen, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', route: { type: 'home' } as PageRoute },
    { label: 'Anime Blog', route: { type: 'blog' } as PageRoute },
    { label: 'Stories', route: { type: 'stories' } as PageRoute },
    { label: 'Manga', route: { type: 'manga' } as PageRoute },
    { label: 'Shop', route: { type: 'shop' } as PageRoute },
    { label: 'Creators', route: { type: 'creators' } as PageRoute },
    { label: 'About', route: { type: 'about' } as PageRoute },
  ];

  const isCurrentActive = (route: PageRoute) => {
    return currentRoute.type === route.type;
  };

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/8 bg-[#08090e]/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick({ type: 'home' })}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="AnimeFreak Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-500 p-0.5 shadow-md shadow-purple-900/30 group-hover:scale-105 transition-transform">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#0c0d16]">
                <Sparkles className="h-4.5 w-4.5 text-purple-400 group-hover:text-pink-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                AnimeFreak
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text with hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const active = isCurrentActive(link.route);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.route)}
                  className={`relative py-1 transition-colors hover:text-white whitespace-nowrap focus:outline-none ${
                    active ? 'text-purple-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Cart, Account, Mobile toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all focus:outline-none"
              aria-label="Search articles and manga"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative flex h-9.5 items-center gap-2 px-3 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white transition-all focus:outline-none"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span className="hidden sm:inline text-xs font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-[11px] font-bold text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAccount}
              className="flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all focus:outline-none"
              aria-label="User Account Library"
            >
              <User className="h-4.5 w-4.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white lg:hidden transition-all focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-30 lg:hidden bg-[#08090e]/95 backdrop-blur-xl border-b border-white/10 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col p-6 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const active = isCurrentActive(link.route);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.route)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-base font-medium transition-colors ${
                    active
                      ? 'bg-purple-600/15 text-purple-300 border border-purple-500/20'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-2 w-2 rounded-full bg-purple-400" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                Quick Actions
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-200"
                >
                  <Search className="h-4 w-4" />
                  <span>Search Site</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-200"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Cart ({cartCount})</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/20 mt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-1">
                <BookOpen className="h-4 w-4" />
                <span>Independent Anime Culture</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Original fictional storytelling, digital manga, and essays beyond the mainstream franchise screen.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
