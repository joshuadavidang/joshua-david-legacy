import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Lost from '@/images/Lost.svg';
import { useRouter } from 'next/router';
import { ButtonIcon } from '@/components/Button/ButtonIcon';

export default function Custom404() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const navigatePage = () => {
    router.push('/discover');
  };

  return (
    <>
      <Head>
        <title>404 - Joshua David</title>
      </Head>

      <Box className="flex flex-col md:flex-row justify-center items-center md:gap-32 w-screen h-screen">
        <Image src={Lost} alt="404-hero" className="md:w-1/4 w-8/12" />

        <div className="flex flex-col gap-2 justify-start items-center md:items-start md:justify-center md:pt-0 pt-12">
          <h2
            className={`${colorMode === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Oh No! Error 404
          </h2>
          <h3 className="pb-6">Page Not Found</h3>

          <ButtonIcon
            size="xl"
            variant="solid"
            isDisabled={false}
            colorScheme="gray"
            onClick={() => navigatePage()}
          >
            Back To Home
          </ButtonIcon>
        </div>
      </Box>
    </>
  );
}
