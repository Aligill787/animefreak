import React from 'react';
import { LegalLayout } from './LegalLayout';
import { PageRoute } from '../../types';

export const PrivacyPolicyPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="March 2026"
      onNavigate={onNavigate}
      activeLegalRoute="privacy"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. Introduction & Overview</h2>
        <p>
          AnimeFreak ("we", "our", or "the Platform") is committed to protecting your privacy. This Privacy Policy details the types of information we collect, how that information is utilized, and your choices regarding your personal data when browsing our anime & manga publication and purchasing digital products.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
        <p>
          We collect minimal information necessary to deliver editorial content and fulfill digital orders:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li><strong>Digital Order Information:</strong> Email addresses provided during checkout to dispatch encrypted DRM-free file download links.</li>
          <li><strong>Newsletter Subscribers:</strong> Email addresses submitted with voluntary consent to receive our weekly editorial dispatch.</li>
          <li><strong>Creator Submission Data:</strong> Names, pen names, portfolio links, and synopsis data submitted via our creator onboarding portal.</li>
          <li><strong>Technical & Analytical Logs:</strong> Anonymous aggregate telemetry including browser type, referral URL, and reading timestamps to optimize server performance.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">3. How We Process Payments</h2>
        <p>
          Payment processing occurs securely through third-party PCI-DSS compliant providers (such as Stripe or PayPal). AnimeFreak does not collect, process, or store full credit card numbers or banking secrets on our servers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">4. Data Sharing & Third Parties</h2>
        <p>
          We do not sell, rent, or trade your personal data. We disclose information only to service providers acting on our behalf for newsletter delivery, cloud storage hosting, and legal compliance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">5. Your Data Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal email records from our active databases by contacting our compliance desk.
        </p>
      </section>
    </LegalLayout>
  );
};
