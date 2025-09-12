import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-yellow-600 to-red-700 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-black bg-opacity-40">
        <h1 className="text-2xl font-bold">🇬🇭 Ministry of Lands & Natural Resources</h1>
        <span className="italic">GLRChain</span>
      </header>

      {/* Hero */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-extrabold">Blockchain for Ghana</h2>
        <p className="mt-4 text-lg">Transparency • Security • Accountability</p>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-6 p-8">
        <div className="bg-black bg-opacity-30 rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-2">Land Registry</h3>
          <p>Immutable blockchain records for land titles and ownership.</p>
        </div>
        <div className="bg-black bg-opacity-30 rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-2">Resource Tracking</h3>
          <p>Digitized and traceable flow of Ghana’s natural resources.</p>
        </div>
        <div className="bg-black bg-opacity-30 rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-2">Anti-Corruption Ledger</h3>
          <p>Public audit trail to reduce fraud and illegal mining.</p>
        </div>
        <div className="bg-black bg-opacity-30 rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-2">AI Insights</h3>
          <p>Predictive analytics for land use, forestry, and resource planning.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-black bg-opacity-50 text-center">
        <p>© 2025 GLRChain. Founder: <strong>Edmund Annor Acheampong</strong></p>
      </footer>
    </div>
  )
}

export default App
