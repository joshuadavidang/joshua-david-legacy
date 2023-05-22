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

export interface SkillsType {
  programmingLanguage: string;
  icon: any;
}

export const Skills: SkillsType[] = [
  {
    programmingLanguage: 'Python',
    icon: FaPython,
  },
  {
    programmingLanguage: 'TypeScript',
    icon: SiTypescript,
  },
  {
    programmingLanguage: 'JavaScript',
    icon: FaJsSquare,
  },
  {
    programmingLanguage: 'React',
    icon: FaReact,
  },
  {
    programmingLanguage: 'Next',
    icon: TbBrandNextjs,
  },
  {
    programmingLanguage: 'Vue',
    icon: FaVuejs,
  },
  {
    programmingLanguage: 'Node',
    icon: FaNode,
  },
  {
    programmingLanguage: 'PHP',
    icon: FaPhp,
  },
  {
    programmingLanguage: 'SQL',
    icon: SiMysql,
  },
];
