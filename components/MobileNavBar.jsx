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
      <div className="flex flex-row items-center justify-end p-3 gap-4">
        <DarkMode />
        <MenuAlt3Icon className="w-7 h-7" onClick={toggleHamburger} />
      </div>

      {hamburger && <NavBar />}
    </>
  );
}
