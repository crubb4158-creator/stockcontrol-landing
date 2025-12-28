import React from 'react';
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 xl:py-14 text-center z-10">
      <div className="mx-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {/* Badges Stack */}
        <div className="flex flex-col items-center gap-2 mb-4 sm:mb-5 lg:mb-6">
          {/* Speed Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-green-400 backdrop-blur-sm animate-pulse">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 fill-green-400 text-green-400" />
            <span>Así de rápido carga este sitio, así de rápido es el sistema</span>
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 fill-green-400 text-green-400" />
          </div>

          {/* Paraguay Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Software 100% Paraguayo
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4 lg:mb-5 leading-[1.15]">
          Control total para tu <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
            negocio en crecimiento
          </span>
        </h1>

        <p className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
          Planes simples, transparentes y en Guaraníes. Diseñados para potenciar desde pequeños emprendimientos hasta grandes empresas.
        </p>
      </div>
    </div>
  );
};

export default Hero;