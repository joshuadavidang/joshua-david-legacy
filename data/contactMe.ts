import { FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';

export interface ContactMeType {
  link: string;
  icon: any;
  title: string;
  isPDF: boolean;
}

export const ContactMe: ContactMeType[] = [
  {
    link: 'https://github.com/joshuadavidang',
    icon: FaGithub,
    title: 'GitHub',
    isPDF: false,
  },
  {
    link: 'https://linkedin.com/in/joshuadavidang/',
    icon: FaLinkedin,
    title: 'LinkedIn',
    isPDF: false,
  },
  {
    link: '/Joshua_David.pdf',
    icon: FaFile,
    title: 'Resume',
    isPDF: true,
  },
];
