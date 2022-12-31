import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { NavLinkData } from "../../data/navLinks";
import DarkMode from "../DarkMode/DarkMode";
import Text from "../Text/Text";

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
      className={`bg-blue1 flex md:justify-end md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end p-1.5 pr-6`}
    >
      <span className="hidden md:block">
        <DarkMode />
      </span>

      {NavLinkData.map(({ id, link, name }) => (
        <Link href={link} key={id} legacyBehavior>
          <Text
            color={color}
            className={`p-2 rounded cursor-pointer ${
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
    </Box>
  );
};

export default NavBar;
