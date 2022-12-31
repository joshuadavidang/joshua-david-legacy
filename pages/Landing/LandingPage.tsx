import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Coding_II from "../../public/assets/images/Coding_II.svg";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiMysql } from "react-icons/si";
import { FaJsSquare, FaReact, FaNode, FaPython, FaSwift } from "react-icons/fa";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ButtonIcon } from "../../components/Button/ButtonIcon";
import ProjectPage from "../Project/ProjectPage";
import ContactPage from "../Contact/ContactPage";

const LandingPage = () => {
  const bg = useColorModeValue("brand.white", "brand.midnight");

  return (
    <>
      <Box
        id="landing"
        bg={bg}
        className="md:pt-10 h-screen w-screen flex flex-col justify-center items-center px-10"
      >
        <span className="pt-12 md:pt-0 pb-12">
          <Image src={Coding_II} alt="coding_II" width="300" />
        </span>

        <div className="flex flex-col text-center px-10 w-screen md:w-1/2">
          <TypeAnimation
            sequence={[
              "Joshua David",
              1000,
              "Aspiring Software Engineer",
              "Student.",
              3000,
            ]}
            cursor={true}
            repeat={1}
            speed={30}
            className="text-blue1 dark:text-blue1 md:text-4xl font-sen tracking-tight text-2xl"
          />

          <div className="pt-3 pb-6 leading-loose text-md md:text-lg">
            Undergraduate at the School of Computing and Information Systems,
            <p className="break-words">Singapore Management University</p>
          </div>

          <div className="flex flex-row flex-wrap gap-3 justify-center">
            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<FaPython />}
            >
              Python
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<SiTypescript />}
            >
              TypeScript
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<FaJsSquare />}
            >
              JavaScript
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<FaReact />}
            >
              React
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<TbBrandNextjs />}
            >
              Next
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<FaNode />}
            >
              Node
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<FaSwift />}
            >
              Swift
            </ButtonIcon>

            <ButtonIcon
              colorScheme="gray"
              variant="solid"
              size="sm"
              icon={<SiMysql />}
            >
              SQL
            </ButtonIcon>
          </div>
        </div>
      </Box>
    </>
  );
};

export default LandingPage;
