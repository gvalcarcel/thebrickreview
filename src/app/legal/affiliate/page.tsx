import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure & Commercial Transparency | The Brick Review",
  description: "Clear information on our affiliate partnerships, ethical monetization, AliExpress Portals compliance, and editorial independence.",
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="radar-card p-6 sm:p-8 bg-white border border-light space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Ethics &amp; Transparent Monetization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-main">
          Affiliate Programs &amp; Editorial Transparency
        </h1>
        <p className="text-sm text-secondary">Our unyielding ethical commitment to the adult builder and collector community.</p>
      </header>

      <div className="text-sm sm:text-base space-y-6 text-secondary leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">1. Core Principle of Editorial Independence</h2>
          <p>
            At <strong>The Brick Review</strong>, reader trust is our single most valuable asset. No vendor, store, or manufacturer dictates our reviews, influences our tear-down findings, or buys positive verdicts. If a set features loose clutch tolerances, brittle brackets, or compromised instructions, we state it transparently with photographic and structural evidence.
          </p>
        </section>

        <section className="radar-card p-6 sm:p-7 bg-white border border-light space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-main font-display">
            <HeartHandshake className="w-5 h-5 text-primary" />
            <span>How This Publication is Financed</span>
          </div>
          <p className="text-sm text-secondary leading-relaxed">
            To acquire sets and alternative models for destructive and structural analysis on our workbench—without resorting to banner clutter, popups, or paywalls—we participate in verified merchant referral programs, primarily the <strong>AliExpress Portals Affiliate Program</strong> and vetted international toy distribution networks.
          </p>
          <p className="text-sm text-secondary leading-relaxed">
            Following each teardown, we supply curated sourcing links to reputable storefronts. If you choose to acquire a set via one of these cloaked links (routed through our internal <code>/ir/...</code> path), the retailer may grant us a small referral commission.
          </p>
          <div className="p-3.5 bg-surface-subtle rounded-lg border border-light text-xs font-semibold text-main">
            &bull; This incurs <strong>zero extra cost</strong> to you as a buyer. You pay the exact promotional or market price shown directly in the merchant storefront.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">2. Strict Affiliate Link Compliance</h2>
          <p>
            In strict conformity with international trade regulations, FTC guidelines, and search engine technical standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-secondary">
            <li>All outbound commercial links carry <code>rel=&quot;nofollow sponsored noopener noreferrer&quot;</code> attributes.</li>
            <li>No purchase links ever precede or replace analytical teardown content.</li>
            <li>We clearly distinguish between active production models and retired/vaulted sets to prevent secondary market pricing misunderstandings.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold font-display text-main">
            <Award className="w-5 h-5 text-accent-yellow" />
            <span>3. Fair Play Trademark Disclaimer</span>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            LEGO® is a registered trademark of the LEGO Group of companies. The Brick Review is an entirely independent publication that is neither sponsored, authorized, nor endorsed by the LEGO Group or any brick manufacturer. Any brand names and set identifiers are utilized solely for identification, comparative criticism, and nominative fair use.
          </p>
        </section>
      </div>
    </article>
  );
}

