import React from 'react';
import { ArrowLeft, MessageCircle, Clock, Phone, CheckCircle } from 'lucide-react';

interface SupportPageProps {
    onBack: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ onBack }) => {
    const whatsappNumber = '5950983338958';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20necesito%20ayuda%20con%20DiGuork`;

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-2xl mx-auto px-4 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="inline-flex p-4 rounded-2xl bg-green-500/10 mb-6">
                        <MessageCircle className="h-12 w-12 text-green-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-3">
                        ¿Necesitas ayuda?
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Estamos aquí para asistirte. Respuesta rápida garantizada.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {/* Horarios */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <h3 className="font-bold text-white">Horario de Atención</h3>
                        </div>
                        <ul className="text-sm text-slate-400 space-y-1">
                            <li>Lunes a Viernes: 8:00 - 20:00</li>
                            <li>Sábados: 9:00 - 14:00</li>
                            <li>Domingos: Cerrado</li>
                        </ul>
                    </div>

                    {/* Respuesta */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <h3 className="font-bold text-white">Tiempo de Respuesta</h3>
                        </div>
                        <ul className="text-sm text-slate-400 space-y-1">
                            <li>Consultas simples: ~5 minutos</li>
                            <li>Soporte técnico: ~15 minutos</li>
                            <li>Problemas complejos: ~1 hora</li>
                        </ul>
                    </div>
                </div>

                {/* Qué podemos ayudarte */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-10">
                    <h3 className="font-bold text-white mb-4">Te podemos ayudar con:</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        {[
                            'Instalación del sistema',
                            'Capacitación de uso',
                            'Problemas técnicos',
                            'Configuración inicial',
                            'Preguntas sobre planes',
                            'Migración de datos',
                            'Reportes y estadísticas',
                            'Cualquier duda'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-300">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-green-500 hover:bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105"
                    >
                        <Phone className="h-6 w-6" />
                        Contactar por WhatsApp
                    </a>
                    <p className="text-slate-500 text-sm mt-4">
                        +595 0982 351 752
                    </p>
                </div>

                {/* Alternative */}
                <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center">
                    <p className="text-slate-400 text-sm mb-2">
                        También puedes usar el chat de soporte dentro de la aplicación DiGuork
                    </p>
                    <p className="text-slate-500 text-xs">
                        Inicia sesión → Menú → Soporte
                    </p>
                </div>

                {/* Back button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
