import React, { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Sparkles, Users, Zap } from 'lucide-react';

const TeamSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        {
            name: 'Ana García',
            role: 'Diseñadora UI/UX',
            icon: Palette,
            delay: 0,
            image: '/images/ana.jpg'
        },
        {
            name: 'María López',
            role: 'Diseñadora Web',
            icon: Sparkles,
            delay: 0.1,
            image: '/images/maria.jpg'
        },
        {
            name: 'Sofía Benítez',
            role: 'Diseñadora UX',
            icon: Palette,
            delay: 0.2,
            image: '/images/sofia.jpg'
        },
        {
            name: 'Carlos Mendoza',
            role: 'Full Stack Dev',
            icon: Code2,
            delay: 0.3,
            image: '/images/carlos.jpg'
        },
        {
            name: 'Miguel Acosta',
            role: 'Backend Dev',
            icon: Code2,
            delay: 0.4,
            image: '/images/miguel.jpg'
        },
    ];

    return (
        <section
            id="equipo"
            ref={sectionRef}
            className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                        <Users size={14} />
                        Nuestro Equipo
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                        Profesionales <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">paraguayos</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                        Somos un equipo apasionado por la tecnología. Desarrollamos software a medida para negocios que quieren crecer.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-12">
                    {teamMembers.map((member, index) => {
                        const Icon = member.icon;
                        return (
                            <div
                                key={index}
                                className={`group text-center p-2 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: isVisible ? `${member.delay}s` : '0s'
                                }}
                            >
                                {/* Avatar con foto */}
                                <div className="relative mx-auto w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full mb-2 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                                    {/* Borde gradient */}
                                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-full rounded-full object-cover ring-2 ring-white/10 group-hover:ring-primary/30 transition-all"
                                    />
                                </div>
                                <h3 className="font-bold text-white text-[10px] sm:text-sm mb-0.5 sm:mb-1">{member.name}</h3>
                                <p className="text-[8px] sm:text-[10px] lg:text-xs text-slate-500">{member.role}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Product Highlight */}
                <div
                    className={`relative rounded-2xl bg-gradient-to-r from-slate-800/50 via-slate-900/50 to-slate-800/50 border border-white/[0.06] backdrop-blur-sm p-6 sm:p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: isVisible ? '0.5s' : '0s' }}
                >
                    {/* Backglow */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-2xl rounded-2xl" />

                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-400">
                                    <Zap size={12} />
                                    Producto Estrella
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                DiGuork - Sistema de Gestión Comercial
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Nuestro sistema POS más completo. Control de ventas, inventario, clientes, caja y empleados.
                                Diseñado especialmente para comercios paraguayos que quieren profesionalizar su negocio.
                            </p>
                        </div>
                        <div className="lg:shrink-0">
                            <a
                                href="#precios"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-slate-900 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                            >
                                Ver Planes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
