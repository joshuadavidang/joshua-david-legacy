import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import LandingHero from '@/images/LandingBanner.svg';
import QR from '@/images/qr.png';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import Text from '@/components/Text/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, useColorMode } from '@chakra-ui/react';
import Internship from '@/components/Internship/Internship';
import {
  DESCRIPTION,
  HIRING_HEADER,
  INTERNSHIP_HEADER,
  PROJECT_HEADER,
  RESUME_HEADER,
} from '@/constants/index';
import { Skills } from '@/data/skills';
import ProjectPage from '../components/Project';
import Section from '@/components/Section';
import Head from 'next/head';
import { GlowingButton } from '@/components/Button/GlowingButton';
import { useRouter } from 'next/router';

export default function Discover() {
  const { colorMode } = useColorMode();
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
        id="about"
      >
        <Box className="px-16 py-12 md:pt-2.5">
          <Image src={LandingHero} alt="landing-hero" width="350" />
        </Box>

        <Box className="flex flex-col text-center lg:px-10 w-screen md:w-1/2 px-4">
          <Box
            fontSize={{ base: '28px', md: '33px', lg: '35px' }}
            color="brand.purple"
          >
            <TypeAnimation
              sequence={[
                'Hey! I\'m Joshua,',
                1000,
                'An aspiring Software Engineer,',
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
            fontSize={{ base: '16px', md: '18px', lg: '19px' }}
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

      <Section id="experience">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, ease: 'easeOut' }}
        >
          <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
            {INTERNSHIP_HEADER}
          </h1>
        </motion.div>

        <Internship />
      </Section>

      <Section id="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, ease: 'easeOut' }}
        >
          <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
            {PROJECT_HEADER}
          </h1>
          <ProjectPage />
        </motion.div>
      </Section>

      <Section id={null}>
        <a download href="/Joshua_David.pdf" className="cursor-pointer">
          <Box className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, ease: 'easeOut' }}
            >
              <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
                {RESUME_HEADER}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, ease: 'easeOut' }}
            >
              <Image src={QR} alt="coding_II" width="200" />{' '}
            </motion.div>
          </Box>
        </a>
      </Section>

      <Box
        id="contact"
        className="flex flex-col justify-center items-center w-screen h-80 gap-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: 'easeOut' }}
        >
          <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl">
            {HIRING_HEADER}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, ease: 'easeOut' }}
        >
          {colorMode === 'dark' ? (
            <GlowingButton onClick={() => navigatePage()}>
              Hire Me
            </GlowingButton>
          ) : (
            <ButtonIcon
              size="xl"
              variant="solid"
              isDisabled={false}
              colorScheme="telegram"
              onClick={() => navigatePage()}
            >
              Hire Me
            </ButtonIcon>
          )}
        </motion.div>
      </Box>
    </>
  );
}
