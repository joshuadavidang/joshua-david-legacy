import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface PricingPlanDataType {
  id: string;
  tier: string;
  currency?: string;
  price: any;
  features: string[];
}

export const PricingPlanData: PricingPlanDataType[] = [
  {
    id: randomUniqueId(),
    tier: 'Starter',
    currency: 'SGD',
    price: '$2,000',
    features: [
      'One-time Purchase',
      'Custom Domain',
      'Unlimited Revisions',
      'Priority Support',
      'Single Page Application',
      'Basic Animations',
    ],
  },
  {
    id: randomUniqueId(),
    tier: 'Pro',
    currency: 'SGD',
    price: '$3,000',
    features: [
      'One-time Purchase',
      'Custom Domain',
      'Unlimited Revisions',
      'Priority Support',
      'Multiple Page Application',
      'Custom Animations',
    ],
  },
  {
    id: randomUniqueId(),
    tier: 'Enterprise',
    price: 'Custom',
    features: [
      'One-time Purchase',
      'Custom Domain',
      'Unlimited Revisions',
      'Priority Support',
      'Multiple Page Application',
      'Advanced Animations',
      'Contact Form',
      'Back-end Integration',
      'Analytics',
    ],
  },
];
