import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';
import { siteConfig } from '../../config/siteConfig';

export const RefundPolicyPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="refund"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. Nature of Digital Goods</h2>
        <p>
          Products sold through the AnimeFreak Digital Shop consist of downloadable electronic media (including PDF manga volumes, CBZ graphic novel files, high-resolution creator art asset archives, and digital wallpaper bundles). Due to the immediate delivery and un-returnable nature of digital downloads, sales are generally final once the download token has been generated.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Eligible Refund Circumstances</h2>
        <p>
          We want you to be completely satisfied with your purchase. We honor refund requests under the following conditions within 14 calendar days of transaction:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li><strong>Technical File Corruption:</strong> If a delivered file is corrupt, unreadable, or missing pages, and our support desk cannot provide an operational replacement within 48 hours.</li>
          <li><strong>Accidental Duplicate Purchases:</strong> If you accidentally purchase the exact same digital title multiple times within a 24-hour window.</li>
          <li><strong>Non-Delivery:</strong> If our automated delivery email fails to arrive and our support team cannot manually dispatch your secure download link.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. How to Request Assistance</h2>
        <p>
          To request a refund or replacement download link, please reach out to our team at <strong>{siteConfig.contactEmail}</strong> with your Order ID and the email address used during checkout.
        </p>
      </section>
    </LegalLayout>
  );
};
