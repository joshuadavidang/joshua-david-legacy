import StillYoung from '../public/assets/images/Projects/StillYoung.svg';
import Sayocode from '../public/assets/images/Projects/Sayocode.png';
import BreadApp from '../public/assets/images/Projects/bread_app.png';
import macOS from '../public/assets/images/Projects/macOS.png';
import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface PastProjectsType {
  id: string;
  name: string;
  description: string;
  year: number;
  techStack: string[];
  icon: any;
  link: string;
}

export const PastProjects: PastProjectsType[] = [
  {
    id: randomUniqueId(),
    name: 'Project Bread',
    description:
      'Google Ignite, 4 weeks product sprint to develop a Flutter-based app that aims to streamline the process of food collection.',
    year: 2022,
    techStack: ['Flutter'],
    icon: BreadApp,
    link: 'https://github.com/joshuadavidang/google_ignite_bread',
  },
  {
    id: randomUniqueId(),
    name: 'Coding Portfolio',
    description:
      'Designed and developed a fully responsive personal portfolio that showcases past projects.',
    year: 2022,
    techStack: ['Next.js', 'Tailwind CSS', 'Chakra UI', 'Supabase'],
    icon: macOS,
    link: 'https://github.com/joshuadavidang/joshua-david',
  },
  {
    id: randomUniqueId(),
    name: 'Project Sayocode',
    description:
      'Web builder that automates the process of app creation through a seamless method of dragging and dropping components to a mobile screen of one\'s choice.',
    year: 2019,
    techStack: ['React.js', 'Ionic', 'Express.js', 'Tailwind CSS', 'MongoDB'],
    icon: Sayocode,
    link: 'https://github.com/joshuadavidang/',
  },
  {
    id: randomUniqueId(),
    name: 'Project Still Young',
    description:
      'Developed a one-stop platform for mothers to learn about confinement practices, features include receipes and quizes.',
    year: 2019,
    techStack: ['Ionic', 'TypeScript'],
    icon: StillYoung,
    link: 'https://www.straitstimes.com/singapore/app-with-updated-info-on-confinement-period-for-young-mums-launched',
  },
];
