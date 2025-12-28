import React from 'react';
import { Star, Quote, Store, TrendingUp, Zap, HeadphonesIcon } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Carlos Mendoza",
        role: "Propietario",
        company: "Comercio en CDE",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        quote: "Antes perdía horas haciendo el arqueo de caja. Ahora con DiGuork cierro en 5 minutos y sé exactamente cuánto gané.",
        rating: 5
    },
    {
        name: "María Fernández",
        role: "Gerente",
        company: "Boutique",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        quote: "El control de stock me salvó. Ya no vendo productos que no tengo y puedo ver qué se vende más.",
        rating: 5
    },
    {
        name: "Roberto Silva",
        role: "Dueño",
        company: "Tienda de Tecnología",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        quote: "DiGuork vuela, es rápido y nunca tuve un problema. El soporte responde al instante.",
        rating: 5
    },
    {
        name: "Ana López",
        role: "Administradora",
        company: "Minimarket",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        quote: "Lo mejor es el PIX. Mis clientes brasileños pagan fácil y yo recibo en guaraníes sin complicaciones.",
        rating: 5
    },
    {
        name: "Jorge Benítez",
        role: "Emprendedor",
        company: "Kiosco",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        quote: "Pensé que era caro pero se paga solo. En una semana ya recuperé la inversión con lo que ahorro de tiempo.",
        rating: 5
    },
    {
        name: "Patricia Romero",
        role: "Propietaria",
        company: "Farmacia",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face",
        quote: "El sistema de alertas de stock es increíble. Ya nunca me quedo sin productos importantes.",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="clientes" className="py-12 sm:py-16 lg:py-20 relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary mb-2 sm:mb-3">
                        <Star className="h-3 w-3 fill-primary" />
                        Testimonios
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
                        Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">nuestros clientes</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                        Negocios reales en Paraguay que transformaron su operación con DiGuork
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-slate-900/80 border border-white/5 p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-white/10 hover:bg-slate-900/90"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 opacity-10">
                                <Quote className="h-8 w-8 text-primary" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3 sm:mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-300 leading-relaxed mb-4 sm:mb-5 text-xs sm:text-sm">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-white/10"
                                />
                                <div>
                                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                                    <p className="text-[10px] sm:text-xs text-slate-400">
                                        {testimonial.role}, <span className="text-primary">{testimonial.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section - Slate Precision */}
                <div className="mt-10 sm:mt-12 lg:mt-14 relative">
                    {/* Backglow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl -z-10" />

                    {/* Stats Container */}
                    <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8">
                        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
                            {[
                                { value: "500+", label: "Negocios activos", Icon: Store },
                                { value: "50K+", label: "Ventas procesadas", Icon: TrendingUp },
                                { value: "99.9%", label: "Disponibilidad", Icon: Zap },
                                { value: "24/7", label: "Soporte disponible", Icon: HeadphonesIcon }
                            ].map((stat, index, arr) => (
                                <div key={index} className="flex items-center gap-8 sm:gap-12 lg:gap-16">
                                    {/* Stat Item */}
                                    <div className="text-center group">
                                        <stat.Icon size={18} className="mx-auto mb-2 text-slate-600 group-hover:text-primary transition-colors" />
                                        <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 group-hover:text-primary transition-colors">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                    </div>

                                    {/* Separator */}
                                    {index < arr.length - 1 && (
                                        <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
