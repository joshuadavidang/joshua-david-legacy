import { useState } from "react";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import Modal from "../shared/Modal";
import { pastProjects } from "../data/pastProjects";
import StillYoung from "../public/assets/images/StillYoung.svg";
import Image from "next/image";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div className="relative bg-white dark:bg-black">
      <nav className="fixed hidden md:block">
        <NavBar />
      </nav>

      <nav className="md:hidden block">
        <MobileNavBar />
      </nav>

      <main className="flex flex-col gap-12 justify-center items-center md:h-screen md:flex-row md:flex-wrap md:pt-32 p-6 overflow-scroll">
        {pastProjects.map((project, index) => (
          <Card openModal={openModal} key={index}>
            <CardHeader>{project.name}</CardHeader>
            <p className="text-sm text-white dark:text-black">
              {project.description}
            </p>
            <CardBody>
              <Chip chipLabel={project.techStack} />
            </CardBody>
          </Card>
        ))}

        <Modal open={open}>
          <p>modal opened</p>
        </Modal>
      </main>
    </div>
  );
}
