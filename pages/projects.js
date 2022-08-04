import { useState } from "react";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";
import CardHeader from "../shared/Card/CardHeader";
import Chip from "../shared/Chip";
import Modal from "../shared/Modal";

export default function Projects() {
  const [open, setOpen] = useState(false);

  let pastProjects = [
    {
      name: "Sayocode",
      description:
        "Final year project at Singapore Polytechnic, Sayocode automates the process of app creation through a seamless method of dragging and dropping components directly to a mobile screen of your choice.",
      year: 2019,
      techStack: ["TailwindCss", "React.js", "Ionic", "Express.js", "MongoDB"],
    },
    {
      name: "Still Young",
      description:
        "Cross-platform mobile app that serves as a centralized platform for young mums to look up information during their confinement period. With more than 200 downloads, it's now available on App Store & Google Play Store.",
      year: 2019,
      techStack: ["Ionic", "Express.js"],
    },
  ];

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

      <main className="grid md:grid-cols-3 gap-2 gap-y-12 justify-center items-center md:px-36 md:py-16 md:pt-32 pt-12 w-screen md:h-3/4 overflow-scroll">
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
