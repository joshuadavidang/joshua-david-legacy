import React from 'react';
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeIcon from '@/components/DarkMode/DarkModeIcon';

const SpecialNavBar = () => {
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');

  return (
    <Box
      className="flex flex-row justify-end w-screen items-center pr-8 md:pr-24 md:p-3"
      bg={backgroundColor}
    >
      <Box className="flex flex-row justify-center items-center gap-2 md:pt-3 py-6">
        <DarkModeIcon />

        <Link href="/discover">
          <div
            className={`p-2 rounded cursor-pointer ${
              colorMode === 'dark'
                ? 'hover:bg-gray hover:text-white'
                : 'hover:bg-white hover:text-black'
            }`}
          >
            <p>Discover</p>
          </div>
        </Link>
      </Box>
    </Box>
  );
};

export default SpecialNavBar;
