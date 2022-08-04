import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <>
      <div
        className="flex md:justify-end md:flex-row md:gap-7 md:pr-12 md:p-6 w-screen md:items-center 
        flex-col items-end p-1.5 pr-6"
      >
        <Link href="/">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p>about</p>
          </span>
        </Link>
        <Link href="/projects">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p>projects</p>
          </span>
        </Link>
        <Link href="/contacts">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p>contacts</p>
          </span>
        </Link>

        <span className="hidden md:block hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
          <DarkMode />
        </span>
      </div>
    </>
  );
}
