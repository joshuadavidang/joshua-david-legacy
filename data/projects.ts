import Client01 from '@/images/Projects/Client01.png';
import StillYoung from '@/images/Projects/StillYoung.svg';
import Sayocode from '@/images/Projects/Sayocode.png';
import BreadApp from '@/images/Projects/bread_app.png';
import macOS from '@/images/Projects/macOS.png';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiTypescript,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiSupabase,
  SiChakraui,
  SiIonic,
} from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface PastProjectsType {
  id: string;
  name: string;
  description: string;
  year: number;
  techStack: any[];
  icon: any;
  link: string;
}

export const PastProjects: PastProjectsType[] = [
  {
    id: randomUniqueId(),
    name: 'Client\'s Project',
    description:
      'Fully responsive personal website for clients.',
    year: 2023,
    techStack: [TbBrandNextjs, SiTypescript, SiTailwindcss, SiChakraui],
    icon: Client01,
    link: 'https://celineongjw.com',
  },
  {
    id: randomUniqueId(),
    name: 'Project Bread',
    description:
      'Mobile App to streamline process of food collection.',
    year: 2022,
    techStack: [SiFlutter],
    icon: BreadApp,
    link: 'https://github.com/joshuadavidang/google_ignite_bread',
  },
  {
    id: randomUniqueId(),
    name: 'Coding Portfolio',
    description:
      'Fully responsive personal portfolio that showcases past projects.',
    year: 2022,
    techStack: [
      TbBrandNextjs,
      SiTypescript,
      SiTailwindcss,
      SiChakraui,
      SiSupabase,
    ],
    icon: macOS,
    link: 'https://github.com/joshuadavidang/joshua-david',
  },
  {
    id: randomUniqueId(),
    name: 'Project Sayocode',
    description:
      'Web builder that automates the process of app creation.',
    year: 2019,
    techStack: [FaReact, SiIonic, SiTailwindcss, FaNodeJs, SiMongodb],
    icon: Sayocode,
    link: 'https://github.com/joshuadavidang/',
  },
  {
    id: randomUniqueId(),
    name: 'Project Still Young',
    description:
      'One-stop platform for mothers to learn about confinement practices.',
    year: 2019,
    techStack: [SiIonic, SiTypescript],
    icon: StillYoung,
    link: 'https://www.straitstimes.com/singapore/app-with-updated-info-on-confinement-period-for-young-mums-launched',
  },
];
