import { FaGithub, FaLinkedin, FaFileAlt, FaLink } from "react-icons/fa";
import Link from "next/link";
import { Box, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import Form from "../../components/Form";
import { ButtonIcon } from "../../components/Button/ButtonIcon";

const ContactPage = () => {
  const bg = useColorModeValue("brand.white", "brand.midnight");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      id="contact"
      bg={bg}
      className="flex md:gap-32 justify-center items-center h-screen w-screen text-center overflow-scroll"
    >
      <div className="md:w-4/12 w-10/12">
        <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight">
          Stay Connected
        </p>

        <div className="flex flex-row justify-center gap-2 pt-3 pb-4">
          <Link href="https://github.com/joshuadavidang" target="_blank">
            <ButtonIcon
              size="sm"
              colorScheme="gray"
              variant="solid"
              leftIcon={<FaGithub />}
            >
              GitHub
            </ButtonIcon>
          </Link>

          <Link href="https://linkedin.com/in/joshuadavidang/" target="_blank">
            <ButtonIcon
              size="sm"
              colorScheme="gray"
              variant="solid"
              leftIcon={<FaLinkedin />}
            >
              LinkedIn
            </ButtonIcon>
          </Link>

          <a download href="/Joshua_David.pdf">
            <ButtonIcon
              size="sm"
              colorScheme="gray"
              variant="solid"
              leftIcon={<FaFileAlt />}
            >
              Resume
            </ButtonIcon>
          </a>
        </div>

        <Form />
      </div>
    </Box>
  );
};

export default ContactPage;
