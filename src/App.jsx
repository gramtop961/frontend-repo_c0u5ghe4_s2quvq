import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f17] text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Body sections */}
      <main>
        <Services />
        <Process />
        <div className="px-6 pb-20">
          <CTA />
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Nova Ledger Accounting</p>
          <p>Modern • Secure • Insightful</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
