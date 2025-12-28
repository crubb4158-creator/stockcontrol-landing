import React from 'react';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

interface EnterprisePageProps {
    onBack: () => void;
}

const EnterprisePage: React.FC<EnterprisePageProps> = ({ onBack }) => {
    const whatsappLink = `https://wa.me/5950983338958?text=${encodeURIComponent(
        'Hola! Tengo múltiples sucursales y me interesa el plan Enterprise.'
    )}`;

    return (
        <div className="relative min-h-screen bg-slate-950 text-white">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-6 px-4 sm:px-6">
                <div className="mx-auto max-w-2xl">
                    {/* Back */}
                    <button
                        onClick={onBack}
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-3 w-3" />
                        Volver
                    </button>

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                            Enterprise
                        </span>
                        <h1 className="text-2xl font-bold text-white mb-3">
                            Solución para múltiples sucursales
                        </h1>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Centralizá la gestión de tu negocio. Un solo sistema para todas tus sucursales.
                        </p>
                    </div>

                    {/* Problem */}
                    <div className="mb-8 p-4 rounded-lg bg-slate-900/50 border-l-2 border-red-500/50">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">El problema</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Cuando tenés varias sucursales, perdés el control. No sabés qué pasa en cada local,
                            el stock no coincide, los reportes llegan tarde y cada sucursal maneja sus propios datos.
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8 p-4 rounded-lg bg-slate-900/50 border-l-2 border-primary">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">La solución</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            DiGuork Enterprise conecta todas tus sucursales en un solo panel.
                            Ves todo en tiempo real, desde cualquier lugar.
                        </p>
                    </div>

                    {/* Features - Minimal */}
                    <div className="mb-10 space-y-3">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Qué incluye</p>

                        {[
                            'Panel centralizado para todas las sucursales',
                            'Inventario sincronizado o independiente',
                            'Reportes de ventas en tiempo real',
                            'Control de permisos por empleado',
                            'Usuarios ilimitados',
                            'Soporte prioritario 24/7'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <span className="text-sm text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-10 p-5 rounded-xl bg-slate-900/80 border border-white/5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Inversión</span>
                            <span className="text-xs text-primary">Personalizado</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            El precio depende de la cantidad de sucursales y usuarios.
                            Contáctanos para una cotización.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-bold transition-all hover:bg-slate-200"
                        >
                            Solicitar cotización
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <p className="text-[10px] text-slate-600 mt-3">
                            Te contactamos por WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterprisePage;
