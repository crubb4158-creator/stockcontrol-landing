import { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para pequeños emprendedores que inician.',
    price: '150.000',
    period: 'Gs. / mes',
    features: [
      { text: 'Control de Stock básico', included: true },
      { text: '1 Usuario operativo', included: true },
      { text: 'Soporte por Email 24h', included: true },
      { text: 'Facturación Legal', included: false },
    ],
    buttonText: 'Comenzar Prueba',
    buttonVariant: 'outline',
  },
  {
    id: 'lifetime',
    name: 'LIFETIME',
    description: 'La mejor inversión. Acceso de por vida sin cuotas mensuales.',
    price: '2.500.000',
    period: 'Gs. / único',
    isRecommended: true,
    features: [
      { text: 'Acceso de por vida', included: true },
      { text: 'Usuarios Ilimitados', included: true },
      { text: 'Soporte VIP Prioritario (WhatsApp)', included: true },
      { text: 'Actualizaciones Gratuitas Siempre', included: true },
      { text: 'Módulo de Facturación Electrónica', included: true },
    ],
    buttonText: 'Obtener Acceso Total',
    buttonVariant: 'primary',
  },
  {
    id: 'pro',
    name: 'Profesional',
    description: 'Para negocios en expansión que necesitan más control.',
    price: '250.000',
    period: 'Gs. / mes',
    features: [
      { text: 'Todo lo del plan Básico', included: true },
      { text: 'Hasta 3 Usuarios', included: true },
      { text: 'Facturación Legal Impresa', included: true },
      { text: 'Reportes Avanzados de Venta', included: true },
    ],
    buttonText: 'Elegir Profesional',
    buttonVariant: 'secondary',
  },
];