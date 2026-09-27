import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';
import { siteConfig } from '../../config/siteConfig';

export const DisclaimerPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Platform Disclaimer"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="disclaimer"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. Independence & Non-Affiliation</h2>
        <p className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 text-purple-200">
          <strong>Official Non-Affiliation Declaration:</strong> {siteConfig.legalDisclaimer}
        </p>
        <p>
          Any commentary, critique, or discussion of commercially serialized anime titles (including but not limited to Naruto, One Piece, Dragon Ball, Bleach, Jujutsu Kaisen, Demon Slayer, or western comic properties from Marvel or DC) constitutes fair use commentary, cultural review, and educational reporting.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Anti-Piracy Policy</h2>
        <p>
          AnimeFreak does NOT host, stream, index, or distribute pirated anime video episodes or copyrighted scanlations. We do not provide torrent magnets or direct download links to unauthorized commercial media. The digital manga and prose fiction titles available on our marketplace are 100% original works created by or officially licensed to AnimeFreak.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. AI Disclosure Disclaimer</h2>
        <p>
          Where generative artificial intelligence tools (such as diffusion image synthesis or assistive language models) are employed in the production of background artwork or editorial prototyping, AnimeFreak provides explicit, transparent disclosures on the respective series or product pages. We do not represent AI-synthesized imagery as entirely hand-drawn.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">4. Advertising & Affiliate Disclosure</h2>
        <p>
          AnimeFreak may display contextual advertisements served via Google AdSense or approved partner networks. Advertising units are marked with explicit "ADVERTISEMENT" identifiers and do not influence our editorial analysis or critique.
        </p>
      </section>
    </LegalLayout>
  );
};
