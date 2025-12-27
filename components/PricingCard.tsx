import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isRecommended = plan.isRecommended;

  // Modern card container styles with heavy rounded corners
  const cardClasses = isRecommended
    ? "relative flex flex-col h-full rounded-[40px] bg-slate-900/90 border border-primary/30 p-8 shadow-2xl shadow-primary/10 transition-transform duration-300 hover:scale-[1.02] lg:-mt-8 lg:mb-4"
    : "relative flex flex-col h-full rounded-[40px] bg-slate-900/80 border border-white/5 p-8 hover:bg-slate-900/90 transition-all duration-300 hover:border-white/10";

  // Pill-shaped button styles
  const getButtonClasses = () => {
    if (plan.buttonVariant === 'primary') {
      return "group w-full rounded-full bg-gradient-to-r from-primary to-accent py-4 px-6 text-sm font-extrabold text-slate-950 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02] active:scale-95";
    }
    return "group w-full rounded-full border border-white/10 bg-white/5 py-4 px-6 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95";
  };

  return (
    <div className={cardClasses}>
      {/* Glow effect behind recommended card */}
      {isRecommended && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-[40px] blur-xl" />
      )}

      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-max">
          <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-primary/20">
            <Sparkles className="h-3 w-3 fill-slate-950" />
            Más Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 mt-2 space-y-2">
        <h3 className={`text-xl font-bold ${isRecommended ? 'text-primary' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-end gap-1">
        <span className="text-4xl font-black tracking-tight text-white lg:text-5xl">
          {plan.price}
        </span>
        <span className="mb-1.5 text-sm font-medium text-slate-400">
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Features */}
      <div className="flex-1 space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${feature.included
                ? isRecommended ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'
                : 'bg-transparent text-slate-700'
              }`}>
              {feature.included ? (
                <Check className="h-3 w-3 stroke-[3]" />
              ) : (
                <X className="h-3 w-3" />
              )}
            </div>
            <span className={`text-sm ${!feature.included && 'text-slate-600 line-through'}`}>
              <span className={feature.included ? 'text-slate-200' : 'text-slate-600'}>
                {feature.text}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className={getButtonClasses()}>
        {plan.buttonText}
      </button>

      {isRecommended && (
        <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-widest text-primary/60">
          Pago Único • Sin Cuotas
        </p>
      )}
    </div>
  );
};

export default PricingCard;