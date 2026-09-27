import React, { useState } from 'react';
import { X, User, Download, Bookmark, Sparkles, LogIn, CheckCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { PRODUCTS, MANGA_ITEMS } from '../data/mockData';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'library' | 'bookmarks' | 'profile'>('library');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl rounded-2xl border border-white/12 bg-[#0d0f18] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-white">
                Reader Account & Library
              </h2>
              <p className="text-xs text-slate-400">
                Member ID: AF-READ-8492 · Indie Patron
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Close Account Dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/8 bg-white/2 px-6">
          <button
            onClick={() => setActiveTab('library')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'library'
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Digital Purchases (2)
          </button>
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'bookmarks'
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Saved Reading List (3)
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Settings
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeTab === 'library' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-300">
                Your DRM-free digital files are stored securely and available for unlimited cloud re-downloads.
              </div>

              {[PRODUCTS[0], PRODUCTS[1]].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/8 bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="h-12 w-9 rounded object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {item.format} · {item.fileSize}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert(`Initiating simulated secure token download for ${item.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'bookmarks' && (
            <div className="space-y-3">
              {MANGA_ITEMS.slice(0, 2).map((manga) => (
                <div
                  key={manga.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/8 bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={manga.cover}
                      alt={manga.title}
                      className="h-12 w-9 rounded object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">{manga.title}</div>
                      <div className="text-[11px] text-purple-300">{manga.genre}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onNavigate({ type: 'manga-detail', mangaSlug: manga.slug });
                    }}
                    className="text-xs text-slate-300 hover:text-white underline"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Email Address</label>
                <input
                  type="email"
                  disabled
                  value="reader.patron@animefreak.culture"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Reader Display Name</label>
                <input
                  type="text"
                  defaultValue="AnimeFreak Patron"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-slate-400">
                <span>Account Status:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Verified Independent Reader
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/8 bg-[#08090e]/80 flex items-center justify-between text-xs text-slate-500">
          <span>AnimeFreak Independent Reader Network</span>
          <button
            onClick={() => {
              onClose();
              onNavigate({ type: 'creators' });
            }}
            className="text-purple-400 hover:text-purple-300 underline font-medium"
          >
            Become a Publishing Creator →
          </button>
        </div>

      </div>
    </div>
  );
};
