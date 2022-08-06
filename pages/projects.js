import { useState } from "react";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import { pastProjects } from "../data/pastProjects";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black">
        <nav className="fixed hidden md:block">
          <NavBar />
        </nav>

        <nav className="md:hidden block">
          <MobileNavBar />
        </nav>

        <main className="flex flex-col gap-12 justify-center items-center md:h-screen md:flex-row md:flex-wrap md:pt-32 p-6 overflow-scroll">
          {pastProjects.map((project, index) => (
            <Card key={index}>
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
    </>
  );
}
