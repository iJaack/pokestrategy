export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
            Ash Strategy
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Tokenize the Future of Pokémon Trading Cards
          </p>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            The Pokémon TCG market is experiencing explosive growth. Platforms like Courtyard and Collector Crypt are revolutionizing card ownership through blockchain tokenization. Ash Strategy enables retail investors to participate in this asset class by purchasing $GCEA tokens and collectively managing a portfolio of graded Pokémon cards.
          </p>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50">
            Join the Fundraise
          </button>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-slate-800 bg-opacity-30 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Market Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-500 border-opacity-50">
            <div className="text-4xl font-bold text-amber-400 mb-2">+48%</div>
            <p className="text-slate-300 text-sm">Annual CAGR of Pokémon TCG market (2020-2024)</p>
            <p className="text-slate-500 text-xs mt-3">Source: Market research reports on TCG collectibles</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-500 border-opacity-50">
            <div className="text-4xl font-bold text-cyan-400 mb-2">$10B+</div>
            <p className="text-slate-300 text-sm">Estimated secondary market size</p>
            <p className="text-slate-500 text-xs mt-3">Growing 3-5x faster than traditional collectibles</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-500 border-opacity-50">
            <div className="text-4xl font-bold text-orange-400 mb-2">78%</div>
            <p className="text-slate-300 text-sm">Graded cards outperformance</p>
            <p className="text-slate-500 text-xs mt-3">PSA/BGS/CGC graded cards appreciate faster</p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 mb-16">
        <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Fundraising & Execution Roadmap</h2>
        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="p-8 rounded-xl border-l-4 border-amber-400 bg-slate-800 bg-opacity-50 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-amber-400">Phase 1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Fundraising (Now)</h3>
                <p className="text-slate-300 mb-4">
                  <strong>Target:</strong> $1,000,000 in funding
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>✓ 80% ($800K) allocated to graded card purchases (PSA, BGS, CGC, SGC)</li>
                  <li>✓ 20% ($200K) allocated to platform development, legal, and operations</li>
                  <li>✓ Investors receive $GCEA tokens representing portfolio ownership</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-8 rounded-xl border-l-4 border-cyan-400 bg-slate-800 bg-opacity-50 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-cyan-400">Phase 2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Portfolio Acquisition</h3>
                <p className="text-slate-300 mb-4">
                  <strong>Strategy:</strong> Curated graded card purchases
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>✓ Acquire high-quality, investment-grade Pokémon cards</li>
                  <li>✓ Both onchain (ERC-721 tokens) and offchain (physical vaults via Courtyard)</li>
                  <li>✓ Diversified across eras, card types, and grade levels (PSA 8-10)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-8 rounded-xl border-l-4 border-orange-400 bg-slate-800 bg-opacity-50 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-orange-400">Phase 3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Governance & Treasury Management</h3>
                <p className="text-slate-300 mb-4">
                  <strong>Model:</strong> Decentralized DAO governance
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>✓ $GCEA token holders vote on portfolio decisions</li>
                  <li>✓ Community can propose card acquisitions/liquidations</li>
                  <li>✓ Treasury managed transparently onchain</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="p-8 rounded-xl border-l-4 border-purple-400 bg-slate-800 bg-opacity-50 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-purple-400">Phase 4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Yield Generation</h3>
                <p className="text-slate-300 mb-4">
                  <strong>Returns:</strong> Multiple revenue streams
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>✓ Appreciation from card value growth (primary)</li>
                  <li>✓ Grading service partnerships and referrals</li>
                  <li>✓ Secondary market trading and market-making</li>
                  <li>✓ Revenue sharing with platform users</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">$GCEA Token</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          <strong>GCEA</strong> (Gotta Catch 'Em All) is the native token of Ash Strategy. Each token represents a proportional stake in the portfolio of graded Pokémon cards and governance rights over fund management decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="font-bold text-amber-400 mb-2">Initial Supply</h4>
            <p className="text-slate-300">100,000,000 $GCEA (subject to governance vote)</p>
          </div>
          <div>
            <h4 className="font-bold text-amber-400 mb-2">Utility</h4>
            <p className="text-slate-300">Portfolio ownership + voting rights</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Connect your wallet and invest in the future of collectible ownership. Become a $GCEA holder today.
        </p>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/50">
          Connect Wallet & Invest
        </button>
      </section>
    </>
  )
}
