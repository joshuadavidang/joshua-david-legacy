export interface NavLinkDataType {
  id: number,
  link: string,
  name: string
}

export const NavLinkData: NavLinkDataType[] = [
  {
    id: 1,
    link: '/home',
    name: 'about',

  },
  {
    id: 2,
    link: '/project',
    name: 'projects',
  },
  {
    id: 3,
    link: '/contact',
    name: 'contact',
  },
];
