import React from 'react';
import { Check, X, Sparkles, Info, ArrowLeftRight } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onShowDetails: (plan: PricingPlan) => void;
  onSelectPlan: (plan: PricingPlan) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onShowDetails, onSelectPlan }) => {
  const isRecommended = plan.isRecommended;

  const cardClasses = isRecommended
    ? "relative flex flex-col h-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-primary/30 p-3 sm:p-4 shadow-xl shadow-primary/10 transition-transform duration-300 hover:scale-[1.02] lg:-mt-3"
    : "relative flex flex-col h-full rounded-xl sm:rounded-2xl bg-slate-900/80 border border-white/5 p-3 sm:p-4 hover:bg-slate-900/90 transition-all duration-300 hover:border-white/10";

  const getButtonClasses = () => {
    if (plan.buttonVariant === 'primary') {
      return "w-full rounded-full bg-gradient-to-r from-primary to-accent py-2.5 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02] active:scale-95";
    }
    return "w-full rounded-full border border-white/10 bg-white/5 py-2.5 px-4 text-xs font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95";
  };

  return (
    <div className={cardClasses}>
      {isRecommended && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-2xl blur-xl" />
      )}

      {isRecommended && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-primary/20">
            <Sparkles className="h-2.5 w-2.5 fill-slate-950" />
            Más Popular
          </div>
        </div>
      )}

      <div className="mb-3 mt-1">
        <h3 className={`text-base font-bold leading-tight ${isRecommended ? 'text-primary' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className="text-[10px] leading-snug text-slate-400 mt-1 line-clamp-2">
          {plan.description}
        </p>
      </div>

      <div className="mb-2 sm:mb-3 py-2 sm:py-3 px-2 rounded-lg sm:rounded-xl bg-white/5">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {plan.price}
          </span>
        </div>
        <p className="text-[8px] sm:text-[9px] text-center text-slate-400 mt-0.5 sm:mt-1">
          {plan.period}
        </p>
      </div>

      {plan.pix?.enabled && (
        <div className="mb-3 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src="/flag-py.png" alt="Paraguay" className="h-4 w-4 rounded-full object-cover" />
            <ArrowLeftRight className="h-3 w-3 text-green-400" />
            <img src="/flag-br.png" alt="Brasil" className="h-4 w-4 rounded-full object-cover" />
          </div>
          <p className="text-[9px] text-center text-green-400 font-bold">
            PIX: {plan.pix.commission} comisión
          </p>
          <p className="text-[8px] text-center text-slate-400">
            Mín: {plan.pix.minAmount}
          </p>
        </div>
      )}

      <div className="flex-1 space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
        {plan.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${feature.included
              ? isRecommended ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'
              : 'bg-transparent text-slate-700'
              }`}>
              {feature.included ? (
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              ) : (
                <X className="h-2.5 w-2.5" />
              )}
            </div>
            <span className={`text-[10px] leading-tight ${!feature.included && 'text-slate-600 line-through'}`}>
              <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                {feature.text}
              </span>
            </span>
          </div>
        ))}
        {plan.features.length > 3 && (
          <p className="text-[9px] text-primary text-center mt-2">+{plan.features.length - 3} más</p>
        )}
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <button
          onClick={() => onSelectPlan(plan)}
          className={getButtonClasses()}
        >
          {plan.buttonText}
        </button>

        <button
          onClick={() => onShowDetails(plan)}
          className="w-full flex items-center justify-center gap-1 rounded-full border border-white/5 bg-transparent py-2 px-3 text-[10px] font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
        >
          <Info className="h-3 w-3" />
          Ver detalles
        </button>
      </div>

      {isRecommended && (
        <p className="mt-2 text-center text-[8px] font-medium uppercase tracking-widest text-primary/60">
          Pago Único • Sin Cuotas
        </p>
      )}
    </div>
  );
};

export default PricingCard;