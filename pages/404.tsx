import React from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/discover');
  };
  return (
    <Box
      className="flex flex-col justify-center items-center w-screen h-screen"
      onClick={handleClick}
    >
      Go Home
    </Box>
  );
}