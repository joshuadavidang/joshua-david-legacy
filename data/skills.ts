import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript, SiMysql } from 'react-icons/si';
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaPython,
  FaVuejs,
  FaPhp,
} from 'react-icons/fa';
import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface SkillsType {
  id: string;
  programmingLanguage: string;
  icon: any;
}

export const Skills: SkillsType[] = [
  {
    id: randomUniqueId(),
    programmingLanguage: 'Python',
    icon: FaPython,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'JavaScript',
    icon: FaJsSquare,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'React',
    icon: FaReact,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'Next',
    icon: TbBrandNextjs,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'Vue',
    icon: FaVuejs,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'Node',
    icon: FaNode,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'PHP',
    icon: FaPhp,
  },
  {
    id: randomUniqueId(),
    programmingLanguage: 'SQL',
    icon: SiMysql,
  },
];
