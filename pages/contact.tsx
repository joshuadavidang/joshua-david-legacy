import React from 'react';
import { Box } from '@chakra-ui/react';
import Form from '@/components/Form';
import { CONTACT_HEADER } from '@/constants/index';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Joshua David</title>
      </Head>
      <Box className="flex justify-center items-center h-screen w-screen text-center">
        <div className="md:w-4/12 w-10/12">
          <h1 className="md:pt-0 pt-12 md:text-3xl text-2xl">
            {CONTACT_HEADER}
          </h1>
          <Form />
        </div>
      </Box>
    </>
  );
}
