import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { NavLinkData } from "../../data/navLinks";
import DarkMode from "../DarkMode/DarkMode";
import Text from "../Text/Text";
import { ButtonIcon } from "../Button/ButtonIcon";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

interface NavBarProps {
  closeBurger?: any;
}

const NavBar = ({ closeBurger }: NavBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("brand.offWhite", "brand.midnight");
  const color = useColorModeValue("brand.midnight", "brand.white");

  return (
    <Box
      bg={bg}
      className={`flex md:justify-between md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end pb-4 pr-6`}
    >
      <div className="flex flex-row gap-2.5">
        <Link
          href="https://github.com/joshuadavidang"
          target="_blank"
          className="md:block hidden"
        >
          <ButtonIcon
            size="sm"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaGithub />}
          >
            GitHub
          </ButtonIcon>
        </Link>

        <Link
          href="https://linkedin.com/in/joshuadavidang/"
          target="_blank"
          className="md:block hidden"
        >
          <ButtonIcon
            size="sm"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaLinkedin />}
          >
            LinkedIn
          </ButtonIcon>
        </Link>

        <a download href="/Joshua_David.pdf" className="md:block hidden">
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

      <div className="flex md:flex-row flex-col items-center">
        <span className="hidden md:block">
          <DarkMode />
        </span>

        {NavLinkData.map(({ id, link, name }) => (
          <Link href={link} key={id} legacyBehavior>
            <Text
              color={color}
              className={`p-2.5 rounded cursor-pointer ${
                colorMode == "dark"
                  ? "hover:bg-gray hover:text-white "
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={closeBurger}
            >
              {name}
            </Text>
          </Link>
        ))}
      </div>
    </Box>
  );
};

export default NavBar;
