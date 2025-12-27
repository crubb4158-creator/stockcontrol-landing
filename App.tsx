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
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-600/5 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
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