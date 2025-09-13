import React from "react";
import { ArrowRight, Shield, Zap, Globe, Users } from "lucide-react";

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          GLRChain
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          Africa’s Fast, Secure & Community-Driven Blockchain
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2">
          Join Testnet <ArrowRight size={20} />
        </button>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why GLRChain?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <Zap className="mx-auto text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Lightning Fast</h3>
            <p className="mt-2 text-gray-600">Low fees & high throughput for Africa’s digital economy.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <Shield className="mx-auto text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Secure & Reliable</h3>
            <p className="mt-2 text-gray-600">Military-grade security with decentralized validators.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <Globe className="mx-auto text-yellow-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Built for Africa</h3>
            <p className="mt-2 text-gray-600">Designed for AfCFTA, local payments & global adoption.</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">Q3 2025 – Testnet Launch</h3>
            <p className="text-gray-600">Validators, block explorer, community onboarding.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">Q1 2026 – Mainnet</h3>
            <p className="text-gray-600">GH GOLD integration, dApps & wallets.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold">2026+ – Expansion</h3>
            <p className="text-gray-600">Cross-border trade, AfCFTA & global adoption.</p>
          </div>
        </div>
      </section>

      {/* Whitepaper + Community */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <p className="text-gray-600 mb-6">
          Read the whitepaper, join our community, and become a validator.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-yellow-600 text-white rounded-full shadow hover:scale-105 transition">
            Whitepaper
          </a>
          <a href="#" className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:scale-105 transition">
            Join Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-gray-900 text-sm">
        © {new Date().getFullYear()} GLRChain. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
