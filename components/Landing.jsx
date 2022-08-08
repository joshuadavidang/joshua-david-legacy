import Image from "next/image";
import Post from "../shared/Container";
import Coding from "../public/assets/images/Coding.svg";
import Coding_II from "../public/assets/images/Coding_II.svg";
import Coding_III from "../public/assets/images/Coding_III.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import Link from "next/link";

export default function Landing(props) {
  const { id } = props;

  return (
    <div id={id} className="pt-12">
      <Post>
        <div className="flex flex-col">
          <div className="text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            👋🏻&nbsp; joshua david —
          </div>

          <div className="pt-3 leading-loose text-md">
            freshman at the School of Computing and Information Systems,
            <p className="break-words">Singapore Management University</p>
          </div>

          <div className="flex flex-row gap-0.5 pt-3">
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

        <span className="hidden md:block">
          <Image src={Coding_II} alt="coding_II" width="350" />
        </span>
      </Post>

      <Post className="pt-12">
        <span className="hidden md:block">
          <Image src={Coding} alt="coding" />
        </span>

        <div className="flex flex-col">
          <div className="text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            about
          </div>

          <div className="flex flex-col gap-4 pt-3 md:w-5/6 w-full leading-loose text-md">
            <p>
              {"i'm"} passionate about building tech for the public good, and my
              interest mainly lies in the field of software engineering and
              artificial intelligence. as a highly self-motivated individual,{" "}
              {"i'm"} constantly on the lookout for opportunities to develop my
              skill sets.
            </p>

            <p>
              outside of work, I enjoy going for walks and runs around the city.{" "}
              {"i'm"} also a huge fan of coffee, I look forward to connecting
              with you.
            </p>
          </div>
        </div>
      </Post>

      <Post className="md:p-0 pt-12">
        <div className="flex flex-col">
          <div className="text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            {"i'm"} comfortable with...
          </div>

          <div className="flex flex-row flex-wrap gap-6 pt-6">
            <FaJsSquare size={35} />
            <FaPython size={35} />
            <FaReact size={35} />
            <TbBrandNextjs size={35} />
            <FaNode size={35} />
            <SiMysql size={35} />
            <FaSwift size={35} />
          </div>
        </div>

        <span className="hidden md:block">
          <Image src={Coding_III} alt="coding" width="350" />
        </span>
      </Post>

      <footer className="bg-white dark:bg-black md:p-0 pt-12"></footer>
    </div>
  );
}
