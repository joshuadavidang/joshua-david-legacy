import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import LandingHero from '@/images/LandingHero.svg';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Internship from '@/components/Internship/Internship';
import {
  CONTACT_HEADER,
  DESCRIPTION,
  INTERNSHIP_HEADER,
  INTRODUCTION,
  PROJECT_HEADER,
} from '@/constants/index';
import { Skills } from '@/data/skills';
import ProjectPage from '../components/Project';
import Section from '@/components/Section';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Introduction from '@/components/Introduction';
import CustomTab from '@/components/CustomTab';

export default function Discover() {
  const router = useRouter();
  const navigatePage = () => {
    router.push('/contact');
  };

  return (
    <>
      <Head>
        <title>Discover - Joshua David</title>
      </Head>
      <Box
        className="flex flex-col justify-center items-center w-screen py-16 md:py-36"
        id="landing"
      >
        <Box className="px-16 py-12 md:pt-2.5">
          <Image src={LandingHero} alt="landing-hero" width="350" />
        </Box>

        <Box className="flex flex-col text-center lg:px-10 w-screen md:w-1/2 px-4">
          <Box
            fontSize={{ base: '28px', md: '30px', lg: '30px' }}
            color="brand.purple"
          >
            <TypeAnimation
              sequence={[
                'Hey! I\'m Joshua!',
                3000,
                'Aspiring Software Engineer',
                1000,
                'Web/App Developer',
                1000,
                'Student.',
                3000,
              ]}
              cursor={true}
              repeat={Infinity}
              speed={25}
            />
          </Box>

          <Text
            fontSize={{ base: '15px', md: '17px', lg: '18px' }}
            className="pt-5 pb-8 pl-5 pr-5"
            lineHeight={7}
          >
            {DESCRIPTION}
          </Text>

          <Box className="flex flex-row flex-wrap gap-2.5 justify-center">
            {Skills.map(({ programmingLanguage, icon }) => (
              <span key={programmingLanguage}>
                <ButtonIcon
                  cursor="text"
                  hover={{}}
                  active={{}}
                  colorScheme="gray"
                  variant="solid"
                  size="sm"
                  leftIcon={React.createElement(icon)}
                >
                  {programmingLanguage}
                </ButtonIcon>
              </span>
            ))}
          </Box>
        </Box>
      </Box>

      <Section id="about">
        <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
          {INTRODUCTION}
        </h1>
        <Introduction />
      </Section>

      <Section id="experience">
        <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
          {INTERNSHIP_HEADER}
        </h1>
        <div className="hidden lg:block">
          <CustomTab />
        </div>
        <div className="block lg:hidden">
          <Internship />
        </div>
      </Section>

      <Section id="projects">
        <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
          {PROJECT_HEADER}
        </h1>
        <ProjectPage />
      </Section>

      <Box
        id="contact"
        className="flex flex-col justify-center items-center w-screen h-80 gap-2"
      >
        <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
          {CONTACT_HEADER}
        </h1>

        <ButtonIcon
          size="xl"
          variant="solid"
          isDisabled={false}
          colorScheme="gray"
          onClick={() => navigatePage()}
        >
          Contact
        </ButtonIcon>
      </Box>
    </>
  );
}
