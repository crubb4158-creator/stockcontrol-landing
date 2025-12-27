import React from 'react';

const ClientsSection: React.FC = () => {
  return (
    <div className="py-20 relative z-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-10">
          Confían en nosotros
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
          {/* Client Logos styled as minimal pill badges */}
          {['MercadoYa', 'FarmaciaCentral', 'Boutique Asunción', 'TechStore'].map((client, i) => (
            <div key={i} className="group relative">
               <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
               <div className="relative flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 border border-white/5 transition-colors hover:border-white/10 hover:bg-white/10">
                 <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${
                   i === 0 ? 'from-blue-400 to-cyan-400' :
                   i === 1 ? 'from-emerald-400 to-teal-400' :
                   i === 2 ? 'from-purple-400 to-pink-400' :
                   'from-orange-400 to-amber-400'
                 }`}></div>
                 <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{client}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;