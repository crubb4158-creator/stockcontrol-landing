import React, { useEffect } from 'react';
import { X, Check, Sparkles, ArrowLeftRight } from 'lucide-react';
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
                        'Punto de Venta completo',
                        'Control de Caja con arqueo',
                        'Inventario básico con alertas',
                        'Hasta 2 usuarios simultáneos',
                        'Soporte prioritario',
                        'Multi-moneda',
                        'Instalación gratuita'
                    ]
                };
            case 'pro':
                return {
                    ideal: 'Tiendas medianas, boutiques, farmacias',
                    includes: [
                        'Todo lo del Plan Emprendedor',
                        'Hasta 4 usuarios',
                        'Gestión de RRHH',
                        'Comisiones y metas',
                        'Reportes avanzados',
                        'Control de proveedores',
                        'Historial de clientes'
                    ]
                };
            case 'lifetime':
                return {
                    ideal: 'Empresas que quieren invertir una vez',
                    includes: [
                        'Hasta 10 usuarios',
                        'Instalación presencial/virtual',
                        'Acceso de por vida',
                        'Actualizaciones gratis',
                        'Facturación Electrónica',
                        'Soporte VIP',
                        'Capacitación completa',
                        'Migración de datos'
                    ]
                };
            case 'creditos':
                return {
                    ideal: 'Distribuidores que quieren ganar dinero',
                    includes: [
                        '3 créditos para cuentas',
                        'Cuentas completas',
                        'Define tu precio',
                        'Ganancia +500k/cuenta',
                        'Soporte para tu red',
                        'Material de ventas',
                        'Comisiones renovación'
                    ]
                };
            default:
                return { ideal: '', includes: [] };
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
                                    <img src="/flag-py.png" alt="PY" className="h-4 w-4 rounded-full" />
                                    <ArrowLeftRight className="h-3 w-3 text-green-400" />
                                    <img src="/flag-br.png" alt="BR" className="h-4 w-4 rounded-full" />
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
                                <div key={idx} className="flex items-center gap-2">
                                    <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${plan.isRecommended ? 'bg-primary text-slate-950' : 'bg-white/10 text-primary'}`}>
                                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                                    </div>
                                    <span className="text-xs text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* PIX Details */}
                        {plan.pix?.enabled && (
                            <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10 mb-4">
                                <p className="text-xs font-semibold text-green-400 mb-2">Servicio PIX incluido</p>
                                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                                    <div>• Enviar Gs. → Recibir R$</div>
                                    <div>• Recibir R$ → Recibir Gs.</div>
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
