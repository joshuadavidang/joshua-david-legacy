import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeIcon from '@/components/DarkMode/DarkModeIcon';
import { NavLinkData } from '@/data/navLinks';
import React from 'react';
import { ContactMe } from '@/data/contactMe';
import useScrollToSection from 'hooks/useScrollToSection';
import { Button } from '@/components/Button/Button';
import { Icon } from '../Button/Icon';

const NavBar = () => {
  const backgroundColor = useColorModeValue(
    'brand.offWhite',
    'brand.lightsOut'
  );
  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
  };

  return (
    <Box
      className="flex flex-row justify-between w-screen items-center px-10 py-6"
      bg={backgroundColor}
    >
      <div className="flex flex-row gap-0.5">
        {ContactMe.map(({ link, icon, title, isPDF }) => {
          return isPDF ? (
            <span key={title}>
              <a download href={link} className="md:block hidden">
                <Icon
                  label="social media"
                  size="md"
                  colorScheme="gray"
                  variant="ghost"
                  icon={React.createElement(icon)}
                />
              </a>
            </span>
          ) : (
            <span key={title}>
              <Link href={link} target="_blank" className="md:block hidden">
                <Icon
                  label="social media"
                  size="md"
                  colorScheme="gray"
                  variant="ghost"
                  icon={React.createElement(icon)}
                />
              </Link>
            </span>
          );
        })}
      </div>

      <div className="flex md:flex-row flex-col items-center gap-3">
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