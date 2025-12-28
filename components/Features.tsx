import React, { useState } from 'react';
import {
    ShoppingCart,
    Wallet,
    Package,
    Users,
    Truck,
    BarChart3,
    UserCog,
    Printer,
    Shield,
    Globe,
    MessageCircle,
    Zap,
    TrendingUp
} from 'lucide-react';
import FeatureModal from './FeatureModal';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    benefits: string[];
    highlight?: boolean;
}

const features: Feature[] = [
    {
        icon: <ShoppingCart className="h-5 w-5" />,
        title: "Punto de Venta Ultra-Rápido",
        description: "Procesa ventas en segundos. Múltiples métodos de pago: Efectivo, Tarjeta, QR, y ventas a crédito.",
        longDescription: "Tu caja registradora del siglo XXI. El módulo de Punto de Venta está diseñado para que cada venta sea rápida y sin fricciones. Acepta cualquier forma de pago que tu cliente prefiera: efectivo en Guaraníes, Dólares o Reales, tarjetas de débito/crédito, transferencias bancarias, o incluso ventas a crédito para clientes de confianza. Todo en una interfaz limpia que cualquier empleado puede aprender en minutos.",
        benefits: [
            "Reduce el tiempo de espera de tus clientes",
            "Nunca pierdas una venta por no aceptar un método de pago",
            "Calcula el vuelto automáticamente en cualquier moneda",
            "Registra quién hizo cada venta para control interno"
        ],
        highlight: true
    },
    {
        icon: <Wallet className="h-5 w-5" />,
        title: "Caja Inteligente",
        description: "Apertura y cierre de caja con arqueo automático. Maneja Guaraníes, Dólares y Reales sin complicaciones.",
        longDescription: "Olvídate de las hojas de Excel y las cuentas a mano. La Caja Inteligente te permite abrir tu jornada con un monto inicial y cerrarla con un arqueo completo que compara lo que deberías tener vs. lo que realmente tienes. Si hay diferencias, el sistema las detecta inmediatamente. Perfecto para zonas fronterizas donde manejas múltiples monedas.",
        benefits: [
            "Detecta faltantes o sobrantes al instante",
            "Historial completo de todos los cierres de caja",
            "Control separado de efectivo, tarjetas y transferencias",
            "Reportes automáticos al final de cada turno"
        ]
    },
    {
        icon: <Package className="h-5 w-5" />,
        title: "Control de Inventario",
        description: "Stock en tiempo real, alertas de productos bajos, Kardex de movimientos y transferencias entre sucursales.",
        longDescription: "Saber exactamente qué tienes en tu negocio es la base de una operación exitosa. El Control de Inventario te muestra el stock en tiempo real, te alerta cuando un producto está por agotarse, y mantiene un registro histórico (Kardex) de cada entrada y salida. Si tienes más de un local, puedes transferir productos entre sucursales.",
        benefits: [
            "Nunca vendas algo que no tienes en stock",
            "Alertas automáticas de productos a reponer",
            "Trazabilidad completa de cada movimiento",
            "Facilita la toma de inventario físico"
        ]
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "Gestión de Clientes",
        description: "Registro completo de clientes, historial de compras, y sistema de fiado con control de deudas.",
        longDescription: "Conocer a tus clientes es poder servirles mejor. Registra sus datos, mira qué han comprado antes, y ofréceles crédito de forma controlada. El sistema de fiado te permite llevar un control exacto de quién te debe, cuánto, y desde cuándo. Nunca más olvides una deuda ni pierdas la relación con tu cliente.",
        benefits: [
            "Fideliza a tus mejores clientes con crédito seguro",
            "Historial de compras para ofrecer productos relevantes",
            "Control total de cuentas por cobrar",
            "Recordatorios de pagos pendientes"
        ]
    },
    {
        icon: <Truck className="h-5 w-5" />,
        title: "Proveedores",
        description: "Administra tus proveedores, registra compras y mantén un control de tus cuentas por pagar.",
        longDescription: "Tus proveedores son socios clave de tu negocio. Registra cada uno con sus datos de contacto, lleva un historial de las compras que les haces, y controla cuánto les debes. Con esta información organizada, puedes negociar mejores precios, evitar pagar dos veces, y planificar tus pagos estratégicamente.",
        benefits: [
            "Directorio organizado de todos tus proveedores",
            "Control de cuentas por pagar sin confusiones",
            "Historial de compras para negociar mejores precios",
            "Evita pagos duplicados o facturas olvidadas"
        ]
    },
    {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Reportes y Estadísticas",
        description: "Dashboard con resumen de ventas, ganancias, productos más vendidos y rendimiento del negocio.",
        longDescription: "Los números cuentan la historia de tu negocio. El Dashboard te muestra en un vistazo cuánto vendiste hoy, esta semana, este mes. Cuánto ganaste realmente después de costos. Qué productos son los campeones de ventas y cuáles están acumulando polvo. Con esta información, tomas decisiones inteligentes en lugar de adivinar.",
        benefits: [
            "Conoce tu ganancia real, no solo la venta bruta",
            "Identifica tus productos estrella",
            "Detecta tendencias y estacionalidad",
            "Toma decisiones basadas en datos, no intuición"
        ],
        highlight: true
    },
    {
        icon: <UserCog className="h-5 w-5" />,
        title: "Recursos Humanos",
        description: "Gestiona empleados, salarios, comisiones por venta, metas mensuales y control de asistencia.",
        longDescription: "Tu equipo es tu mayor activo. El módulo de RRHH te permite gestionar a cada empleado, configurar si gana salario fijo o comisión por ventas, establecer metas mensuales con bonos, y llevar registro de asistencia. Cuando llega el momento de pagar, tienes toda la información lista para liquidar correctamente.",
        benefits: [
            "Calcula comisiones automáticamente",
            "Motiva con metas y bonos por cumplimiento",
            "Control de asistencia y horas trabajadas",
            "Historial de pagos y adelantos"
        ]
    },
    {
        icon: <Printer className="h-5 w-5" />,
        title: "Tickets Profesionales",
        description: "Impresión térmica en 48mm, 58mm u 80mm. Personaliza con tu logo, datos fiscales y mensaje.",
        longDescription: "La primera impresión cuenta, y el ticket es lo último que tu cliente se lleva. Imprime comprobantes profesionales con el nombre de tu empresa, RUC, dirección, y un mensaje personalizado. Compatible con las impresoras térmicas más comunes del mercado. Dale a tu negocio una imagen seria y profesional.",
        benefits: [
            "Imagen profesional ante tus clientes",
            "Cumple con requisitos legales de facturación",
            "Personalizable con tu branding",
            "Compatible con impresoras de 48, 58 y 80mm"
        ]
    },
    {
        icon: <Shield className="h-5 w-5" />,
        title: "Roles y Permisos",
        description: "Controla quién puede ver costos, hacer devoluciones o cerrar caja. Seguridad total.",
        longDescription: "No todos los empleados necesitan acceso a todo. Con el sistema de Roles y Permisos defines exactamente qué puede hacer cada persona. El cajero procesa ventas, pero no ve costos ni ganancias. El gerente cierra caja, pero no puede eliminar productos. Tú como dueño tienes control total. Seguridad y tranquilidad.",
        benefits: [
            "Previene robos internos y manipulación de datos",
            "Cada empleado ve solo lo que necesita",
            "Auditoría de quién hizo cada acción",
            "Tranquilidad de delegar sin perder control"
        ]
    },
    {
        icon: <Globe className="h-5 w-5" />,
        title: "Multi-Moneda",
        description: "Acepta pagos en Guaraníes, Dólares y Reales. Tipo de cambio configurable con margen de ganancia.",
        longDescription: "En la frontera, rechazar Dólares o Reales es perder ventas. DiGuork te permite configurar tipos de cambio con tu margen de ganancia para compra y venta. Cuando un cliente paga en moneda extranjera, el sistema calcula automáticamente el equivalente y tu vuelto. Gana en cada transacción sin complicarte.",
        benefits: [
            "Nunca rechaces una venta por la moneda",
            "Gana en el tipo de cambio con tu margen",
            "Cálculo automático de vuelto en cualquier moneda",
            "Arqueo separado por moneda"
        ]
    },
    {
        icon: <MessageCircle className="h-5 w-5" />,
        title: "Soporte Integrado",
        description: "Chat directo con soporte técnico desde la aplicación. Resolvemos tus dudas al instante.",
        longDescription: "Cuando tienes un problema o una duda, necesitas respuesta rápida. El Soporte Integrado te permite enviar un mensaje directamente desde la aplicación y recibir ayuda sin salir del sistema. No busques números de teléfono ni escribas correos. Estamos ahí cuando nos necesitas, listos para ayudarte.",
        benefits: [
            "Respuesta rápida a tus consultas",
            "Sin salir de la aplicación",
            "Historial de conversaciones para referencia",
            "Soporte humano, no bots automáticos"
        ]
    },
    {
        icon: <Zap className="h-5 w-5" />,
        title: "100% en la Nube",
        description: "Accede desde cualquier dispositivo. Tus datos siempre seguros y sincronizados automáticamente.",
        longDescription: "Tu negocio no debería depender de una sola computadora. Al estar 100% en la nube, puedes acceder a DiGuork desde cualquier dispositivo con internet: tu computadora del local, tu laptop en casa, o incluso tu celular. Tus datos están respaldados automáticamente y sincronizados en tiempo real. Si tu equipo falla, tu negocio sigue funcionando.",
        benefits: [
            "Accede desde cualquier lugar y dispositivo",
            "Copias de seguridad automáticas",
            "Sin instalaciones complicadas",
            "Actualizaciones automáticas sin costo extra"
        ]
    }
];

