import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Lost from '@/images/Lost.svg';
import Link from 'next/link';
import { ButtonIcon } from '@/components/Button/ButtonIcon';

export default function Custom404() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>404 - Joshua David</title>
      </Head>

      <div className="grid grid-cols-1 gap-4 w-screen h-screen md:grid-cols-3">
        <div className="flex justify-center items-end md:col-span-2 md:items-center">
          <Image src={Lost} alt="404-hero" className="md:w-1/2 w-10/12" />
        </div>

        <div className="flex flex-col gap-3 justify-start items-center md:items-start md:justify-center pt-12">
          <h1
            className={`${colorMode === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Oh No! Error 404
          </h1>
          <h3>Page Not Found</h3>
          <Link href="/discover" className="pt-6">
            <ButtonIcon
              size="md"
              variant="solid"
              isDisabled={false}
              colorScheme={colorMode == 'dark' ? 'gray' : 'telegram'}
            >
              Back To Home
            </ButtonIcon>
          </Link>
        </div>
      </div>
    </>
  );
}
