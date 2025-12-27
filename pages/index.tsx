import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <nav className="p-8 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">Ash Strategy</h1>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold">Connect Wallet</button>
      </nav>
      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-bold text-white mb-8">Tokenize Pokémon Card Value</h2>
        <p className="text-xl text-gray-300 mb-12">Invest in graded Pokémon cards through $GCEA tokens and earn yield from the explosive TCG market growth.</p>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold">Join the Fundraise</button>
      </div>
    </div>
  );
};

export default Home;
