import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Technical Cookies | The Brick Review",
  description: "Information on personal data processing, server logs, technical cookies, and privacy by design under GDPR.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="radar-card p-6 sm:p-8 bg-white border border-light space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider font-mono">
          <Lock className="w-4 h-4" />
          <span>GDPR Privacy &amp; Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-main">
          Privacy Policy &amp; Cookie Framework
        </h1>
        <p className="text-sm text-secondary">Privacy by design: zero tracking cookies, zero user profiling.</p>
      </header>

      <div className="text-sm sm:text-base space-y-6 text-secondary leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">1. Open Access &amp; Zero Registration</h2>
          <p>
            The Brick Review is a public, open-access publication. We do not require user account registration, newsletter gating, or personal data collection to read our technical notebooks or review archives. We strictly observe EU General Data Protection Regulation (GDPR) standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">2. Outbound Link Metrics &amp; Anonymization</h2>
          <p>
            When a reader follows an outbound verified vendor link via our internal <code>/ir/...</code> path, our server tallies the click purely for link-health verification and aggregate traffic measurement.
          </p>
          <div className="bg-surface-subtle p-4 rounded-xl border border-light text-xs space-y-1.5 text-secondary">
            <p className="font-bold text-main">Anonymization Standards:</p>
            <p>&bull; We do not store full IP addresses or assemble user fingerprint profiles.</p>
            <p>&bull; Event logs record only the anonymized link identifier, referrer header, and server timestamp.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">3. Cookie Policy</h2>
          <p>
            This website does not deploy behavioral advertising trackers, third-party analytics scripts, or invasive pixels. Any cookies set are purely technical and essential for server-side caching and session security.
          </p>
          <p>
            Upon clicking an outbound merchant link (such as AliExpress storefronts), the destination platform operates under its own respective privacy terms and cookie consent banners.
          </p>
        </section>
      </div>
    </article>
  );
}

