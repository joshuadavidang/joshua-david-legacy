import { Box, useColorModeValue } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";
import NavBar from "./NavBar";

interface MobileNavBarProps {
  toggleHamburger: any;
  hamburger: any;
  closeBurger: any;
}

const MobileNavBar = ({
  toggleHamburger,
  hamburger,
  closeBurger,
}: MobileNavBarProps) => {
  const bg = useColorModeValue("brand.offWhite", "brand.midnight");

  return (
    <>
      <Box
        bg={bg}
        className="flex flex-row justify-between items-center pl-6 w-screen"
      >
        <div
          className="md:text-3xl text-lg font-sen tracking-tight"
          onClick={closeBurger}
        >
          <Link href="/home">joshuadavid</Link>
        </div>

        <div className="flex flex-row items-center justify-end p-6 gap-4">
          <DarkMode />
          <Bars3Icon className="w-7 h-7" onClick={toggleHamburger} />
        </div>
      </Box>

      {hamburger && <NavBar closeBurger={toggleHamburger} />}
    </>
  );
};

export default MobileNavBar;
