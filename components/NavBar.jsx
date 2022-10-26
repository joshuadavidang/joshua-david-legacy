import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return <>
    <div
      className="bg-white dark:bg-black flex md:justify-end md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end p-1.5 pr-6"
    >
      <span className="hidden md:block">
        <DarkMode />
      </span>

      <Link href="/" legacyBehavior>
        <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
          <p>about</p>
        </span>
      </Link>

      <Link href="/projectPage" legacyBehavior>
        <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
          <p>projects</p>
        </span>
      </Link>

      <Link href="/contactPage" legacyBehavior>
        <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
          <p>contact</p>
        </span>
      </Link>
    </div>
  </>;
}
