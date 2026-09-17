import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Fair Play Directive | The Brick Review",
  description: "Terms of service, editorial ownership, nominative fair use, and trademark notices regarding The LEGO Group.",
};

export default function TermsOfServicePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="radar-card p-6 sm:p-8 bg-white border border-light space-y-2 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider font-mono">
          <Shield className="w-4 h-4" />
          <span>Legal Framework &amp; Fair Play</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-main">
          Terms of Service &amp; Editorial Identity
        </h1>
        <p className="text-sm text-secondary">Last updated: September 2026</p>
      </header>

      <div className="text-sm sm:text-base space-y-6 text-secondary leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">1. Ownership &amp; Mission of the Publication</h2>
          <p>
            <strong>The Brick Review</strong> is an independent digital media platform dedicated to cultural commentary, technical criticism, and engineering analysis of interlocking brick systems. Our mission is to provide adult fans (AFOLs), model makers, and collectors with objective evaluations, structural stress tests, and assembly logs.
          </p>
        </section>

        <section className="radar-card p-6 sm:p-7 bg-amber-50/70 border border-amber-200 text-amber-950 space-y-3">
          <h2 className="text-lg font-bold font-display text-amber-900">2. Trademark Notice &amp; Fair Play Directive</h2>
          <p className="text-sm leading-relaxed">
            <strong>LEGO®</strong> is a registered trademark of <em>The LEGO Group</em>. The LEGO logo, the brick stud configuration, minifigures, and associated brand names are the exclusive property of The LEGO Group.
          </p>
          <p className="text-sm leading-relaxed">
            The Brick Review is an independent enthusiast-led publication. This website is <strong>not sponsored, authorized, or endorsed in any manner by The LEGO Group</strong>. We operate strictly within recognized nominative Fair Play principles for independent technical commentary and journalistic criticism.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">3. Intellectual Property</h2>
          <p>
            All critical essays, structural diagrams, teardown assessments, scoring rubrics, and original photography created by The Brick Review are protected by applicable intellectual property statutes. Reproduction for commercial purposes without explicit written consent and link attribution is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-display text-main">4. Outbound Merchant Links</h2>
          <p>
            For complete details regarding merchant referral links and marketplace partnerships, please consult our <Link href="/legal/affiliate" className="text-primary font-semibold underline">Affiliate Disclosure</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}

