import React from 'react';
import { Box, Center, useColorMode } from '@chakra-ui/react';
import Form from '@/components/Form';
import { CONTACT_HEADER } from '@/constants/index';
import Head from 'next/head';
import Joshua from '@/images/Joshua.png';
import Image from 'next/image';
import { Divider } from '@chakra-ui/react';

export default function Contact() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Contact - Joshua David</title>
      </Head>
      <Box className="flex md:flex-row flex-col gap-6 md:gap-36 justify-center items-center md:h-screen h-fit w-screen text-center py-36">
        <div className="flex flex-col items-center gap-3">
          <Image src={Joshua} alt="joshua" className="rounded-lg" width="250" />
          <h1 className="pt-3 text-2xl">{CONTACT_HEADER}</h1>
          <a href="mailto:joshuadavidang@outlook.sg">
            <p
              className={`border-b w-fit ${
                colorMode === 'dark' ? 'border-white' : 'border-black'
              }`}
            >
              joshuadavidang@outlook.sg
            </p>
          </a>
        </div>

        <div className="hidden md:block">
          <Center height="500px">
            <Divider
              orientation="vertical"
              borderColor={`${colorMode === 'dark' ? 'white' : 'black'}`}
            />
          </Center>
        </div>

        <div className="md:w-4/12 w-9/12">
          <Form />
        </div>
      </Box>
    </>
  );
}
