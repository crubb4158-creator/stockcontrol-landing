import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
    onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-accent/10">
                        <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Política de Privacidad</h1>
                        <p className="text-sm text-slate-400">Tu privacidad es importante para nosotros</p>
                    </div>
                </div>

                <div className="prose prose-invert prose-sm max-w-none space-y-8">
                    {/* Introducción */}
                    <section>
                        <p className="text-slate-300 leading-relaxed">
                            En DiGuork nos comprometemos a proteger tu información personal. Esta política describe qué datos
                            recolectamos, cómo los usamos y tus derechos sobre ellos.
                        </p>
                    </section>

                    {/* Datos recolectados */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">1. Información que Recolectamos</h2>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• <strong>Datos de cuenta:</strong> Nombre, email, teléfono, nombre del negocio</li>
                            <li>• <strong>Datos de uso:</strong> Productos, ventas, clientes, inventario</li>
                            <li>• <strong>Datos técnicos:</strong> Dirección IP, tipo de dispositivo, navegador</li>
                            <li>• <strong>Datos de pago:</strong> Solo los necesarios para procesar transacciones</li>
                        </ul>
                    </section>

                    {/* Uso de datos */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">2. Cómo Usamos tu Información</h2>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• Proporcionar y mejorar el servicio DiGuork</li>
                            <li>• Procesar tus pagos y suscripciones</li>
                            <li>• Enviarte actualizaciones importantes del servicio</li>
                            <li>• Brindarte soporte técnico</li>
                            <li>• Generar estadísticas anónimas de uso</li>
                        </ul>
                    </section>

                    {/* No vendemos */}
                    <section className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <h2 className="text-lg font-bold text-green-400 mb-3">3. NO Vendemos tus Datos</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            <strong>Nunca vendemos, alquilamos ni compartimos tu información personal con terceros</strong>
                            para fines de marketing. Tus datos son tuyos y solo se usan para operar el servicio.
                        </p>
                    </section>

                    {/* Seguridad */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">4. Seguridad de tus Datos</h2>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• Conexiones encriptadas con SSL/TLS</li>
                            <li>• Servidores seguros en la nube</li>
                            <li>• Acceso restringido solo a personal autorizado</li>
                            <li>• Copias de seguridad automáticas diarias</li>
                            <li>• Contraseñas almacenadas de forma encriptada</li>
                        </ul>
                    </section>

                    {/* Tus derechos */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">5. Tus Derechos</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                            Como usuario, tienes derecho a:
                        </p>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• <strong>Acceder</strong> a toda tu información personal</li>
                            <li>• <strong>Corregir</strong> datos incorrectos o desactualizados</li>
                            <li>• <strong>Eliminar</strong> tu cuenta y todos tus datos</li>
                            <li>• <strong>Exportar</strong> tus datos en formato estándar</li>
                            <li>• <strong>Objetar</strong> el procesamiento de tus datos</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">6. Cookies</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Usamos cookies esenciales para mantener tu sesión activa y recordar tus preferencias.
                            No usamos cookies de seguimiento ni publicidad de terceros.
                        </p>
                    </section>

                    {/* Contacto */}
                    <section className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <h2 className="text-lg font-bold text-accent mb-2">¿Tienes preguntas sobre tu privacidad?</h2>
                        <p className="text-slate-300 text-sm">
                            Contáctanos por WhatsApp al
                            <a href="https://wa.me/5950983338958" className="text-accent ml-1 hover:underline">+595 0983 338 958</a>
                        </p>
                    </section>
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

export default PrivacyPage;
