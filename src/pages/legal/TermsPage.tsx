import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';

export const TermsPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="terms"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
        <p>
          By accessing or using AnimeFreak, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Intellectual Property & Ownership</h2>
        <p>
          All original stories, original manga chapters, editorial essays, and visual concept designs published on AnimeFreak are the property of AnimeFreak and their respective contributing creators. Commercial reproduction, unauthorized redistribution, or scraping of these works without express written consent is strictly prohibited.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. Digital Purchase License</h2>
        <p>
          Purchases of digital manga volumes, art packs, and wallpaper bundles grant you a revocable, non-exclusive, non-transferable personal license to download and view the content on personal devices. You may not resell, sublicense, or publicly redistribute these digital files.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">4. User Conduct & Acceptable Use</h2>
        <p>
          Users agree not to utilize the Platform to submit fraudulent creator proposals, deploy malicious automation, disrupt server infrastructure, or infringe upon third-party intellectual property rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
        <p>
          AnimeFreak is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, AnimeFreak disclaims all warranties, express or implied, including fitness for a particular purpose and non-infringement.
        </p>
      </section>
    </LegalLayout>
  );
};
