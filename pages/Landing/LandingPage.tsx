import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Coding_II from "../../public/assets/images/Coding_II.svg";
import QR from "../../public/assets/images/qr-code.png";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiMysql } from "react-icons/si";
import { FaJsSquare, FaReact, FaNode, FaPython, FaSwift } from "react-icons/fa";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ButtonIcon } from "../../components/Button/ButtonIcon";
import Text from "../../components/Text/Text";
import { motion } from "framer-motion";

const LandingPage = () => {
  const color = useColorModeValue("brand.purple", "brand.purple");

  return (
    <>
      <Box
        id="landing"
        className="md:pt-10 h-screen w-screen flex flex-col justify-center items-center px-10"
      >
        <span className="pt-12 md:pt-0 pb-12">
          <Image src={Coding_II} alt="coding_II" width="300" />
        </span>

        <div className="flex flex-col text-center lg:px-10 w-screen md:w-1/2">
          <Text
            fontSize={{ base: "28px", md: "33px", lg: "35px" }}
            color={color}
          >
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
            />
          </Text>

          {/* <div className="pt-3 pb-6 leading-loose text-md md:text-lg">
            Undergraduate at the School of Computing and Information Systems,
            <p className="break-words">Singapore Management University</p>
          </div> */}

          <Text
            fontSize={{ base: "16px", md: "18px", lg: "19px" }}
            className="pt-5 pb-8 pl-5 pr-5"
          >
            Undergraduate at the School of Computing and Information Systems,{" "}
            {/* <br /> */}
            Singapore Management University
          </Text>

          <div className="flex flex-row flex-wrap gap-2.5 justify-center">
            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<FaPython />}
            >
              Python
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<SiTypescript />}
            >
              TypeScript
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<FaJsSquare />}
            >
              JavaScript
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<FaReact />}
            >
              React
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<TbBrandNextjs />}
            >
              Next
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<FaNode />}
            >
              Node
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<FaSwift />}
            >
              Swift
            </ButtonIcon>

            <ButtonIcon
              cursor="text"
              hover={{}}
              active={{}}
              colorScheme="gray"
              variant="solid"
              size="sm"
              leftIcon={<SiMysql />}
            >
              SQL
            </ButtonIcon>
          </div>
        </div>
      </Box>

      <Box className="h-1/2 pb-24 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
        >
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "19px" }}
            className="pb-5"
          >
            Grab a copy of my resume here 👇🏻
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, ease: "easeOut" }}
        >
          <a download href="/Joshua_David.pdf" className="cursor-pointer">
            <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <Image src={QR} alt="coding_II" width="200" />
            </div>
          </a>
        </motion.div>
      </Box>
    </>
  );
};

export default LandingPage;
