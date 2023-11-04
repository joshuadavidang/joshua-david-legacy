import Client01 from '@/images/Projects/Client01.png';
import StillYoung from '@/images/Projects/StillYoung.svg';
import Sayocode from '@/images/Projects/Sayocode.png';
import BreadApp from '@/images/Projects/bread_app.png';
import macOS from '@/images/Projects/macOS.png';
import Docusaurus from '@/images/Projects/Docusaurus.png';
import Sayless from '@/images/Projects/SaylessEcosystem.png';
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
    name: 'Sayless',
    description:
      'A gamified web app connecting people to share excess food. Upload receipts to add items to inventory or complete quests to earn vouchers.',
    year: 2023,
    techStack: [
      'Vue.js',
      'Express.js',
      'MongoDB',
      'Express.js',
      'Firebase Authentication',
      'Rest APIs',
    ],
    icon: Sayless,
    link: 'https://github.com/SMU-IS/SayLess',
  },
  {
    id: randomUniqueId(),
    name: 'DocusauNotes',
    description:
      "Documentation of what I've learnt over the years. Built with Docusaurus, a project for building and maintaining open source websites.",
    year: 2023,
    techStack: ['Docusaurus'],
    icon: Docusaurus,
    link: 'https://notes.joshuadavid.dev',
  },
  {
    id: randomUniqueId(),
    name: 'Project Freelance',
    description:
      'Developed a custom personal brand website for clients using the latest web technologies, while adhering to industry best practices.',
    year: 2023,
    techStack: [TbBrandNextjs, SiTypescript, SiTailwindcss, SiChakraui],
    icon: Client01,
    link: 'https://celineongjw.com',
  },
  {
    id: randomUniqueId(),
    name: 'Coding Portfolio',
    description:
      'Designed and developed a responsive coding portfolio, built on top of Next.js & Tailwind CSS, deployed to Vercel.',
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
    description: 'Web builder that automates the process of app creation.',
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
  {
    id: randomUniqueId(),
    name: 'Project Bread',
    description: 'Mobile App to streamline process of food collection.',
    year: 2022,
    techStack: [SiFlutter],
    icon: BreadApp,
    link: 'https://github.com/joshuadavidang/google_ignite_bread',
  },
];
