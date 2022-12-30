import Link from "next/link";
import { NavLinkData } from "../../data/navLinks";
import DarkMode from "../DarkMode/DarkMode";

interface NavBarProps {
  closeBurger?: any;
}

const NavBar = ({ closeBurger }: NavBarProps) => {
  return (
    <div
      className={`bg-white dark:bg-midnight flex md:justify-end md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end p-1.5 pr-6`}
    >
      <span className="hidden md:block">
        <DarkMode />
      </span>

      {NavLinkData.map(({ id, link, name }) => (
        <Link href={link} key={id} legacyBehavior>
          <span
            className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer"
            onClick={closeBurger}
          >
            <p>{name}</p>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
