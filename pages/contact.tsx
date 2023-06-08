import React from 'react';
import { Box } from '@chakra-ui/react';
import Form from '@/components/Form';
import Text from '@/components/Text/Text';
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
          <Text
            fontSize={{ base: '28px', md: '30px', lg: '33px' }}
            color="brand.purple"
          >
            {CONTACT_HEADER}
          </Text>
          <Form />
        </div>
      </Box>
    </>
  );
}
