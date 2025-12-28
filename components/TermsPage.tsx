import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageProps {
    onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
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
                    <div className="p-3 rounded-xl bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Términos y Condiciones</h1>
                        <p className="text-sm text-slate-400">Última actualización: Diciembre 2024</p>
                    </div>
                </div>

                <div className="prose prose-invert prose-sm max-w-none space-y-8">
                    {/* Introducción */}
                    <section>
                        <p className="text-slate-300 leading-relaxed">
                            Bienvenido a DiGuork. Al acceder y utilizar nuestro servicio, aceptas estos términos y condiciones en su totalidad.
                            Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestro servicio.
                        </p>
                    </section>

                    {/* Sección 1 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">1. Descripción del Servicio</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            DiGuork es un software de gestión comercial basado en la nube que permite a los negocios administrar ventas,
                            inventario, clientes, caja y empleados. El servicio está disponible mediante suscripción semanal o pago único (Lifetime).
                        </p>
                    </section>

                    {/* Sección 2 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">2. Pagos y Facturación</h2>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• Los precios están expresados en Guaraníes (Gs.)</li>
                            <li>• El pago semanal se realiza por adelantado</li>
                            <li>• El plan Lifetime es un pago único sin cuotas adicionales</li>
                            <li>• No se realizan reembolsos una vez activado el servicio</li>
                            <li>• Los precios pueden cambiar con previo aviso de 30 días</li>
                        </ul>
                    </section>

                    {/* Sección 3 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">3. Uso Aceptable</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                            Te comprometes a:
                        </p>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• Usar el servicio solo para fines comerciales legítimos</li>
                            <li>• No compartir tus credenciales de acceso</li>
                            <li>• No intentar acceder a cuentas de otros usuarios</li>
                            <li>• No usar el servicio para actividades ilegales</li>
                            <li>• Mantener la información de tu negocio actualizada</li>
                        </ul>
                    </section>

                    {/* Sección 4 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">4. Propiedad Intelectual</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            DiGuork, su logo, diseño y código fuente son propiedad exclusiva de DiGuork. No puedes copiar, modificar,
                            distribuir o vender ninguna parte del servicio. Los datos de tu negocio son de tu propiedad.
                        </p>
                    </section>

                    {/* Sección 5 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">5. Cancelación</h2>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• Puedes cancelar tu suscripción semanal en cualquier momento</li>
                            <li>• La cancelación toma efecto al finalizar el período pagado</li>
                            <li>• El plan Lifetime no admite cancelación ni reembolso</li>
                            <li>• Al cancelar, tendrás 30 días para exportar tus datos</li>
                        </ul>
                    </section>

                    {/* Sección 6 */}
                    <section className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <h2 className="text-lg font-bold text-red-400 mb-3">6. Uso Indebido</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                            El uso indebido del sistema tendrá consecuencias inmediatas:
                        </p>
                        <ul className="text-slate-300 text-sm space-y-2">
                            <li>• <strong>Suspensión inmediata</strong> de la cuenta sin previo aviso</li>
                            <li>• <strong>Pérdida de acceso</strong> a todos los datos del sistema</li>
                            <li>• <strong>Sin derecho a reembolso</strong> de pagos realizados</li>
                            <li>• <strong>Denuncia a las autoridades</strong> si se detecta actividad ilegal</li>
                        </ul>
                        <p className="text-slate-400 text-xs mt-3">
                            Se considera uso indebido: manipulación de datos con fines fraudulentos, intento de hackeo,
                            uso para lavado de dinero, venta de credenciales, o cualquier actividad que viole las leyes paraguayas.
                        </p>
                    </section>

                    {/* Sección 7 */}
                    <section className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-3">7. Modificaciones</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán
                            notificados por email o dentro de la aplicación. El uso continuado del servicio después de los
                            cambios constituye aceptación de los nuevos términos.
                        </p>
                    </section>

                    {/* Contacto */}
                    <section className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                        <h2 className="text-lg font-bold text-primary mb-2">¿Preguntas?</h2>
                        <p className="text-slate-300 text-sm">
                            Si tienes dudas sobre estos términos, contáctanos por WhatsApp al
                            <a href="https://wa.me/5950983338958" className="text-primary ml-1 hover:underline">+595 0983 338 958</a>
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

export default TermsPage;
