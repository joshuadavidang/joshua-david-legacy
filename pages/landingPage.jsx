import Image from "next/image";
import Post from "../shared/Container";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Coding from "../public/assets/images/Coding.svg";
import Coding_II from "../public/assets/images/Coding_II.svg";
import Coding_III from "../public/assets/images/Coding_III.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import Hover from "../shared/Container/hover";

export default function LandingPage(props) {
  const { id } = props;

  return (
    <div id={id} className="md:pt-32 pt-12">
      <Post>
        <div className="flex flex-col">
          <TypeAnimation
            sequence={[
              "joshua david",
              1000,
              "student",
              2000,
              "aspiring software engineer",
            ]}
            cursor={true}
            repeat={3}
            speed={30}
            className="text-blue1 dark:text-blue1 md:text-4xl font-sen tracking-tight text-2xl"
          />

          <div className="pt-3 leading-loose text-md">
            Undergraduate at the School of Computing and Information Systems,
            <p className="break-words">Singapore Management University</p>
          </div>
          <div className="flex flex-row gap-0.5 pt-3">
            <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
              <Link href="https://github.com/joshuadavidang" target="_blank">
                <FaGithub size={30} className="cursor-pointer" />
              </Link>
            </span>

            <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
              <Link
                href="https://linkedin.com/in/joshuadavidang/"
                target="_blank"
              >
                <FaLinkedin size={30} className="cursor-pointer" />
              </Link>
            </span>
          </div>
        </div>

        <span className="hidden md:block">
          <Image src={Coding_II} alt="coding_II" width="350" />
        </span>
      </Post>

      <Post className="md:pt-24 pt-12">
        <span className="hidden md:block">
          <Image src={Coding} alt="coding" />
        </span>

        <div className="flex flex-col">
          <div className="text-blue1 dark:text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            about
          </div>

          <div className="flex flex-col gap-4 pt-3 md:w-5/6 w-full leading-loose text-md">
            <p>
              hey there! {"i'm"} joshua and i love to build tech to solve
              everyday challenges. my interest mainly lies in the fields of
              software engineering and artificial intelligence. feel free to
              reach out!
            </p>
          </div>
        </div>
      </Post>

      <Post className="md:p-24 pt-12">
        <div className="flex flex-col">
          <div className="text-blue1 dark:text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            {"i'm"} comfortable with...
          </div>

          <div className="flex flex-row flex-wrap gap-3 pt-6">
            <Hover>
              <FaPython size={30} />
            </Hover>
            <Hover>
              <FaJsSquare size={30} />
            </Hover>
            <Hover>
              <FaSwift size={30} />
            </Hover>
            <Hover>
              <FaReact size={30} />
            </Hover>
            <Hover>
              <TbBrandNextjs size={30} />
            </Hover>
            <Hover>
              <FaNode size={30} />
            </Hover>
            <Hover>
              <SiMysql size={30} />
            </Hover>
            <Hover>
              <SiFlutter size={30} />
            </Hover>
          </div>
        </div>

        <span className="hidden md:block">
          <Image src={Coding_III} alt="coding" width="350" />
        </span>
      </Post>
    </div>
  );
}
