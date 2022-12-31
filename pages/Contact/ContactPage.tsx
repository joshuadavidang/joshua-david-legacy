import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import { Box, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import Form from "../../components/Form";

const ContactPage = () => {
  const bg = useColorModeValue("brand.white", "brand.midnight");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      id="contact"
      bg={bg}
      className="flex md:gap-32 justify-center items-center h-screen w-screen text-center"
    >
      <div className="md:w-4/12 w-10/12">
        <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight">
          Stay Connected
        </p>

        <div className="flex flex-row justify-center gap-0.5 pt-3 pb-4">
          <span
            className={`${
              colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
            } p-2 rounded cursor-pointer`}
          >
            <Link href="https://github.com/joshuadavidang" target="_blank">
              <FaGithub size={30} className="cursor-pointer" />
            </Link>
          </span>

          <span
            className={`${
              colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
            } p-2 rounded cursor-pointer`}
          >
            <Link
              href="https://linkedin.com/in/joshuadavidang/"
              target="_blank"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </Link>
          </span>

          <span
            className={`${
              colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
            } p-2 rounded cursor-pointer`}
          >
            <a download href="/Joshua_David.pdf">
              <FaFileAlt size={30} className="cursor-pointer" />
            </a>
          </span>
        </div>

        <Form />
      </div>
    </Box>
  );
};

export default ContactPage;
