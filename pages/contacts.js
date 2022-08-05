import Image from "next/image";
import NavBar from "../components/NavBar";
import Coffee from "../public/assets/images/Coffee.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import MobileNavBar from "../components/MobileNavBar";

export default function Contacts() {
  return (
    <>
      <div className="relative bg-white dark:bg-black">
        <nav className="md:block hidden">
          <NavBar />
        </nav>

        <nav className="md:hidden block">
          <MobileNavBar />
        </nav>

        <main className="flex flex-col md:flex-row items-center justify-center md:gap-32 pt-32 text-center">
          <div>
            <Image src={Coffee} alt="coffee" layout="responsive" />
            <p className="text-blue1 text-4xl font-sen tracking-tight pt-12">
              Stay Connected
            </p>

            <p className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
              <a href="mailto:cxang.2022@scis.smu.edu.sg">
                cxang.2022@scis.smu.edu.sg
              </a>
            </p>

            <div className="flex flex-row justify-center gap-1.5 pt-3">
              <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
                <Link href="https://github.com/joshuadavidang">
                  <a target="_blank">
                    <FaGithub size={30} className="cursor-pointer" />
                  </a>
                </Link>
              </span>

              <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
                <Link href="https://linkedin.com/in/joshuadavidang/">
                  <a target="_blank">
                    <FaLinkedin size={30} className="cursor-pointer" />
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
