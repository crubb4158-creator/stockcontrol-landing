import React, { useEffect } from 'react';
import { X, Check, Clock, Layout, Globe, ShoppingCart, Smartphone, Code } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
}

const iconMap: { [key: string]: React.ReactNode } = {
    'layout': <Layout className="h-6 w-6" />,
    'globe': <Globe className="h-6 w-6" />,
    'shopping-cart': <ShoppingCart className="h-6 w-6" />,
    'smartphone': <Smartphone className="h-6 w-6" />,
    'code': <Code className="h-6 w-6" />
};

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !service) return null;

    const isPopular = service.isPopular;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

            <div
                className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.2s ease-out' }}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className={`md:w-2/5 p-6 ${isPopular ? 'bg-gradient-to-br from-primary/20 via-slate-900 to-accent/20' : 'bg-gradient-to-br from-slate-800 to-slate-900'}`}>
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="h-4 w-4 text-slate-300" />
                        </button>

                        <div className={`inline-flex items-center justify-center size-14 rounded-xl mb-4 ${isPopular ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                            {iconMap[service.icon] || <Code className="h-6 w-6" />}
                        </div>

                        <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-primary' : 'text-white'}`}>
                            {service.name}
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">{service.description}</p>

                        <div className="p-3 rounded-xl bg-white/5 mb-3">
                            <p className="text-[10px] uppercase text-slate-500 mb-1">Inversión</p>
                            <p className="text-lg font-bold text-white">
                                Gs. {service.priceFrom}
                                {service.priceTo && <span className="text-sm font-normal text-slate-400"> - {service.priceTo}</span>}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Clock className="h-4 w-4" />
                            <span>Entrega: {service.timeEstimate}</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-3/5 p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                            ¿Qué incluye?
                        </p>
                        <div className="grid grid-cols-1 gap-2 mb-6">
                            {service.includes.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${isPopular ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                                    </div>
                                    <span className="text-xs text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/5950983338958?text=Hola!%20Me%20interesa%20el%20servicio%20de%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-bold transition-all hover:scale-[1.02] ${isPopular
                                ? 'bg-gradient-to-r from-primary to-accent text-slate-950 shadow-lg shadow-primary/25'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            Solicitar Cotización
                        </a>

                        <p className="text-center text-[10px] text-slate-500 mt-3">
                            Te contactaremos por WhatsApp para más detalles
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
        </div>
    );
};

export default ServiceModal;
