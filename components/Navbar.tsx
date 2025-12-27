import React from 'react';
import { Store, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex h-16 w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-6 backdrop-blur-xl shadow-2xl shadow-black/20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <Store className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white hidden sm:block">StockControl</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/5">
          <a className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all" href="#">Características</a>
          <a className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm" href="#">Precios</a>
          <a className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all" href="#">Clientes</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Entrar
          </button>
          <button className="flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Prueba Gratis
          </button>
          
          <button className="md:hidden ml-1 text-slate-300 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;