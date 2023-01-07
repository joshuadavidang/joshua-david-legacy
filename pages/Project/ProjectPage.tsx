import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import { PastProjects } from "../../data/projects";
import { motion } from "framer-motion";
import CardFooter from "../../components/Card/CardFooter";
import Text from "../../components/Text/Text";

const ProjectPage = () => {
  const color = useColorModeValue("brand.gray", "brand.gray");

  return (
    <Box className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16 overflow-auto">
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, ease: "easeOut" }}
            key={index}
          >
            <Link href={link} target="_blank">
              <Card
                borderRadius="12px"
                maxW="xs"
                minH="md"
                className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300
              "
              >
                <div className="flex justify-left pl-5 pt-5 ">
                  <Image src={icon} alt="image" width="150" />
                </div>

                <CardHeader fontSize="2xl">{name}</CardHeader>

                <CardBody
                  paddingTop="0"
                  fontSize={{ base: "14px", md: "15px", lg: "14px" }}
                >
                  {description}
                </CardBody>

                {/* <CardFooter>
                  <Text
                    color={color}
                    fontSize={{ base: "13px", md: "14px", lg: "13px" }}
                  >
                    {techStack}
                  </Text>
                </CardFooter> */}
              </Card>
            </Link>
          </motion.div>
        )
      )}
    </Box>
  );
};

export default ProjectPage;
