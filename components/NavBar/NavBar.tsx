import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { NavLinkData } from "../../data/navLinks";
import DarkMode from "../DarkMode/DarkMode";
import Text from "../Text/Text";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

interface NavBarProps {
  closeBurger?: any;
}

const NavBar = ({ closeBurger }: NavBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("brand.white", "brand.midnight");
  const color = useColorModeValue("brand.midnight", "brand.white");

  return (
    <Box
      bg={bg}
      className={`bg-blue1 flex md:justify-between md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end pb-4 pr-6`}
    >
      <div className="flex flex-row gap-0.5 pt-3">
        <span
          className={`${
            colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
          } p-2 rounded cursor-pointer hidden md:block`}
        >
          <Link href="https://github.com/joshuadavidang" target="_blank">
            <FaGithub size={23} className="cursor-pointer" />
          </Link>
        </span>

        <span
          className={`${
            colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
          } p-2 rounded cursor-pointer hidden md:block`}
        >
          <Link href="https://linkedin.com/in/joshuadavidang/" target="_blank">
            <FaLinkedin size={23} className="cursor-pointer" />
          </Link>
        </span>

        <span
          className={`${
            colorMode == "dark" ? "hover:bg-gray" : "hover:bg-lightGray"
          } p-2 rounded cursor-pointer hidden md:block`}
        >
          <a download href="/Joshua_David.pdf">
            <FaFileAlt size={23} className="cursor-pointer" />
          </a>
        </span>
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <span className="hidden md:block">
          <DarkMode />
        </span>

        {NavLinkData.map(({ id, link, name }) => (
          <Link href={link} key={id} legacyBehavior>
            <Text
              color={color}
              className={`p-3 rounded cursor-pointer ${
                colorMode == "dark"
                  ? "hover:bg-gray hover:text-white "
                  : "hover:bg-lightGray hover:text-black"
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
