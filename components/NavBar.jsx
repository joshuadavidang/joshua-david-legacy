import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-end flex-row gap-8 pr-12 p-6 w-screen items-center">
        <Link href="/">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p className="">About</p>
          </span>
        </Link>
        <Link href="/">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p className="">Projects</p>
          </span>
        </Link>
        <Link href="/">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <p className="">Contacts</p>
          </span>
        </Link>
        <DarkMode />
      </div>
    </>
  );
}
