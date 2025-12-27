import React from 'react';
import { Store } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-[#020617] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Store className="h-5 w-5 text-slate-600" />
            <p className="text-sm text-slate-500">© 2024 StockControl PY. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Términos y Condiciones</a>
            <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Política de Privacidad</a>
            <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;