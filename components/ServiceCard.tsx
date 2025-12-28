import React from 'react';
import { Check, Sparkles, Clock, Info, Layout, Globe, ShoppingCart, Smartphone, Code } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    onShowDetails: (service: Service) => void;
}

const iconMap: { [key: string]: React.ReactNode } = {
    'layout': <Layout className="h-5 w-5" />,
    'globe': <Globe className="h-5 w-5" />,
    'shopping-cart': <ShoppingCart className="h-5 w-5" />,
    'smartphone': <Smartphone className="h-5 w-5" />,
    'code': <Code className="h-5 w-5" />
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onShowDetails }) => {
    const isPopular = service.isPopular;

    const cardClasses = isPopular
        ? "relative flex flex-col h-full rounded-2xl bg-slate-900/90 border border-primary/30 p-5 shadow-xl shadow-primary/10 transition-transform duration-300 hover:scale-[1.02]"
        : "relative flex flex-col h-full rounded-2xl bg-slate-900/80 border border-white/5 p-5 hover:bg-slate-900/90 transition-all duration-300 hover:border-white/10";

    return (
        <div className={cardClasses}>
            {isPopular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-max">
                    <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-950 shadow-lg">
                        <Sparkles className="h-2.5 w-2.5 fill-slate-950" />
                        Más Solicitado
                    </div>
                </div>
            )}

            {/* Icon */}
            <div className={`inline-flex items-center justify-center size-12 rounded-xl mb-4 ${isPopular ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                {iconMap[service.icon] || <Code className="h-5 w-5" />}
            </div>

            {/* Header */}
            <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-primary' : 'text-white'}`}>
                {service.name}
            </h3>
            <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                {service.description}
            </p>

            {/* Price */}
            <div className="mb-4 py-3 px-3 rounded-xl bg-white/5">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Desde</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white">Gs. {service.priceFrom}</span>
                </div>
                {service.priceTo && (
                    <p className="text-[10px] text-slate-400 mt-1">
                        hasta Gs. {service.priceTo}
                    </p>
                )}
            </div>

            {/* Time Estimate */}
            <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
                <Clock className="h-3 w-3" />
                <span>Tiempo: {service.timeEstimate}</span>
            </div>

            {/* Features */}
            <div className="flex-1 space-y-2 mb-4">
                {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${isPopular ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="text-[11px] text-slate-300">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Button */}
            <button
                onClick={() => onShowDetails(service)}
                className={`w-full flex items-center justify-center gap-2 rounded-full py-3 px-4 text-sm font-bold transition-all hover:scale-[1.02] ${isPopular
                        ? 'bg-gradient-to-r from-primary to-accent text-slate-950 shadow-lg shadow-primary/25'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
            >
                <Info className="h-4 w-4" />
                Ver detalles
            </button>
        </div>
    );
};

export default ServiceCard;
