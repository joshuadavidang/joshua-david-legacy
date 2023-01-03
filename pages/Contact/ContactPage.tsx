import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Form from "../../components/Form";
import { ButtonIcon } from "../../components/Button/ButtonIcon";
import Text from "../../components/Text/Text";

const ContactPage = () => {
  const color = useColorModeValue("brand.purple", "brand.purple");

  return (
    <Box
      id="contact"
      className="flex md:gap-32 justify-center items-center h-screen w-screen text-center overflow-scroll"
    >
      <div className="md:w-4/12 w-10/12">
        <Text fontSize={{ base: "28px", md: "33px", lg: "35px" }} color={color} className="mb-2">
          Stay Connected
        </Text>

        <div className="flex flex-row justify-center gap-2.5 pt-3 pb-4">
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
