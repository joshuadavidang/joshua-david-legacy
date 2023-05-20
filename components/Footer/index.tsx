import { Box, Text, Link } from '@chakra-ui/react';
import { FULL_NAME } from '../../constants';

const Footer = () => {
  return (
    <Box className="flex flex-row justify-center items-center w-screen pb-6">
      <Text fontSize="xs">
        Developed in &nbsp;
        <span role="img" aria-label="flag-sg">
          🇸🇬
        </span>
        &nbsp; by &nbsp;
        <Link
          href="https://www.linkedin.com/in/joshuadavidang/"
          isExternal
          color={'brand.purple'}
        >
          {FULL_NAME}
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
