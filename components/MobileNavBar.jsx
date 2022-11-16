import { MenuAlt3Icon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import DarkMode from "./DarkMode";
import NavBar from "./NavBar";

export default function MobileNavBar() {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <div className="bg-white dark:bg-black flex flex-row justify-between items-center pl-6 w-screen">
        <div className="text-black dark:text-white md:text-3xl text-lg font-sen tracking-tight">
          <Link href="/landingPage">joshuadavid</Link>
        </div>

        <div className="flex flex-row items-center justify-end p-6 gap-4">
          <DarkMode />
          <MenuAlt3Icon className="w-7 h-7" onClick={toggleHamburger} />
        </div>
      </div>

      {hamburger && <NavBar />}
    </>
  );
}
