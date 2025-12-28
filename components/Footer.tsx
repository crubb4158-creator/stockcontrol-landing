import React from 'react';
import { Store, MessageCircle, FileText, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'terms' | 'privacy' | 'support') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-20 mt-12 py-10 bg-slate-800 border-t border-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header del footer */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Store className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-white">DiGuork</span>
        </div>

        {/* Links centrados con iconos */}
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          <button
            onClick={() => onNavigate('terms')}
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <FileText className="h-4 w-4" />
            Términos y Condiciones
          </button>
          <button
            onClick={() => onNavigate('privacy')}
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <Shield className="h-4 w-4" />
            Política de Privacidad
          </button>
          <button
            onClick={() => onNavigate('support')}
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Soporte
          </button>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-600 pt-6">
          <p className="text-center text-xs text-slate-300">
            © 2025 DiGuork. Todos los derechos reservados. Software 100% Paraguayo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;