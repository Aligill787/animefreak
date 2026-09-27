import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';
import { siteConfig } from '../../config/siteConfig';

export const CopyrightDmcaPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Copyright & DMCA Policy"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="copyright"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. Respect for Intellectual Property</h2>
        <p>
          AnimeFreak respects the intellectual property rights of artists, publishers, and content creators. We maintain a zero-tolerance policy toward genuine copyright infringement and take immediate measures upon receiving a compliant Digital Millennium Copyright Act (DMCA) takedown notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Filing a DMCA Notice of Infringement</h2>
        <p>
          If you believe in good faith that any content hosted on AnimeFreak infringes upon your copyright, please dispatch a written notification to our Designated Copyright Agent at <strong>{siteConfig.contactEmail}</strong> containing:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>A physical or electronic signature of the copyright holder or authorized representative.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Specific identification of the URL or location on AnimeFreak where the material is located.</li>
          <li>Your contact information including legal name, address, telephone number, and email.</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, under penalty of perjury.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. Counter-Notification Procedure</h2>
        <p>
          If material you submitted was removed as a result of a DMCA notice and you believe the removal was a mistake or misidentification, you may submit a formal counter-notification to our designated agent pursuant to 17 U.S.C. § 512(g).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">4. Original Works Published by AnimeFreak</h2>
        <p>
          All fictional narratives, original manga titles (including <em>Crimson Eclipse</em>, <em>Soul Fragment</em>, <em>Starborn: Zero</em>, and <em>Beyond the Crimson Gate</em>), and digital art packs published under the AnimeFreak imprint are proprietary works. Any unauthorized commercial duplication or scraping is strictly actionable under international copyright treaties.
        </p>
      </section>
    </LegalLayout>
  );
};
