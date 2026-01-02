import type { Metadata } from 'next'
// App Router root layout
import './globals.css'

export const metadata: Metadata = {
  title: 'Ash Strategy – Pokémon TCG Tokenization',
  description: 'Tokenize Pokémon TCG card value growth. Invest in graded cards through $GCEA tokens.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <nav className="border-b border-gray-800 p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Ash Strategy</h1>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-semibold">Connect Wallet</button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
