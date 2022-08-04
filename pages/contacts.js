import Image from "next/image";
import NavBar from "../components/NavBar";
import Coffee from "../public/assets/images/Coffee.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <div className="relative bg-white dark:bg-black">
        <header className="fixed hidden md:block">
          <NavBar />
        </header>

        <main className="md:px-36 md:py-16 pt-16 h-screen w-screen flex justify-center items-center h-screen">
          <div className="flex flex-row items-center justify-center gap-32">
            <Image src={Coffee} alt="coffee" width={400} />

            <div className="flex flex-col text-center">
              <p className="text-blue1 text-4xl font-sen tracking-tight">
                Stay Connected
              </p>

              <p className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
                <a href="mailto:cxang.2022@scis.smu.edu.sg">
                  cxang.2022@scis.smu.edu.sg
                </a>
              </p>

              <div className="flex flex-row justify-center gap-2 pt-3">
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
          </div>
        </main>
      </div>
    </>
  );
}
