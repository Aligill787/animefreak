import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Shield, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/siteConfig';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Contact AnimeFreak – Editorial & Inquiries';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;
    setIsSent(true);
  };

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
          <span className="text-slate-300">Contact</span>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-14 space-y-10">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/40 text-xs font-mono tracking-wider uppercase text-purple-300">
            <Mail className="h-3.5 w-3.5" />
            <span>Editorial & Support Desk</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Have questions about an original manga release, creator submissions, licensing inquiries, or technical support? Drop our desk a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Left) */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-400">
                Direct Email
              </div>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm font-semibold text-white hover:text-purple-300 transition-colors block break-all font-mono"
              >
                {siteConfig.contactEmail}
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Response turnaround is typically 1–2 business days.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/8 bg-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-400">
                DMCA & Copyright
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                For intellectual property inquiries or notice of designated agent, select "Copyright" in the form or view our dedicated copyright guidelines.
              </p>
              <button
                onClick={() => onNavigate({ type: 'copyright' })}
                className="text-xs text-purple-400 hover:text-purple-300 underline font-semibold"
              >
                View DMCA Procedures →
              </button>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="md:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/12 shadow-2xl">
              {isSent ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our editorial and support desk has logged your ticket under category <strong>{category}</strong> and will follow up at <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Inquiry Category *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Business">Business</option>
                        <option value="Creator Submission">Creator Submission</option>
                        <option value="Copyright">Copyright / DMCA</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Advertising">Advertising</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Summary of inquiry"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please write your questions or comments..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#08090e]/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};
