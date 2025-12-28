import React from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles, Crown, Zap, Shield, Clock, MessageCircle, Users, TrendingUp, Star, Rocket, Gift } from 'lucide-react';
import { PricingPlan } from '../types';

interface PlanConfirmPageProps {
    plan: PricingPlan;
    onBack: () => void;
}

interface BenefitItem {
    text: string;
    icon: React.ReactNode;
    highlight?: boolean;
}

const planDetails: { [key: string]: { benefits: BenefitItem[], message: string, tagline: string, accentColor: string } } = {
    emprendedor: {
        tagline: 'Todo lo que necesitás para empezar',
        accentColor: 'from-emerald-400 to-teal-500',
        benefits: [
            { text: 'Sistema de Punto de Venta completo', icon: <Zap className="h-4 w-4" /> },
            { text: 'Control de Caja con arqueo automático', icon: <Shield className="h-4 w-4" /> },
            { text: 'Inventario con alertas de stock bajo', icon: <TrendingUp className="h-4 w-4" /> },
            { text: 'Multi-moneda: Guaraníes, Dólares, Reales', icon: <Star className="h-4 w-4" />, highlight: true },
            { text: 'Hasta 2 usuarios simultáneos', icon: <Users className="h-4 w-4" /> },
            { text: 'Soporte directo por WhatsApp', icon: <MessageCircle className="h-4 w-4" /> },
            { text: 'Instalación y capacitación gratuita', icon: <Gift className="h-4 w-4" />, highlight: true },
            { text: 'Servicio PIX para cobros en Reales', icon: <Rocket className="h-4 w-4" /> }
        ],
        message: 'Hola! Quiero contratar el plan EMPRENDEDOR (150.000 Gs/semana)'
    },
    pro: {
        tagline: 'Potencia tu negocio al siguiente nivel',
        accentColor: 'from-violet-400 to-purple-500',
        benefits: [
            { text: 'Todo lo del plan Emprendedor', icon: <Check className="h-4 w-4" />, highlight: true },
            { text: 'Hasta 4 usuarios simultáneos', icon: <Users className="h-4 w-4" /> },
            { text: 'Gestión completa de Recursos Humanos', icon: <Crown className="h-4 w-4" /> },
            { text: 'Comisiones y metas por empleado', icon: <TrendingUp className="h-4 w-4" /> },
            { text: 'Reportes avanzados de ventas', icon: <Zap className="h-4 w-4" /> },
            { text: 'Control de proveedores y compras', icon: <Shield className="h-4 w-4" /> },
            { text: 'Historial completo de clientes', icon: <Star className="h-4 w-4" /> },
            { text: 'Servicio PIX con 8% de comisión', icon: <Rocket className="h-4 w-4" />, highlight: true }
        ],
        message: 'Hola! Quiero contratar el plan NEGOCIO PRO (250.000 Gs/semana)'
    },
    lifetime: {
        tagline: 'Inversión única, beneficios para siempre',
        accentColor: 'from-amber-400 to-orange-500',
        benefits: [
            { text: 'Hasta 10 usuarios simultáneos', icon: <Users className="h-4 w-4" /> },
            { text: 'Acceso de por vida sin cuotas mensuales', icon: <Crown className="h-4 w-4" />, highlight: true },
            { text: 'Actualizaciones gratuitas para siempre', icon: <Rocket className="h-4 w-4" /> },
            { text: 'Instalación presencial o virtual incluida', icon: <Gift className="h-4 w-4" /> },
            { text: 'Capacitación completa del equipo', icon: <Star className="h-4 w-4" /> },
            { text: 'Migración de datos de otro sistema', icon: <Zap className="h-4 w-4" /> },
            { text: 'Soporte VIP prioritario', icon: <Shield className="h-4 w-4" />, highlight: true },
            { text: 'Facturación Electrónica cuando disponible', icon: <TrendingUp className="h-4 w-4" /> },
            { text: 'Servicio PIX exclusivo al 2%', icon: <Sparkles className="h-4 w-4" />, highlight: true }
        ],
        message: 'Hola! Quiero contratar el plan LIFETIME (7.250.000 Gs pago único)'
    },
    creditos: {
        tagline: 'Monetizá tu red de contactos',
        accentColor: 'from-cyan-400 to-blue-500',
        benefits: [
            { text: '3 créditos para crear cuentas empresariales', icon: <Gift className="h-4 w-4" />, highlight: true },
            { text: 'Cada crédito = 1 cuenta completa para tu cliente', icon: <Star className="h-4 w-4" /> },
            { text: 'Vos definís el precio de venta a tu cliente', icon: <Crown className="h-4 w-4" /> },
            { text: 'Ganancia potencial de Gs. 500.000+ por cuenta', icon: <TrendingUp className="h-4 w-4" />, highlight: true },
            { text: 'Soporte para gestionar tu red de clientes', icon: <Shield className="h-4 w-4" /> },
            { text: 'Material de ventas y capacitación', icon: <Zap className="h-4 w-4" /> },
            { text: 'Comisiones por renovaciones de tus clientes', icon: <Rocket className="h-4 w-4" /> },
            { text: 'Servicio PIX para tus clientes al 2.3%', icon: <Sparkles className="h-4 w-4" /> }
        ],
        message: 'Hola! Quiero ser DISTRIBUIDOR y comprar Créditos VIP'
    }
};

