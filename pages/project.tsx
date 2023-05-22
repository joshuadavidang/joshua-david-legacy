import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';
import CardHeader from '@/components/Card/CardHeader';
import { PastProjects } from '@/data/projects';
import CardFooter from '@/components/Card/CardFooter';
import { Icon } from '@/components/Button/Icon';
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

const ProjectPage = () => {
  const displayIcon = (tech: any) => {
    switch (tech) {
    case 'Flutter':
      return <SiFlutter />;

    case 'Next.js':
      return <TbBrandNextjs />;

    case 'TypeScript':
      return <SiTypescript />;

    case 'Tailwind CSS':
      return <SiTailwindcss />;

    case 'Chakra UI':
      return <SiChakraui />;

    case 'Supabase':
      return <SiSupabase />;

    case 'React.js':
      return <FaReact />;

    case 'MongoDB':
      return <SiMongodb />;

    case 'Ionic':
      return <SiIonic />;

    case 'Express.js':
      return <FaNodeJs />;
    }
  };

  return (
    <Box className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16 overflow-auto">
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <Link href={link} target="_blank" key={index}>
            <Card
              borderRadius="12px"
              maxW="xs"
              minH="md"
              minW="xs"
              align="center"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300
              "
            >
              <span className="pt-7">
                <Image src={icon} alt="image" width="150" />
              </span>

              <CardHeader fontSize="2xl">{name}</CardHeader>

              <CardBody
                paddingTop="0"
                fontSize={{ base: '14px', md: '15px', lg: '14px' }}
              >
                {description}
              </CardBody>

              <CardFooter>
                <Box display="flex" flexDirection="row" gap={2}>
                  {techStack.map((tech, index) => (
                    <Icon
                      colorScheme="gray"
                      icon={displayIcon(tech)}
                      variant="solid"
                      size="md"
                      label="button"
                      key={index}
                    />
                  ))}
                </Box>
              </CardFooter>
            </Card>
          </Link>
        )
      )}
    </Box>
  );
};

export default ProjectPage;
