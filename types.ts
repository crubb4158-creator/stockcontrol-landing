export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PixInfo {
  enabled: boolean;
  commission: string;
  minAmount: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  pix?: PixInfo;
  isRecommended?: boolean;
  buttonText: string;
  buttonVariant: 'outline' | 'primary' | 'secondary';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceFrom: string;
  priceTo?: string;
  timeEstimate: string;
  features: string[];
  includes: string[];
  icon: string;
  isPopular?: boolean;
}