import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeIcon from '@/components/DarkMode/DarkModeIcon';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import { NavLinkData } from '@/data/navLinks';
import React from 'react';
import { ContactMe } from '@/data/contactMe';
import useScrollToSection from 'hooks/useScrollToSection';
import { Button } from '../Button/Button';

const NavBar = () => {
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');
  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
  };

  return (
    <Box
      className="flex flex-row justify-between w-screen items-center px-10 py-6"
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

      <div className="flex md:flex-row flex-col items-center">
        <span className="hidden md:block">
          <DarkModeIcon />
        </span>

        <Box className="flex flex-row items-center md:pt-0 pt-6">
          {NavLinkData.map(({ id, link, name }) => (
            <Button
              size="md"
              colorScheme="gray"
              variant="ghost"
              key={id}
              onClick={() => handleScroll(link)}
            >
              {name}
            </Button>
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default NavBar;
