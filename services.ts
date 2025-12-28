import { Service } from './types';

export const SERVICES: Service[] = [
    {
        id: 'landing',
        name: 'Landing Page',
        description: 'Página única para captar clientes. Ideal para promociones y lanzamientos.',
        priceFrom: '800.000',
        priceTo: '1.200.000',
        timeEstimate: '3-5 días',
        icon: 'layout',
        features: [
            '1 página responsive',
            'Diseño moderno',
            'Hosting 1 año incluido',
            'Dominio .com incluido'
        ],
        includes: [
            'Diseño personalizado según tu marca',
            'Optimización para móviles',
            'Formulario de contacto',
            'Integración con WhatsApp',
            'Certificado SSL (https)',
            'Capacitación básica'
        ]
    },
    {
        id: 'informativo',
        name: 'Sitio Informativo',
        description: 'Sitio web completo para tu negocio con múltiples secciones.',
        priceFrom: '1.500.000',
        priceTo: '2.500.000',
        timeEstimate: '7-10 días',
        icon: 'globe',
        features: [
            'Hasta 5 secciones',
            'SEO básico incluido',
            'Panel administrador',
            'Blog opcional'
        ],
        includes: [
            'Diseño exclusivo multi-página',
            'Sección de servicios/productos',
            'Página de contacto con mapa',
            'Galería de imágenes',
            'Optimización SEO básica',
            'Hosting y dominio 1 año',
            'Capacitación completa'
        ],
        isPopular: true
    },
    {
        id: 'ecommerce',
        name: 'E-commerce Básico',
        description: 'Tienda online completa para vender tus productos.',
        priceFrom: '3.500.000',
        priceTo: '5.000.000',
        timeEstimate: '15-20 días',
        icon: 'shopping-cart',
        features: [
            'Catálogo de productos',
            'Carrito de compras',
            'Pasarelas de pago',
            'Panel de administración'
        ],
        includes: [
            'Catálogo ilimitado de productos',
            'Carrito de compras inteligente',
            'Integración con pagos (tarjeta, transferencia)',
            'Panel admin para gestionar pedidos',
            'Sistema de inventario básico',
            'Notificaciones por email',
            'Hosting optimizado para e-commerce',
            'Capacitación completa'
        ]
    },
    {
        id: 'app-movil',
        name: 'App Móvil',
        description: 'Aplicación para Android e iOS con tu marca.',
        priceFrom: '5.000.000',
        priceTo: '8.000.000',
        timeEstimate: '30-45 días',
        icon: 'smartphone',
        features: [
            'Android e iOS',
            'Diseño UI/UX moderno',
            'Notificaciones push',
            'Publicación en stores'
        ],
        includes: [
            'Desarrollo Android e iOS',
            'Diseño de interfaz personalizado',
            'Sistema de notificaciones',
            'Integración con APIs',
            'Panel de administración web',
            'Publicación en Play Store y App Store',
            'Soporte post-lanzamiento 30 días'
        ]
    },
    {
        id: 'personalizado',
        name: 'Sistema Personalizado',
        description: 'Desarrollo a medida según tus requerimientos específicos.',
        priceFrom: '8.000.000',
        timeEstimate: 'A definir',
        icon: 'code',
        features: [
            '100% a medida',
            'Tecnología moderna',
            'Escalable',
            'Soporte dedicado'
        ],
        includes: [
            'Análisis de requerimientos',
            'Diseño de arquitectura',
            'Desarrollo backend y frontend',
            'Base de datos optimizada',
            'APIs e integraciones',
            'Testing completo',
            'Documentación técnica',
            'Capacitación del equipo',
            'Soporte y mantenimiento'
        ]
    }
];
