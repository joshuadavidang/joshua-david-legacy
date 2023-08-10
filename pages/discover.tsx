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
  EMOJIS,
  INTERNSHIP_HEADER,
  INTRODUCTION,
  PROJECT_HEADER,
  STUDENT_ROLE,
} from '@/constants/index';
import { Skills } from '@/data/skills';
import ProjectPage from '@/components/Project';
import Section from '@/components/Section';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Introduction from '@/components/Introduction';
import CustomTab from '@/components/CustomTab';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Discover() {
  const router = useRouter();
  const navigatePage = () => {
    router.push('/contact');
  };

  return (
    <>
      <Head>
        <title>Discover - Joshua</title>
      </Head>
      <Box
        className='flex flex-col justify-center items-center w-screen py-16 md:py-36'
        id='landing'
      >
        <Box className='px-16 py-12 md:pt-2.5'>
          <Image src={LandingHero} alt='landing-hero' width='350' />
        </Box>

        <Box className='flex flex-col text-center lg:px-10 w-screen md:w-1/2 px-4'>
          <Box
            fontSize={{ base: '28px', md: '28px', lg: '28px' }}
            color='brand.purple'
          >
            <TypeAnimation
              sequence={[
                'Hey, I\'m Joshua!',
                2000,
                'Software Engineer',
                2000,
                'Sophomore @ SMU',
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
              speed={25}
            />
          </Box>

          <Text
            fontSize={{ base: '15px', md: '17px', lg: '18px' }}
            className='pt-5 pb-4 pl-5 pr-5'
            lineHeight={7}
          >
            {STUDENT_ROLE}
          </Text>

          <Box className='flex flex-row flex-wrap gap-2.5 justify-center pt-3'>
            {Skills.map(({ programmingLanguage, icon }) => (
              <span key={programmingLanguage}>
                <ButtonIcon
                  cursor='text'
                  hover={{}}
                  active={{}}
                  colorScheme='gray'
                  variant='solid'
                  size='sm'
                  leftIcon={React.createElement(icon)}
                >
                  {programmingLanguage}
                </ButtonIcon>
              </span>
            ))}
          </Box>
        </Box>
      </Box>

      <Section id='about'>
        <div className='flex flex-row gap-2.5'>
          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {INTRODUCTION}
          </h1>

          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {EMOJIS[0]}
          </h1>
        </div>
        <Introduction />
      </Section>

      <Section id='experience'>
        <div className='flex flex-row gap-3'>
          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {INTERNSHIP_HEADER}
          </h1>

          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {EMOJIS[1]}
          </h1>
        </div>
        <div className='hidden lg:block'>
          <CustomTab />
        </div>
        <div className='block lg:hidden'>
          <Internship />
        </div>
      </Section>

      <Section id='projects'>
        <div className='flex flex-row gap-2.5'>
          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {PROJECT_HEADER}
          </h1>

          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {EMOJIS[2]}
          </h1>
        </div>
        <ProjectPage />
      </Section>

      <Box
        id='contact'
        className='flex flex-col justify-center items-center w-screen h-80 gap-2'
      >
        <div className='flex flex-row gap-3'>
          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {CONTACT_HEADER}
          </h1>

          <h1 className='md:pt-0 pt-12 pb-9 md:text-3xl text-2xl'>
            {EMOJIS[3]}
          </h1>
        </div>
        <ButtonIcon
          size='xl'
          variant='solid'
          isDisabled={false}
          colorScheme='gray'
          onClick={() => navigatePage()}
          leftIcon={<AiOutlineArrowRight />}
        >
          Contact
        </ButtonIcon>
      </Box>
    </>
  );
}
