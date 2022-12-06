import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import Chip from "../../components/Chip/Chip";
import { PastProjects } from "../../data/projects";

const ProjectPage = () => {
  return (
    <main className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16 overflow-scroll">
      {PastProjects.map(
        ({ name, description, icon, link, techStack }, index) => (
          <Card key={index}>
            <div className="flex justify-center w-32">
              <Image src={icon} alt="image" />
            </div>
            <CardHeader>
              <Link href={link} target="_blank">
                {name}
              </Link>
            </CardHeader>
            <CardBody>
              <Chip chipLabel={techStack} />
              <p className="text-sm pt-3">{description}</p>
            </CardBody>
          </Card>
        )
      )}
    </main>
  );
};

export default ProjectPage;
