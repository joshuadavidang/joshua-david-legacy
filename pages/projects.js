import { useState } from "react";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import Modal from "../shared/Modal";
import { pastProjects } from "../data/pastProjects";

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

      <main
        className="grid md:grid-cols-3 md:px-36 gap-12 md:pt-32 p-8
        w-screen h-screen justify-center overflow-scroll"
      >
        {pastProjects.map((project, index) => (
          <Card openModal={openModal} key={index}>
            <CardHeader>{project.name}</CardHeader>
            <CardBody>
              <Chip chipLabel={project.techStack} />
            </CardBody>

            <p className="pt-6 text-sm text-white dark:text-black">
              {project.description}
            </p>
          </Card>
        ))}

        <Modal open={open}>
          <p>modal opened</p>
        </Modal>
      </main>
    </div>
  );
}
