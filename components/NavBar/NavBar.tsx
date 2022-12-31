import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { NavLinkData } from "../../data/navLinks";
import Box from "../Box/Box";
import DarkMode from "../DarkMode/DarkMode";

interface NavBarProps {
  closeBurger?: any;
}

const NavBar = ({ closeBurger }: NavBarProps) => {
  const bg = useColorModeValue("#ffffff", "#1a202c");

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
          <span
            className="hover:bg-lightGray hover:text-black dark:hover:bg-gray p-2 rounded cursor-pointer"
            onClick={closeBurger}
          >
            <p>{name}</p>
          </span>
        </Link>
      ))}
    </Box>
  );
};

export default NavBar;
