import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <>
      <div
        className="bg-white dark:bg-black flex md:justify-end md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
        flex-col items-end p-1.5 pr-6"
      >
        <span className="hidden md:block">
          <DarkMode />
        </span>

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

        {/* <Link href="/hackathons">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p>hackathons</p>
          </span>
        </Link> */}

        <Link href="/contact">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p>contact</p>
          </span>
        </Link>
      </div>
    </>
  );
}
