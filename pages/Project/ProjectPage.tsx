import Image from "next/image";
import Link from "next/link";
import { PastProjects } from "../../data/pastProjects";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import Chip from "../../components/Chip/Chip";

const ProjectPage = () => {
  return (
    <main className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16">
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
              <p className="text-sm pb-4">{description}</p>
              <Chip chipLabel={techStack} />
            </CardBody>
          </Card>
        )
      )}
    </main>
  );
};

export default ProjectPage;
