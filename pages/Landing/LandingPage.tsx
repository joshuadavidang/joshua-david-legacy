import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Coding_II from "../../public/assets/images/Coding_II.svg";
import QR from "../../public/assets/images/qr.png";
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
      <Box className="md:pt-10 h-screen w-screen flex flex-col justify-center items-center px-10">
        <Box className="pt-12 md:pt-0 pb-12">
          <Image src={Coding_II} alt="coding_II" width="300" />
        </Box>

        <Box className="flex flex-col text-center lg:px-10 w-screen md:w-1/2">
          <Box
            fontSize={{ base: "28px", md: "33px", lg: "35px" }}
            color={color}
            className="font-sen"
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
          </Box>

          <Text
            fontSize={{ base: "16px", md: "18px", lg: "19px" }}
            className="pt-5 pb-8 pl-5 pr-5"
            lineHeight={7}
          >
            Undergraduate at the School of Computing and Information Systems,{" "}
            Singapore Management University
          </Text>

          <Box className="flex flex-row flex-wrap gap-2.5 justify-center">
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
          </Box>
        </Box>
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
          transition={{ delay: 0.25, ease: "easeOut" }}
        >
          <a download href="/Joshua_David.pdf" className="cursor-pointer">
            <Box className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <Image src={QR} alt="coding_II" width="200" />
            </Box>
          </a>
        </motion.div>
      </Box>
    </>
  );
};

export default LandingPage;
