import Image from "next/image";
import Post from "../shared/Container";
import Coding from "../public/assets/images/Coding.svg";
import CodingII from "../public/assets/images/CodingII.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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

          <div className="flex flex-row gap-1.5 pt-3">
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
          <Image src={CodingII} alt="coding" width="350" />
        </span>
      </Post>

      <Post className="pt-12">
        <span className="hidden md:block">
          <Image src={Coding} alt="coding" />
        </span>

        <div className="flex flex-col">
          <div className="text-blue1 md:text-4xl font-sen tracking-tight text-2xl">
            aspiring software engineer
          </div>

          <div className="pt-3 w-5/6 leading-loose text-md">
            {"i'm"} passionate about building tech for public good and my
            interest lies in the field of software engineering and artificial
            intelligence. as a highly self-motivated individual, {"i'm"}{" "}
            constantly on the lookout for opportunities to develop my skill
            sets.
          </div>
        </div>
      </Post>
    </div>
  );
}
