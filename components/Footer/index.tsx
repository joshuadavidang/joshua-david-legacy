import { Box, useColorModeValue, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  const backgroundColor = useColorModeValue("brand.offWhite", "brand.midnight");

  return (
    <Box
      className="flex flex-row justify-center items-center w-screen pb-6"
      bg={backgroundColor}
    >
      <Text fontSize="xs">
        Developed in &nbsp;
        <span role="img" aria-label="flag-sg">
          🇸🇬
        </span>
        &nbsp; by &nbsp;
        <Link
          href="https://www.linkedin.com/in/joshuadavidang/"
          isExternal
          color={"brand.purple"}
        >
          Joshua David
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
