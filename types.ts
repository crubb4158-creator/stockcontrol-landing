export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string; // e.g., "Gs. / mes" or "Gs. / único"
  features: PlanFeature[];
  isRecommended?: boolean;
  buttonText: string;
  buttonVariant: 'outline' | 'primary' | 'secondary';
}