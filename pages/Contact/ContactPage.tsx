import Image from "next/image";
import Coffee from "../../public/assets/images/Coffee.svg";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import Form from "../../components/Form/index";

const ContactPage = () => {
  return (
    <main className="flex md:flex-row flex-col md:gap-32 justify-center px-10 items-center h-screen w-screen text-center md:p-0 pt-40 pb-20 overflow-scroll">
      <div className="md:w-3/12 w-8/12">
        <Image src={Coffee} alt="coffee" />

        <div className="pt-10">
          <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight">
            stay connected
          </p>

          <p className="hover:bg-lightGray pt-3 dark:hover:bg-gray rounded cursor-pointer">
            <a href="mailto:joshuadavidang@outlook.sg">
              joshuadavidang@outlook.sg
            </a>
          </p>
          <div className="flex flex-row justify-center gap-0.5 pt-3">
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

            <span className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer">
              <a download href="/Joshua David.pdf">
                <FaFileAlt size={30} className="cursor-pointer" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-fit w-10/12 md:mt-0 mt-10">
        <Form />
      </div>
    </main>
  );
};

export default ContactPage;
