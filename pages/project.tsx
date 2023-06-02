import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';
import CardHeader from '@/components/Card/CardHeader';
import { PastProjects } from '@/data/projects';
import CardFooter from '@/components/Card/CardFooter';
import { Icon } from '@/components/Button/Icon';

export default function ProjectPage() {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <Link href={link} target="_blank" key={index}>
            <Card
              borderRadius="12px"
              maxW="xs"
              minH="sm"
              minW="xs"
              align="center"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300
              "
            >
              <span className="pt-7">
                <Image src={icon} alt="image" width="100" />
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
                      icon={React.createElement(tech)}
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
    </div>
  );
}