import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeIcon from '@/components/DarkMode/DarkModeIcon';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import React from 'react';
import { ContactMe } from '@/data/contactMe';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button/Button';

const SpecialNavBar = () => {
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.lightsOut');
  const router = useRouter();
  const handleRoute = () => {
    router.push('/discover');
  };

  return (
    <Box
      className="flex flex-row justify-between w-screen items-center px-10 pt-6"
      bg={backgroundColor}
    >
      <div className="flex flex-row gap-2.5">
        {ContactMe.map(({ link, icon, title, isPDF }) => {
          return isPDF ? (
            <span key={title}>
              <a download href={link} className="md:block hidden">
                <ButtonIcon
                  size="sm"
                  colorScheme="gray"
                  variant="solid"
                  leftIcon={React.createElement(icon)}
                >
                  {title}
                </ButtonIcon>
              </a>
            </span>
          ) : (
            <span key={title}>
              <Link href={link} target="_blank" className="md:block hidden">
                <ButtonIcon
                  size="sm"
                  colorScheme="gray"
                  variant="solid"
                  leftIcon={React.createElement(icon)}
                >
                  {title}
                </ButtonIcon>
              </Link>
            </span>
          );
        })}
      </div>

      <div className="flex md:flex-row flex-col items-center gap-2">
        <span className="hidden md:block">
          <DarkModeIcon />
        </span>

        <Button
          size="md"
          colorScheme="gray"
          variant="ghost"
          onClick={handleRoute}
        >
          Discover
        </Button>
      </div>
    </Box>
  );
};

export default SpecialNavBar;
