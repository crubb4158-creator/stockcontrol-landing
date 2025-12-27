import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingCard from './components/PricingCard';
import ClientsSection from './components/ClientsSection';
import Footer from './components/Footer';
import { PRICING_PLANS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950 text-white font-sans selection:bg-primary/30 selection:text-primary">
      {/* Ambient Background Effects - Optimized for performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Static gradient - no blur, no animations for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-slate-950 to-accent/10"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 to-transparent"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 flex-1 pt-32 pb-16">
        <Hero />
        
        {/* Pricing Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10 items-start pt-4">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          
          {/* Enterprise CTA */}
          <div className="mt-24 flex justify-center">
            <a className="group flex items-center justify-between gap-6 rounded-full border border-white/5 bg-white/5 p-2 pr-6 transition-all hover:bg-white/10 hover:border-white/10" href="#">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase text-primary">Enterprise</span>
              <span className="text-sm font-medium text-slate-300">¿Necesitas una solución para múltiples sucursales?</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <ClientsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;