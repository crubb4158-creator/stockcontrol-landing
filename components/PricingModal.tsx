import React, { useEffect } from 'react';
import { X, Check, Sparkles, ArrowLeftRight, Clock } from 'lucide-react';
import { FlagPY, FlagBR } from './FlagIcons';
import { PricingPlan } from '../types';

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: PricingPlan | null;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, plan }) => {
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

    if (!isOpen || !plan) return null;

    const getExtraDetails = (planId: string) => {
        switch (planId) {
            case 'emprendedor':
                return {
                    ideal: 'Kioscos, pequeños comercios, emprendedores que inician',
                    includes: [
                        { text: 'Punto de Venta completo', limitedTime: false },
                        { text: 'Control de Caja con arqueo', limitedTime: false },
                        { text: 'Inventario básico con alertas', limitedTime: false },
                        { text: 'Hasta 2 usuarios simultáneos', limitedTime: false },
                        { text: 'Soporte prioritario', limitedTime: false },
                        { text: 'Multi-moneda', limitedTime: false },
                        { text: 'Instalación gratuita', limitedTime: true }
                    ]
                };
            case 'pro':
                return {
                    ideal: 'Tiendas medianas, boutiques, farmacias',
                    includes: [
                        { text: 'Todo lo del Plan Emprendedor', limitedTime: false },
                        { text: 'Hasta 4 usuarios', limitedTime: false },
                        { text: 'Gestión de RRHH', limitedTime: false },
                        { text: 'Comisiones y metas', limitedTime: false },
                        { text: 'Reportes avanzados', limitedTime: false },
                        { text: 'Control de proveedores', limitedTime: false },
                        { text: 'Historial de clientes', limitedTime: false },
                        { text: 'Instalación gratuita', limitedTime: true }
                    ]
                };
            case 'lifetime':
                return {
                    ideal: 'Empresas que quieren invertir una vez',
                    includes: [
                        { text: 'Hasta 10 usuarios', limitedTime: false },
                        { text: 'Instalación presencial/virtual', limitedTime: false },
                        { text: 'Acceso de por vida', limitedTime: false },
                        { text: 'Actualizaciones gratis', limitedTime: false },
                        { text: 'Facturación Electrónica', limitedTime: false },
                        { text: 'Soporte VIP', limitedTime: false },
                        { text: 'Capacitación completa', limitedTime: false },
                        { text: 'Migración de datos', limitedTime: false }
                    ]
                };
            case 'creditos':
                return {
                    ideal: 'Distribuidores que quieren ganar dinero',
                    includes: [
                        { text: '3 créditos para cuentas', limitedTime: false },
                        { text: 'Cuentas completas', limitedTime: false },
                        { text: 'Define tu precio', limitedTime: false },
                        { text: 'Ganancia +500k/cuenta', limitedTime: false },
                        { text: 'Soporte para tu red', limitedTime: false },
                        { text: 'Material de ventas', limitedTime: false },
                        { text: 'Comisiones renovación', limitedTime: false }
                    ]
                };
            default:
                return { ideal: '', includes: [] as { text: string; limitedTime: boolean }[] };
        }
    };

    const details = getExtraDetails(plan.id);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                style={{ animation: 'fadeIn 0.2s ease-out' }}
            />

            {/* Modal - Horizontal/Wide Layout */}
            <div
                className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.2s ease-out' }}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Left Column - Header */}
                    <div className={`md:w-1/3 p-5 ${plan.isRecommended ? 'bg-gradient-to-br from-primary/20 via-slate-900 to-accent/20' : 'bg-gradient-to-br from-slate-800 to-slate-900'}`}>
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="h-4 w-4 text-slate-300" />
                        </button>

                        {plan.isRecommended && (
                            <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-950 mb-3">
                                <Sparkles className="h-2.5 w-2.5 fill-slate-950" />
                                Popular
                            </div>
                        )}

                        <h3 className={`text-xl font-bold mb-1 ${plan.isRecommended ? 'text-primary' : 'text-white'}`}>
                            {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-2xl font-bold text-white">{plan.price}</span>
                            <span className="text-xs text-slate-400">{plan.period}</span>
                        </div>

                        <p className="text-xs text-slate-400 mb-4">{details.ideal}</p>

                        {/* PIX Mini Badge */}
                        {plan.pix?.enabled && (
                            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <FlagPY className="h-4 w-4" />
                                    <ArrowLeftRight className="h-3 w-3 text-green-400" />
                                    <FlagBR className="h-4 w-4" />
                                    <span className="text-xs font-bold text-green-400">{plan.pix.commission}</span>
                                </div>
                                <p className="text-[9px] text-slate-400">Mín: {plan.pix.minAmount}</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:w-2/3 p-5">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                            {details.includes.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${plan.isRecommended ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs text-slate-300">{item.text}</span>
                                        {item.limitedTime && (
                                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 w-fit animate-pulse">
                                                <Clock className="h-2 w-2 text-amber-400" />
                                                <span className="text-[7px] font-bold text-amber-400 uppercase tracking-wide">
                                                    Por Tiempo Limitado
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PIX Details */}
                        {plan.pix?.enabled && (
                            <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10 mb-4">
                                <p className="text-xs font-semibold text-green-400 mb-2">Servicio PIX incluido</p>
                                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                                    <div>• Enviar Gs. → Recibir R$</div>
                                    <div>• Enviar R$ → Recibir Gs.</div>
                                    <div>• Tiempo: 15-20 minutos</div>
                                    <div>• Cotización en tiempo real</div>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={onClose}
                            className={`w-full rounded-full py-3 px-6 text-sm font-bold transition-all hover:scale-[1.02] ${plan.isRecommended
                                ? 'bg-gradient-to-r from-primary to-accent text-slate-950 shadow-lg shadow-primary/25'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            `}</style>
        </div>
    );
};

export default PricingModal;
