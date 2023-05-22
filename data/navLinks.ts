import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface NavLinkDataType {
  id: string,
  link: string,
  name: string
}

export const NavLinkData: NavLinkDataType[] = [
  {
    id: randomUniqueId(),
    link: '/home',
    name: 'about',
  },
  {
    id: randomUniqueId(),
    link: '/project',
    name: 'projects',
  },
  {
    id: randomUniqueId(),
    link: '/contact',
    name: 'contact',
  },
];
