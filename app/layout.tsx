import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PokéStrategy - TCG Deck Builder',
  description: 'Professional Pokémon Trading Card Game strategy, deck building, and analysis platform for competitive players.',
  keywords: 'pokémon, tcg, deck builder, strategy, competitive'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-slate-800 bg-opacity-50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                PokéStrategy
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-cyan-400 transition">Deck Builder</a>
                <a href="#" className="hover:text-cyan-400 transition">Card Database</a>
                <a href="#" className="hover:text-cyan-400 transition">Meta Analysis</a>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-800 bg-opacity-50 backdrop-blur-md border-t border-slate-700 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-slate-400">
              <p>&copy; 2025 PokéStrategy. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