const Features: React.FC = () => {
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (feature: Feature) => {
        setSelectedFeature(feature);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedFeature(null), 300);
    };

    return (
        <>
            <section id="caracteristicas" className="py-16 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                            <TrendingUp className="h-3 w-3" />
                            Todo lo que necesitas
                        </span>
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl mb-3">
                            Características que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">impulsan tu negocio</span>
                        </h2>
                        <p className="text-sm text-slate-400 max-w-xl mx-auto">
                            Un sistema completo diseñado para negocios paraguayos. Simple de usar, potente en resultados.
                        </p>
                    </div>

                    {/* Features Grid - Bento Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => openModal(feature)}
                                className={`group relative rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${feature.highlight
                                    ? 'bg-gradient-to-br from-primary/20 via-slate-900/90 to-accent/20 border border-primary/30 shadow-lg shadow-primary/10'
                                    : 'bg-slate-900/80 border border-white/5 hover:border-white/10 hover:bg-slate-900/90'
                                    }`}
                            >
                                {/* Glow effect on highlight cards */}
                                {feature.highlight && (
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-50" />
                                )}

                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center rounded-xl p-2 mb-3 transition-transform duration-300 group-hover:scale-110 ${feature.highlight
                                    ? 'bg-gradient-to-br from-primary to-accent text-slate-950'
                                    : 'bg-white/5 text-primary group-hover:bg-primary/10'
                                    }`}>
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-sm font-bold mb-1 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover arrow indicator */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center">
                                        <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-10 text-center">
                        <p className="text-sm text-slate-400 mb-4">
                            ¿Listo para transformar tu negocio?
                        </p>
                        <a
                            href="#precios"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105"
                        >
                            Ver Planes y Precios
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Feature Modal */}
            <FeatureModal
                isOpen={isModalOpen}
                onClose={closeModal}
                feature={selectedFeature}
            />
        </>
    );
};

export default Features;
