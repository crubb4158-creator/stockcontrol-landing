import { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'emprendedor',
    name: 'Emprendedor',
    description: 'Ideal para pequeños negocios que inician.',
    price: '150.000',
    period: 'Gs. / semana',
    features: [
      { text: 'Hasta 2 Usuarios', included: true },
      { text: 'POS + Caja + Inventario', included: true },
      { text: 'Instalación Gratuita', included: true, isLimitedTime: true },
      { text: 'Soporte Prioritario en Sistema', included: true },
      { text: 'Multi-Moneda (Gs, USD, BRL)', included: true },
    ],
    pix: {
      enabled: true,
      commission: '10%',
      minAmount: '1.000 R$',
      description: 'Envía y recibe Reales desde/hacia Paraguay'
    },
    buttonText: 'Comenzar Ahora',
    buttonVariant: 'outline',
  },
  {
    id: 'lifetime',
    name: 'LIFETIME',
    description: 'Pago único. Sin cuotas. Para siempre tuyo.',
    price: '7.250.000',
    period: 'Gs. / único',
    isRecommended: true,
    features: [
      { text: 'Hasta 10 Usuarios Simultáneos', included: true },
      { text: 'Instalación Presencial o Virtual', included: true },
      { text: 'Acceso de Por Vida', included: true },
      { text: 'Actualizaciones Gratuitas Siempre', included: true },
      { text: 'Facturación Electrónica (Próximamente)', included: true },
      { text: 'Soporte VIP Prioritario', included: true },
    ],
    pix: {
      enabled: true,
      commission: '2%',
      minAmount: '5.000 R$',
      description: 'Comisión exclusiva para clientes LIFETIME'
    },
    buttonText: 'Obtener Acceso Total',
    buttonVariant: 'primary',
  },
  {
    id: 'pro',
    name: 'Negocio Pro',
    description: 'Para negocios en expansión con más empleados.',
    price: '250.000',
    period: 'Gs. / semana',
    features: [
      { text: 'Hasta 4 Usuarios', included: true },
      { text: 'Todo lo del Plan Emprendedor', included: true },
      { text: 'Instalación Gratuita', included: true, isLimitedTime: true },
      { text: 'Reportes Avanzados', included: true },
      { text: 'Gestión de RRHH', included: true },
    ],
    pix: {
      enabled: true,
      commission: '8%',
      minAmount: '1.000 R$',
      description: 'Mejor comisión para negocios en crecimiento'
    },
    buttonText: 'Elegir Pro',
    buttonVariant: 'secondary',
  },
  {
    id: 'creditos',
    name: 'Créditos VIP',
    description: 'Para distribuidores y emprendedores que quieren ganar dinero.',
    price: '1.800.000',
    period: 'Gs. / 3 créditos',
    features: [
      { text: '3 Créditos para Crear Cuentas', included: true },
      { text: 'Cuentas Empresariales Completas', included: true },
      { text: 'Ideal para Revendedores', included: true },
      { text: 'Gana con Cada Cliente', included: true },
      { text: 'Soporte para tu Red', included: true },
    ],
    pix: {
      enabled: true,
      commission: '2.3%',
      minAmount: '1.000 R$',
      description: 'Tus clientes pagan solo 2.3% por PIX'
    },
    buttonText: 'Ser Distribuidor',
    buttonVariant: 'outline',
  },
];