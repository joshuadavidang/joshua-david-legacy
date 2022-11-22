import { pastProjects } from "../data/pastProjects";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
import Chip from "../components/Chip/Chip";

export default function ProjectPage() {
  return (
    <main className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16">
      {pastProjects.map((project, index) => (
        <Card key={index}>
          <div className="flex justify-center w-32">
            <Image src={project.icon} alt="image" />
          </div>
          <CardHeader>
            <Link href={project.link} target="_blank">
              {project.name}
            </Link>
          </CardHeader>
          <CardBody>
            <p className="text-sm pb-4">{project.description}</p>
            <Chip chipLabel={project.techStack} />
          </CardBody>
        </Card>
      ))}
    </main>
  );
}
