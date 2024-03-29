import React from 'react';
import { Box, Center, Link, useColorMode } from '@chakra-ui/react';
import Form from '@/components/Form';
import { CONTACT_HEADER, EMOJIS } from '@/constants/index';
import Head from 'next/head';
import Joshua from '@/images/Joshua.png';
import Image from 'next/image';
import { Divider } from '@chakra-ui/react';
import { Button } from '@/components/Button/Button';
import { hoverDecorationNone } from '@/helpers/hoverDecorationNone';

export default function Contact() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Contact - Joshua</title>
      </Head>
      <Box className="flex lg:flex-row flex-col gap-6 lg:gap-36 justify-center items-center lg:h-screen h-fit w-screen text-center py-36">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/joshuadavidang/"
            isExternal
            color="brand.purple"
            {...hoverDecorationNone()}
          >
            <Image
              src={Joshua}
              alt="joshua"
              className="rounded-lg"
              width="250"
            />
          </Link>

          <div className="flex flex-row gap-3">
            <h1 className="pt-3 text-2xl">{CONTACT_HEADER}</h1>
            <h1 className="pt-3 text-2xl"> {EMOJIS[3]}</h1>
          </div>

          <a href="mailto:joshuadavidang@outlook.sg">
            <Button size="md" colorScheme="gray" variant="ghost">
              joshuadavidang@outlook.sg
            </Button>
          </a>
        </div>

        <div className="hidden lg:block">
          <Center height="500px">
            <Divider
              orientation="vertical"
              borderColor={`${colorMode === 'dark' ? 'white' : 'black'}`}
            />
          </Center>
        </div>

        <div className="md:w-4/12 w-10/12">
          <Form />
        </div>
      </Box>
    </>
  );
}
