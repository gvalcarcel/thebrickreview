import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Brick Review | Technical Audits & Alternative Brick Sourcing Radar",
    template: "%s | The Brick Review",
  },
  description: "Independent engineering notebooks, clutch tolerance audits, SNOT geometry teardowns, and verified AliExpress sourcing for alternative brick builders worldwide.",
  applicationName: "The Brick Review",
  authors: [{ name: "Review The Brick Editorial Council", url: siteUrl }],
  creator: "Review The Brick",
  publisher: "Review The Brick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "The Brick Review | Technical Audits & Alternative Brick Sourcing Radar",
    description: "Independent engineering notebooks, clutch tolerance audits, SNOT geometry teardowns, and verified AliExpress sourcing for alternative brick builders worldwide.",
    url: siteUrl,
    siteName: "The Brick Review",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Review The Brick Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brick Review | Technical Audits & Alternative Brick Sourcing Radar",
    description: "Independent engineering notebooks, clutch tolerance audits, SNOT geometry teardowns, and verified AliExpress sourcing for alternative brick builders worldwide.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--text-main)] selection:bg-red-100 selection:text-red-900 font-sans">
        {/* Top Alert Bar / Ticker */}
        <div className="radar-topbar">
          <span>BrickRadar &amp; The Brick Review: Technical teardowns, clutch tolerance scoring, and verified AliExpress sourcing.</span>
          <Link href="/legal/affiliate">Affiliate Transparency &rarr;</Link>
        </div>

        {/* Editorial Header */}
        <header className="border-b border-light bg-white/95 backdrop-blur sticky top-0 z-40 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-xs">
                <Image
                  src="/logo-badge.png"
                  alt="Review The Brick Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold tracking-tight text-lg sm:text-xl text-main font-display leading-tight">
                    The Brick Review
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-muted font-bold pl-2 border-l border-light font-mono">
                    AFOL Radar
                  </span>
                </div>
                <span className="text-[10px] text-muted font-mono tracking-wider font-semibold -mt-0.5 hidden xs:block">
                  REVIEW THE BRICK
                </span>
              </div>
            </Link>

            <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-semibold text-secondary overflow-x-auto">
              <Link href="/categories/icons" className="hover:text-primary transition-colors whitespace-nowrap">
                Icons
              </Link>
              <Link href="/categories/star-wars" className="hover:text-primary transition-colors whitespace-nowrap">
                Star Wars
              </Link>
              <Link href="/categories/technic" className="hover:text-primary transition-colors whitespace-nowrap">
                Technic
              </Link>
              <Link href="/categories/ideas" className="hover:text-primary transition-colors whitespace-nowrap">
                Ideas
              </Link>
              <Link href="/categories/disney" className="hover:text-primary transition-colors whitespace-nowrap">
                Disney
              </Link>
              <Link href="/categories/editions" className="hover:text-primary transition-colors whitespace-nowrap">
                Editions
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer with Legal & Affiliate Transparency */}
        <footer className="border-t border-light bg-white mt-20 text-xs text-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 flex-shrink-0 drop-shadow-xs">
                  <Image
                    src="/logo-badge.png"
                    alt="Review The Brick Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-main font-display text-sm">The Brick Review — Independent AFOL Technical Publication</p>
                  <p className="text-secondary text-xs">Architectural teardowns, clutch friction benchmarks, and verified alternative sourcing for brick enthusiasts.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-secondary font-medium text-xs">
                <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/legal/affiliate" className="hover:text-primary transition-colors">Affiliate Disclosure</Link>
              </div>
            </div>

            <div className="pt-6 border-t border-light text-[11px] leading-relaxed text-muted space-y-2">
              <p>
                <strong>Affiliate Disclosure &amp; Commercial Independence:</strong> The Brick Review is an autonomous editorial entity. Outbound links to external merchants (such as AliExpress Choice and verified fast-delivery storefronts) may generate an affiliate commission that directly supports the acquisition of sets for technical disassembly, at no additional charge to the buyer.
              </p>
              <p>
                LEGO® is a registered trademark of the LEGO Group of companies, which does not sponsor, authorize, or endorse this independent site.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
