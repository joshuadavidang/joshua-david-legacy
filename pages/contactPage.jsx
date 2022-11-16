import Image from "next/image";
import NavBar from "../components/NavBar";
import Coffee from "../public/assets/images/Coffee.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import MobileNavBar from "../components/MobileNavBar";
import Head from "next/head";

export default function ContactPage() {
  return (
    <main className="flex md:flex-row flex-col md:gap-32 items-center md:justify-center md:p-0 pt-48 h-screen text-center">
      <div className="md:w-3/12 w-8/12">
        <Image src={Coffee} alt="coffee" layout="responsive" />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight pt-12">
          stay connected
        </p>

        <p className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
          <a href="mailto:joshuadavidang@outlook.sg">
            joshuadavidang@outlook.sg
          </a>
        </p>

        <div className="flex flex-row justify-center gap-0.5">
          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <Link
              href="https://github.com/joshuadavidang"
              target="_blank"
              legacyBehavior
            >
              <FaGithub size={30} className="cursor-pointer" />
            </Link>
          </span>

          <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
            <Link
              href="https://linkedin.com/in/joshuadavidang/"
              target="_blank"
              legacyBehavior
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
