import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import { pastProjects } from "../data/pastProjects";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProjectPage() {
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

        <main className="flex flex-col gap-9 justify-center items-center md:items-start md:h-screen md:flex-row flex-wrap pt-36 pb-24 md:pb-16">
          {pastProjects.map((project, index) => (
            <Card key={index}>
              <div className="flex justify-center w-32">
                <Image src={project.icon} alt="image" />
              </div>
              <CardHeader>
                <Link href={project.link} target="_blank" legacyBehavior>
                  {project.name}
                </Link>
              </CardHeader>
              <CardBody>
                <Chip chipLabel={project.techStack} />
                <p className="text-sm pt-4">{project.description}</p>
              </CardBody>
            </Card>
          ))}
        </main>
      </div>
    </>
  );
}
