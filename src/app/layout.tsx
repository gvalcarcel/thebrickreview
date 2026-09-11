import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Brick Review | Revista y Crítica Editorial de Sets LEGO®",
  description: "Portal editorial independiente dedicado al análisis técnico, experiencia de ensamblaje, técnicas de construcción y guías para coleccionistas de LEGO®.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--text-main)] selection:bg-red-100 selection:text-red-900 font-sans">
        {/* Top Alert Bar / Ticker */}
        <div className="radar-topbar">
          <span>BrickRadar & The Brick Review: Cuaderno de análisis, despiece técnico y mínimos históricos de sets LEGO®.</span>
          <Link href="/legal/afiliacion">Transparencia &rarr;</Link>
        </div>

        {/* Cabecera Editorial */}
        <header className="border-b border-light bg-white/90 backdrop-blur sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <span className="w-5 h-5 rounded-sm bg-primary flex items-center justify-center text-white text-[10px] font-extrabold shadow-sm transition-transform group-hover:scale-105">
                BR
              </span>
              <span className="font-bold tracking-tight text-xl text-main font-display">The Brick Review</span>
              <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-muted font-semibold pl-2 border-l border-light font-display">
                Tactile Precision
              </span>
            </Link>

            <nav className="flex items-center space-x-6 text-sm font-medium text-secondary">
              <Link href="/categorias/icons" className="hover:text-primary transition-colors">
                Icons
              </Link>
              <Link href="/categorias/star-wars" className="hover:text-primary transition-colors">
                Star Wars
              </Link>
              <Link href="/categorias/technic" className="hover:text-primary transition-colors">
                Technic
              </Link>
              <Link href="/categorias/ideas" className="hover:text-primary transition-colors">
                Ideas
              </Link>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Pie de Página con Divulgación de Afiliados */}
        <footer className="border-t border-zinc-200 bg-white mt-20 text-xs text-zinc-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <p className="font-semibold text-zinc-900">The Brick Review — Publicación digital independiente</p>
                <p>Análisis crítico, experiencia de montaje y archivo técnico para entusiastas y coleccionistas.</p>
              </div>

              <div className="flex flex-wrap gap-4 text-zinc-600">
                <Link href="/legal/aviso-legal" className="hover:underline">Aviso Legal</Link>
                <Link href="/legal/privacidad" className="hover:underline">Privacidad y Cookies</Link>
                <Link href="/legal/afiliacion" className="hover:underline">Divulgación de Afiliados</Link>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 text-[11px] leading-relaxed text-zinc-400 space-y-2">
              <p>
                <strong>Aviso de Afiliación y Transparencia:</strong> The Brick Review es un medio editorial independiente. Los enlaces hacia tiendas y distribuidores externos (como Amazon o la tienda oficial LEGO®) pueden generar una pequeña comisión para el sostenimiento de este cuaderno analítico, sin coste adicional para el lector.
              </p>
              <p>
                LEGO® es una marca registrada del Grupo LEGO, que no patrocina, autoriza ni avala este sitio web independiente.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
