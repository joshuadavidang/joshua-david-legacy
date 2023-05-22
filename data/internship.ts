export interface InternshipExperienceType {
  id: number,
  company: string,
  date: string,
  link: string,
  tasks: string[]
}

export const InternshipExperience: InternshipExperienceType[] = [
  {
    id: 2,
    company: 'Pigeonhole Live (PigeonLab)',
    date: 'Jan 2023 - Mar 2023',
    link: 'https://pigeonholelive.com/',
    tasks: [
      'Developed responsive webpages, ensuring a seamless user experience across different devices and screen sizes.',
      'Worked closely in cross-functional teams to understand requirements and develop features that align with the project goals.',
      'Developed comprehensive unit test cases using Jest to ensure code quality and identify potential issues early in the development cycle.',
      'Technologies: Vue.js, Jest, JavaScript, Docker, GitLab',
    ],
  },
  {
    id: 3,
    company: 'Blockchain Solutions (BSG)',
    date: 'May 2022 - Jul 2022',
    link: 'https://blockchainsg.com/',
    tasks: [
      'Spearheaded front-end development of a NFT marketplace.',
      'Developed high-quality, production-ready code and actively maintained a clean and organised codebase.',
      'Built reusable components and customised CSS libraries to enhance the efficiency and scalability of the platform.',
      'Collaborated with UI/UX designer to ensure feasibility of technical designs.',
      'Technologies: React.js, Next.js, Web3.js, Tailwind CSS, Firebase',
    ],
  },
];
