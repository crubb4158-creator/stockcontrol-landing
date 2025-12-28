import React, { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface FeatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    feature: {
        icon: React.ReactNode;
        title: string;
        longDescription: string;
        benefits: string[];
    } | null;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ isOpen, onClose, feature }) => {
    // Close on ESC key
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

    if (!isOpen || !feature) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-16 sm:pt-24"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
                style={{ animation: 'fadeIn 0.3s ease-out' }}
            />

            {/* Modal */}
            <div
                className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.3s ease-out' }}
            >
                {/* Header with gradient */}
                <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 bg-gradient-to-br from-primary/10 via-slate-900 to-accent/10">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <X className="h-4 w-4 text-slate-400" />
                    </button>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl p-2 sm:p-3 mb-3 sm:mb-4 bg-gradient-to-br from-primary to-accent text-slate-950">
                        {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white pr-8">{feature.title}</h3>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 pt-3 sm:pt-4">
                    {/* Long description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                        {feature.longDescription}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Beneficios para tu negocio
                        </p>
                        {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                <div className="mt-0.5 flex size-4 sm:size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Check className="h-2.5 sm:h-3 w-2.5 sm:w-3 stroke-[3]" />
                                </div>
                                <span className="text-xs sm:text-sm text-slate-300">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#precios"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-primary to-accent py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02]"
                    >
                        Probar Gratis
                        <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                    </a>
                </div>
            </div>

            {/* Styles */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
      `}</style>
        </div>
    );
};

export default FeatureModal;
