import React from 'react';
import { ArrowLeft, MessageCircle, Clock, Shield, Zap, Users, ChevronRight, Check, Sparkles, Gift, HeadphonesIcon, Database } from 'lucide-react';

interface TrialPageProps {
    onBack: () => void;
}

const TrialPage: React.FC<TrialPageProps> = ({ onBack }) => {
    const whatsappLink = "https://wa.me/5950983338958?text=Hola!%20Me%20interesa%20solicitar%20una%20prueba%20del%20sistema";

    const steps = [
        { num: '01', title: 'Contactanos', desc: 'Escribinos por WhatsApp', icon: <MessageCircle size={20} /> },
        { num: '02', title: 'Te creamos acceso', desc: 'Usuario y contraseña', icon: <Users size={20} /> },
        { num: '03', title: 'Probá todo', desc: 'Cargá productos reales', icon: <Zap size={20} /> },
        { num: '04', title: 'Decidí después', desc: 'Sin compromisos', icon: <Check size={20} /> },
    ];

    const benefits = [
        { icon: <Database size={18} />, title: 'Tus datos se conservan', desc: 'Lo que cargues durante la prueba no se pierde. Si decidís comprar, ya tenés todo listo.' },
        { icon: <Shield size={18} />, title: 'Sin tarjeta de crédito', desc: 'No pedimos datos de pago. Es 100% gratis durante el periodo de prueba.' },
        { icon: <HeadphonesIcon size={18} />, title: 'Soporte incluido', desc: 'Chat interno y WhatsApp directo para resolver tus dudas al instante.' },
        { icon: <Sparkles size={18} />, title: 'Sugerí mejoras', desc: 'Durante la prueba podés pedirnos adaptaciones para tu negocio.' },
    ];

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-all duration-300 mb-8"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        <span>Volver</span>
                    </button>

                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Gift size={14} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">100% Gratis</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                            Probá el sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">sin riesgos</span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Acceso completo para que conozcas todas las funciones. El tiempo de prueba lo definimos juntos según tu necesidad.
                        </p>
                    </div>

                    {/* Process Steps - Horizontal */}
                    <div className="mb-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {steps.map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                                {step.icon}
                                            </div>
                                            <span className="text-2xl font-bold text-slate-700">{step.num}</span>
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{step.title}</h3>
                                        <p className="text-xs text-slate-500">{step.desc}</p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                                            <ChevronRight size={16} className="text-slate-700" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Grid - Bento Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-xl bg-white/5 text-slate-300">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1 text-sm">{benefit.title}</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* What happens after */}
                    <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-xl bg-amber-500/20">
                                        <Clock size={18} className="text-amber-400" />
                                    </div>
                                    <h3 className="font-bold text-white">¿Qué pasa cuando termina la prueba?</h3>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    El sistema se desactiva automáticamente. Sin cargos sorpresa.
                                    Si querés continuar, te configuramos tu cuenta en <strong className="text-white">menos de 5 minutos</strong> con todos los datos que ya cargaste.
                                </p>
                            </div>
                            <div className="lg:shrink-0 flex items-center gap-2 text-xs text-slate-500">
                                <Check size={14} className="text-emerald-400" />
                                <span>Sin compromiso</span>
                                <span className="text-slate-700">•</span>
                                <Check size={14} className="text-emerald-400" />
                                <span>Sin tarjeta</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-slate-900 font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                        >
                            <MessageCircle size={20} />
                            <span>Solicitar prueba gratuita</span>
                        </a>

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <span className="text-sm text-slate-500">WhatsApp</span>
                            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                            <span className="text-sm text-slate-500">+595 0983 338 958</span>
                        </div>

                        <p className="text-xs text-slate-600 mt-4">
                            Respondemos en menos de 5 minutos durante horario laboral
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrialPage;
