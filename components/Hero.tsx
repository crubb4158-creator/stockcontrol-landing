import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center z-10">
      <div className="mx-auto max-w-4xl">
        <div className="animate-float inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-8 transition-colors hover:bg-primary/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Software 100% Paraguayo
        </div>
        
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-[1.1]">
          Control total para tu <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
            negocio en crecimiento
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
          Planes simples, transparentes y en Guaraníes. Diseñados para potenciar desde pequeños emprendimientos hasta grandes empresas.
        </p>
      </div>
    </div>
  );
};

export default Hero;