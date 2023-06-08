import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface PricingPlanDataType {
  id: string;
  tier: string;
  currency?: string;
  price: any;
  features: string[];
  link: string,
  callToAction: string;
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
      'Single Page Application',
      'Basic Animations',
      'Deliver in 7 Working Days',
    ],
    link: 'https://celineongjw.com',
    callToAction: 'View Sample Project',
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
      'Deliver in 3 Working Days',
    ],
    link: 'https://joshuadavid.dev/contact',
    callToAction: 'Get Started',
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
    link: 'https://joshuadavid.dev/contact',
    callToAction: 'Contact Me',
  },
];
