import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import { PastProjects } from "../../data/projects";
import { motion } from "framer-motion";
import CardFooter from "../../components/Card/CardFooter";
import { Icon } from "../../components/Button/Icon";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiSupabase,
  SiChakraui,
  SiIonic,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const ProjectPage = () => {
  const displayIcon = (tech: any) => {
    if (tech == "Flutter") {
      return <SiFlutter />;
    }

    if (tech == "Next.js") {
      return <TbBrandNextjs />;
    }

    if (tech == "TypeScript") {
      return <SiTypescript />;
    }

    if (tech == "Tailwind CSS") {
      return <SiTailwindcss />;
    }

    if (tech == "Chakra UI") {
      return <SiChakraui />;
    }

    if (tech == "Supabase") {
      return <SiSupabase />;
    }

    if (tech == "React.js") {
      return <FaReact />;
    }

    if (tech == "MongoDB") {
      return <SiMongodb />;
    }

    if (tech == "Ionic") {
      return <SiIonic />;
    }

    if (tech == "Express.js") {
      return <FaNodeJs />;
    }
  };

  return (
    <Box className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16 overflow-auto">
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, ease: "easeOut" }}
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

                <CardFooter>
                  <Box display="flex" flexDirection="row" gap={2}>
                    {techStack.map((tech, index) => (
                      <Icon
                        colorScheme="gray"
                        icon={displayIcon(tech)}
                        variant="solid"
                        size="md"
                        label="button"
                        key={index}
                      />
                    ))}
                  </Box>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        )
      )}
    </Box>
  );
};

export default ProjectPage;