const steps = [
    { num: '01', title: 'Contactanos', desc: 'Escribinos por WhatsApp' },
    { num: '02', title: 'Coordinamos', desc: 'Agendamos la instalación' },
    { num: '03', title: 'Configuramos', desc: 'Adaptamos a tu negocio' },
    { num: '04', title: 'Capacitación', desc: 'Te enseñamos todo' },
    { num: '05', title: '¡A vender!', desc: 'Empezás a facturar' }
];

const PlanConfirmPage: React.FC<PlanConfirmPageProps> = ({ plan, onBack }) => {
    const details = planDetails[plan.id] || planDetails.emprendedor;

    const whatsappLink = `https://wa.me/5950983338958?text=${encodeURIComponent(details.message)}`;

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${details.accentColor} opacity-[0.03] blur-[120px] rounded-full`}></div>
                <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr ${details.accentColor} opacity-[0.02] blur-[100px] rounded-full`}></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-all duration-300 mb-10"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        <span>Volver a planes</span>
                    </button>

                    {/* Hero Header Card */}
                    <div className="relative mb-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                        {/* Decorative elements */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${details.accentColor} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                        <div className="absolute top-4 right-4">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${details.accentColor} opacity-20`}>
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${details.accentColor} mb-4`}>
                                <Sparkles className="h-3 w-3 text-slate-900" />
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Excelente elección</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                                Plan <span className={`bg-gradient-to-r ${details.accentColor} bg-clip-text text-transparent`}>{plan.name}</span>
                            </h1>

                            <p className="text-lg text-slate-400 max-w-xl">
                                {details.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Price Card - Premium */}
                    <div className="relative mb-8 p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.02] to-transparent"></div>
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Tu inversión</p>
                                <p className="text-sm text-slate-400">Precio especial de lanzamiento</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${details.accentColor} bg-clip-text text-transparent`}>
                                    {plan.price}
                                </span>
                                <span className="text-lg text-slate-500">{plan.period}</span>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2 rounded-xl bg-gradient-to-br ${details.accentColor} bg-opacity-20`}>
                                <Gift className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Todo lo que incluye</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {details.benefits.map((item, i) => (
                                <div
                                    key={i}
                                    className={`group relative p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${item.highlight
                                        ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20'
                                        : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10'
                                        }`}
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`shrink-0 p-2.5 rounded-xl ${item.highlight
                                            ? `bg-gradient-to-br ${details.accentColor} text-slate-900`
                                            : 'bg-white/10 text-slate-300 group-hover:text-white'
                                            } transition-colors`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-medium ${item.highlight ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                                                {item.text}
                                            </p>
                                        </div>
                                        {item.highlight && (
                                            <div className={`shrink-0 px-2 py-0.5 rounded-full bg-gradient-to-r ${details.accentColor} opacity-80`}>
                                                <span className="text-[10px] font-bold text-slate-900 uppercase">Top</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Steps */}
                    <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2 rounded-xl bg-gradient-to-br ${details.accentColor} bg-opacity-20`}>
                                <Clock className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-white">¿Cómo empezamos?</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className="relative group"
                                >
                                    <div className="text-center">
                                        <div className={`mx-auto w-12 h-12 rounded-xl bg-gradient-to-br ${details.accentColor} opacity-10 group-hover:opacity-20 flex items-center justify-center mb-3 transition-opacity`}>
                                            <span className={`text-lg font-bold bg-gradient-to-r ${details.accentColor} bg-clip-text text-transparent`}>{step.num}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-white mb-1">{step.title}</p>
                                        <p className="text-xs text-slate-500">{step.desc}</p>
                                    </div>
                                    {/* Connector line */}
                                    {i < steps.length - 1 && (
                                        <div className="hidden sm:block absolute top-6 left-[70%] w-[60%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${details.accentColor} text-slate-900 font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25`}
                        >
                            <span>Contratar ahora</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="flex items-center gap-2 text-slate-500">
                                <MessageCircle className="h-4 w-4" />
                                <span className="text-sm">WhatsApp</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                            <span className="text-sm text-slate-500">+595 0982 351 752</span>
                        </div>

                        <p className="text-xs text-slate-600 mt-4">
                            Respondemos en menos de 5 minutos
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default PlanConfirmPage;
