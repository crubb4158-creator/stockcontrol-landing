import React, { useState } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

const AppPreview: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'login'>('dashboard');
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden">
            <div className="mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                        Conoce la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">interfaz</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Diseño moderno, intuitivo y rápido
                    </p>
                </div>

                {/* Controls Row */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-4 sm:mb-5">
                    {/* Tab Buttons */}
                    <div className="flex gap-1.5">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-medium transition-all duration-300 ${activeTab === 'dashboard'
                                ? 'bg-gradient-to-r from-primary to-accent text-slate-950'
                                : 'bg-white/5 text-slate-300 hover:bg-white/10'
                                }`}
                        >
                            <Monitor className="h-3 w-3" />
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-medium transition-all duration-300 ${activeTab === 'login'
                                ? 'bg-gradient-to-r from-primary to-accent text-slate-950'
                                : 'bg-white/5 text-slate-300 hover:bg-white/10'
                                }`}
                        >
                            Login
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-5 bg-white/10" />

                    {/* Dark/Light Mode Toggle */}
                    {activeTab === 'dashboard' && (
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-medium bg-white/5 text-slate-300 hover:bg-white/10 transition-all duration-300 border border-white/10"
                        >
                            {isDarkMode ? (
                                <>
                                    <Moon className="h-3 w-3 text-primary" />
                                    <span className="hidden sm:inline">Modo Oscuro</span>
                                    <span className="sm:hidden">Oscuro</span>
                                </>
                            ) : (
                                <>
                                    <Sun className="h-3 w-3 text-amber-400" />
                                    <span className="hidden sm:inline">Modo Claro</span>
                                    <span className="sm:hidden">Claro</span>
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* Browser Mockup */}
                <div className="relative mx-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 via-transparent to-accent/15 rounded-xl blur-lg opacity-50" />

                    {/* Browser Frame */}
                    <div className="relative rounded-lg sm:rounded-xl border border-white/10 bg-slate-900/90 overflow-hidden shadow-2xl">
                        {/* Browser Top Bar */}
                        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-slate-800/50 border-b border-white/5">
                            <div className="flex gap-1">
                                <div className="h-2 w-2 rounded-full bg-red-500/80" />
                                <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                                <div className="h-2 w-2 rounded-full bg-green-500/80" />
                            </div>
                        </div>

                        {/* Screen Content */}
                        <div className="relative aspect-[16/8.5] overflow-hidden bg-slate-900">
                            {/* Dashboard Dark */}
                            <img
                                src="/dashboard-dark.png"
                                alt="DiGuork Dashboard Modo Oscuro"
                                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${activeTab === 'dashboard' && isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                            />
                            {/* Dashboard Light */}
                            <img
                                src="/dashboard-light.png"
                                alt="DiGuork Dashboard Modo Claro"
                                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${activeTab === 'dashboard' && !isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                            />
                            {/* Login Image */}
                            <img
                                src="/login.png"
                                alt="DiGuork Login"
                                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${activeTab === 'login' ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Floating badges - hidden on mobile */}
                    <div className="absolute -left-2 top-1/3 hidden xl:block">
                        <div className="rounded-lg bg-slate-900/90 border border-white/10 p-2 shadow-xl">
                            <p className="text-lg font-black text-primary">500+</p>
                            <p className="text-[9px] text-slate-400">Negocios</p>
                        </div>
                    </div>
                    <div className="absolute -right-2 bottom-1/3 hidden xl:block">
                        <div className="rounded-lg bg-slate-900/90 border border-white/10 p-2 shadow-xl">
                            <p className="text-lg font-black text-accent">99.9%</p>
                            <p className="text-[9px] text-slate-400">Disponibilidad</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPreview;
