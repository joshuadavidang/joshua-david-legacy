import { randomUniqueId } from '@/helpers/randomUniqueId';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';

export interface ContactMeType {
  id: string;
  link: string;
  icon: any;
  title: string;
  isPDF: boolean;
}

export const ContactMe: ContactMeType[] = [
  {
    id: randomUniqueId(),
    link: 'https://notes.joshuadavid.dev/',
    icon: CgNotes,
    title: 'LeetCode',
    isPDF: false,
  },
  {
    id: randomUniqueId(),
    link: 'https://github.com/joshuadavidang',
    icon: FaGithub,
    title: 'GitHub',
    isPDF: false,
  },
  {
    id: randomUniqueId(),
    link: 'https://linkedin.com/in/joshuadavidang/',
    icon: FaLinkedin,
    title: 'LinkedIn',
    isPDF: false,
  },
  {
    id: randomUniqueId(),
    link: '/Joshua_David.pdf',
    icon: FaFilePdf,
    title: 'Resume',
    isPDF: true,
  },
];
