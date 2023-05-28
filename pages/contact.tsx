import React from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import Form from '@/components/Form';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import Text from '@/components/Text/Text';
import { CONTACT_HEADER } from '@/constants/index';
import { ContactMe } from '@/data/contactMe';

export default function Contact() {
  return (
    <Box
      id="contact"
      className="flex md:gap-32 justify-center items-center h-screen w-screen text-center"
    >
      <div className="md:w-4/12 w-10/12">
        <Text
          fontSize={{ base: '28px', md: '30px', lg: '33px' }}
          color="brand.purple"
          mb={{ base: 1, md: 2 }}
        >
          {CONTACT_HEADER}
        </Text>

        <div className="flex flex-row justify-center gap-2.5 pt-4 pb-8">
          {ContactMe.map(({ link, icon, title, isPDF }) => {
            return isPDF ? (
              <a download href={link}>
                <ButtonIcon
                  size="sm"
                  colorScheme="gray"
                  variant="solid"
                  leftIcon={React.createElement(icon)}
                >
                  {title}
                </ButtonIcon>
              </a>
            ) : (
              <span key={title}>
                <Link href={link} target="_blank">
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
        <Form />
      </div>
    </Box>
  );
}
