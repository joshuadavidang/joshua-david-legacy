import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-end flex-row gap-7 pr-12 p-6 w-screen items-center">
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
        <DarkMode />
      </div>
    </>
  );
}
