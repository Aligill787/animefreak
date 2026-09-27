import React, { useState, useEffect } from 'react';
import { Shield, X, Check, Settings2 } from 'lucide-react';
import { PageRoute } from '../types';

interface CookieBannerProps {
  onNavigate: (route: PageRoute) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('animefreak_cookie_consent');
    if (!consent) {
      // Delay showing slightly for anti-slop dwell principles
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, advertising: true };
    localStorage.setItem('animefreak_cookie_consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('animefreak_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-50 animate-fadeIn"
    >
      <div className="glass-panel border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 bg-[#0d0f18]/95 backdrop-blur-xl">
        
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Shield className="h-4 w-4" />
            </div>
            <h3 className="font-display text-sm font-bold text-white">
              Cookie & Privacy Preferences
            </h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white"
            aria-label="Dismiss cookie notice"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          AnimeFreak respects your privacy. We use essential cookies to maintain cart sessions and provide secure digital downloads. We also use analytics and advertising cookies to support independent writers.
        </p>

        {showPreferences ? (
          <div className="space-y-3 pt-2 border-t border-white/8 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/8">
              <div>
                <div className="font-semibold text-slate-200">Necessary (Always Active)</div>
                <div className="text-[11px] text-slate-400">Cart storage, security, authentication tokens</div>
              </div>
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold">Required</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/8">
              <div>
                <div className="font-semibold text-slate-200">Analytics</div>
                <div className="text-[11px] text-slate-400">Anonymous traffic measurement & reading patterns</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="h-4 w-4 rounded border-white/20 bg-black text-purple-600 focus:ring-purple-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/8">
              <div>
                <div className="font-semibold text-slate-200">Advertising</div>
                <div className="text-[11px] text-slate-400">Contextual Google AdSense support</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.advertising}
                onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                className="h-4 w-4 rounded border-white/20 bg-black text-purple-600 focus:ring-purple-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <button
              onClick={() => onNavigate({ type: 'cookies' })}
              className="text-[11px] text-purple-400 hover:underline"
            >
              Read Cookie Policy
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Settings2 className="h-3 w-3" />
                <span>Preferences</span>
              </button>

              <button
                onClick={handleAcceptAll}
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors"
              >
                <Check className="h-3 w-3" />
                <span>Accept All</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
};
