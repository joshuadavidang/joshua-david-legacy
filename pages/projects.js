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

  let techStack = ["React.js", "Ionic", "Express.js", "TailwindCss"];
  let data = [1, 1, 1, 1, 1];

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div className="relative bg-white dark:bg-black">
      <header className="fixed hidden md:block">
        <NavBar />
      </header>

      <header className="md:hidden block">
        <MobileNavBar />
      </header>

      <main className="md:px-36 md:py-16 md:pt-16 h-screen w-screen">
        <Card data={data} openModal={openModal}>
          <CardHeader>Project Sayocode</CardHeader>
          <CardBody>
            <Chip chipLabel={techStack} />
          </CardBody>
        </Card>

        <Modal open={open}>
          <p>modal opened</p>
        </Modal>
      </main>
    </div>
  );
}
