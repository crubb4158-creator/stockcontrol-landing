import React, { useState } from 'react';
import { ArrowRight, Clock, Code2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import Features from './components/Features';
import PricingCard from './components/PricingCard';
import PricingModal from './components/PricingModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import SupportPage from './components/SupportPage';
import ServicesPage from './components/ServicesPage';
import EnterprisePage from './components/EnterprisePage';
import PlanConfirmPage from './components/PlanConfirmPage';
import TrialPage from './components/TrialPage';
import TeamSection from './components/TeamSection';
import { PRICING_PLANS } from './constants';
import { PricingPlan } from './types';

type PageType = 'main' | 'terms' | 'privacy' | 'support' | 'services' | 'enterprise' | 'plan-confirm' | 'trial';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('main');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [confirmPlan, setConfirmPlan] = useState<PricingPlan | null>(null);

  const handleShowDetails = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsPricingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPricingModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setConfirmPlan(plan);
    setCurrentPage('plan-confirm');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: 'terms' | 'privacy' | 'support') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage('main');
    setConfirmPlan(null);
    window.scrollTo(0, 0);
  };

  // Render pages
  if (currentPage === 'terms') {
    return <TermsPage onBack={handleBack} />;
  }
  if (currentPage === 'privacy') {
    return <PrivacyPage onBack={handleBack} />;
  }
  if (currentPage === 'support') {
    return <SupportPage onBack={handleBack} />;
  }
  if (currentPage === 'services') {
    return <ServicesPage onBack={handleBack} />;
  }
  if (currentPage === 'enterprise') {
    return <EnterprisePage onBack={handleBack} />;
  }
  if (currentPage === 'plan-confirm' && confirmPlan) {
    return <PlanConfirmPage plan={confirmPlan} onBack={handleBack} />;
  }
  if (currentPage === 'trial') {
    return <TrialPage onBack={handleBack} />;
  }

  // Main page
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-950 text-white font-sans selection:bg-primary/30 selection:text-primary">
      {/* Ambient Background Effects - Optimized for performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Simple dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-20 pb-10">
        <Hero />

        {/* App Preview Section */}
        <AppPreview />

        {/* Features Section */}
        <Features />

        {/* Pricing Section */}
        <section id="precios" className="py-10 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
                Planes simples, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">precios paraguayos</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                Sin sorpresas. Sin costos ocultos. Paga en Guaraníes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4 items-start pt-2">
              {PRICING_PLANS.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onShowDetails={handleShowDetails}
                  onSelectPlan={handleSelectPlan}
                />
              ))}
            </div>

            {/* Free Trial Banner - Clickeable */}
            <div id="prueba-gratis" className="mt-6 sm:mt-8 flex justify-center">
              <button
                onClick={() => { setCurrentPage('trial'); window.scrollTo(0, 0); }}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-5 py-3 transition-all hover:from-primary/20 hover:to-accent/20 hover:border-primary/30 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Prueba GRATIS</p>
                  <p className="text-xs text-slate-400">Sin tarjeta • Acceso completo</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Enterprise CTA */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <button
                onClick={() => { setCurrentPage('enterprise'); window.scrollTo(0, 0); }}
                className="group flex items-center justify-between gap-3 sm:gap-4 rounded-full border border-white/5 bg-white/5 p-1.5 pr-4 transition-all hover:bg-white/10 hover:border-white/10"
              >
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase text-primary">Enterprise</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">¿Múltiples sucursales?</span>
                <ArrowRight className="h-3 w-3 text-white transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Services Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo(0, 0);
                }}
                className="group flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 transition-all hover:bg-primary/10 hover:border-primary/30"
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-primary/20">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">¿Necesitas un Sitio Web o App?</p>
                  <p className="text-xs text-slate-400">Desarrollo Web y Apps Móviles</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        <Testimonials />
        <TeamSection />
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Pricing Details Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </div>
  );
};

export default App;