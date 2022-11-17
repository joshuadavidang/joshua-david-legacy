import Link from "next/link";
import DarkMode from "./DarkMode";
import { navLinkData } from "../data/navLink";

export default function NavBar(props) {
  const { closeBurger } = props;

  return (
    <div
      className="bg-white dark:bg-black flex md:justify-end md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end p-1.5 pr-6"
    >
      <span className="hidden md:block">
        <DarkMode />
      </span>

      {navLinkData.map(({ id, link, name }) => (
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
}
