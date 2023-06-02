import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface NavLinkDataType {
  id: string;
  link: string;
  name: string;
}

export const NavLinkData: NavLinkDataType[] = [
  {
    id: randomUniqueId(),
    link: 'about',
    name: 'about',
  },
  {
    id: randomUniqueId(),
    link: 'experience',
    name: 'experience',
  },
  {
    id: randomUniqueId(),
    link: 'projects',
    name: 'projects',
  },
  {
    id: randomUniqueId(),
    link: 'contact',
    name: 'contact',
  },
];
