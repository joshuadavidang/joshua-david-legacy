import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Lost from '@/images/Lost.svg';
import { GlowingButton } from '@/components/Button/GlowingButton';
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
        <Image src={Lost} alt="404-hero" className="md:w-1/4 w-9/12" />

        <div className="flex flex-col gap-5 justify-start items-center md:items-start md:justify-center md:pt-0 pt-12">
          <h1
            className={`${colorMode === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Oh No! Error 404
          </h1>
          <h3>Page Not Found</h3>

          {colorMode === 'dark' ? (
            <GlowingButton onClick={() => navigatePage()}>
              Back To Home
            </GlowingButton>
          ) : (
            <ButtonIcon
              size="xl"
              variant="solid"
              isDisabled={false}
              colorScheme="telegram"
              onClick={() => navigatePage()}
            >
              Back To Home
            </ButtonIcon>
          )}
        </div>
      </Box>
    </>
  );
}
