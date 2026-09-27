import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';

export const CookiePolicyPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="cookies"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
        <p>
          Cookies are small text data files stored on your browser or device by websites you visit. They help websites remember your preferences, keep shopping carts active between page reloads, and provide anonymous performance analytics.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Categories of Cookies We Use</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1">
            <h3 className="font-semibold text-white">A. Essential & Functional Cookies</h3>
            <p className="text-xs text-slate-400">
              Required for core platform functionality, such as retaining items in your shopping bag, authorizing digital token downloads, and remembering your cookie consent choice. These cannot be disabled.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1">
            <h3 className="font-semibold text-white">B. Analytical & Measurement Cookies</h3>
            <p className="text-xs text-slate-400">
              Collect aggregated, non-identifying telemetry to help us understand which essays and chapters resonate with readers and diagnose layout performance bottlenecks.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/8 bg-white/5 space-y-1">
            <h3 className="font-semibold text-white">C. Contextual Advertising Cookies</h3>
            <p className="text-xs text-slate-400">
              Used by advertising partners (such as Google AdSense) to serve contextual promotional units. We do not activate optional tracking cookies until you provide consent.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. Managing Your Cookie Choices</h2>
        <p>
          You may modify your preferences at any time by accessing the "Cookie Preferences" link in our footer or adjusting your browser's native cookie handling settings.
        </p>
      </section>
    </LegalLayout>
  );
};
