import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface PricingPlanDataType {
  id: string;
  tier: string;
  currency?: string;
  price: any;
  features: string[];
  link: string;
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
      'One Page Website',
      'Basic Animations',
      'Responsive Design',
      'Custom Domain',
      'Unlimited Revisions',
      'Optimised for Search Engines',
      'Priority Support',
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
      'Multiple Pages Website',
      'Custom Animations',
      'Responsive Design',
      'Custom Domain',
      'Unlimited Revisions',
      'Optimised for Search Engines',
      'Priority Support',
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
      'Multiple Pages Website',
      'Advanced Animations',
      'Responsive Design',
      'Custom Domain',
      'Unlimited Revisions',
      'Optimised for Search Engines',
      'Priority Support',
      'Contact Form',
      'Back-end Integration',
    ],
    link: 'https://joshuadavid.dev/contact',
    callToAction: 'Contact Me',
  },
];
