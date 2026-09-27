import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate clean API subscription dispatch
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <section className="py-16 sm:py-20 border-t border-white/6 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-purple-900/15 blur-[100px]"
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-[#121422] to-[#0c0d16] p-8 sm:p-12 shadow-2xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>Weekly Dispatch</span>
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Join the AnimeFreak Universe
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Get new original stories, manga releases and anime culture articles directly in your inbox.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 max-w-md mx-auto space-y-2 text-center animate-fadeIn">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                You're Subscribed!
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Welcome to the readership. Look out for our upcoming issue covering independent worldbuilding and new chapter releases.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                }}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 underline font-medium pt-1"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
              <div className="relative flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/12 bg-[#08090e]/90 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all focus:outline-none cursor-pointer shrink-0 disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {status === 'error' && (
                <div className="text-xs text-rose-400 font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                <span>Zero spam. Unsubscribe at any moment in one click.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
