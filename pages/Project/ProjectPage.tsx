import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import Chip from "../../components/Chip/Chip";
import { PastProjects } from "../../data/projects";

const ProjectPage = () => {
  const bg = useColorModeValue("brand.white", "brand.midnight");

  return (
    <Box
      bg={bg}
      id="projects"
      className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16 overflow-auto"
    >
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <Link href={link} target="_blank" key={index}>
            <Card>
              <div className="flex justify-left pl-5 pt-5 ">
                <Image src={icon} alt="image" width="150" />
              </div>

              <CardHeader>
                {name}

                <Chip chipLabel={techStack} />
              </CardHeader>

              <CardBody>
                <p className="text-sm">{description}</p>
              </CardBody>
            </Card>
          </Link>
        )
      )}
    </Box>
  );
};

export default ProjectPage;
