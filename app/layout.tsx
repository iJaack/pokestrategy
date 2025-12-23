import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ash Strategy - Pokémon TCG Tokenization',
  description: 'Tokenize Pokémon TCG card value growth. Invest in graded cards through $GCEA tokens and earn yields from market appreciation.',
  keywords: 'pokémon, tcg, tokenization, erc-721, defi, graded cards'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-slate-900 via-purple-900 to-slate-950 text-white">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-slate-900 bg-opacity-40 backdrop-blur-lg border-b border-purple-500 border-opacity-20 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                    Ash Strategy
                  </div>
                  <div className="text-xs text-purple-300">Gotta Tokenize 'Em All</div>
                </div>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#" className="hover:text-amber-400 transition-colors">How It Works</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Tokenomics</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Roadmap</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Dashboard</a>
              </div>

              {/* Connect Wallet Button */}
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50">
                Connect Wallet
              </button>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-900 bg-opacity-40 backdrop-blur-lg border-t border-purple-500 border-opacity-20 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-amber-400 mb-4">Ash Strategy</h3>
                  <p className="text-sm text-slate-400">Tokenizing the future of collectibles through blockchain.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Product</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-amber-400 transition">Dashboard</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition">Governance</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition">Treasury</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Community</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-amber-400 transition">Discord</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition">Twitter</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition">Docs</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-amber-400 transition">Terms</a></li>
                    <li><a href="#" className="hover:text-amber-400 transition">Privacy</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                <p>&copy; 2025 Ash Strategy. Pokémon &copy; 1995-2025 Nintendo/Creatures/GAME FREAK.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
