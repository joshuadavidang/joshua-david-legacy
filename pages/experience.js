import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import { pastProjects } from "../data/pastProjects";
import Head from "next/head";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black">
        <nav className="fixed hidden md:block z-50">
          <NavBar />
        </nav>

        <nav className="fixed md:hidden block z-50">
          <MobileNavBar />
        </nav>

        <main className="flex flex-col gap-9 justify-center items-center md:h-screen md:flex-row md:flex-wrap pt-28">
          {pastProjects.map((project, index) => (
            <Card key={index}>
              <Image src={project.icon} alt="image" priority={true} />
              <CardHeader>{project.name}</CardHeader>
              <p className="text-sm text-white dark:text-black">
                {project.description}
              </p>
              <CardBody>
                <Chip chipLabel={project.techStack} />
              </CardBody>
            </Card>
          ))}
        </main>
      </div>

      <footer className="bg-white dark:bg-black pt-12" />
    </>
  );
}
